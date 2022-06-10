import styled from 'styled-components'

export const Label = styled.label`

    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  `

//   /* The slider */
//   .slider {
//     position: absolute;
//     cursor: pointer;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: #fff;
//     border: 1px solid #adb5bd;
//     transition: .4s;
//     border-radius: 30px;
//   }
  
//   .slider:before {
//     position: absolute;
//     content: "";
//     height: 1.4em;
//     width: 1.4em;
//     border-radius: 20px;
//     left: 0.27em;
//     bottom: 0.25em;
//     background-color: #adb5bd;
//     transition: .4s;
//   }
  
//   input:checked + .slider {
//     background-color: #007bff;
//     border: 1px solid #007bff;
//   }
  
//   input:focus + .slider {
//     box-shadow: 0 0 1px #007bff;
//   }
  
//   input:checked + .slider:before {
//     transform: translateX(1.4em);
//     background-color: #fff;
//   }