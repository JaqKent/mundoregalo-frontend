import { CATEGORY } from './constanst';
import styles from './styles.module.scss';

function CategorySection() {
  const handleCategory = () => {
    console.log('Category');
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>Explora nuestras categorias</div>
      <div className={styles.category}>
        {CATEGORY.map((item) => (
          <img className={styles.img} src={item.image} alt={item.name} onClick={handleCategory} />

        ))}
      </div>

    </div>
  );
}

export default CategorySection;
