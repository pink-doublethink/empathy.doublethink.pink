import { useRef, useEffect, useMemo } from "react";
import styles from "./slidePreview.module.css"
import cl from 'classnames'
import { Photos, ClassProp  } from "../types"

interface SlidePreviewProps extends ClassProp {
    activePhotoIndex: number;
    photos: Photos[];
}

const SlidePreview: React.FC<SlidePreviewProps> = ({
    activePhotoIndex,
    photos,
    className
}) =>  {
  if (!photos.length) return null;

  const previewContainer = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!previewContainer.current) return;

    previewContainer.current.style.transform = `translate3d(-${activePhotoIndex * 164}px, 0, 0)`;
  }, [ activePhotoIndex ])
    return (
        <div className={cl(className, styles.preview)}>
          {useMemo(() => (
            <ul 
              className={styles.preview__box}
              ref={previewContainer}
            >
              { photos.map((photos) => (
                <li
                  key={photos.id}
                  className={styles.preview__item}
                >
                  <img 
                    src={photos.src}
                    alt={photos.desc}
                    className={styles.preview__photo}
                  />
                </li>
              ))}
            </ul>
          ), [])}
          <div className={styles.preview__cover}>
              {activePhotoIndex + 1} / {photos.length}
          </div>
        </div>
    )
}
  
export default SlidePreview