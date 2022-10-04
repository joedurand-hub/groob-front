import { ENDPOINT, UPDATE_PROFILE } from "./constants";
import usePut from "../hooks/usePut";

// function inactivityTime(userId) {
//     const { info, pending, sendUpdatedData } = usePut();
//     const url = `${ENDPOINT}${UPDATE_PROFILE}/${userId}`;
//     console.log(info)
//     let time;
//     window.onload = resetTimer;
//     window.onmousemove = resetTimer;
//     window.onmousedown = resetTimer;  // catches touchscreen presses as well      
//     window.ontouchstart = resetTimer; // catches touchscreen swipes as well 
//     window.onclick = resetTimer;      // catches touchpad clicks as well
//     window.onkeypress = resetTimer;   
//     window.addEventListener('scroll', resetTimer, true); // improved; see comments
//   console.log(url)
//     function logout() {
//         console.log("No estas usando la app.")
//         sendUpdatedData({
//           endpoint: url,
//           putData: {
//             online: false,
//           },
//         });
//     }

//     function resetTimer() {
//       console.log("reset timer")
//         clearTimeout(time);
//         time = setTimeout(logout, 180000);  // time is in milliseconds
//     }
// }
// export default inactivityTime;

if(typeof window !== undefined) {

  var registrarInactividad = function () {
    var t;
  window.onload = reiniciarTiempo;
  // Eventos del DOM
  window.onmousemove = reiniciarTiempo;
  window.onkeypress = reiniciarTiempo;
  window.onload = reiniciarTiempo;
  window.onmousemove = reiniciarTiempo;
  window.onmousedown = reiniciarTiempo; // aplica para una pantalla touch
  window.ontouchstart = reiniciarTiempo;
  window.onclick = reiniciarTiempo;     // aplica para un clic del touchpad
  window.onscroll = reiniciarTiempo;    // navegando con flechas del teclado
  window.onkeypress = reiniciarTiempo;

  function tiempoExcedido() {
      alert("Estuvo inactivo durante mucho tiempo.")
  }

  function reiniciarTiempo() {
      clearTimeout(t);
      t = setTimeout(tiempoExcedido, 3000)
      // 1000 milisegundos = 1 segundo
  }
};

registrarInactividad();
}