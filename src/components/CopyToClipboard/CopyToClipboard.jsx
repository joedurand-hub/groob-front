// import styles from 'copyToClipboard.module.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {FaRegCopy} from "react-icons/fa"
// import { Toaster, toast } from "react-hot-toast"

const Copy = ({value}) => {
    
    return (
    <div>
        <CopyToClipboard text={value}>
            <FaRegCopy/>
        </CopyToClipboard>
    </div>
  )
}

export default Copy