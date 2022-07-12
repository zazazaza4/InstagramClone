import { FC } from "react";
import icon from '../assets/Instagram_logo.png';
import HeaderIcon from "./HeaderIcon";
import profile from "../assets/header/profile.jpg";
import { NavLink } from "react-router-dom";
import { 
    AiOutlineHome, 
    AiFillHome, 
    AiOutlineMessage, 
    AiFillMessage, 
    AiOutlineCompass, 
    AiFillCompass,
    AiFillHeart,
    AiOutlineHeart 
} from 'react-icons/ai';
import { BsSearch, BsFillPlusSquareFill, BsPlusSquare } from 'react-icons/bs';


const Header: FC = () => {
    return (
      <header className="w-full fixed flex items-center justify-center h-16 bg-white border-b-[0.1px] border-gray-950">
        <div className="flex justify-between w-975 items-center flex-shrink px-3">
            {/* Left */}
            <div className="cursor-pointer">
                  <img src={icon} alt="instagram" className="h-7 w-24"/>
            </div>
            {/* Center */}
            <div className="hidden md:block">
                    <div className="flex rounded w-72 items-center bg-gray-400 bg-opacity-20 py-1 px-3">
                        <BsSearch className="h-8 w-8 px-2" style={{  fill: '#8e8e8e' }} />
                    <input
                        type="text"
                        className="w-11/12 border-none bg-transparent outline-none "
                        placeholder="Search" />
                </div>
            </div>
            {/* Right */}
            <div className="d">
                <nav className="flex items-center gap-x-7">
                    <NavLink to="/">
                        <HeaderIcon active Icon={AiOutlineHome} IconActive={AiFillHome}/>
                    </NavLink>
                    <NavLink to="/direct">
                        <HeaderIcon Icon={AiOutlineMessage} IconActive={AiFillMessage}/>
                    </NavLink>
                    <div className="cursor-pointer">
                        <HeaderIcon Icon={BsPlusSquare} IconActive={BsFillPlusSquareFill}/>
                    </div>
                    <NavLink to="/explore">
                        <HeaderIcon Icon={AiOutlineCompass} IconActive={AiFillCompass}/>
                    </NavLink>
                    <div className="cursor-pointer">
                        <HeaderIcon Icon={AiOutlineHeart} IconActive={AiFillHeart} />
                    </div>
                    <div className="cursor-pointer">
                        <img src={profile} alt="icon" className="h-7 w-7" />
                    </div>
                </nav>
            </div>
        </div>
    </header>
  )
}
export default Header