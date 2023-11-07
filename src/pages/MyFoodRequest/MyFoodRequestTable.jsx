/* eslint-disable react/prop-types */


const MyFoodRequestTable = ({ myFoodRequestSingle, handleDelete }) => {
    const { _id, foodDonatorName, pickupLocation, expiredDateTime, currentRequestDate, donationMoney, status } = myFoodRequestSingle;



    return (
        <tr className="text-black text-center">

            <td className="font-bold text-center">
                {foodDonatorName}
            </td>
            <td>
                {pickupLocation}
            </td>
            <td>
                {expiredDateTime}
            </td>
            <td>{currentRequestDate}</td>
            <td>{donationMoney}</td>
            <td>Status</td>
            <th className="text-center">
                <button onClick={() => handleDelete(_id)} className="btn btn-square btn-sm btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
        </tr>
    );
};

export default MyFoodRequestTable;