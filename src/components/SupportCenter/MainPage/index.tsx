import { useNavigate } from 'react-router-dom';

import bannerSoporte from '~assets/Centro de soporte 2.png';

import styles from './styles.module.scss';

import { SECTIONS } from '../constants';

function SupportPage() {
  const navigate = useNavigate();

  const HandleRedirect = (url: string) => {
    navigate(url);
  };

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <img
          className={styles.imgBanner}
          src={bannerSoporte}
          alt='centro de soporte'
        />
      </div>
      <div className={styles.sectionLayout}>
        {SECTIONS.map((item) => (
          <button
            onClick={() => HandleRedirect(item.url)}
            type='button'
            key={item.id}
            className={styles.section}
          >
            <div className={styles.img}>
              <img className={styles.icon} src={item.img} alt={item.alt} />
            </div>
            <div className={styles.info}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SupportPage;
