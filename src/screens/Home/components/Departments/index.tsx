import { useContext } from 'react';

import trending from '~assets/Mask group.png';
import { DepartmentContext } from '~context/DepartamentContext';
import { Department } from '~interfaces/interfaces';
import { toBeImplemented } from '~utils/logicNotImplemented';

import styles from './styles.module.scss';

function DepartmentSection() {
  const { departments, isLoading } = useContext(DepartmentContext);

  const handleSeeAllClick = () => {
    toBeImplemented();
  };

  const handleDepartmentClick = (dep: Department) => {
    toBeImplemented(dep);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>
          Compra por departamentos <img src={trending} alt='tendencias' />
        </p>
        <span
          className={styles.buttonTop}
          role='button'
          tabIndex={0}
          onClick={handleSeeAllClick}
          onKeyDown={handleSeeAllClick}
        >
          Ver Todos
        </span>
      </div>

      <div className={styles.category}>
        {!isLoading && departments.length > 0 ? (
          departments.map((dep) => (
            <div key={dep.id} className={styles.item}>
              <button
                className={styles.buttonCategory}
                onClick={() => handleDepartmentClick(dep)}
                type='button'
              >
                <img
                  className={styles.img}
                  src={dep.imageURL}
                  alt={dep.name}
                  loading='lazy'
                />
                {dep.name}
              </button>
            </div>
          ))
        ) : (
          <p className={styles.loadingText}>Cargando departamentos...</p>
        )}
      </div>

      <div
        className={styles.buttonBottom}
        role='button'
        tabIndex={0}
        onClick={handleSeeAllClick}
        onKeyDown={handleSeeAllClick}
      >
        Ver Todos
      </div>
    </div>
  );
}

export default DepartmentSection;
