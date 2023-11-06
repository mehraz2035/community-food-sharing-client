import { Link } from "react-router-dom";


const AvailableFoodsCard = ({ availableFood }) => {
    const { _id, foodImage, foodName, donatorImage, donatorName, foodQuantity, pickupLocation, expiredDateTime, additionalNotes } = availableFood;
    return (
        <div>
            <div className=" card card-compact w-96 bg-base-100 shadow-xl rounded-none border-2">
                <figure><img src={foodImage} alt="Food Name" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{foodName}</h2>
                    
                    <div className="avatar flex gap-2 ">
                        <div className="w-8 rounded">
                            <img src={donatorImage} alt="" />
                        </div>
                        <p className="card-title text-sm">{donatorName}</p>
                        <p className="card-title text-sm">{foodQuantity}</p>
                    </div>
                    <div className="card-actions justify-end">
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