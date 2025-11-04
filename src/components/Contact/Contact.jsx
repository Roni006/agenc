import { useState } from "react"

// !react toast 
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
// !react toast 


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    })

    const [error, setError] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }


    const validate = () => {
        let newError = []

        if (!formData.name) newError.name = 'Please Enter Your Name'
        if (!formData.email) newError.email = 'Please Enter Your Email'
        else if (!formData.email.includes('@')) newError.email = 'PLease enter a Valid Email'
        if (!formData.phone) newError.phone = 'Please Enter Phone Numbre'

        setError(newError);

        return Object.keys(newError).length == 0
    }
    // console.log(error);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate()) {

            toast('✅ Form Submitted Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            // alert('form submit');
            console.log(formData);
            setFormData({ name: '', email: '', phone: '' });


        }

    }



    return (
        <>
            <ToastContainer />
            <section className='bg-[#F3F3F3] py-[70px] lg:py-[150px]'>
                <div className="container">
                    <div className="contact-body grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-[146px] items-center">
                        <div className="contact-details">
                            <h2 className='text-[32px] lg:text-[45px] font-inter font-bold text-[#151515] pr-0 lg:pr-[106px]'>We Do design, Code & Development</h2>
                            <p className="text-[16px] text-[#7B7B7B] leading-[26px] pr-[65px] pt-[18px] pb-[15px]">I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                            <p className="text-[16px] text-[#7B7B7B] leading-[26px] pr-[50px]">There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
                        </div>

                        <div className="contact-form">
                            <div className="form-content py-[41px] px-[43px] bg-white rounded-[20px]">
                                <h3 className="text-[25px] lg:text-[30px] font-bold text-[#151515] mb-[30px] text-center ">Get a free quote now</h3>
                                <form onSubmit={handleSubmit}>

                                    <div className="mb-5">
                                        <label className="block text-[16px] text-[#151515] leading-[26px] pr-[50px] font-medium mb-2.5">Name</label>
                                        <input className="w-full border border-[#E8E8E8] py-5 px-[23px] rounded-[10px] text-[16px] text-[#DODODO]" type="text" placeholder="Enter Your Name" name="name" onChange={handleChange} value={formData.name} />
                                        {error.name && <strong style={{ color: "red", fontSize: '12px' }}>{error.name}</strong>}
                                    </div>

                                    <div className="mb-5">
                                        <label className="block text-[16px] text-[#151515] leading-[26px] pr-[50px] font-medium mb-2.5">Email</label>
                                        <input className="w-full border border-[#E8E8E8] py-5 px-[23px] rounded-[10px] text-[16px] text-[#DODODO]" type="email" placeholder="Enter Your Email" name="email" onChange={handleChange} value={formData.email} />
                                        {error.email && <strong style={{ color: "red", fontSize: '12px' }}>{error.email}</strong>}
                                    </div>

                                    <div className="mb-5">
                                        <label className="block text-[16px] text-[#151515] leading-[26px] pr-[50px] font-medium mb-2.5">Phone</label>
                                        <input className="w-full border border-[#E8E8E8] py-5 px-[23px] rounded-[10px] text-[16px] text-[#DODODO]" type="number" placeholder="Enter Your Phone" name="phone" onChange={handleChange}
                                            value={formData.phone} />
                                        {error.phone && <strong style={{ color: "red", fontSize: '12px' }}>{error.phone}</strong>}
                                    </div>

                                    <div className="btn text-center">
                                        <button type="submit" className="cursor-pointer bg-[#6A4DF4] text-[18px] lg:text-[20px] text-[#ffffff]
                                        py-4 lg:py-[19px] px-[50px]  lg:px-[147px] lg:w-full rounded-[10px] font-inter font-semibold leading-[26px]">Get Pricing Now</button>
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