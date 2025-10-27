// !react counter up 
import CountUp from 'react-countup';
// !react counter up 

let Customer = 200;
let rating = 5
let project = 351;
const Success = () => {
    return (
        <>
            <section className='pt-[170px] pb-[100px]'>
                <div className="container">
                    <div className="row flex items-center gap-[124px]  bg-[#E0FFF9] py-[85px] px-[50px] rounded-[20px] " >
                        <div className="success-left w-2/5">
                            <div className="success-left-content">
                                <h3 className='text-[#6A4DF4] text-[25px] font-medium font-inter leading-[120%] pb-[15px]  '>Our Success</h3>
                                <h2 className='text-[#151515] text-[35px] font-semibold pr-4 font-inter'>West cost Brand makers-Global Edge</h2>
                            </div>
                        </div>
                        <div className="success-right w-3/5">
                            <div className="success-right-content flex items-center justify-between">
                                <div className="numbers">
                                    <h3 className='text-[#151515] text-[50px] font-bold font-inter '>
                                        <CountUp end={Customer} />+
                                    </h3>
                                    <p className='text-[#737373] text-[20px] font-medium leading-[120%]  '>Customer Satisfied</p>
                                </div>

                                <div className="numbers">
                                    <h3 className='text-[#151515] text-[50px] font-bold font-inter '>
                                        <CountUp end={rating} />
                                    </h3>
                                    <p className='text-[#737373] text-[20px] font-medium leading-[120%] '>200+ Avg rating</p>
                                </div>

                                <div className="numbers">
                                    <h3 className='text-[#151515] text-[50px] font-bold font-inter '>
                                        <CountUp end={project}/>+
                                        </h3>
                                    <p className='text-[#737373] text-[20px] font-medium leading-[120%]  '>Project Delivered</p>
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