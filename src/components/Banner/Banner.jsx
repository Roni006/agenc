// ! react slick 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// ! image import 
import banner from '../../assets/banner.jpg'

const Banner = () => {
    // ! react slick functions 
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    }
    return (
        <>
            <section className='relative ' id="banner">
                <div className="banner-contents">
                    <img src={banner} alt="banner image" className='w-full h-screen' />
                    <div className='absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.61)] '>
                        <div className="w-full lg:max-w-[950px] absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4  text-center ">

                            {/* slick items */}
                            <Slider {...settings}>

                                <div className="slider-item font-inter mb-5">
                                    <h1 className='text-white text-[35px] sm:pt-[50px] sm:pb-2.5 lg:text-[75px] font-bold leading-[120%] font-inter '>We Help brands with high quality services</h1>
                                    <p className='text-[16px] text-white sm:pt-[15px] lg:pt-[50px] pb-10 max-w-[620px] mx-auto px-4 lg:px-0'>There are many variations of passages of Lorem Ipsum available, but the majority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                                    <a href="#" className="py-[15px] px-[42px] bg-[#6A4DF4] text-white text-[20px] rounded-[10px] font-semibold border-2 border-[#6A4DF4] hover:bg-transparent  duration-300 font-inter">Get Started</a>
                                </div>

                                <div className="slider-item font-inter mb-5">
                                    <h1 className='text-white text-[35px] sm:pt-[50px] sm:pb-2.5 lg:text-[75px] font-bold leading-[120%] font-inter '>We Help brands with high quality services</h1>
                                    <p className='text-[16px] text-white sm:pt-[15px] lg:pt-[50px] pb-10 max-w-[620px] mx-auto px-4 lg:px-0'>There are many variations of passages of Lorem Ipsum available, but the majority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                                    <a href="#" className="py-[15px] px-[42px] bg-[#6A4DF4] text-white text-[20px] rounded-[10px] font-semibold border-2 border-[#6A4DF4] hover:bg-transparent  duration-300 font-inter">Get Started</a>
                                </div>

                                <div className="slider-item font-inter mb-5">
                                    <h1 className='text-white text-[35px] sm:pt-[50px] sm:pb-2.5 lg:text-[75px] font-bold leading-[120%] font-inter '>We Help brands with high quality services</h1>
                                    <p className='text-[16px] text-white sm:pt-[15px] lg:pt-[50px] pb-10 max-w-[620px] mx-auto px-4 lg:px-0'>There are many variations of passages of Lorem Ipsum available, but the majority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                                    <a href="#" className="py-[15px] px-[42px] bg-[#6A4DF4] text-white text-[20px] rounded-[10px] font-semibold border-2 border-[#6A4DF4] hover:bg-transparent  duration-300 font-inter">Get Started</a>
                                </div>
                                
                                <div className="slider-item font-inter mb-5">
                                    <h1 className='text-white text-[35px] sm:pt-[50px] sm:pb-2.5 lg:text-[75px] font-bold leading-[120%] font-inter '>We Help brands with high quality services</h1>
                                    <p className='text-[16px] text-white sm:pt-[15px] lg:pt-[50px] pb-10 max-w-[620px] mx-auto px-4 lg:px-0'>There are many variations of passages of Lorem Ipsum available, but the majority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                                    <a href="#" className="py-[15px] px-[42px] bg-[#6A4DF4] text-white text-[20px] rounded-[10px] font-semibold border-2 border-[#6A4DF4] hover:bg-transparent  duration-300 font-inter">Get Started</a>
                                </div>

                                {/* <div className="slider-item font-inter mb-5">
                                    <h1 className='text-white text-[35px] lg:text-[75px] font-bold leading-[120%] font-inter '>Empowering Businesses with Creative Solutions</h1>
                                    <p className='text-[16px] text-white pt-[50px] pb-10 max-w-[620px] mx-auto px-4 lg:px-0'>Discover innovative ideas and premium services crafted to elevate your brand. We turn your vision into a powerful digital experience that connects and inspire</p>
                                    <a href="#" className="py-[15px] px-[42px] bg-[#6A4DF4] text-white text-[20px] rounded-[10px] font-semibold border-2 border-[#6A4DF4] hover:bg-transparent  duration-300 font-inter">Get Started</a>
                                </div>

                                <div className="slider-item font-inter mb-5">
                                    <h1 className='text-white text-[35px] lg:text-[75px] font-bold leading-[120%] font-inter '>Building Digital Experiences that Inspire</h1>
                                    <p className='text-[16px] text-white pt-[50px] pb-10 max-w-[620px] mx-auto px-4 lg:px-0'>From concept to creation, we design impactful solutions that help brands grow faster and connect deeper with their audiences.</p>
                                    <a href="#" className="py-[15px] px-[42px] bg-[#6A4DF4] text-white text-[20px] rounded-[10px] font-semibold border-2 border-[#6A4DF4] hover:bg-transparent  duration-300 font-inter">Get Started</a>
                                </div>

                                <div className="slider-item font-inter mb-5">
                                    <h1 className='text-white text-[35px] lg:text-[75px] font-bold leading-[120%] font-inter '>Delivering Excellence in Every Pixel</h1>
                                    <p className='text-[16px] text-white pt-[50px] pb-10 max-w-[620px] mx-auto px-4 lg:px-0'>We craft meaningful designs and smart strategies that empower brands to achieve more with less — blending art, technology, and innovation.</p>
                                    <a href="#" className="py-[15px] px-[42px] bg-[#6A4DF4] text-white text-[20px] rounded-[10px] font-semibold border-2 border-[#6A4DF4] hover:bg-transparent  duration-300 font-inter">Get Started</a>
                                </div> */}
                            </Slider>
                            {/* slick items */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner