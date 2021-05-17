import { useHistory } from "react-router-dom";
function DashChild(){
    let history = useHistory();
    return(
        <div>{history.push("/")}</div>
    );
}
export default DashChild;