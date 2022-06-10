import React from "react";
import Link from "next/link";

const Anchor = React.forwardRef(
  ({ onClick, path, name, disabled }, ref) => {
    return (
      <Link href={path} passHref>
        <a
          rel="noreferrer noopener"
          onClick={onClick}
          ref={ref}>
          {name}
        </a>
      </Link>
    );
  }
);
export default Anchor;