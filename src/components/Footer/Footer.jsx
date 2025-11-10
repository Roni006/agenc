//! image import
import logo from '../../assets/footer-logo.png'
//! image import


const Footer = () => {
    return (
        <>
            <section className='pt-[70px] lg:pt-[150px]'>
                <div className="container">
                    <div className="footer-content lg:flex md:flex-wrap gap-[110px] md:gap-[50px]  justify-between mb-[50px]">
                        <div className="w-full md:w-[80%] md:mx-auto md:text-center lg:w-[356px] pb-[50px] lg:pb-0 ">
                            <a href="Navbar.jsx">
                                <img src={logo} alt="footer logo" className='mx-auto'/>
                            </a>
                            <p className='text-[16px] leading-[26px] text-[#7b7b7b] pt-[30px] lg:max-w-[356px] sm:w-full md:w-full  '>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-0 lg:gap-[110px]  gap-y-6 lg:gap-y-0 sm:pr-[15px] ">
                            <div className="item1 w-[72px]">
                                <h3 className='text-[20px] text-[#151515] font-inter font-semibold mb-2 lg:mb-10'>About</h3>
                                <ul className='menu'>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Features</a></li>
                                    <li><a href="#">News</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </div>

                            <div className="item1 w-[121px]">
                                <h3 className='text-[20px] text-[#151515] font-inter font-semibold mb-2 lg:mb-10'>Company</h3>
                                <ul className='menu'>
                                    <li><a href="#">Our Team</a></li>
                                    <li><a href="#">Partner With Us</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Blog</a></li>
                                </ul>
                            </div>

                            <div className="item w-[118px]">
                                <h3 className='text-[20px] text-[#151515] font-inter font-semibold mb-2 lg:mb-10'>Support</h3>
                                <ul className='menu'>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Support Center</a></li>
                                    <li><a href="#">Feedback</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Accessibility</a></li>
                                </ul>
                            </div>

                            <div className="item1 w-[122px">
                                <h3 className='text-[20px] text-[#151515] font-inter font-semibold mb-2 lg:mb-10'>Get in Touch</h3>
                                <ul className='menu'>
                                    <li><a href="mailto: anik54908@gmail.com">anik54908@gmail.com</a></li>
                                    <li><a href="tel: +88 01774952114">+88 01774952114</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="copy-right">
                        <hr className='text-[#a5a1a1b1] border-t-2' />
                        <p className='text-[#111111] text-center py-[33px] text-[16px] leading-[26px]'>All credit goes to @agence.com</p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Footer