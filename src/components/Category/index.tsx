import { toBeImplemented } from 'utils/logicNotImplemented';

import styles from './styles.module.scss';

import { CATEGORY } from './constanst';

function CategorySection() {
  const handleCategory = toBeImplemented();
  return (
    <div className={styles.container}>
      <div className={styles.title}>Explora nuestras categorias</div>
      <div className={styles.category}>
        {CATEGORY.map((item) => (
          <img
            className={styles.img}
            src={item.image}
            alt={item.name}
            key={item.id}
            onClick={handleCategory}
            onKeyDown={handleCategory}
          /> // TODO: Assign the onClick to a button that wraps this image
        ))}
      </div>
    </div>
  );
}

export default CategorySection;
