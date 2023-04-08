import styles from "./galleryNavigating.module.css"
import cl from 'classnames'
import { ClassProp  } from "../types"

interface GalleryNavigatingProps extends ClassProp {
    disabledPrev?: boolean;
    disabledNext?: boolean;
    comeBack: () => void;
    goNext: () => void;
}

const GalleryNavigating: React.FC<GalleryNavigatingProps> = ({
    disabledPrev,
    disabledNext,
    comeBack,
    goNext,
    className
}) =>  {
    return (
        <div className={cl(className, styles.nav)}>
            <button
                disabled={disabledPrev}
                className={cl(
                    styles.nav__btn,
                    styles.nav__left
                )}
                onClick={comeBack}
            >
                Back
            </button>
            <button
                disabled={disabledNext}
                className={cl(
                    styles.nav__btn,
                    styles.nav__right
                )}
                onClick={goNext}
            >
                Next
            </button>
        </div>
    )
}
  
export default GalleryNavigating