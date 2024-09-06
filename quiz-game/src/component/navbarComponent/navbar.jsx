import React, {Component} from "react";
import dashboard from "../../assets/dash.png";
import support from "../../assets/supp.png";
import notification from "../../assets/not.png";
import logout from "../../assets/logout.png";
import navigatewrapper from "../navigatewrapper";


class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    handlelogOut=()=>{
        this.props.navigate('/login')
    }

    render() {
        return (
            <div className=" w-1/6  bg-[#FBF9F9] flex flex-col justify-between ">
                <div className="flex flex-col space-y-2 p-4  ">
                    <div className="flex bg-[#8692A6] rounded-full p-3 shadow-md">
                        <img src={dashboard}/>
                        <button className="font-bold pl-3">Dashboard</button>
                    </div>
                    <div className="flex rounded-full p-3 shadow-md">
                        <img src={support} className="text-[#696F79]"/>
                        <button className="text-[#696F79] font-bold pl-3">Support</button>
                    </div>
                    <div className="flex rounded-full p-3 shadow-md">
                        <img src={notification} className="text-[#696F79]"/>
                        <button className="text-[#696F79] font-bold pl-3">Notifications</button>
                    </div>
                </div>
                <div className="w-full flex flex-col mt-80 p-4 ">
                    <div className="flex rounded-full p-3 shadow-md bg-white">
                        <img src={logout}/>
                        <button className="text-[#696F79] font-bold pl-3" onClick={this.handlelogOut}>Log Out</button>
                    </div>
                </div>
            </div>

        );
    };
}

export default navigatewrapper (Navbar);