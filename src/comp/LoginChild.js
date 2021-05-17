import { useHistory } from "react-router-dom";
function LoginChild(props){
    let history = useHistory();
    return(
        <div>
            {props.gotoReg ?
                <div>{history.push("/registration")}</div> :
                 <div></div>}
            {props.Success ?
                <div>{history.push("/dashboard")}</div> :
                 <div></div>}
        </div>
    );
}
export default LoginChild;