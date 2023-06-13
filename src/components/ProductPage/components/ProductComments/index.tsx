import { useState } from 'react';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StarRating from '../StarRating';

import { COMMENTS } from './constant';

import styles from './styles.module.scss';

function ProductComments() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <p>Opiniones de nuestros clientes</p>
                <div className={styles.stars}>
                    <StarRating initialValue={4} readonly size={19.95} />
                    <span className={styles.rating}>51.215</span>
                </div>
            </div>
            <div className={styles.commentbox}>
                {COMMENTS.map((item) => (
                    <div key={item.id}>
                        <div className={styles.user}>
                            <img
                                src={item.img}
                                alt={item.user}
                                className={styles.img}
                            />
                            <p className={styles.username}>{item.user}</p>
                        </div>
                        <div className={styles.commentText}>{item.comment}</div>
                        <div className={styles.like}>
                            <div className={styles.help}>
                                <p>
                                    A {item.help} personas le ayudo esta opinion
                                </p>
                                <FontAwesomeIcon
                                    icon={faThumbsUp}
                                    className={
                                        item.like
                                            ? styles.thumbsUpClicked
                                            : styles.thumbsUp
                                    }
                                />
                            </div>
                            <div className={styles.dislike}>
                                <FontAwesomeIcon
                                    icon={faThumbsDown}
                                    flip="horizontal"
                                    className={
                                        item.like
                                            ? styles.thumbsDown
                                            : styles.thumbsDownClicked
                                    }
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductComments;
