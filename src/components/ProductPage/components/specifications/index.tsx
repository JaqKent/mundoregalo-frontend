import { useState } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Specifications } from '~interfaces/Products';

import styles from './styles.module.scss';

interface Props {
  description: string;
  specs: Specifications[];
}

function Specification({ description, specs }: Props) {
  const [viewMore, setViewMore] = useState(false);
  const [more, setMore] = useState(false);

  const handleView = () => {
    setViewMore((prevState) => !prevState);
  };

  const handleText = () => {
    setMore((prevState) => !prevState);
  };

  let output: Specifications[] = [];

  if (Array.isArray(specs)) {
    output = viewMore ? specs : specs.slice(0, 7);
  }

  return (
    <div className={styles.container}>
      <hr className={styles.borderLine} />
      <div className={styles.specifications}>
        <div className={styles.specsTitle}>
          <h3>Especificaciones</h3>
        </div>
        <div className={styles.specsContainer}>
          {output.map((item, index) => (
            <div className={styles.specsData} key={index}>
              <div className={styles.specsItem}>
                <p>{item.title}</p>
              </div>
              <div className={styles.specsText} key={index}>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
          {specs && specs.length === 0 && (
            <div className={styles.specsData}>
              <div className={styles.specsItem}>
                <p>Sin Especificaciones del producto</p>
              </div>
            </div>
          )}
          <div
            className={styles.button}
            onKeyDown={handleView}
            role='button'
            tabIndex={0}
            onClick={handleView}
          >
            {viewMore ? (
              <>
                <span>Ver Menos</span>
                <FontAwesomeIcon icon={faChevronUp} />
              </>
            ) : (
              <>
                <span>Ver Más</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </>
            )}
          </div>
        </div>
      </div>
      <hr className={styles.borderLine} />
      <div className={styles.description}>
        <div className={styles.specsTitle}>
          <h3>Descripción</h3>
        </div>
        <div>
          <p className={more ? styles.text : styles.hide}>
            {description || 'Sin descripción del producto'}
          </p>
        </div>
        <div
          onClick={handleText}
          onKeyDown={handleText}
          role='button'
          tabIndex={0}
          className={styles.button}
        >
          {more ? (
            <>
              <span>Ver Menos</span>
              <FontAwesomeIcon icon={faChevronUp} />
            </>
          ) : (
            <>
              <span>Ver Más</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </>
          )}
        </div>
      </div>
      <hr className={styles.borderLine} />
    </div>
  );
}

export default Specification;
