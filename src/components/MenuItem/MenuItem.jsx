import styles from "./menuItem.module.css"
import Link from "next/link"
import Icon from "../Icon/Icon"

const MenuItem = ({ path, children }) => {


  return (
    <li >
        <Link href={path} passHref> 
            <a >
                <Icon>
                  {children}
                </Icon>
            </a>
        </Link>
    </li>
  )
}

export default MenuItem