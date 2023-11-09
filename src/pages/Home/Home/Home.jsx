import Banner from "../Banner/Banner";
import Details from "../Details/Details";
import FeaturedFoods from "../FeaturedFoods/FeaturedFoods";
import SwiperSlideAddHome from "../SwiperSlide/SwiperSlideAddHome";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedFoods></FeaturedFoods>
            <Details></Details>
          <SwiperSlideAddHome></SwiperSlideAddHome>
        </div>
    );
};

export default Home;