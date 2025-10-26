// // ! image import 
// import quote from '../../assets/review-img/quote.png'
// import author1 from '../../assets/review-img/auther-1.png'
// // ! image import 

// // ! react slick 
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";


// // !next prev button click 

// function PrevArrow({ onClick}) {
//     return (
//         <button
//             onClick={onClick}
//             className='absolute top-1/2 left-0 -translate-y-1/2 z-10 cursor-pointer'
//         >
//            <i className='fa-solid fa-circle-chevron-left  text-[40px] text-[#4756DF]  '></i>
//         </button>
//     )
// }

// function NextArrow({ onClick }) {
//     return (
//         <button
//             onClick={onClick}
//             className='absolute top-1/2 right-0 -translate-y-1/2 z-10 cursor-pointer'
//         >
//             <i className='fa-solid fa-circle-chevron-right text-[40px] text-[#4756DF]'></i>
//         </button>
//     )
// }
// // !next prev button click 

// const Review = () => {
//     var settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         centerMode: true,
//         PrevArrow: <PrevArrow/>,
//         NextArrow: <NextArrow/>,
//     };
//     return (
//         <>
//             <section className='pb-[150px]'>
//                 <div className="container">
//                     <div className="service-top text-center max-w-[609px] mx-auto pb-[130px]">
//                         <h3 className='font-inter font-bold text-[#151515] text-[45px] pb-5 '>Some Client Reviews</h3>
//                         <p className='text-[#737373] font-inter text-[16px]   pb-[50px]'>
//                             There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.
//                         </p>
//                     </div>
//                     <div className="slider-main relative">
//                         {/* <i className='fa-solid fa-circle-chevron-left absolute top-[50%] left-0 -translate-y-1/2 text-[40px] text-[#4756DF]  '></i>
//                         <i className='fa-solid fa-circle-chevron-right absolute top-[50%] right-0 -translate-y-1/2 text-[40px] text-[#4756DF]  '></i> */}
//                         <Slider {...settings}>
//                             <div className="review-item duration-500 max-w-[425px] py-[55px] px-[58px] rounded-[30px]">
//                                 <img src={quote} alt="" />
//                                 <p className='text-[16px] font-inter leading-[26px] font-regular text-[#7B7B7B] py-5 '>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
//                                 <div className="star">
//                                     <i className="fa-jelly-fill fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
//                                     <i className="fa-jelly-fill fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
//                                     <i className="fa-jelly-fill fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
//                                     <i className="fa-jelly-fill fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
//                                     <i className="fa-jelly-fill fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
//                                 </div>
//                                 <div className="auth-info flex gap-5 items-center justify-between pt-[30px]">
//                                     <div className="auth-img">
//                                         <img src={author1} alt="author image" />
//                                     </div>
//                                     <div className="details">
//                                         <h3 className='font-bold text-[20px] leading-[120%] text-[#232323]'>Eric Drake</h3>
//                                         <p className='text-[16px] text-[#7B7B7B] leading-[26px]'>Digital Marketor</p>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="review-item duration-500 max-w-[425px] py-[55px] px-[58px] rounded-[30px]">
//                                 <img src={quote} alt="" />
//                                 <p className='text-[16px] font-inter leading-[26px] font-regular text-[#7B7B7B] py-5 '>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
//                                 <div className="star">
//                                     <i className="fa-jelly-fill fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
//                                     <i className="fa-jelly-fill fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
//                                     <i className="fa-jelly-fill fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
//                                     <i className="fa-jelly-fill fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
//                                     <i className="fa-jelly-fill fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
//                                 </div>
//                                 <div className="auth-info flex gap-5 items-center justify-between pt-[30px]">
//                                     <div className="auth-img">
//                                         <img src={author1} alt="author image" />
//                                     </div>
//                                     <div className="details">
//                                         <h3 className='font-bold text-[20px] leading-[120%] text-[#232323]'>Eric Drake</h3>
//                                         <p className='text-[16px] text-[#7B7B7B] leading-[26px]'>Digital Marketor</p>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="review-item duration-500 max-w-[425px] py-[55px] px-[58px] rounded-[30px]">
//                                 <img src={quote} alt="" />
//                                 <p className='text-[16px] font-inter leading-[26px] font-regular text-[#7B7B7B] py-5 '>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
//                                 <div className="star">
//                                     <i className="fa-jelly-fill fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
//                                     <i className="fa-jelly-fill fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
//                                     <i className="fa-jelly-fill fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
//                                     <i className="fa-jelly-fill fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
//                                     <i className="fa-jelly-fill fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
//                                 </div>
//                                 <div className="auth-info flex gap-5 items-center justify-between pt-[30px]">
//                                     <div className="auth-img">
//                                         <img src={author1} alt="author image" />
//                                     </div>
//                                     <div className="details">
//                                         <h3 className='font-bold text-[20px] leading-[120%] text-[#232323]'>Eric Drake</h3>
//                                         <p className='text-[16px] text-[#7B7B7B] leading-[26px]'>Digital Marketor</p>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="review-item duration-500 max-w-[425px] py-[55px] px-[58px] rounded-[30px]">
//                                 <img src={quote} alt="" />
//                                 <p className='text-[16px] font-inter leading-[26px] font-regular text-[#7B7B7B] py-5 '>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
//                                 <div className="star">
//                                     <i className="fa-jelly-fill fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
//                                     <i className="fa-jelly-fill fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
//                                     <i className="fa-jelly-fill fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
//                                     <i className="fa-jelly-fill fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
//                                     <i className="fa-jelly-fill fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
//                                 </div>
//                                 <div className="auth-info flex gap-5 items-center justify-between pt-[30px]">
//                                     <div className="auth-img">
//                                         <img src={author1} alt="author image" />
//                                     </div>
//                                     <div className="details">
//                                         <h3 className='font-bold text-[20px] leading-[120%] text-[#232323]'>Eric Drake</h3>
//                                         <p className='text-[16px] text-[#7B7B7B] leading-[26px]'>Digital Marketor</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </Slider>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Review








// ! image import 
import quote from '../../assets/review-img/quote.png'
import author1 from '../../assets/review-img/auther-1.png'
// ! image import 

// ! react slick 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


// !next prev button click 
function PrevArrow({ onClick }) {
    return (
        <button
            onClick={onClick}
            className='absolute top-1/2 left-0 -translate-y-1/2 z-10 cursor-pointer'
        >
            <i className='fa-solid fa-circle-chevron-left text-[40px] text-[#4756DF]'></i>
        </button>
    )
}

function NextArrow({ onClick }) {
    return (
        <button
            onClick={onClick}
            className='absolute top-1/2 right-0 -translate-y-1/2 z-10 cursor-pointer'
        >
            <i className='fa-solid fa-circle-chevron-right text-[40px] text-[#4756DF]'></i>
        </button>
    )
}
// !next prev button click 

const Review = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <section className='pb-[150px]'>
            <div className="container">
                <div className="service-top text-center max-w-[609px] mx-auto pb-[130px]">
                    <h3 className='font-inter font-bold text-[#151515] text-[45px] pb-5'>Some Client Reviews</h3>
                    <p className='text-[#737373] font-inter text-[16px] pb-[50px]'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </p>
                </div>

                <div className="slider-main relative">
                    <Slider {...settings}>
                        <div className="review-item duration-500 max-w-[425px] py-[55px] px-[58px] rounded-[30px]">
                            <img src={quote} alt="" />
                            <p className='text-[16px] font-inter leading-[26px] font-regular text-[#7B7B7B] py-5'>
                                I had a good experience while using this app, what fascinated me was the live tracking feature.
                            </p>
                            <div className="star">
                                <i className="fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
                                <i className="fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
                                <i className="fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
                                <i className="fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
                                <i className="fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
                            </div>
                            <div className="auth-info flex gap-5 items-center justify-between pt-[30px]">
                                <div className="auth-img">
                                    <img src={author1} alt="author image" />
                                </div>
                                <div className="details">
                                    <h3 className='font-bold text-[20px] leading-[120%] text-[#232323]'>Eric Drake</h3>
                                    <p className='text-[16px] text-[#7B7B7B] leading-[26px]'>Digital Marketer</p>
                                </div>
                            </div>
                        </div>
                        <div className="review-item duration-500 max-w-[425px] py-[55px] px-[58px] rounded-[30px]">
                            <img src={quote} alt="" />
                            <p className='text-[16px] font-inter leading-[26px] font-regular text-[#7B7B7B] py-5'>
                                I had a good experience while using this app, what fascinated me was the live tracking feature.
                            </p>
                            <div className="star">
                                <i className="fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
                                <i className="fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
                                <i className="fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
                                <i className="fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
                                <i className="fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
                            </div>
                            <div className="auth-info flex gap-5 items-center justify-between pt-[30px]">
                                <div className="auth-img">
                                    <img src={author1} alt="author image" />
                                </div>
                                <div className="details">
                                    <h3 className='font-bold text-[20px] leading-[120%] text-[#232323]'>Eric Drake</h3>
                                    <p className='text-[16px] text-[#7B7B7B] leading-[26px]'>Digital Marketer</p>
                                </div>
                            </div>
                        </div>
                        <div className="review-item duration-500 max-w-[425px] py-[55px] px-[58px] rounded-[30px]">
                            <img src={quote} alt="" />
                            <p className='text-[16px] font-inter leading-[26px] font-regular text-[#7B7B7B] py-5'>
                                I had a good experience while using this app, what fascinated me was the live tracking feature.
                            </p>
                            <div className="star">
                                <i className="fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
                                <i className="fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
                                <i className="fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
                                <i className="fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
                                <i className="fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
                            </div>
                            <div className="auth-info flex gap-5 items-center justify-between pt-[30px]">
                                <div className="auth-img">
                                    <img src={author1} alt="author image" />
                                </div>
                                <div className="details">
                                    <h3 className='font-bold text-[20px] leading-[120%] text-[#232323]'>Eric Drake</h3>
                                    <p className='text-[16px] text-[#7B7B7B] leading-[26px]'>Digital Marketer</p>
                                </div>
                            </div>
                        </div>
                        <div className="review-item duration-500 max-w-[425px] py-[55px] px-[58px] rounded-[30px]">
                            <img src={quote} alt="" />
                            <p className='text-[16px] font-inter leading-[26px] font-regular text-[#7B7B7B] py-5'>
                                I had a good experience while using this app, what fascinated me was the live tracking feature.
                            </p>
                            <div className="star">
                                <i className="fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
                                <i className="fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
                                <i className="fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
                                <i className="fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
                                <i className="fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
                            </div>
                            <div className="auth-info flex gap-5 items-center justify-between pt-[30px]">
                                <div className="auth-img">
                                    <img src={author1} alt="author image" />
                                </div>
                                <div className="details">
                                    <h3 className='font-bold text-[20px] leading-[120%] text-[#232323]'>Eric Drake</h3>
                                    <p className='text-[16px] text-[#7B7B7B] leading-[26px]'>Digital Marketer</p>
                                </div>
                            </div>
                        </div>
                        <div className="review-item duration-500 max-w-[425px] py-[55px] px-[58px] rounded-[30px]">
                            <img src={quote} alt="" />
                            <p className='text-[16px] font-inter leading-[26px] font-regular text-[#7B7B7B] py-5'>
                                I had a good experience while using this app, what fascinated me was the live tracking feature.
                            </p>
                            <div className="star">
                                <i className="fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
                                <i className="fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
                                <i className="fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
                                <i className="fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
                                <i className="fa-regular fa-star text-[#F9BD2C] text-[22px]"></i>
                            </div>
                            <div className="auth-info flex gap-5 items-center justify-between pt-[30px]">
                                <div className="auth-img">
                                    <img src={author1} alt="author image" />
                                </div>
                                <div className="details">
                                    <h3 className='font-bold text-[20px] leading-[120%] text-[#232323]'>Eric Drake</h3>
                                    <p className='text-[16px] text-[#7B7B7B] leading-[26px]'>Digital Marketer</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Review;


