

const Banner = () => {
    return (
        <div className="carousel w-full h-[700px] rounded-md ">
            
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://terrelocal.org/upload/media/thumb/dreamstime_xxl_139437154.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://static.wixstatic.com/media/232f59_6c2e4388cf164a73bb68561f6f032975~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_2024,h_958,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/232f59_6c2e4388cf164a73bb68561f6f032975~mv2_d_5472_3648_s_4_2.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;