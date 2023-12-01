// TODO: Fix default imports on this file

import styles from './styles.module.scss';

interface Props {
  className?: string;
  disabled?: boolean;
  isSubmit?: boolean;
  label: string;
  onClick?: () => void;
  secondary?: boolean;
  small?: boolean;
}

function CustomButton({
  label,
  onClick,
  className,
  small,
  isSubmit,
  disabled,
  secondary,
}: Props) {
  return (
    <div className={className}>
      <button
        disabled={disabled}
        className={`${small ? styles.small : styles.big}  ${
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
