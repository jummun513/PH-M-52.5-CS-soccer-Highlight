import { Link } from "react-router-dom";
import backVideo from "../../../media/banner.mp4";
import './HeaderSection.css';
import Navbar from "./Navbar/Navbar";


export default function Example() {

    return (
        <div className="bg-black">
            <video className='bannerVideo' src={backVideo} autoPlay loop muted />
            <Navbar></Navbar>
            <div className="banner-text z-10 max-w-2xl text-white">
                <div className="text-center px-2">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Award winning football highlight website
                    </h1>
                    <p className="mt-6 md:text-lg leading-8 text-slate-100">
                        Latest Highlights Football and Goals from major leagues of high Quality with a single click ,Huge community of football fans from around the world.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="/highlights"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-slate-100 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Let's Start
                        </Link>
                        <a href="#" className="text-sm font-semibold leading-6 text-white">
                            About Us <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}