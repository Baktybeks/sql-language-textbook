'use client'

import React from 'react'
import Image from "next/image";
import img1 from './icons/img1.png';
import img2 from './icons/img2.png';
import img3 from './icons/img3.png';
import styles from './TheCriteria.module.scss'

const TheCriteria = () => {
    return (
        <>
            <div className={styles.openWorld}>
                <div className={styles.info}>
                    <h1 className={styles.nameHeader}>Почему стоит выбрать нашу программу?</h1>
                    <ul className={styles.list}>
                        <li className={styles.blockList}>
                            <Image src={img1} alt='img'/>
                            <h3 className={styles.num}>Интерактивное обучение</h3>
                            <p className={styles.strings}>Наша программа предлагает интерактивные уроки, которые
                                позволяют вам сразу применять полученные знания на практике.</p>
                        </li>
                        <li className={styles.blockList}>
                            <Image src={img2} alt='img'/>
                            <h3 className={styles.num}>Разнообразные учебные материалы:</h3>
                            <p className={styles.strings}>Мы предлагаем широкий спектр учебных материалов: видеоуроки,
                                текстовые инструкции,</p>
                        </li>
                        <li className={styles.blockList}>
                            <Image src={img3} alt='img'/>
                            <h3 className={styles.num}>Адаптивное обучение</h3>
                            <p className={styles.strings}>Программа подстраивается под ваш уровень знаний и темп
                                обучения, чтобы обеспечить максимально эффективное усвоение материала.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TheCriteria
