// !react counter up 
import CountUp from 'react-countup';
// !react counter up 

let Customer = 200;
let rating = 5
let project = 351;
const Success = () => {
    return (
        <>
            <section className='pt-[70px] lg:pt-[170px] lg:pb-[100px] pb-[70px]'>
                <div className="container">
                    <div className="row lg:flex items-center gap-[124px] bg-[#E0FFF9] py-[85px] px-[50px] rounded-[20px] pl-[15px] lg:pl-[55px] pr-[15px] lg:pr-[37]" >
                        <div className="success-left w-full lg:w-2/5">
                            <div className="success-left-content">
                                <h3 className='text-[#6A4DF4] text-[25px] font-medium font-inter leading-[120%] pb-[15px] '>Our Success</h3>
                                <h2 className='text-[#151515] text-[25px] lg:text-[35px]  font-semibold pr-4 font-inter'>West cost Brand makers-Global Edge</h2>
                            </div>
                        </div>
                        <div className="success-right w-full lg:w-3/5 pt-4 lg:pt-0">
                            <div className="success-right-content flex items-center flex-wrap  justify-between ">
                                <div className="numbers">
                                    <h3 className='text-[#151515] text-[32px] lg:text-[50px] sm:text-[40px] font-bold font-inter '>
                                        <CountUp end={Customer} />+
                                    </h3>
                                    <p className='text-[#737373] text-[14px] lg:text-[20px] font-medium leading-[120%] '>Customer Satisfied</p>
                                </div>

                                <div className="numbers">
                                    <h3 className='text-[#151515] text-[32px] lg:text-[50px] sm:text-[40px] font-bold font-inter '>
                                        <CountUp end={rating} />
                                    </h3>
                                    <p className='text-[#737373] text-[14px] lg:text-[20px] font-medium leading-[120%] '>200+ Avg rating</p>
                                </div>

                                <div className="numbers">
                                    <h3 className='text-[#151515] text-[32px] lg:text-[50px] sm:text-[40px] font-bold font-inter '>
                                        <CountUp end={project}/>+
                                        </h3>
                                    <p className='text-[#737373] text-[14px] lg:text-[20px] font-medium leading-[120%]  '>Project Delivered</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Success