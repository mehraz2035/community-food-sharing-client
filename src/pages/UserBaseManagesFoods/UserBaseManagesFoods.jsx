
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
        const proceed = confirm('are you sure');
        if (proceed) {
            fetch(`https://community-food-sharing-server-ochre.vercel.app/foodCart/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Delete Successfully',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        })
                        const remaining = userBaseManagesFoods.filter(userSingle => userSingle._id !== id);
                        setUserBaseManagesFoods(remaining);
                    }
                })
        }




    }
    return (
        <div>
            <h1>user: {userBaseManagesFoods.length} </h1>

            <div className="overflow-x-auto border-2 my-20">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name and Email</th>
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
                            userBaseManagesFoods.map(userSingle => <ManagesFood key={userSingle._id} userSingle={userSingle} handleDelete={handleDelete}  ></ManagesFood>)
                        }
                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default UserBaseManagesFoods;