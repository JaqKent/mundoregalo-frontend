/* eslint-disable react/no-unknown-property */
import styles from './styles.module.scss';

interface Props{
    className?:string;
    disabled?:boolean;
    isSubmit?:boolean;
    label:string;
    onClick?: () => void;
    secondary?:boolean;
    small?: boolean;

}

function CustomButton({
  label, onClick, className, small, isSubmit, disabled, secondary,
}: Props) {
  return (
    <div className={className}>
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
