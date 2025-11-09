import { useState } from 'react';
import logo from '../../assets/logo.png'
// !react icon 
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
// !react icon


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <>
            <header className="lg:pt-[30px] sm:pt-[20px] pt-[35px] absolute top-0 left-0 w-full z-10 px-4 lg:px-0">
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
                                <ul className="menu flex items-center gap-[68px]">
                                    <li><a href="Navbar.jsx">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Service</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="button hidden md:block">
                            <a href="#" className="py-[15px] px-[42px] bg-[#6A4DF4] text-white text-[20px] rounded-[10px] font-semibold border-1 border-[#6A4DF4] hover:bg-transparent hover:text-[#6A4DF4] duration-300 font-inter">Contact</a>
                        </div>
                    </div>
                    <div className={`mobile-menu w-screen bg-[#694df4f3] z-99999 fixed opacity-0 invisible top-0 right-0 flex flex-col justify-center items-center gap-4 duration-300 transition-all ease-in-out
                            ${showMenu ? 'translate-x-0 opacity-100 visible h-full' : 'translate-x-full opacity-0 invisible h-0'}

                        `}>
                        <a href="Navbar.jsx">Home</a>
                        <a href="#" >About</a>
                        <a href="#">Service</a>
                        <a href="#">Careers</a>
                        <a href="#">Contact</a>
                        <RxCross2 onClick={()=> setShowMenu(false)} className='absolute top-5 right-5 text-4xl cursor-pointer' />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar