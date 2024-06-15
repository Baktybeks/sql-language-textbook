'use client'

import React, {useEffect, useState} from 'react'
import Link from "next/link";
import styles from './TheReceipts.module.scss'

interface Props {
    onActive: (value: boolean) => void;
    active: boolean;
    setIdAplication:(value: number) => void;
}

const TheReceipts = ({setIdAplication, active, onActive}: Props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/api/book/')
            if (!response.ok) {
                throw new Error('Unable to fetch posts!')
            }
            const jsonData = await response.json()
            setData(jsonData)
        }

        fetchData()
    }, [])


    const handleChangeActive = (id: number) => {
        setIdAplication(id)
        onActive(!active);
    }

    return (
        <>
            <div className={styles.blockSlider}>
                    <div className={styles.sliderReceipts}>
                            {data.map((elem: any) => (
                                <div key={elem.id} className={styles.blockAdd}>
                                    <div>
                                        <img src={`http://localhost:5000/${elem.image}`} alt='img' className={styles.imgesLocation}/>
                                    </div>
                                    <div className={styles.textLocation}>
                                        <h2 className={styles.nameBool}>Featured book</h2>
                                        <h3 className={styles.author}>{elem.author}</h3>
                                        <h2 className={styles.title}>{elem.title}</h2>
                                        <p className={styles.text}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat
                                            amet, libero ipsum enim pharetra hac.
                                        </p>
                                        <div className={styles.price}>$ {elem.price}</div>
                                        <button className={styles.textLink} onClick={() => handleChangeActive(elem.id)}>Подать заявку</button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
        </>
    )
}

export default TheReceipts