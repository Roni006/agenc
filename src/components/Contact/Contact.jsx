

const Contact = () => {
    return (
        <>
            <section className='bg-[#F3F3F3] py-[150px]'>
                <div className="container">
                    <div className="contact-body grid grid-cols-2 gap-[146px] items-center">
                        <div className="contact-details">
                            <h2 className='text-[45px] font-inter font-bold text-[#151515] pr-[106px]'>We Do design, Code & Development</h2>
                            <p className="text-[16px] text-[#7B7B7B] leading-[26px] pr-[65px] pt-[18px] pb-[15px]">I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                            <p className="text-[16px] text-[#7B7B7B] leading-[26px] pr-[50px]">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
                        </div>
                        <div className="contact-form">
                            <div className="form-content py-[41px] px-[43px] bg-white rounded-[20px]">
                                <h3 className="text-[30px] font-bold text-[#151515] mb-[30px] text-center ">Get a free quote now</h3>
                                <form action="#">

                                    <div className="mb-5">
                                        <label className="block text-[16px] text-[#151515] leading-[26px] pr-[50px] font-medium mb-2.5">Name</label>
                                        <input className="w-full border border-[#E8E8E8] py-5 px-[23px] rounded-[10px] text-[16px] text-[#DODODO]" type="text" placeholder="Enter Your Name" />
                                    </div>

                                    <div className="mb-5">
                                        <label className="block text-[16px] text-[#151515] leading-[26px] pr-[50px] font-medium mb-2.5">Email</label>
                                        <input className="w-full border border-[#E8E8E8] py-5 px-[23px] rounded-[10px] text-[16px] text-[#DODODO]" type="email" placeholder="Enter Your Email" />
                                    </div>

                                    <div className="mb-5">
                                        <label className="block text-[16px] text-[#151515] leading-[26px] pr-[50px] font-medium mb-2.5">Phone</label>
                                        <input className="w-full border border-[#E8E8E8] py-5 px-[23px] rounded-[10px] text-[16px] text-[#DODODO]" type="number" placeholder="Enter Your Phone" />
                                    </div>

                                    <div className="btn">
                                        <button type="submit" className="cursor-pointer bg-[#6A4DF4] text-[20px] text-[#ffffff]
                                        py-[19px] px-[147px] w-full rounded-[10px] font-inter font-semibold leading-[26px]">Get Pricing Now</button>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact