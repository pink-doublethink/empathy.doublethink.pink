import styles from "./galleriaScreen.module.css"
import cl from 'classnames'
import { Photos, ClassProp  } from "../types"

interface GalleriaScreenProps extends ClassProp {
    prevPhoto?: Photos;
    activePhoto?: Photos;
    nextPhoto?: Photos;
}

const GalleriaScreen: React.FC<GalleriaScreenProps> = ({
    prevPhoto,
    activePhoto,
    nextPhoto,
    className
}) =>  {
    return (
        <div className={cl(className, styles.srceen)}>
            { prevPhoto && (
                <img 
                    src={prevPhoto.src}  
                    alt={prevPhoto?.desc} 
                    className={`${styles.srceen__btn}${styles.srceen__prev}`}
                />
            )}
            <img 
                src={activePhoto.src} 
                alt={activePhoto?.desc}  
                className={styles.srceen__img}
            />
            { nextPhoto && (
                <img 
                    src={nextPhoto.src}  
                    alt={nextPhoto?.desc} 
                    className={`${styles.srceen__btn}${styles.srceen__next}`}
                />
            )}
        </div>
    )
}
  
export default GalleriaScreen