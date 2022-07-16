import { FC } from "react";
import { Link } from "react-router-dom";
import { FooterList, FooterSelect } from '../staticData/data';
import { footerList, footerSelect } from "../types/footer"


const Footer:FC = () => {
  return (
    <div className="text-xs text-neutral-500 px-3 pb-6 pt-3">
      <div className="">
        <nav className="flex flex-wrap justify-center">     
          {
            FooterList.map((item: footerList) => (
              <div key={item.title} className='mx-2'>
                <Link to={item.link}>
                  <div>
                    {item.title}
                  </div>
                </Link>
              </div>
            ))
          }  
        </nav>
      </div>
      <div className="flex items-center justify-center gap-4 mt-5">
          <select className="border-none w-24 bg-transparent text-right">
            {
              FooterSelect.map((item: footerSelect) => (
                <option key={item.value} value={item.value}>
                  {item.title}
                </option>
              ))
            }
          </select>
        <div className="">© 2022 Instagram from Meta</div>
      </div>
    </div>
  )
}
export default Footer