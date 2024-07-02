import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import logo from "../assets/S.png";


export default function Topmenu() {
    const [isNavOpen, setIsNavOpen] = useState(false);

     const toggleMenu = () =>{
        if(isNavOpen){
            setIsNavOpen(false)
        }
        else{
            setIsNavOpen(true)
        }
        console.log("toggleMenu")
     }

    return (
        <>
            <header className="relative flex flex-row items-center justify-between bg-black p-4 shadow-lg w-full">
                {/* logo div */}
                <div className="h-14 w-14 rounded-full ">
                    <img src={logo}  alt="logo-scienceinn-img" className="rounded-full"/>
                </div>
                <div className="flex flex-row items-center justify-center gap-5">
                    {/* search bar  */}
                    <div className="flex flex-row items-center justify-center">
                        < div className="rounded-s-3xl hidden sm:block border-2 border-white p-2">
                            <input
                                type="search"
                                id="mySearch"
                                name="q"
                                placeholder="Search the site…"
                                aria-label="Search through site content"
                                className="outline-none pl-2 rounded-s-3xl bg-black text-white"
                            />
                        </div>
                        <div className="bg-gray-800 border-2 border-white p-2 rounded-full sm:rounded-l-3xl">
                            <img width="24" height="24" src="https://img.icons8.com/ios/50/FFFFFF/search--v1.png" alt="search--v1" />
                        </div>
                    </div>
                    {/* nav menu div */}
                    <nav className={`hidden lg:flex flex flex-row gap-6 text-lg text-white font-medium`}>
                        <Link to="/">Home</Link>
                        <HashLink smooth to="/#about">About</HashLink>
                        <Link to="/blog">Blog</Link>
                        <Link to="/gallery">Gallery</Link>
                        <Link to="/missions">Missions</Link>
                        {/* <Link to="/podcasts">Podcasts</Link> */}
                        <HashLink smooth to="/#contact">Contact</HashLink>
                    </nav>
                    <div className="lg:hidden">
                        <button onClick={toggleMenu}>
                            <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/FFFFFF/menu.png" alt="menu" />
                        </button>
                    </div>
                </div>
            </header>
            {isNavOpen && (
               <nav className="lg:hidden z-10 top-30 absolute bg-black w-full opacity-[70%] flex flex-row items-center justify-center py-8 gap-2 text-sm text-white font-medium">
               <Link to="/">Home</Link>
               <HashLink smooth to="/#about">About</HashLink>
               <Link to="/blog">Blog</Link>
               <Link to="/gallery">Gallery</Link>
               <Link to="/missions">Missions</Link>
               {/* <Link to="/podcasts">Podcasts</Link> */}
               <HashLink smooth to="/#contact">Contact</HashLink>
           </nav>
            )}
        </>
    );
}