import { useState } from "react";
import Image from "next/image";
import styles from "./image.module.css"

const MyImage = ({ key, src, alt, width, height, objectFit }) => {
  const [viewImage, setViewImage] = useState(false)

  return (
    <div>

      <Image
        onClick={() => setViewImage(true)}
        key={key}
        src={src}
        alt={alt}
        width={width}
        height={height}
        objectFit={objectFit}
      />

      {viewImage && (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Image
            onClick={setViewImage(false)}
            key={key}
            alt={alt}
            src={src}
            layout='fill'
            objectFit='contain'
          />
        </div>
      )}
    </div>
  );
};

export default MyImage;