

const Banner = () => {
    return (
        <div className="carousel w-full h-[700px] rounded-md ">
            
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://media.istockphoto.com/id/472165353/photo/little-girl-holding-bowl-at-soup-kitchen-or-food-bank.jpg?s=612x612&w=0&k=20&c=_25T4X2NL96SQmkZemBPSPo0n5azVrWOARl4JxuxeuU=" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://nrai.org/wp-content/uploads/2019/02/FSSAI-Introduces-%E2%80%98Save-Food-Share-Food-Share-Joy%E2%80%99-Initiative-e1550043851366-660x400.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;