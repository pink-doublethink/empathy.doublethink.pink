import { useState } from 'react'
import styles from "./cardSwiper.module.css"

type CardGroupStatus = "before" | "active" | "after" | "unknown" | "becoming_active_from_before" | "becoming_active_from_after";

interface CardGroupProps {
  index: number;
  status: CardGroupStatus;
}

interface CardSwiperProps {
  cardGroups: CardGroupProps[];
  onLoveClick: () => void;
  onHateClick: () => void;
}

const CardGroup: React.FC<CardGroupProps> = ({ index, status }) => {
    return (
      <div className={styles.card_group} data-index={index} data-status={status}>
        <div className={`${styles.little_card} ${styles.card}`}></div>
        <div className={`${styles.big_card} ${styles.card}`}></div>
        <div className={`${styles.little_card} ${styles.card}`}></div>
        <div className={`${styles.big_card} ${styles.card}`}></div>
        <div className={`${styles.little_card} ${styles.card}`}></div>
        <div className={`${styles.big_card} ${styles.card}`}></div>
        <div className={`${styles.little_card} ${styles.card}`}></div>
        <div className={`${styles.big_card} ${styles.card}`}></div>
      </div>
    );
};

const CardSwiper: React.FC<CardSwiperProps> = ({ cardGroups, onLoveClick, onHateClick }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
  
    const handleLoveClick = (): void => {
      const nextIndex = activeIndex + 1 <= cardGroups.length - 1 ? activeIndex + 1 : 0;
  
      const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`) as HTMLElement;
      const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`) as HTMLElement;
  
      currentGroup.dataset.status = "after";
      nextGroup.dataset.status = "becoming-active-from-before";
  
      setTimeout(() => {
        nextGroup.dataset.status = "active";
        setActiveIndex(nextIndex);
      });
      onLoveClick();
    };
  
    const handleHateClick = (): void => {
      const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : cardGroups.length - 1;
  
      const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`) as HTMLElement;
      const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`) as HTMLElement;
  
      currentGroup.dataset.status = "before";
      nextGroup.dataset.status = "becoming_active_from_after";
  
      setTimeout(() => {
        nextGroup.dataset.status = "active";
        setActiveIndex(nextIndex);
      });
      onHateClick();
    };
  
    return (
        <div className={styles.body}>
      <div className={styles.card_swiper}>
        <div className={styles.card_groups}>
          {cardGroups.map((group) => (
            <CardGroup key={group.index} index={group.index} status={group.status} />
          ))}
        </div>
        <div className={styles.card_swiper_buttons}>
          <button id="hate_button" className={styles.love_button} onClick={handleHateClick}>
            <i className={`${styles.fa_solid} ${styles.fa_x}`}></i>
          </button>
          <button id="love_button" className={styles.love_button} onClick={handleLoveClick}>
            <i className={`${styles.fa_solid} ${styles.fa_heart}`}></i>
          </button>
        </div>
      </div>
      </div>
    );
};
  
export default CardSwiper