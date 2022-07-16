import { FC } from "react";
import {
  AiOutlineHeart,
  AiOutlineEllipsis
} from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import { FaRegComment } from 'react-icons/fa';

const Cart:FC = () => {
  return (
    <div className="flex flex-col max-w-[470px] border-inst my-4">
      <div className="flex justify-between items-center h-14 px-3">
        <div className="flex items-center gap-3">
          <div className="cursor-pointer">
             <img 
                className="h-8 w-8 object-cover rounded-full overflow-hidden"
                src="https://i0.wp.com/floridahsfootball.com/wp-content/uploads/2016/10/IMG-Academy-Featured.png?resize=696%2C418&ssl=1" 
                alt="" 
              />
          </div>
          <div className="cursor-pointer">name</div>
        </div>
        <div className="cursor-pointer">
          <AiOutlineEllipsis className="h-7 w-8"/>
        </div>
      </div>
      <div className="">
        <img 
          className="h-full w-full"
          src="https://i0.wp.com/floridahsfootball.com/wp-content/uploads/2016/10/IMG-Academy-Featured.png?resize=696%2C418&ssl=1" 
          alt="" 
        />
      </div>
      <div className="flex m-3 justify-between">
        <div className="flex gap-4">
          <AiOutlineHeart className="h-6 w-6"/>
          <FiSend className="h-6 w-6"/>
          <FaRegComment className="h-6 w-6"/>
        </div>
          <div className="d">
            Some
          </div>
      </div>
      <div className="text-sm font-semibold mx-3 mb-2">
        106,566 likes
      </div>
      <div className="f">
        Information
      </div>
      <div className="flex justify-between items-center">
          <div className="d">

          </div>
          <div className="d">
            <input type="text" />  
          </div>
          <div className="d">
            <button>
              Post
            </button>
          </div>
      </div>
    </div>
  )
}
export default Cart