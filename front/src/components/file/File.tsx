import React from 'react';
import styles from './File.module.scss';
import Link from "next/link";

const File = () => {
    return (
        <div className={styles.blockFile}>
            <h2 className={styles.nameHeader}>Скачайте бесплатную книгу по SQL и станьте экспертом в базах данных!</h2>
            <p className={styles.text}>
                Вы хотите овладеть навыками работы с базами данных и научиться писать мощные SQL-запросы? Тогда наша
                книга "Основы и Продвинутые Техники SQL" – именно то, что вам нужно! Эта книга подходит как для
                начинающих, так и для опытных пользователей, желающих улучшить свои знания и навыки.
            </p>
            <div className={styles.blockLink}>
            <a
                href="/Book/SQL.pdf"
                download="SQL"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.textLink}
            >
                Скачать книгу
            </a>
                <Link href={"/bookRead"} className={styles.textLink}>
                    Прочесть книгу
                </Link>
            </div>
        </div>
    );
};

export default File;