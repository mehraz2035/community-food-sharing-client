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
import UserBaseManagesFoods from "../pages/UserBaseManagesFoods/UserBaseManagesFoods";
import FoodManages from "../pages/FoodManages/FoodManages";
import PageError from "../PageError/PageError";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <PageError></PageError>,
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
            element: <PrivateRoute><SingleFoodDetails></SingleFoodDetails></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/foodCart/${params.id}`)
        },
        {
            path: "myFoodRequest",
            element: <PrivateRoute><MyFoodRequest></MyFoodRequest></PrivateRoute>
        },
        {
            path: "addFood",
            element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
        },
        {
            path: "userBaseManagesFoods",
            element: <PrivateRoute><UserBaseManagesFoods></UserBaseManagesFoods></PrivateRoute>
        },
        {
            path: "foodManages",
            element: <FoodManages></FoodManages>
           
        }

        
      ]
    },
  ]);


  export default router;