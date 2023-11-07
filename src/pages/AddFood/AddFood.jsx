import { data } from "autoprefixer";


const AddFood = () => {


    const handleAddFood = event => {
        event.preventDefault();

        const form = event.target;
        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const foodQuantity = form.foodQuantity.value;
        const pickupLocation = form.pickupLocation.value;
        const expiredDateTime = form.expiredDateTime.value;
        const notes = form.notes.value;
        const addNew = { foodName, foodImage, foodQuantity, pickupLocation, expiredDateTime, notes }

        console.log(addNew);

        // send data to the  server
        fetch('http://localhost:5000/foodCart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addNew)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div>
            <h1>Add Food</h1>

            <form onSubmit={handleAddFood} className="card-body mb-10 ">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Food Name</span>
                    </label>
                    <input type="text" name="foodName" placeholder="Food Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Food Image</span>
                    </label>
                    <input type="text" name="foodImage" placeholder="Food Image" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Food Quantity</span>
                    </label>
                    <input type="text" name="foodQuantity" placeholder="Food Quantity" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Pickup Location</span>
                    </label>
                    <input type="text" name="pickupLocation" placeholder="Pickup Location" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Expired Date</span>
                    </label>
                    <input type="date" name="expiredDateTime" placeholder="Expired Date" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Additional Notes</span>
                    </label>
                    <input type="text" name="notes" placeholder="Additional Notes" className="input input-bordered" />
                </div>

                <div className="form-control mt-6 grid grid-cols-1" >
                    <input className="btn btn-primary" type="submit" value="Add Food" />
                </div>
            </form>
            {/* Request form  end*/}


        </div>
    );
};

export default AddFood;