import { useHistory } from "react-router-dom";
function RegChild(){
    let history = useHistory();
    return(
        <div>{history.push("/")}</div>
    );
}
export default RegChild;
