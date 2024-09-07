import React, {Component} from "react";

import intr from '../../assets/Success Icon.png';
import {Link} from "react-router-dom";

class Popup extends Component {

    render() {
        return (
            <div className="  flex  justify-center ">
                <div className="h-1/2  rounded-2xl shadow-2xl p-20 mt-1 0">
                    <img src={intr} className="relative  left-[10%]"/>
                    <p>Are you sure you want to <p className="text-center">submit Quiz?</p></p>
                    <div className="flex justify-between pt-10">
                        <Link className="font-bold">No</Link>
                        <Link className="font-bold">Yes</Link>
                    </div>
                </div>
            </div>
        );
    };
}

export default Popup;