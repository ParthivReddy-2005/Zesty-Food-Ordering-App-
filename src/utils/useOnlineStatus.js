import {useState,useEffect} from "react";
const useOnlineStatus = () => {
    const [onlineStatus,setonlineStatus] = useState(true);
    useEffect(() => {
        window.addEventListener("offline", () => {
            setonlineStatus(false);
        })
        window.addEventListener("omline" , () => {
            setonlineStatus(true);
        })
    },[])
    return onlineStatus;
}

export default useOnlineStatus; 