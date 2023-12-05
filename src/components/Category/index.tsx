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
          <img
            className={styles.img}
            src={item.image}
            alt={item.name}
            key={item.id}
            onClick={handleCategory}
            onKeyDown={handleCategory}
          /> // FIXME:Envolve el img en un boton y a ese boton ponele el onClick... onKeyDown hace falta?
        ))}
      </div>
    </div>
  );
}

export default CategorySection;
