import { useState } from "react";
import Image from "next/image";
import styles from "./image.module.css"

const MyImage = ({ key, src, alt, width, height, objectFit, value }) => {
  const [viewImage, setViewImage] = useState(false)

  return (
    <>
      {viewImage && (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Image
            key={key}
            alt={alt}
            src={src}
            width={500}
            height={800}
          />
        </div>
      )}
    </>
  );
};

export default MyImage;