import React from 'react';
import './Appx/Appx.css';
import DashChild from './DashChild';
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gotoLogin: false
        }
        this.handleSubmit1 = this.handleSubmit1.bind(this);
    }
    componentDidMount() {
        this.setState({
            gotoLogin: false 
        });
    }
    handleSubmit1(){
        localStorage.removeItem("Email");
        this.setState({
            gotoLogin: true
        });
    }
    render(){
        return(
            <div>
                {this.state.gotoLogin ? <div><DashChild/></div> :
                    <div className="Appx2">
                        { localStorage.getItem("Email")!==null ? 
                        <div>
                        <h1>Welcome {localStorage.getItem("Email")},You are successfully logged in.</h1>
                        <button onClick={this.handleSubmit1}>LOGOUT</button>
                        </div> :<div><DashChild/></div>}
                    </div>}
            </div>
        );
    }
}
export default Dashboard;