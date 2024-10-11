import trending from '~assets/Mask group.png';
import { toBeImplemented } from '~utils/logicNotImplemented';

import styles from './styles.module.scss';

import { CATEGORY } from './constanst';

function CategorySection() {
  const handleCategory = toBeImplemented;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>
          Compra por categorias <img src={trending} alt='tendencias' />
        </p>
        <span
          className={styles.buttonTop}
          onKeyDown={handleCategory}
          role='button'
          tabIndex={0}
          onClick={handleCategory}
        >
          Ver Todas
        </span>
      </div>
      <div className={styles.category}>
        {CATEGORY.map((item) => (
          <div className={styles.item}>
            <button
              key={item.id}
              className={styles.buttonCategory}
              onClick={handleCategory}
              type='button'
            >
              <img className={styles.img} src={item.image} alt={item.name} />
              {item.name}
            </button>
          </div>
        ))}
      </div>
      <div
        className={styles.buttonBottom}
        onKeyDown={handleCategory}
        role='button'
        tabIndex={0}
        onClick={handleCategory}
      >
        Ver Todas
      </div>
    </div>
  );
}

export default CategorySection;
