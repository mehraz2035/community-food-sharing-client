import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
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
          <Contact></Contact>
        </div>
    );
};

export default Home;