
import styles from './ChapterConternt.module.scss'

interface Props {
    chapter: any;
}

const ChapterContent = ({ chapter }: Props) => {
    return (
        <div>
            <h2 className={styles.name}>{chapter.name}</h2>
            <p className={styles.text}>{chapter.description}</p>
        </div>
    );
};

export default ChapterContent