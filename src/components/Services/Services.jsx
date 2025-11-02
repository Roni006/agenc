// ! image im port 
import uiUx from '../../assets/service/ui-ux.png'
import design from '../../assets/service/web-design.png'
import development from '../../assets/service/web-development.png'
import graphics from '../../assets/service/graphics.png'
import animation from '../../assets/service/promotion.png'
import marketing from '../../assets/service/marketing.png'
// ! image im port 

const Services = () => {
    return (
        <>
            <section className='lg:pb-[105px]'>
                <div className="container">
                    <div className="service-top text-center max-w-[609px] mx-auto ">
                        <h3 className='font-inter font-bold text-[#151515] text-[32px] lg:text-[45px] pb-5 '>Our Provided Services</h3>
                        <p className='text-[#737373] font-inter text-[16px]  pb-[30px] lg:pb-[50px]'>
                            There are many variations of passages of Lorem Ipsum available, but the majority  have suffered alteration in some form.
                        </p>
                    </div>

                    <div className="service-body">
                        <div className="service content grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-6">

                            <div className="service-item pt-20 pb-[47px] px-[55px] text-center hover:shadow-service hover:rounded-[20px] cursor-pointer duration-300" >
                                <img src={design} className='mx-auto' alt="service image" />
                                <h2 className='font-bold text-[25px] text-[#151515] font-inter pt-10 pb-5'>Web Design</h2>
                                <p className='text-[16px] font-inter text-[#737373] leading-[26px]  '>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                            </div>

                            <div className="service-item pt-20 pb-[47px] px-[55px] text-center hover:shadow-service hover:rounded-[20px] cursor-pointer duration-300" >
                                <img src={uiUx} className='mx-auto' alt="service image" />
                                <h2 className='font-bold text-[25px] text-[#151515] font-inter pt-10 pb-5'>UI/UX Design</h2>
                                <p className='text-[16px] font-inter text-[#737373] leading-[26px]  '>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                            </div>

                            <div className="service-item pt-20 pb-[47px] px-[55px] text-center hover:shadow-service hover:rounded-[20px] cursor-pointer duration-300" >
                                <img src={development} className='mx-auto' alt="service image" />
                                <h2 className='font-bold text-[25px] text-[#151515] font-inter pt-10 pb-5'>Web Development</h2>
                                <p className='text-[16px] font-inter text-[#737373] leading-[26px]  '>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                            </div>

                            <div className="service-item pt-20 pb-[47px] px-[55px] text-center hover:shadow-service hover:rounded-[20px] cursor-pointer duration-300" >
                                <img src={graphics} className='mx-auto' alt="service image" />
                                <h2 className='font-bold text-[25px] text-[#151515] font-inter pt-10 pb-5'>Motion Graphics</h2>
                                <p className='text-[16px] font-inter text-[#737373] leading-[26px]  '>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                            </div>

                            <div className="service-item pt-20 pb-[47px] px-[55px] text-center hover:shadow-service hover:rounded-[20px] cursor-pointer duration-300" >
                                <img src={marketing} className='mx-auto' alt="service image" />
                                <h2 className='font-bold text-[25px] text-[#151515] font-inter pt-10 pb-5'>3D Animation</h2>
                                <p className='text-[16px] font-inter text-[#737373] leading-[26px]  '>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                            </div>

                            <div className="service-item pt-20 pb-[47px] px-[55px] text-center hover:shadow-service hover:rounded-[20px] cursor-pointer duration-300" >
                                <img src={animation} className='mx-auto' alt="service image" />
                                <h2 className='font-bold text-[25px] text-[#151515] font-inter pt-10 pb-5'>Digital Marketing</h2>
                                <p className='text-[16px] font-inter text-[#737373] leading-[26px]  '>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services

