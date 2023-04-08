import { useState } from "react";
import styles from './gallery.module.css';
import { Photos } from "./types";
import GalleriaScreen from "./GalleriaScreen/GalleriaScreen";
import GalleryNavigating from "./GalleryNavigating/GalleryNavigating";
import SlidePreview from "./SlidePreview/SlidePreview";

interface GallaryProp {
    photos: Photos[];
}

const Gallery: React.FC<GallaryProp> = ({photos}) =>  { 
    if(!photos.length) {
        return null
    }
    const [activeSlide, setActiveSlide] = useState(0);
    const activePhoto = photos[activeSlide];
    const prevPhoto = photos[activeSlide - 1];
    const nextPhoto = photos[activeSlide + 1];
    return (
        <div className={styles.gallary}>
        <div className={styles.gallary__container}>
            <GalleriaScreen
                prevPhoto={prevPhoto}
                activePhoto={activePhoto}
                nextPhoto={nextPhoto}
                className={styles.gallary__screen}
            />
            <GalleryNavigating
                className={styles.gallary__navigating}
                disabledPrev={!prevPhoto}
                disabledNext={!nextPhoto}
                comeBack={() => {
                    setActiveSlide(activeSlide - 1)
                }}
                goNext={() => {
                    setActiveSlide(activeSlide + 1)
                }}
            />
        </div>
        <SlidePreview
            activePhotoIndex={activeSlide}
            photos={photos}
            className={styles.gallary__preview}
        />
      </div>
    )
}
  
export default Gallery