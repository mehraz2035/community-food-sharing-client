
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ManagesFood from "./ManagesFood";

import Swal from "sweetalert2";



const UserBaseManagesFoods = () => {


    const { user } = useContext(AuthContext);
    const [userBaseManagesFoods, setUserBaseManagesFoods] = useState([]);

    const url = `http://localhost:5000/foodCart?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUserBaseManagesFoods(data))
    }, [url])

    const handleDelete = id => {
        const proceed = confirm('are you sure');
        if (proceed) {
            fetch(`http://localhost:5000/foodCart/${id}`, {
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


         // const handleUpdateFood = event => {
    //     event.preventDefault();

    //     const form = event.target;
    //     const foodName = form.foodName.value;
    //     const foodImage = form.foodImage.value;
    //     const foodQuantity = form.foodQuantity.value;
    //     const pickupLocation = form.pickupLocation.value;
    //     const expiredDateTime = form.expiredDateTime.value;
    //     const additionalNotes = form.additionalNotes.value;
    //     const donatorImage = user?.photoURL;
    //     const donatorName = user?.displayName;
    //     const email = user?.email;
    //     const updatedFood = { foodName, foodImage, foodQuantity, pickupLocation, expiredDateTime, additionalNotes, donatorImage, donatorName, email }

    //     console.log(updatedFood);
    // }

    //   // send data to the  server
    //   fetch(`http://localhost:5000/foodCart/${_id}`, {
    //     method: 'PUT',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(updatedFood)
    // })
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data);
    //     if (data.insertedId) {
    //         Swal.fire({
    //             title: 'Success!',
    //             text: 'Update Successfully',
    //             icon: 'success',
    //             confirmButtonText: 'OK'
    //         })

    //     }
    // })
    
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