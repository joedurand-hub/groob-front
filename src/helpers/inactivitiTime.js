import { ENDPOINT, UPDATE_PROFILE } from "./constants";
import usePut from "../hooks/usePut";

function inactivityTime(userId) {
    const { info, pending, sendUpdatedData } = usePut();
    const url = `${ENDPOINT}${UPDATE_PROFILE}/${userId}`;
    console.log(info)
    let time;
    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer;  // catches touchscreen presses as well      
    window.ontouchstart = resetTimer; // catches touchscreen swipes as well 
    window.onclick = resetTimer;      // catches touchpad clicks as well
    window.onkeypress = resetTimer;   
    window.addEventListener('scroll', resetTimer, true); // improved; see comments

    function logout() {
        console.log("No estas usando la app.")
        sendUpdatedData({
          endpoint: url,
          putData: {
            online: false,
          },
        });
    }

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(logout, 180000);  // time is in milliseconds
    }
}
idleLogout();