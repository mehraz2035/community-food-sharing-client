import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyFoodRequestTable from "./MyFoodRequestTable";


const MyFoodRequest = () => {
    const { user } = useContext(AuthContext);
    const [myFoodRequest, setMyFoodRequest] = useState([]);



    const url = `http://localhost:5000/requestPersons?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyFoodRequest(data))
    }, [url]);

    const handleDelete = id => {
        const proceed = confirm('Are you sure?');
        if(proceed){
            fetch(`http://localhost:5000/requestPersons/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted ok')
                    const remaining = myFoodRequest.filter(myFoodRequestSingle => myFoodRequestSingle._id !==id);
                    setMyFoodRequest(remaining);
                }
            })
        }
    }

    return (
        <div>
            <h1>My Food Request: {myFoodRequest.length}</h1>


            <div className="overflow-x-auto border-2 my-20">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-center ">
                            
                            <th>Donar Name</th>
                            <th>Pickup Location</th>
                            <th>Expire Date</th>
                            <th>Request Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Cancel Request</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            myFoodRequest.map(myFoodRequestSingle => <MyFoodRequestTable key={myFoodRequestSingle._id} myFoodRequestSingle={myFoodRequestSingle} handleDelete={handleDelete}></MyFoodRequestTable>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyFoodRequest;