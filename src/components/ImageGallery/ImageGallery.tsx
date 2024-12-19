import React from "react";
import s from "./ImageGallery.module.css";

interface Image {
  id: string;
  urls: { small: string; regular: string };
  alt_description: string;
}


interface ImageGalleryProps {
  images: Image[];
  onSelectImage: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onSelectImage,
}) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map((image) => (
        <li
          key={image.id}
          className={s.ImageGalleryItem}
          onClick={() => onSelectImage(image)}
        >
          <img
            src={image.urls.small}
            alt={image.alt_description}
            className={s.Image}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
