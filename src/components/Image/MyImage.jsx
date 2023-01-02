import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const MyImage = ({ src, alt, key }) => {
  const imageRef = useRef();
  const [originalWidth, setOriginalWidth] = useState();
  const [originalHeight, setOriginalHeight] = useState();

  useEffect(() => {
    if (imageRef.current) {
      setOriginalWidth(imageRef.current.naturalWidth);
      setOriginalHeight(imageRef.current.naturalHeight);
    }
  }, [imageRef]);

  const width = originalWidth || 500;
  const height = originalHeight || 500;

  const handleTouchEnd = () => {
    if (imageRef.current) {
      imageRef.current.requestFullscreen();
    }
  };

  return (
    <Image
      ref={imageRef}
      key={key}
      src={src}
      alt={alt}
      width={width}
      height={height}
      objectFit="cover"
      onTouchEnd={handleTouchEnd}
    />
  );
};

export default MyImage;