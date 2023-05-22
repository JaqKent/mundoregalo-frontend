import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

interface Props {
    initialValue: number;
    onClick?: () => void;
    readonly?: boolean;
    size: number;
}

function StarRating({ initialValue, readonly, onClick, size }: Props) {
    const [ratingValue, setRatingValue] = useState(0);

    const handleRating = (rate: number) => {
        setRatingValue(rate);
    };
    return (
        <Rating
            onClick={onClick}
            initialValue={initialValue}
            readonly={readonly}
            size={size}
        />
    );
}
export default StarRating;
