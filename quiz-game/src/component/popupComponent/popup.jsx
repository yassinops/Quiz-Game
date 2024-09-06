import React, {Component} from "react";

import intr from '../../assets/Success Icon.png';

class Popup extends Component {

    render() {
        return (
            <div className=" h-screen flex  justify-center ">
                <div className="h-1/2  rounded-2xl shadow-2xl p-20 mt-40 ">
                    <img src={intr} className="relative  left-[10%]"/>
                    <p>Are you sure you want to <p className="text-center">submit Quiz?</p></p>
                    <div className="flex justify-between pt-10">
                        <button className="font-bold">No</button>
                        <button className="font-bold">Yes</button>
                    </div>
                </div>

            </div>
        );
    };
}

export default Popup;