import { BsFillPlusCircleFill } from "react-icons/bs"; 

const OpenModalPost = ({openModalPost}) => {
  return (
    <> 
    <BsFillPlusCircleFill onClick={openModalPost} 
    style={{"height": "30px", "width": "30px", "color": "rgb(159, 29, 240)", "cursor": "pointer"}}/>
    </>
  )
}

export default OpenModalPost