import { Link } from "react-router-dom";


const AvailableFoodsCard = ({ availableFood }) => {
    const { _id, foodImage, foodName, donatorImage, donatorName, foodQuantity, pickupLocation, expiredDateTime, additionalNotes } = availableFood;
    return (
        <div>



            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="w-1/2"><img className="h-full" src={foodImage} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{foodName}</h2>
                    <p>Quantity: {foodQuantity}</p>
                    <p className="card-title text-sm">Pickup Location: {pickupLocation}</p>
                    <p className="card-title text-sm">Expired: {expiredDateTime}</p>
                    <p className="card-title text-sm">{additionalNotes}</p>

                    <div className="card-actions  justify-between items-center">
                        <div className="avatar flex gap-2  ">
                            <div className="w-8 rounded">
                                <img src={donatorImage} alt="" />
                            </div>
                            <p className="card-title text-sm">{donatorName}</p>

                        </div>
                        <Link to={`/singleFooddetails/${_id}`} >
                            <button className="btn btn-ghost">View Detail</button>
                        </Link>
                    </div>
                </div>
            </div>








        </div>
    );
};

export default AvailableFoodsCard;