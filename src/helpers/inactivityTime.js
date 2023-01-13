import { ENDPOINT, UPDATE_PROFILE } from "./constants";
import usePut from "../hooks/usePut";

export const inactivityTime = (userId) => {
  const { info, pending, error, sendUpdatedData } = usePut();
  console.log("info", info)

  const url = `${ENDPOINT}${UPDATE_PROFILE}/${userId}`;
  const register = () => {
    var time;
    if (typeof window !== undefined) {
      window.onload = resetTimer;
      // Eventos del DOM
      window.onload = resetTimer;
      window.onmousemove = resetTimer; 
      window.onmousedown = resetTimer;
      window.ontouchstart = resetTimer;
      window.onclick = resetTimer;
      window.onscroll = resetTimer;
      window.onkeypress = resetTimer;

      function offline() {
        sendUpdatedData({
          endpoint: url,
          putData: {
            online: true,
          },
        });
      }

      function resetTimer() {
        clearTimeout(time);
        time = setTimeout(offline, 35000)
        sendUpdatedData({
          endpoint: url,
          putData: {
            online: false,
          },
        });
      }
    }
  }
  register()
}