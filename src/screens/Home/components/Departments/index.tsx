/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import trending from '~assets/Mask group.png';
import { DepartmentContext } from '~context/DepartamentContext';
import { useMediaQuery } from '~hooks/useBreakpoint';
import { Department } from '~interfaces/Products';

import styles from './styles.module.scss';

function DepartmentSection() {
  const { departments, isLoading } = useContext(DepartmentContext);
  const navigate = useNavigate();

  const isMobile = useMediaQuery('(max-width: 1024px)');
  const itemsPerPage = isMobile ? 3 : 8;

  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(departments.length / itemsPerPage);

  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(0);
    }
  }, [totalPages, itemsPerPage]);

  const visibleDepartments = useMemo(() => {
    const start = currentPage * itemsPerPage;
    return departments.slice(start, start + itemsPerPage);
  }, [departments, currentPage, itemsPerPage]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (diff > 50) nextPage();
    else if (diff < -50) prevPage();
  };

  const handleDepartmentClick = (dep: Department) => {
    navigate(`/productSearch/${encodeURIComponent(dep.name)}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>
          Compra por departamentos <img src={trending} alt='tendencias' />
        </p>
        <span className={styles.buttonTop} role='button' tabIndex={0}>
          Ver Todos
        </span>
      </div>

      <div
        onTouchStart={isMobile ? handleTouchStart : undefined}
        onTouchMove={isMobile ? handleTouchMove : undefined}
        onTouchEnd={isMobile ? handleTouchEnd : undefined}
      >
        {departments.length > 0 && (
          <div className={styles.pagination}>
            {totalPages > 1 && (
              <FontAwesomeIcon
                icon={faChevronLeft}
                className={styles.arrow}
                onClick={prevPage}
              />
            )}

            <div
              key={`page-${currentPage}`}
              className={classNames(styles.category, {
                [styles['three-columns']]: isMobile,
              })}
            >
              {!isLoading && visibleDepartments.length > 0 ? (
                visibleDepartments.map((dep) => (
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
                      />
                      {dep.name}
                    </button>
                  </div>
                ))
              ) : (
                <p className={styles.loadingText}>Cargando departamentos...</p>
              )}
            </div>

            {totalPages > 1 && (
              <FontAwesomeIcon
                icon={faChevronRight}
                className={styles.arrow}
                onClick={nextPage}
              />
            )}
          </div>
        )}
      </div>

      <div className={styles.buttonBottom} role='button' tabIndex={0}>
        Ver Todos
      </div>
    </div>
  );
}

export default DepartmentSection;
