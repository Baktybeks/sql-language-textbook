import React from 'react';
import styles from './File.module.scss';

const File = () => {
    return (
        <div className={styles.blockFile}>
            <h2 className={styles.nameHeader}>Скачайте бесплатную книгу по SQL и станьте экспертом в базах данных!</h2>
            <p className={styles.text}>
                Вы хотите овладеть навыками работы с базами данных и научиться писать мощные SQL-запросы? Тогда наша
                книга "Основы и Продвинутые Техники SQL" – именно то, что вам нужно! Эта книга подходит как для
                начинающих, так и для опытных пользователей, желающих улучшить свои знания и навыки.
            </p>
            <a
                href="/Book/SQL.pdf"
                download="SQL"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.textLink}
            >
                Скачать книгу
            </a>
        </div>
    );
};

export default File;