import React from 'react';
import './Appx/Appx.css';
import { withRouter } from "react-router-dom";
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit1 = this.handleSubmit1.bind(this);
    }
    componentDidMount() {
        if (!localStorage.getItem("Email")) {
            this.props.history.push("/");
        }
    }
    handleSubmit1() {
        localStorage.removeItem("Email");
        this.props.history.push("/");
    }
    render() {
        return (
            <div className="Appx2">
                <div>
                    <h1>Welcome {localStorage.getItem("Email")},You are successfully logged in.</h1>
                    <button onClick={this.handleSubmit1}>LOGOUT</button>
                </div>
            </div>
        );
    }
}
export default withRouter(Dashboard);