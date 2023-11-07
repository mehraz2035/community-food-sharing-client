import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import AvailableFoods from "../pages/AvailableFoods/AvailableFoods";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import SingleFoodDetails from "../pages/SingleFoodDetails/SingleFoodDetails";
import MyFoodRequest from "../pages/MyFoodRequest/MyFoodRequest";
import PrivateRoute from "./PrivateRoute";
import AddFood from "../pages/AddFood/AddFood";
import ManageMyFoods from "../pages/manageMyFoods/manageMyFoods";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/availableFoods",
            element: <AvailableFoods></AvailableFoods>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        },
        {
            path: "singleFooddetails/:id",
            element: <SingleFoodDetails></SingleFoodDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/foodCart/${params.id}`)
        },
        {
            path: "myFoodRequest",
            element: <PrivateRoute><MyFoodRequest></MyFoodRequest></PrivateRoute>
        },
        {
            path: "addFood",
            element: <AddFood></AddFood>
        },
        {
            path: "manageMyFoods",
            element: <ManageMyFoods></ManageMyFoods>
        }
        
      ]
    },
  ]);


  export default router;