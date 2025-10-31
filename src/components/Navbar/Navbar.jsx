import logo from '../../assets/logo.png'
// !react icon
// import { FaBars } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

// !react icon

const Navbar = () => {
    return (
        <>
            <header className="lg:pt-[30px] pt-[50px] absolute top-0 left-0 w-full z-10 px-4 lg:px-0">
                <div className="container">
                    <div className="row flex justify-between items-center">
                        <div className="logo">
                            <a href="Navbar.jsx">
                                <img src={logo} alt="logo image" />
                            </a>
                        </div>
                        <div className="bar md:hidden block">
                            <FaBars className='text-white text-[30px]' />
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
                </div>
            </header>
        </>
    )
}

export default Navbar