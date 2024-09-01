import React, {Component} from "react";
import Searchbar from "./searchbar";

import history from '../assets/hist.jpg';
import medcin from '../assets/med.jpg';
import technology from '../assets/tech.jpg';
import agriculture from '../assets/agri.jpg';
import {Link} from "react-router-dom";

class Topics extends Component {


    render() {
        return (
            <div className="flex flex-col">
                <Searchbar/>
                <div
                    className="absolute top-[15%] left-[20%]  rounded-3xl shadow-2xl" style={{width: '75%'}}>
                    <div className="pl-12 pt-4">
                        <h1 className=" text-xl font-bold text-[#696F79]">Select Topics</h1>
                        <p className="text-[#696F79]">Featured Category</p>
                    </div>
                    <div className=" flex flex-wrap ml-8 " style={{width: '85%'}} >
                        <div className="w-full flex ">

                            <img  src={history} className="w-1/4 h-full " alt={""}/>
                            <Link to="/questions" className=" absolute top-[25%] left-[7%] text-white font-bold">History</Link>
                            <img src={medcin} className="w-1/4 h-full" alt={""}/>
                            <Link className=" absolute top-[25%] left-[28%] text-white font-bold">Medcine</Link>
                            <img src={history} className="w-1/4 h-full" alt={""}/>
                            <Link className="absolute top-[25%] left-[49%] text-white font-bold">History</Link>
                            <img src={medcin} className="w-1/4 h-full" alt={""}/>
                            <Link className="absolute top-[25%] left-[70%] text-white font-bold">Medcine</Link>
                        </div>

                        <div className=" w-full flex ">
                            <img src={technology} className="w-1/4  h-full" alt={""}/>
                            <Link className="absolute top-[52%] left-[7%] text-white font-bold">Technology</Link>
                            <img src={agriculture} className="w-1/4  h-full" alt={""}/>
                            <Link className="absolute top-[52%] left-[28%] text-white font-bold">Agriculture</Link>
                            <img src={technology} className="w-1/4  h-full" alt={""}/>
                            <Link className="absolute top-[52%] left-[49%] text-white font-bold">Technology</Link>
                            <img src={agriculture} className="w-1/4  h-full" alt={""}/>
                            <Link className="absolute top-[52%] left-[70%] text-white font-bold">Agriculture</Link>
                        </div>
                        <div className="flex">
                            <img src={technology} className="w-1/4  h-full" alt={""}/>
                            <Link className="absolute top-[79%] left-[7%] text-white font-bold">Technology</Link>
                            <img src={agriculture} className="w-1/4  h-full" alt={""}/>
                            <Link className="absolute top-[79%] left-[28%]  text-white font-bold">Agriculture</Link>
                            <img src={technology} className="w-1/4  h-full" alt={""}/>
                            <Link className="absolute top-[79%] left-[49%]  text-white font-bold">Technology</Link>
                            <img src={agriculture} className="w-1/4  h-full" alt={""}/>
                            <Link className="absolute top-[79%] left-[70%]  text-white font-bold">Agriculture</Link>
                        </div>
                    </div>
                    <div className=" min-w-full flex justify-end w-1/2  mb-8  ">
                        <button className="w-1/6
                          text-white p-2 font-bold bg-[#8692A6] rounded-3xl mr-40">More
                        </button>
                    </div>
                </div>
            </div>


        );
    };

}

export default Topics;
