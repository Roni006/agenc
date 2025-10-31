//! image import
import logo from '../../assets/footer-logo.png'
//! image import


const Footer = () => {
    return (
        <>
            <section className='pt-[150px] hidden'>
                <div className="container">
                    <div className="footer-content flex gap-[110px] justify-between mb-[50px]">
                        <div className="item1 max-w-[33.33%]">
                            <a href="Navbar.jsx">
                                <img src={logo} alt="footer logo" />
                            </a>
                            <p className='text-[16px] leading-[26px] text-[#7b7b7b] pt-[30px] max-w-[356px]'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                        </div>

                        <div className="item1 max-w-[16.66%]">
                            <h3 className='text-[20px] text-[#151515] font-inter font-semibold mb-10'>About</h3>
                            <ul className='menu'>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>

                        <div className="item1 max-w-[16.66%]">
                            <h3 className='text-[20px] text-[#151515] font-inter font-semibold mb-10'>Company</h3>
                            <ul className='menu'>
                                <li><a href="#">Our Team</a></li>
                                <li><a href="#">Partner With Us</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div className="item1 max-w-[16.66%]">
                            <h3 className='text-[20px] text-[#151515] font-inter font-semibold mb-10'>Support</h3>
                            <ul className='menu'>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Support Center</a></li>
                                <li><a href="#">Feedback</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Accessibility</a></li>
                            </ul>
                        </div>
                        <div className="item1 max-w-[16.66%]">
                            <h3 className='text-[20px] text-[#151515] font-inter font-semibold mb-10'>Get in Touch</h3>
                            <ul className='menu'>
                                <li><a href="mailto: anik54908@gmail.com">anik54908@gmail.com</a></li>
                                <li><a href="tel: +88 01774952114">+88 01774952114</a></li>
                            </ul>
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