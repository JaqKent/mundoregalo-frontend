import styles from './styles.module.scss';

interface Props {
    image: string;
    text1: string;
    text2?: string;
}
function InsideInfo({ image, text1, text2 }: Props) {
    return (
        <div className={styles.iconsSection}>
            <img className={styles.icon} src={image} alt="" />
            <div className={styles.text}>
                <h2>{text1}</h2>
                <p>{text2}</p>
            </div>
        </div>
    );
}

export default InsideInfo;

InsideInfo.defaultProps = {
    text2: '',
};
