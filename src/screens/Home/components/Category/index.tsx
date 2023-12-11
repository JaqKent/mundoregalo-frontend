import { toBeImplemented } from '~utils/logicNotImplemented';

import styles from './styles.module.scss';

import { CATEGORY } from './constanst';

function CategorySection() {
  const handleCategory = toBeImplemented;
  return (
    <div className={styles.container}>
      <div className={styles.title}>Explora nuestras categorias</div>
      <div className={styles.category}>
        {CATEGORY.map((item) => (
          <button
            key={item.id}
            className={styles.button}
            onClick={handleCategory}
            type='button'
          >
            <img className={styles.img} src={item.image} alt={item.name} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategorySection;
