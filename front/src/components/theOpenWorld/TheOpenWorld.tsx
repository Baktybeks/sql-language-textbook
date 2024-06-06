import React from 'react';

import styles from './TheOpenWorld.module.scss';
import Link from "next/link";

const TheOpenWorld = () => {

    return (
        <>
            <div className={styles.openWorld}>
                <div className={styles.info}>
                    <h1 className={styles.nameHeader}>Изучайте SQL легко и эффективно с нашей программой!</h1>
                    <p className={styles.text}>
                        Добро пожаловать на наш сайт, где вы можете скачать уникальную программу для изучения SQL.
                        Независимо от того, новичок ли вы в мире баз данных или опытный специалист, наша программа
                        поможет вам углубить знания и улучшить навыки работы с SQL.
                    </p>
                    <Link className={styles.textLink} href={'#'}>Начать</Link>
                </div>
            </div>
        </>
    );
};

export default TheOpenWorld;
