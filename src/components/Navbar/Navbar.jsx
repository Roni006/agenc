import { useEffect, useState } from 'react';
import logo from '../../assets/logo.png'
// !react icon 
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
// !react icon

// !react scrollspy
import ScrollSpy from 'react-scrollspy-navigation';
// !react scrollspy

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const handleScrool = () => {
            setIsSticky(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScrool)
        return () => window.removeEventListener('scroll', handleScrool)
    })
    return (
        <>
            <ScrollSpy activeClass="nav-active">
                <header className={` sm:pt-5 pt-[35px] fixed top-0 left-0 w-full z-10 px-4 lg:px-0 duration-300
                ${isSticky ? 'bg-[#00000074] py-5 shadow-sm' : 'bg-transparent py-5 lg:pt-[57px]'}
                `}>
                    <div className="container">
                        <div className="row flex justify-between items-center">
                            <div className="logo">
                                <a href="Navbar.jsx">
                                    <img src={logo} className='sm:w-[150px]' alt="logo image" />
                                </a>
                            </div>
                            <div className="bar md:hidden block">
                                <FaBars onClick={() => setShowMenu(true)} className='text-white text-[30px]' />
                            </div>
                            <div className="menus hidden md:block">
                                <nav>
                                    <ul className="menu flex items-center md:gap-[50px] gap-[68px]">
                                        <li><a href="#banner">Home</a></li>
                                        <li><a href="#about">About</a></li>
                                        <li><a href="#service">Service</a></li>
                                        <li><a href="#work">Work</a></li>
                                        <li><a href="#review">Review</a></li>
                                        {/* <li><a href="#">Careers</a></li> */}
                                        <li><a href="#contact">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="button hidden md:block md:pr-5">
                                <a href="#" className="py-[15px] md:py-2.5 md:px-[30px] px-[42px] bg-[#6A4DF4] text-white text-[20px] rounded-[10px] font-semibold border-1 border-[#6A4DF4] hover:bg-transparent hover:text-[#6A4DF4] duration-300 font-inter">Contact</a>
                            </div>
                        </div>
                        <div className={`mobile-menu w-screen bg-[#694df4f3] z-99999 fixed opacity-0 invisible top-0 right-0 flex flex-col justify-center items-center gap-4 duration-300 transition-all ease-in-out
                            ${showMenu ? 'translate-x-0 opacity-100 visible h-full' : 'translate-x-full opacity-0 invisible h-0'}

                        `}>
                            <a href="Navbar.jsx">Home</a>
                            <a href="banner" >Banner</a>
                            <a href="#" >About</a>
                            <a href="#">Service</a>
                            <a href="#">Careers</a>
                            <a href="#">Contact</a>
                            <RxCross2 onClick={() => setShowMenu(false)} className='absolute top-5 right-5 text-4xl cursor-pointer' />
                        </div>
                    </div>
                </header>
            </ScrollSpy>
        </>
    )
}

export default Navbar