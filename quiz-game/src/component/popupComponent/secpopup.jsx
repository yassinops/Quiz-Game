import React, {Component} from "react";

import badge from '../../assets/Badge.png';

class Secpopup extends Component {

    render() {
        return (
            <div className="flex  justify-center ">
                <div className="fixed inset-0 opacity-50 z-40"></div>
                <div className="h-1/2  rounded-2xl shadow-2xl p-20 mt-1 0  inset-0 z-50">
                    <img src={badge} className="relative top-[5%] left-[30%]"/>
                    <h1 className="font-bold pt-10">Congratulations you have passed</h1>
                    <p className="text-center pt-4">you scored 80%</p>
                    <div className="flex justify-center pt-10">
                        <button  className="font-bold text-center" onClick={this.props.ToPopup}>Review Quiz</button>
                    </div>
                </div>
            </div>
        );
    };
}

export default Secpopup;