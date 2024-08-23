import React, {Component} from "react";
import Searchbar from "./searchbar";
import rectangle from '../assets/Rect.png'

import flag from '../assets/flag.png';
import clock from '../assets/clock.png';
import done from '../assets/done.png';

import back from '../assets/Badge.png';
import win from '../assets/win.png';
import luck from '../assets/luck.png';

import history from '../assets/hist.png';
import medcin from '../assets/med.png';
import technology from '../assets/texh.png';
import agriculture from '../assets/agri.png';

class Dashbord extends Component {
    render() {
        return (
            <div className="  flex flex-col  ">
                <Searchbar/>
                <div
                    className="flex flex-col absolute top-[15%] left-[20%]  rounded-2xl shadow-2xl">
                    <div className="flex">
                        <img src={rectangle} alt={"rectangle"} className="w-1/4"/>
                        <div className="pt-10">
                            <h1 className="text-xl font-bold text-[#696F79]">Yassin Faouar</h1>
                            <p className=" text-[#696F79]">Bonus booster 24lv</p>
                            <div className="w-full h-4 border-2 rounded-xl">
                                <div className=" h-full bg-[#C4C4C4] rounded-xl" style={{width:'50%'}}></div>
                            </div>
                            <div className="flex justify-between mt-6  mr-24 ">
                                <div className="flex p-3 ">
                                    <img src={flag} className="p-3"  alt={"flag"}/>
                                    <div className="p-2">
                                        <p className="font-bold text-[#696F79]">27</p>
                                        <p className=" text-[#696F79]">Quiz Passed</p>
                                    </div>
                                </div>
                                <div className=" flex p-3">
                                    <img src={clock} className="p-3" alt={"clock"}/>
                                    <div className="p-2">
                                        <p className="font-bold text-[#696F79]">27min</p>
                                        <p className="text-[#696F79]">Fastest Time</p>
                                    </div>
                                </div>
                                <div className="flex p-3">
                                    <img src={done} className="p-3" alt={"done"}/>
                                    <div className="p-2">
                                        <p className="font-bold  text-[#696F79]">200</p>
                                        <p className="text-[#696F79]">Correct Answers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-around">
                        <div className="w-1/3 ">
                        <h1 className="text-[#696F79] font-bold">Achievements</h1>
                            <div className="rounded-2xl shadow-md mb-5 pb-3">
                                <div className=" flex justify-between mt-2 p-3">
                                    <div>
                                        <img src={back} alt={"badge"} className=""/>
                                        <p className="text-center">ComeBack</p>
                                    </div>
                                    <div>
                                        <img src={win} alt={"badge"} className=""/>
                                        <p className="text-center">winner</p>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div>
                                        <img src={luck} alt={"badge"} className=""/>
                                        <p className="text-center">lucky</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" w-1/3 ">
                            <h1 className="text-[#696F79] font-bold">Featured Category</h1>
                            <div className=" w-full">
                                <div className=" flex ">
                                    <img src={history} className="w-1/2" style={{width:'60%'}} alt={"rectangle"}/>
                                    <img src={medcin} className="w-1/2" style={{width:'60%'}} alt={"rectangle"}/>
                                </div>
                                <div className=" flex">
                                    <img src={technology} className="w-1/2"  style={{width:'60%'}} alt={"rectangle"}/>
                                    <img src={agriculture} className="w-1/2" style={{width:'60%'}} alt={"rectangle"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashbord;