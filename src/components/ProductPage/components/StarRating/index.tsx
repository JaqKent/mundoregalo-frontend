import { Rating } from 'react-simple-star-rating';

interface Props {
  initialValue: number;
  onClick?: () => void;
  readonly?: boolean;
  size: number;
}

function StarRating({ initialValue, readonly, onClick, size }: Props) {
  return (
    <Rating
      onClick={onClick}
      initialValue={initialValue}
      readonly={readonly}
      size={size}
    />
  );
}
StarRating.defaultProps = {
  onClick: undefined,
  readonly: false,
};

export default StarRating;
