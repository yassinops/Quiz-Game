import React, {Component} from "react";
import Searchbar from "./navbarComponent/searchbar";

import history from '../assets/Recthist.png'
import navigatewrapper from "./navigatewrapper";


class Instruction extends Component {
    constructor(props) {
        super(props);
    }

    handlenavigate = () => {
        this.props.navigate('/histquestions')
    }

    render() {
        return (
            <div>
                <Searchbar/>
                <div className=" absolute top-[16%] left-[20%] rounded-2xl shadow-2xl" style={{width:'70%',height:'80%'}}>
                    <div className="ml-8">
                        <h1 className="text-xl font-bold text-[#696F79]">History Quiz</h1>
                        <p className="text-[#696F79]">Read the following instructions</p>
                    </div>
                    <div className="flex  w-full">
                        <img src={history} className="w-1/3 " alt={"historyInst"}/>
                        <div className="pt-10 pl-20 w-full">
                            <div className="flex">
                                <h2 className="text-[#696F79] pb-5 font-semibold">Date:</h2>
                                <p  className="pl-20 text-[#696F79]">{new Date().toLocaleString()}</p>
                            </div>
                            <div className="flex">
                                <h2 className="text-[#696F79] pb-5 font-semibold">Time Limit:</h2>
                                <p className="pl-10 text-[#696F79]">30 Mins</p>
                            </div>
                            <div className="flex">
                                <h2 className="text-[#696F79] pb-5 font-semibold">Attempt:</h2>
                                <p className="pl-14 text-[#696F79]">Once</p>
                            </div>
                            <div className="flex">
                                <h2 className="text-[#696F79] pb-10 font-semibold">Points:</h2>
                                <p className="pl-16 text-[#696F79]">200 points</p>
                            </div>
                        </div>
                    </div>
                    <div className="ml-8">
                        <h2 className="font-semibold text-[#696F79] pb-4">Instruction</h2>
                        <p className=" text-[#696F79] pb-4 pr-4">This quiz consists of 5 multiple-choice questions. To be
                            successful with the quizzes, it’s
                            important to conversant with the topics. Keep the following in mind:
                        </p>
                        <p className=" text-[#696F79] pb-4 pr-8">Timing - You need to complete each of your attempts in one
                            sitting, as you are allotted 30
                            minutes to each attempt.
                            Answers - You may review your answer-choices and compare them to the correct answers after
                            your final attempt.
                        </p>
                        <p className=" text-[#696F79] pb-4">To start, click the "Start" button. When finished, click the
                            "Submit " button.</p>
                    </div>
                    <div className="flex justify-end mb-4 pr-16">
                        <button className="text-white bg-[#8692A6] rounded-2xl w-1/6 p-3"
                                onClick={this.handlenavigate}>Start
                        </button>
                    </div>
                </div>
            </div>
        );
    };
}

export default navigatewrapper(Instruction);