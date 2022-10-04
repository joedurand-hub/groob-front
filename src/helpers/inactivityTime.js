import { ENDPOINT, UPDATE_PROFILE } from "./constants";
import usePut from "../hooks/usePut";

function inactivityTime(userId) {
  const { info, pending, sendUpdatedData } = usePut();
  const url = `${ENDPOINT}${UPDATE_PROFILE}/${userId}`;

  if (typeof window !== undefined) {
    var register = function () {
      var time;
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
            online: false,
          },
        });
      }

      function resetTimer() {
        clearTimeout(time);
        time = setTimeout(offline, 10000)
        sendUpdatedData({
          endpoint: url,
          putData: {
            online: true,
          },
        });
      }
    }
    register()
  }
}
export default inactivityTime;