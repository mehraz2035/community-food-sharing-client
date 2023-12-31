import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const SingleFoodDetails = () => {

    const availableFood = useLoaderData();
    const { _id,
        donatorName,
        // email,
        pickupLocation,
        foodImage,
        foodName,
        foodQuantity,
        status,
        expiredDateTime } = availableFood;


    const { user } = useContext(AuthContext);


    const handleFoodRequest = event => {
        event.preventDefault();




        const currentDate = new Date();
        const hours = currentDate.getHours() % 12 || 12; // Get hours in 12-hour format
        const amPm = currentDate.getHours() >= 12 ? 'PM' : 'AM'; // Determine AM or PM
        const formattedTime = `${hours.toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')} ${amPm}`;
        const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')} `

        console.log(formattedDate, formattedTime)



        const form = event.target;
        // const name = form.name.value;
        const email = user?.email;
        const userName = user?.displayName;
        const requesterImage = user?.photoURL;
        const additionalNotes = form.additionalNotes.value;
        const donationMoney = form.donationMoney.value;
        const requestPerson = {
            foodName,
            foodImage,
            foodId: _id,
            foodDonatorEmail: email,
            foodDonatorName: donatorName,
            status,
            email,
            userName,
            requesterImage,
            currentRequestDate: formattedDate,
            currentRequestTime: formattedTime,
            pickupLocation,
            expiredDateTime,
            additionalNotes,
            donationMoney,


        }

        console.log(requestPerson);

        fetch('https://community-food-sharing-server-ochre.vercel.app/requestPersons', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requestPerson)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your request been send",
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
    }

    return (
        <div>
           

            <div className="card lg:card-side bg-base-100 shadow-xl my-20 border-2">
                <figure className="lg:w-9/12"><img src={foodImage} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{donatorName}</h2>
                    <h2 className="card-title">{status}</h2>
                    <h2 className="card-title">{pickupLocation}</h2>
                    <h2 className="card-title">{foodName}</h2>
                    <h2 className="card-title">Quantity: {foodQuantity}</h2>
                    <p>Expired Date: {expiredDateTime}</p>
                    <div className="card-actions justify-end">





                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn btn-warning w-full" onClick={() => document.getElementById('my_modal_4').showModal()}>Request Button</button>
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">


                                {/* Request form */}
                                <form onSubmit={handleFoodRequest} className="card-body mb-10 ">
                                    {/* <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Food Name</span>
                                        </label>
                                        <input type="text" name="name" defaultValue={foodName} className="input input-bordered" />
                                        {user?.displayName}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Food Image</span>
                                        </label>
                                        <input type="text" defaultValue={foodImage} className="input input-bordered" readOnly />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Food ID</span>
                                        </label>
                                        <input type="text" defaultValue={_id} className="input input-bordered" readOnly />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Food Donator Email</span>
                                        </label>
                                        <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" readOnly />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Food Donator Name</span>
                                        </label>
                                        <input type="text" defaultValue={donatorName} className="input input-bordered" readOnly />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">User Email</span>
                                        </label>
                                        <input type="text" defaultValue={donatorName} className="input input-bordered" readOnly />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Request Date</span>
                                        </label>
                                        <input type="text" defaultValue={donatorName} className="input input-bordered" readOnly />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Pickup Location</span>
                                        </label>
                                        <input type="text" defaultValue={pickupLocation} className="input input-bordered" readOnly />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text"> Expire Date</span>
                                        </label>
                                        <input type="text" defaultValue={expiredDateTime} className="input input-bordered" readOnly />
                                    </div> */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Additional Notes</span>
                                        </label>
                                        <input type="text" name="additionalNotes" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Donation Money</span>
                                        </label>
                                        <input type="text" name="donationMoney" className="input input-bordered" />
                                    </div>
                                    <div className="form-control mt-6 grid grid-cols-1" >
                                        <input className="btn btn-warning" type="submit" value="Request Button" />
                                    </div>
                                </form>
                                {/* Request form  end*/}


                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>








                    </div>
                </div>
            </div>



        </div>

    );
};

export default SingleFoodDetails;
