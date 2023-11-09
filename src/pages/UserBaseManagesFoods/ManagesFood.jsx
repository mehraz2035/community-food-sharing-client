

import { Link } from "react-router-dom";




const ManagesFood = ({ userSingle, handleDelete }) => {


    const { _id, donatorName, foodName, donatorImage, expiredDateTime, email, foodQuantity, pickupLocation, status } = userSingle;


    





    return (

        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={donatorImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{donatorName}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {foodName}
            </td>
            <td>{expiredDateTime}</td>
            <td>{foodQuantity}</td>
            <td>{pickupLocation}</td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-warning  btn-xs">Delete</button>
            </th>
        
            <th>
                <Link to='/foodManages'><button className="btn btn-ghost btn-xs">Manage</button></Link>
            </th>
            <th>Update</th>


        </tr>


    );
};

export default ManagesFood;