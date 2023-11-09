import  { useEffect, useState } from "react";
import FeaturedFoodUi from "./FeaturedFoodUi";
import { Link } from "react-router-dom";

const FeaturedFoods = () => {
    const [featuredFoods, setFeaturedFoods] = useState([]);

    useEffect(() => {
        fetch('https://community-food-sharing-server-ochre.vercel.app/foodCart')
            .then(res => res.json())
            .then(data => setFeaturedFoods(data));
    }, []);

    // Extract the first 6 items from the featuredFoods array
    const featuredFoodItems = featuredFoods.slice(0, 6);

    return (
        <div>
            <h1 className="text-5xl font-bold mt-20 mb-8">Featured Foods</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-auto gap-10">
                {featuredFoodItems.map(cart => <FeaturedFoodUi key={cart._id} cart={cart} />)}
            </div>
            <div className="flex justify-center">
                <Link to="/availableFoods">
                    <button className="btn btn-warning rounded-none block mx-auto px-8 my-10 text-white">Show All</button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedFoods;
