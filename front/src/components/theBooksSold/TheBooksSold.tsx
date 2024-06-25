'use client'

import React, {useEffect, useState} from 'react'
import styles from './TheBooksSold.module.scss'

const TheBooksSold = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/api/training-block/');
            if (!response.ok) {
                throw new Error('Unable to fetch posts!');
            }
            const jsonData = await response.json();
            setData(jsonData);
        };

        fetchData();
    }, []);

    return (
        <>
            <div className={styles.blockSlider}>
                <h2 className={styles.nameHeadr}>Подпишись на блоки SQL</h2>
                <ul className={styles.blockList}>
                    {data.slice(0, 4).map((elem: any) => (
                        <li
                            key={elem.id}
                            style={{ backgroundImage: `url(http://localhost:5000/${elem.image})` }}
                            className={styles.listItem}
                        >
                            <h2 className={styles.nameTitle}>{elem.title}</h2>
                            <p className={styles.text}>{elem.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default TheBooksSold;
