import React, {Component} from 'react';
import leftSide from '../assets/leftSide.jpg';
import gum from '../assets/gum.png';
import vector from '../assets/Vector 1.png';
import ggl from '../assets/google.png';
import NavigateWrapper from "./navigatewrapper";
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: {email: '', password: ''},
            errors: {},
        };
    }

    validate = () => {
        const errors = {};
        const {account} = this.state;

        if (account.email.length === 0)
            errors.email = "email is required";
        if (account.password.length === 0)
            errors.password = "password is required";

        return Object.keys(errors).length === 0 ? null : errors;
    }
    handleLogin = e => {

        e.preventDefault();
        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;
        console.log("submitted");
        this.props.navigate("/dashboard");
    };

    handleChange = ({currentTarget: input}) => {
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account});
    }

    render() {

        const {account, errors} = this.state;
        return (
            <div className="w-full  flex items-start">
                <div className="relative w-1/2  h-screen ">
                    <div className="absolute top-[25%] left-[45%]  w-1/3 ">
                        <img src={gum} alt="gum"/>
                        <h1 className="text-lg text-[#FFFFFF] font-sans my-4">Those people who develop the ability to
                            continuously acquire new and better forms of knowledge that they can apply to their work and
                            to their lives will be the movers and shakers in our society for the indefinite future </h1>
                        <h1 className="text-lg text-[#FFFFFF] font-sans my-4">Brian Tracy </h1>
                        <img src={vector} className="absolute right-0" alt="vector"/>
                    </div>
                    <img src={leftSide} className="w-full h-full" alt="leftside"/>
                </div>

                <div className="w-1/2 h-full flex flex-col items-center justify-center  ">
                    <form onSubmit={this.handleLogin}
                          className=" w-full  flex flex-col  mt-28 pt-6 pb-6  items-center">
                        <h1 className="text-xl text-[#000000] font-bold w-1/2  ">Login to your Account</h1>
                        <p className="text-[#8692A6]  w-1/2 ">with your registered Email Address</p>

                        <label className=" text-[#696F79] pb-2 pt-8 w-1/2">Email address*</label>
                        <input value={account.email}
                               onChange={this.handleChange}
                               name={"email"}
                               autoFocus
                               type={"email"}
                               className="rounded-full  shadow-md w-1/2 p-4 mb-5"
                               placeholder={"Enter email address"}
                        />
                        {errors.email && <div className="text-center text-[#FFFFFF] bg-red-300 w-1/2 p-2 rounded-full">{errors.email}</div>}
                        <label className="text-[#696F79] pb-2 pt-2 w-1/2">Enter password*</label>
                        <input value={account.password}
                               onChange={this.handleChange}
                               name={"password"}
                               type={"password"}
                               className=" rounded-full  shadow-md w-1/2 p-4 m-5"
                               placeholder={"password"}
                        />
                        {errors.password && <div className="text-center text-[#FFFFFF] bg-red-300 w-1/2 p-2 rounded-full">{errors.password}</div>}
                        <div className="flex w-1/2">
                            <input type={"checkbox"}
                                   className="pt-2 mt-5"/>
                            <p className="text-[#696F79] pb-2 pt-2 mt-5">remember password</p>
                        </div>
                        <button
                            type={"submit"}
                            value={"Login"}
                            className="bg-[#8692A6] text-[#FFFFFF] shadow-md rounded-full  w-1/2 p-3 mb-8 mt-5">Login
                        </button>

                        <div className="flex justify-evenly rounded-full  shadow-md w-1/2 p-3">
                            <img src={ggl} alt={"google img"}/>
                            <a href="https://www.google.com/" className=" font-medium ">Login with Google</a>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

export default NavigateWrapper(LoginForm);