import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/Instagram_logo.png';
import appStore from '../assets/app_store.png';
import googlePlay from '../assets/google_play.png';
import Footer from "../components/Footer";

import imgs, {staticImg } from '../assets/login/index';

const Login: FC = () => {
  const [hide, setHide] = useState<boolean>(true);
  const [indexImage, setIndexImage] = useState<number>(0);

  useEffect( () => {
    const interval = window.setInterval(() => {

      if (indexImage > 2) {
        setIndexImage(indexImage => 0);
      } else {
        setIndexImage(indexImage => indexImage + 1);
      }

    }, 3000);

    return () => window.clearInterval(interval);
  }, [indexImage]);

  return (
    <section className="flex flex-col sm:bg-gray-100 overflow-hidden">

      <main  className="flex items-start justify-center w-screen flex-grow min-h-[90vh]">

        <article className="h-full flex items-center justify-center gap-10">

          <div style={{backgroundImage: `url(${staticImg})`, backgroundSize: '468.32px 634.15px'}} 
              className="hidden h-[581px] w-[450px] relative lg:block"
          >
            <div className='absolute top-[24px] left-[159px]'>
      
              <img src={imgs[indexImage]} className="" alt="" />
    
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center justify-around m-4 sm:justify-start">
            <div className="bg-white sm:border-[0.1px] sm:border-gray-950 sm:py-4 sm:px-5">
              <div className="m-10 mb-6 ">
                <div className="text-center m-auto">
                  <img src={logo} alt="Instagram" className="block mx-auto" />
                </div>
              </div>
              <div className="">
                <form action="" className="text-xs flex flex-col gap-3">
                  <div className="border-inst">
                    <div className="relative mx-2">
                      <label htmlFor="" className="">
                        <span className="select-none absolute text-zinc-500">Phone number, username or email address</span>
                        <input type="text" className="h-6 w-full mt-3 text-sm outline-none text-zinc-900" />
                      </label>
                    </div>
                  </div>
                  <div className="border-inst flex items-center">
                    <div className="relative mx-2">
                      <label htmlFor="" className="">
                        <span className="select-none absolute text-zinc-500">Password</span>
                        <input type={hide ? 'password' :'text'} className="h-6 w-9/12 mt-3 text-sm outline-none text-zinc-900" />
                      </label>
                    </div>
                    <div
                      onClick={ () => setHide(hide => !hide)} 
                      className="text-black text-base font-bold w-12 hover:text-gray-500 cursor-pointer"
                    >
                      {
                        hide ? 'Show' :'Hide'
                      }
                    </div>
                  </div>
                  <div className="">
                    <button className="w-full py-1 bg-cyan-600 text-white font-bold text-lg rounded-md">
                      Log In
                    </button>
                  </div>
                  <div className="flex gap-2 justify-center items-center text-zinc-500 mt-5">
                      <div className="bg-zinc-500  opacity-50 h-[1px] w-full"></div>
                      <div className="text-base">OR</div>
                      <div className="bg-zinc-500  h-[1px] opacity-50 w-full"></div>
                  </div>
                </form>
              </div>
            </div>
            <div className="bg-white text-center sm:border-[0.1px] sm:border-gray-950 sm:py-4 sm:px-5">
              Don't have an account? 
              <Link 
                className="text-cyan-600 m-3 font-medium"
                to="/register">
                  Sign up
              </Link>
            </div>
            <div className="text-center">
              <h2 className="mb-8">Get the app.</h2>
              <div className="flex items-center justify-center gap-2">
                <div className="">
                  <Link to='/'>
                    <img className="w-36" src={appStore} alt="App Store" />
                  </Link>
                </div>
                <div className="">
                  <Link to='/'>
                    <img className="w-36" src={googlePlay} alt="Google Play" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>

      </main>
      <Footer/>
    </section>
  )
}

export default Login;