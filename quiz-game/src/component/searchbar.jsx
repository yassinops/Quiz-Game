import React, {Component} from "react";

import headimg from '../assets/head.png';
import Navbar from "./navbar";

class Searchbar extends Component {


    render() {
        return (
            <div className="w-full h-screen ">
                <div className=" w-full  bg-[#FBF9F9] flex justify-between">
                    <h1 className=" w-1/6 h-full text-center text-[#696F79] text-xl font-bold  pt-4 mb-8 mt-8 ">Quiz
                        Time</h1>
                    <input type={"search"} className=" w-1/5 h-full rounded-full p-3 shadow-md mb-8 mt-8"
                           placeholder={"search"}/>
                    <button className=" w-1/6 h-full bg-[#8692A6] text-white rounded-full p-3 mb-8 mt-8">Start Quiz
                    </button>
                    <div className="flex mb-8 mt-8">
                        <img src={headimg} className=" w-1/5"/>
                        <p className="text-[#696F79] pl-2 pt-1 ">yassin@gmail.com</p>
                    </div>
                </div>
                    <Navbar/>
            </div>
        );
    };
}

export default Searchbar;