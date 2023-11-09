import { Link } from "react-router-dom";


const FeaturedFoodUi = ({ cart }) => {
    const { _id, foodImage, foodName, donatorImage, donatorName, foodQuantity, pickupLocation, expiredDateTime, additionalNotes } = cart;
    return (
        <div>
            <Link to={`/singleFooddetails/${_id}`} >
                <div className="card w-auto rounded-none bg-base-100">
                    <img className="rounded-none" src={foodImage} alt="foodImage" />
                    <div className="card-body h-1/5">
                        <h2 className="card-title mb-2">{foodName}</h2>
                        <div className="avatar flex gap-2  ">
                            <div className="w-8 rounded">
                                <img src={donatorImage} alt="" />
                            </div>
                            <p className="card-title text-sm">{donatorName}</p>

                        </div>
                        <div className="grid grid-cols-2">
                            <p>Notes : {additionalNotes}</p>
                            <p>Quantity : {foodQuantity}</p>
                            <p>Location : {pickupLocation}</p>
                            <p>Expired Date : {expiredDateTime}</p>

                        </div>


                    </div>
                </div>
            </Link>


        </div>
    );
};

export default FeaturedFoodUi;