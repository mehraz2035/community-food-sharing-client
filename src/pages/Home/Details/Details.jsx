

const Details = () => {
    return (
        <div>




            <div className=" grid lg:grid-cols-2  gap-32 my-20  ">


                <div className=" items-center ">




                    <div className="card  text-primary-content  rounded-none bg-base-200 h-fit ">
                        <div className="card-body text-black">
                            <h2 className="card-title my-3">Motor car</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deserunt quos vero, debitis beatae fuga, amet odit culpa adipisci neque mollitia fugiat in sunt. Ipsum quo laudantium perspiciatis aspernatur commodi.</p>

                        </div>
                    </div>

                    <div className="bg-[#f6f6f6]  p-20  mt-10">
                        <div className="box w-fit mx-auto bg-white rounded-lg shadow-md flex justify-start">
                            <div className="heading bg-warning x p-4 text-black text-center">
                                FAQs
                            </div>
                            <div className="faqs p-4">
                                <details className="bg-[#f6f6f6] rounded p-2 my-4 cursor-pointer w-fit">
                                    <summary className="outline-none"> Typically have four doors and a separate trunk for luggage?</summary>
                                    <p className="text-sm"> Typically have four doors and a separate trunk for luggage.</p>
                                </details>
                                <details className="bg-[#f6f6f6] rounded p-2 my-4 cursor-pointer">
                                    <summary className="outline-none"> Typically have four doors and a separate trunk for luggage?</summary>
                                    <p className="text-sm"> Typically have four doors and a separate trunk for luggage.</p>
                                </details>
                                <details className="bg-[#f6f6f6] rounded p-2 my-4 cursor-pointer">
                                    <summary className="outline-none"> Typically have four doors and a separate trunk for luggage?</summary>
                                    <p className="text-sm"> Typically have four doors and a separate trunk for luggage.</p>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>

               

                    <div className="hero w-full m-5" >
                        <img src="https://img.freepik.com/premium-vector/volunteers-box-concept_118813-4962.jpg" alt="" />
                    </div>

               


            </div>



        </div>
    );
};

export default Details;