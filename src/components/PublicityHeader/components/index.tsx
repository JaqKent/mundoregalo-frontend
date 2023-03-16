import styles from './styles.module.scss';

interface Props {
    image: string;
    text1: string;
    text2?: string;
    textInfo?: boolean;
}
function InsideInfo({ image, text1, text2, textInfo }: Props) {
    return (
        <div className={styles.iconsSection}>
            <img className={styles.icon} src={image} alt="" />
            <div className={styles.text}>
                <h2>{text1}</h2>
                {textInfo && <p>{text2}</p>}
            </div>
        </div>
    );
}

export default InsideInfo;

InsideInfo.defaultProps = {
    text2: undefined,
    textInfo: false,
};
