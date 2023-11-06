import { useEffect, useState } from "react";
import AvailableFoodsCard from "./AvailableFoodsCard";


const AvailableFoods = () => {
    const [availableFoods, setAvailableFoods] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/foodCart')
        .then(res => res.json())
        .then(data => setAvailableFoods(data));
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 my-20">
            {
                availableFoods.map(availableFood => <AvailableFoodsCard key={availableFood.id} availableFood={availableFood}></AvailableFoodsCard>)
            }
        </div>
    );
};

export default AvailableFoods;