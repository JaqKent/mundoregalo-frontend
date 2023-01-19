/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomCard from '~components/CustomCard';
import { PRODUCTS } from './constants';
import styles from './styles.module.scss';

function OnSaleSection() {
    const [data, setData] = useState(PRODUCTS);
    const [viewMore, setViewMore] = useState(false);
    const navigate = useNavigate();

    const handleView = () => {
        setViewMore((prevState) => !prevState);
    };
    const slicedData = data.slice(0, viewMore ? 8 : 3);
    const handleOfert = () => {
        navigate('/');
    };

    return (
        <div className={styles.container}>
            <h2>Oferta Del Dia</h2>
            <div className={styles.product}>
                {slicedData.map((product) => (
                    <CustomCard
                        image={product.image}
                        key={product.id}
                        name={product.description}
                        price={product.price}
                    />
                ))}
            </div>
            <div
                className={styles.button}
                role="button"
                tabIndex={0}
                onClick={viewMore ? handleOfert : handleView}
            >
                {viewMore ? (
                    <span>Ir a Ofertas</span>
                ) : (
                    <span>
                        {' '}
                        Mostar Mas <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                )}
            </div>
        </div>
    );
}

export default OnSaleSection;
