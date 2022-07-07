import Menu from "../components/DropdownMenu/Menu";
import NavItem from "../components/NavItem/NavItem";
import { BiMessageRounded } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {


  return (
    <div>
      <Menu>
        <NavItem path="#" icon={<IoNotificationsOutline />} />
        <NavItem path="#" icon={<BiMessageRounded />} />

        <NavItem path="#" icon={<GiHamburgerMenu />} >
          <NavItem path="#" icon={<BiMessageRounded />} />
        </NavItem>
      </Menu>
    </div>
  );
};

export default Nav;
