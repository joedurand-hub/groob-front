import { GoVerified } from "react-icons/go";

const Verified = ({fontSize, marginTop, marginLeft}) => {
  return (
    <>
      <GoVerified style={{ fontSize: `${fontSize}px`, color: "rgb(46, 135, 244)", marginTop: `${marginTop}px`, marginLeft: `${marginLeft}px` }} />
    </>
  );
};

export default Verified;
