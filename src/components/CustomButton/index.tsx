/* eslint-disable react/button-has-type */
import styles from './styles.module.scss';

interface Props{
    className?:string;
    onClick?: () => void;
    label:string;
    small?: boolean;
    isSubmit?:boolean;
    disabled?:boolean;
    secondary?:boolean;
}

function CustomButton({
  label, onClick, className, small, isSubmit, disabled, secondary,
}: Props) {
  return (
    <div>
      <button
        disabled={disabled}
        className={`${small ? styles.small : styles.big} ${styles.primaryButton} ${
          secondary ? styles.secondaryButton : styles.primaryButton
        }`}
        type={isSubmit ? 'submit' : 'button'}
        onClick={isSubmit ? undefined : onClick}
      >
        {label}

      </button>
    </div>
  );
}

export default CustomButton;
