import React from 'react';
import './Appx/Appx.css';
import Api from "./../Services/Api";
import { withRouter } from "react-router-dom";
const url2 = "https://api.backendless.com/D061D8C7-065D-4B3D-8B16-AE75A02E6CA1/5F67E8A5-ED93-4164-B613-65C075D89BF0/users/login"
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput2: '',
            userInput3: '',
            showPassword: false,
            disableButton: false,
        }

        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
        this.registerPage = this.registerPage.bind(this);
    }
    handleChange2(event) {
        this.setState({
            userInput2: event.target.value
        });
    }
    handleChange3(event) {
        this.setState({
            userInput3: event.target.value
        });
    }
    handleSubmit() {
        if (this.state.userInput2 === '' && this.state.userInput3 === '') {
            alert("Please Enter Your Email Id and Password.");
        }

        else if (this.state.userInput2 === '') {
            alert("Please Enter Your Email Id.");
        }
        else if (this.state.userInput3 === '') {
            alert("Please Enter Your Password.");
        }

        else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.userInput2)) {
            this.setState({
                disableButton: true
            })
            Api.post(url2, {
                "login": this.state.userInput2,
                "password": this.state.userInput3
            }).then((res) => {
                console.log("resp3", res)
                if (res.objectId) {
                    alert("Login successful");
                    localStorage.setItem('Email', this.state.userInput2);
                    this.setState({
                        disableButton: false
                    })
                    this.props.history.push("/dashboard");
                }
                else {
                    alert("Login unsuccessful");
                    this.setState({
                        disableButton: false
                    })
                }
            }).catch((error) => {
                //console.log("error1",error.data.message);
                alert(error.data.message);
                this.setState({
                    userInput2: '',
                    userInput3: '',
                    disableButton: false
                })

            });

        }
        else {
            alert("You have entered an invalid email address!");
            this.setState({
                userInput2: ''
            })
        }
    }

    handleSubmit2() {
        if (this.state.showPassword === false) {
            this.setState({
                showPassword: true
            })
        }
        else {
            this.setState({
                showPassword: false
            })
        }
    }

    registerPage() {
        this.setState({
            userInput2: '',
            userInput3: ''
        });
        this.props.history.push("/registration");
    }

    render() {
        return (
            <div>
                <div className="Appx2">
                    <h1>Login to Your Account</h1>
                </div>
                <div className="Appx5">
                    <div className="Appx1">
                        <div className="Appx4">
                            <div className="Appx6">

                                <input
                                    className="inputStyle"
                                    onChange={this.handleChange2}
                                    value={this.state.userInput2}
                                    placeholder="Enter Your Email Id"
                                />

                                <input
                                    className="inputStyle"
                                    onChange={this.handleChange3}
                                    value={this.state.userInput3}
                                    type={this.state.showPassword ? "text" : "password"}
                                    placeholder="Enter Your Password"
                                />
                            </div>
                            <br />
                            <div className="Appx3">
                                <label className="checkPass"><input type="checkbox" onClick={this.handleSubmit2} /> <span> Show Password </span></label>
                                <button disabled={this.state.disableButton} onClick={this.handleSubmit}>LOGIN</button>
                            </div>
                            <div className="Appx2">
                                Don't have an account?
                                    <a href="#" onClick={this.registerPage}>please Register</a></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(Login);