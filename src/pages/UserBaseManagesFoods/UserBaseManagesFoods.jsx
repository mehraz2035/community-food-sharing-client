
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ManagesFood from "./ManagesFood";

import Swal from "sweetalert2";



const UserBaseManagesFoods = () => {


    const { user } = useContext(AuthContext);
    const [userBaseManagesFoods, setUserBaseManagesFoods] = useState([]);
  


    const url = `https://community-food-sharing-server-ochre.vercel.app/foodCart?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUserBaseManagesFoods(data))
    }, [url])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`https://community-food-sharing-server-ochre.vercel.app/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: 'Deleted successfully',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        });
                        const remaining = userBaseManagesFoods.filter(userSingle => userSingle._id !== id);
                        setUserBaseManagesFoods(remaining);
                    }
                })
                .catch(error => {
                    console.error('Error deleting data:', error);
                    Swal.fire({
                        title: 'Error!',
                        text: 'An error occurred while deleting the record.',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                });
            }
        });
    };
   







    return (
        <div>
        
            <div className="overflow-x-auto border-2 my-20">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th> Name and Email</th>
                            <th>Food Name</th>
                            <th>Expired Date</th>
                            <th>Food Quantity</th>
                            <th>pickupLocation</th>


                            <th>Delete</th>
                            <th>Manage </th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userBaseManagesFoods.map(userSingle =>

                                <ManagesFood
                                    key={userSingle._id}
                                    userSingle={userSingle}
                                    handleDelete={handleDelete}
                                  
                                    >

                                </ManagesFood>)
                        }
                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default UserBaseManagesFoods;