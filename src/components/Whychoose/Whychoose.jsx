//! image import 
import innovation from '../../assets/wca-img/innovation.png';
import dedication from '../../assets/wca-img/dedication.png';
import wcaBg from '../../assets/wca-img/wca-side-bg.jpg';
//! image import 

const Whychoose = () => {
    return (
        <>
            <section className='pt-[70px] lg:pt-[150px] pb-[70px] lg:pb-[106px]'>
                <div className="container">
                    <div className="service-top text-center w-full lg:max-w-[802px] mx-auto ">
                        <h3 className='font-inter font-bold text-[#151515] text-[32px] lg:text-[45px] pb-5 px-5 lg:px-[135px] '>Why You Should Choose Agenc    </h3>
                        <p className='text-[#737373] font-inter text-[16px] '>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                    </div>
   

                    <div className="wca-content flex  flex-col lg:flex-row  items-center justify-between lg:gap-[105px] sm:gap-[50px] sm:pt-[55px] pt-[90px]">
                        <div className="wca-left sm:w-full max-w-[791px] grid grid-cols-2 items-center justify-between gap-[30px] lg:gap-[103px] sm:gap-[50px]">

                            <div className="wca-item max-w-[305px]">
                                <img src={innovation} alt="Why Choose AgenC" />
                                <h4 className='text-[22px] lg:text-[25px] font-inter text-[#151515] font-bold pt-5 pb-2.5'>Innovative Ideas</h4>
                                <p className='text-[16px] text-[#737373]'>Because each project is different, we adapt to your business model.</p>
                            </div>

                            <div className="wca-item max-w-[305px]">
                                <img src={innovation} alt="Why Choose AgenC" />
                                <h4 className='text-[22px] lg:text-[25px] font-inter text-[#151515] font-bold pt-5 pb-2.5'>Innovative Ideas</h4>
                                <p className='text-[16px] text-[#737373]'>Because each project is different, we adapt to your business model.</p>
                            </div>

                            <div className="wca-item max-w-[305px]">
                                <img src={dedication} alt="Why Choose AgenC" />
                                <h4 className='text-[22px] lg:text-[25px] font-inter text-[#151515] font-bold pt-5 pb-2.5'>Innovative Ideas</h4>
                                <p className='text-[16px] text-[#737373]'>Because each project is different, we adapt to your business model.</p>
                            </div>

                            <div className="wca-item max-w-[305px]">
                                <img src={dedication} alt="Why Choose AgenC" />
                                <h4 className='text-[22px] lg:text-[25px] font-inter text-[#151515] font-bold pt-5 pb-2.5'>Innovative Ideas</h4>
                                <p className='text-[16px] text-[#737373]'>Because each project is different, we adapt to your business model.</p>
                            </div>
                        </div>

                        <div className="wca-right lg:max-w-[428px] sm:w-full mt-8 ">
                            <div className="bg-img">
                                <img src={wcaBg} className='rounded-[10px] h-auto w-full ' alt="Why Choose AgenC Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Whychoose