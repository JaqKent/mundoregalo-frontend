import styles from './styles.module.scss';

export const customStyles = {
  large: {
    container: styles.containerLarge,
    img: styles.imgLarge,
    section: styles.smallSection,
    title: styles.titleSmall,
    description: styles.descriptionSmall,
    data: styles.dataSmall,
    rating: styles.smallRating,
  },
  small: {
    container: styles.containerSmall,
    img: styles.imgSmall,
    section: styles.largeSection,
    title: styles.titleLarge,
    description: styles.descriptionLarge,
    data: styles.dataLarge,
    rating: styles.largeRating,
  },
};
