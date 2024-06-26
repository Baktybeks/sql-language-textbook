'use client'

import React, {useState} from 'react';
import styles from './list.module.scss';

interface Props {
    chapters: any
}

const ChaptersList = ({chapters}: Props) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [num, setNum] = useState<any>(1);


    const handleNextChapter = () => {
        setCurrentPage(currentPage + 1);
        setNum(currentPage + 1);
    };

    const handlePreviousChapter = () => {
        setCurrentPage(currentPage - 1);
        setNum(currentPage - 1);
    };

    return (
        <div>
            {chapters[currentPage].pages.map((page: any, pageIndex: any) => {
                    return (
                        <div key={pageIndex} className={styles.info}>
                            <h2 className={styles.name}>{page.description}</h2>
                            <p className={styles.text}>{page.content}</p>
                            <p className={styles.progress}>Достигнуто {page.progress}%</p>
                        </div>
                    )
                }
            )}
            <div className={styles.btn}>
                <button className={styles.btnPage} onClick={handlePreviousChapter} disabled={currentPage === 0}>Предыдущая глава</button>
                <span className={styles.num}>{num}</span>
                <button className={styles.btnPage} onClick={handleNextChapter} disabled={chapters.length - 1 === currentPage}>Следующая глава</button>
            </div>
        </div>
    );
};

export default ChaptersList;