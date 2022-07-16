import { FC, MutableRefObject, UIEvent, useRef } from "react";
import Header from "../components/Header";
import Story from "../components/Story";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill
} from 'react-icons/bs';

import '../index.scss';
import Cart from "../components/Cart";

const Home: FC = () => {
  const arrowLeft = useRef() as MutableRefObject<HTMLInputElement>;
  const arrowRight = useRef() as MutableRefObject<HTMLInputElement>;

  const handleScrollStories = (event: UIEvent<HTMLDivElement>): void => {
    const target = event.target as HTMLTextAreaElement;
    // if (target.scrollLeft > 1) {
    //   arrowLeft.current.style.visibility = 'hidden'; 
    //   arrowLeft.current.style.pointerEvents = ''; 
    // } else {
    //   arrowLeft.current.style.visibility = 'visibility'; 
    //   arrowLeft.current.style.pointerEvents = 'pointer'; 
    // }
  }

  return (
    <div className="">
        <Header/>
        <main className="flex">
           {/* Center */}
           <div className="">
              <div className="relative">
                <div onScroll={handleScrollStories} className="border-inst overflow-x-scroll w-[470px] flex px-3 pt-3 pb-2 gap-2 scrollbar-hide">
                  <Story img="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x900.jpg" name="dada"/>
                  <Story img="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x900.jpg" name="dada"/>
                  <Story img="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x900.jpg" name="dada"/>
                  <Story img="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x900.jpg" name="dada"/>
                  <Story img="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x900.jpg" name="dada"/>
                  <Story img="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x900.jpg" name="dada"/>
                  <Story img="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x900.jpg" name="dada"/>
                </div>
                <div  className="absolute top-1/2 items-center px-3 flex w-full justify-between">
                  <div ref={arrowLeft} className="arrow">
                    <BsFillArrowLeftCircleFill />
                  </div>
                  <div ref={arrowRight} className="arrow">
                    <BsFillArrowRightCircleFill/>
                  </div>
                </div>
              </div>
              <Cart/>
           </div>
           {/* Left */}
           
        </main>
    </div>
  )
}
export default Home