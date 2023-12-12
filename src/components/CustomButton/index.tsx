// FIXME:Fix default props on this file

import styles from './styles.module.scss';

interface Props {
  className?: string;
  disabled?: boolean;
  isSubmit?: boolean;
  label: string;
  onClick?: () => void;
  secondary?: boolean;
  small?: boolean;
  customStyle?: string;
}

function CustomButton({
  label,
  onClick,
  className,
  small,
  isSubmit,
  disabled,
  secondary,
  customStyle,
}: Props) {
  const buttonStyle =
    customStyle || (secondary ? styles.secondaryButton : styles.primaryButton);

  return (
    <div className={className}>
      <button
        disabled={disabled}
        className={`${small ? styles.small : styles.big} ${buttonStyle}`}
        type={isSubmit ? 'submit' : 'button'}
        onClick={isSubmit ? undefined : onClick}
      >
        {label}
      </button>
    </div>
  );
}

export default CustomButton;

CustomButton.defaultProps = {
  className: '',
  disabled: false,
  isSubmit: false,
  secondary: false,
  small: false,
  onClick: () => null,
  customStyle: '',
};

// TODO: estudiar mas para comprender mejor como usarlo https://www.youtube.com/watch?v=MSq_DCRxOxw&t=24s Open Close Principle!
