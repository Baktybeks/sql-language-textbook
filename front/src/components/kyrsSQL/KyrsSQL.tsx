import React from 'react';
import Image from "next/image";
import img from './icons/Blog post Copy.png';
import styles from './KyrsSQL.module.scss';

const KyrsSQL = () => {

    return (
        <>
            <div className={styles.openWorld}>
                <div className={styles.info}>
                    <h1 className={styles.nameHeader}>Добро пожаловать на курс SQL</h1>
                    <p className={styles.text}>
                        Добро пожаловать на наш сайт, где вы можете скачать уникальную программу для изучения SQL.
                        Независимо от того, новичок ли вы в мире баз данных или опытный специалист, наша программа
                        поможет вам углубить знания и улучшить навыки работы с SQL.
                    </p>
                    <div>
                        <Image src={img} alt='img'/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default KyrsSQL;
