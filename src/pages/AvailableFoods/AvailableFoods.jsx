import { useEffect, useState } from "react";
import AvailableFoodsCard from "./AvailableFoodsCard";


const AvailableFoods = () => {
    const [availableFoods, setAvailableFoods] = useState([]);

    useEffect(() => {
        fetch('https://community-food-sharing-server-ochre.vercel.app/foodCart')
            .then(res => res.json())
            .then(data => setAvailableFoods(data));
    }, [])
    return (
        <div>

            <div className="mt-10 flex justify-center">
                <div><input type="text" placeholder="Type here" className="input rounded-none input-bordered input-warning w-96 max-w-xs" /></div>
                <div><button className="btn btn-warning rounded-none">Filter</button></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-10 my-20">
                {
                    availableFoods.map(availableFood => <AvailableFoodsCard key={availableFood.id} availableFood={availableFood}></AvailableFoodsCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;