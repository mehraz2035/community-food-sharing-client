import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyFoodRequestTable from "./MyFoodRequestTable";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const MyFoodRequest = () => {
    const { user } = useContext(AuthContext);
    const [myFoodRequest, setMyFoodRequest] = useState([]);



    const url = `https://community-food-sharing-server-ochre.vercel.app/requestPersons?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyFoodRequest(data))
    }, [url]);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`https://community-food-sharing-server-ochre.vercel.app/requestPersons/${id}`, {
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
                        const remaining = myFoodRequest.filter(myFoodRequestSingle => myFoodRequestSingle._id !== id);
                        setMyFoodRequest(remaining);
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
    }

    return (
        <div>
            <Helmet>
                <title>Share Food | My Food Request</title>
            </Helmet>



            <div className="overflow-x-auto border-2 my-20">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-center ">
                            
                            <th>Donar Name</th>
                            <th>Pickup Location</th>
                            <th>Expire Date</th>
                            <th>Request Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Cancel Request</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            myFoodRequest.map(myFoodRequestSingle => <MyFoodRequestTable key={myFoodRequestSingle._id} myFoodRequestSingle={myFoodRequestSingle} handleDelete={handleDelete}></MyFoodRequestTable>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyFoodRequest;