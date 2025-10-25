// ! image import 
import managementApp from '../../assets/work-img/management.jpg';
// ! image import 

const Work = () => {
    return (
        <>
            <section className="bg-[#F3F3F3] py-[140px]  ">
                <div className="container">
                    <div className="service-top text-center max-w-[609px] mx-auto ">
                        <h3 className='font-inter font-bold text-[#151515] text-[45px] pb-5 '>Our Provided Services</h3>
                        <p className='text-[#737373] font-inter text-[16px]   pb-[50px]'>
                            There are many variations of passages of Lorem Ipsum available, but the majority  have suffered alteration in some form.
                        </p>
                    </div>

                    <div className="work-item grid grid-cols-3 gap-6">

                        <div className="work-details rounded-[20px] bg-white hover:shadow-service duration-300 cursor-pointer">
                            <img src={managementApp} className='rounded-[20px] w-full ' alt="work image" />
                            <div className="work-items py-[30px] px-[45px] text-center ">
                                <h3 className='text-[20px] font-bold font-inter  '>Task Management App</h3>
                                <p className='font-inter text-[16px] leading-[26px] pt-2.5 '>This is a task management application that can help you be more </p>
                            </div>
                        </div>

                        <div className="work-details rounded-[20px] bg-white hover:shadow-service duration-300 cursor-pointer">
                            <img src={managementApp} className='rounded-[20px] w-full ' alt="work image" />
                            <div className="work-items py-[30px] px-[45px] text-center ">
                                <h3 className='text-[20px] font-bold font-inter  '>Task Management App</h3>
                                <p className='font-inter text-[16px] leading-[26px] pt-2.5 '>This is a task management application that can help you be more </p>
                            </div>
                        </div>

                        <div className="work-details rounded-[20px] bg-white hover:shadow-service duration-300 cursor-pointer">
                            <img src={managementApp} className='rounded-[20px] w-full ' alt="work image" />
                            <div className="work-items py-[30px] px-[45px] text-center ">
                                <h3 className='text-[20px] font-bold font-inter  '>Task Management App</h3>
                                <p className='font-inter text-[16px] leading-[26px] pt-2.5 '>This is a task management application that can help you be more </p>
                            </div>
                        </div>

                        <div className="work-details rounded-[20px] bg-white hover:shadow-service duration-300 cursor-pointer">
                            <img src={managementApp} className='rounded-[20px] w-full ' alt="work image" />
                            <div className="work-items py-[30px] px-[45px] text-center ">
                                <h3 className='text-[20px] font-bold font-inter  '>Task Management App</h3>
                                <p className='font-inter text-[16px] leading-[26px] pt-2.5 '>This is a task management application that can help you be more </p>
                            </div>
                        </div>

                        <div className="work-details rounded-[20px] bg-white hover:shadow-service duration-300 cursor-pointer">
                            <img src={managementApp} className='rounded-[20px] w-full ' alt="work image" />
                            <div className="work-items py-[30px] px-[45px] text-center ">
                                <h3 className='text-[20px] font-bold font-inter  '>Task Management App</h3>
                                <p className='font-inter text-[16px] leading-[26px] pt-2.5 '>This is a task management application that can help you be more </p>
                            </div>
                        </div>

                        <div className="work-details rounded-[20px] bg-white hover:shadow-service duration-300 cursor-pointer">
                            <img src={managementApp} className='rounded-[20px] w-full ' alt="work image" />
                            <div className="work-items py-[30px] px-[45px] text-center ">
                                <h3 className='text-[20px] font-bold font-inter  '>Task Management App</h3>
                                <p className='font-inter text-[16px] leading-[26px] pt-2.5 '>This is a task management application that can help you be more </p>
                            </div>
                        </div>
 
                    </div>
                </div>
            </section>

        </>
    )
}

export default Work