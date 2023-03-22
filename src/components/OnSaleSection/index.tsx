/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PRODUCTS } from './constants';

import styles from './styles.module.scss';

import sale from '~assets/etiqueta.svg';
import CustomCard from '~components/CustomCard';

function OnSaleSection() {
    const [data, setData] = useState(PRODUCTS);
    const [viewMore, setViewMore] = useState(false);
    const navigate = useNavigate();

    const handleView = () => {
        setViewMore((prevState) => !prevState);
    };
    const slicedData = data.slice(0, viewMore ? 8 : 4);
    const handleOfert = () => {
        navigate('/');
    };

    return (
        <div className={styles.container}>
            <p className={styles.onSale}>
                Ofertas
                <img
                    className={styles.icon}
                    src={sale}
                    alt="ofertas-icon"
                />{' '}
            </p>
            <div className={styles.product}>
                {slicedData.map((product) => (
                    <CustomCard
                        info
                        votes={product.votes}
                        stars={product.stars}
                        image={product.image}
                        key={product.id}
                        name={product.description}
                        price={product.price}
                    />
                ))}
            </div>
            <div
                className={styles.button}
                onKeyDown={viewMore ? handleOfert : handleView}
                role="button"
                tabIndex={0}
                onClick={viewMore ? handleOfert : handleView}
            >
                {viewMore ? <span>Ir a Ofertas</span> : <span>Ver Mas</span>}
            </div>
        </div>
    );
}

export default OnSaleSection;
