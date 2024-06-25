'use client'

import React, {useEffect, useState} from 'react';
import styles from './ApProfile.module.scss'
import {useSession} from "next-auth/react";


const ApProfile = () => {
    const [applications, setApplications] = useState<any>([]);
    const [totalSum, setTotalSum] = useState<number>(0);
    const session = useSession();


    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:5000/api/application/');
            if (!res.ok) {
                throw new Error('Unable to fetch posts!');
            }
            const applicationsData = await res.json();
            setApplications(applicationsData);
        };

        fetchData();
    }, []);

    const handleDelete = async (index: string) => {
        try {
            const response = await fetch(`http://localhost:5000/api/application/${index}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                setApplications((prevApplications: any) => prevApplications.filter((app: any) => app.id !== index));
                console.log('Объект удален');
            } else {
                console.error('Ошибка при удалении направления:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    };

    return (
        <div>
            {session.data?.user?.name &&
                <div className={styles.hello}>
                    <ul className={styles.user}>
                        <li>Здравствуйте {session.data?.user?.name}</li>
                    </ul>
                {
                applications
                    .filter((elem: any) => session.data?.user?.email === elem.email)
                    .map((elem: any, index: number) => {
                        return (
                            <ul key={elem.id} className={styles.list}>
                                {session.data?.user?.email === elem.email && (
                                    elem.processed === true ? (
                                        <li className={styles.ok}>Ваша заявка принята</li>
                                    ) : (
                                        <li className={styles.wait}>Ваша заявка в обработке</li>
                                    )
                                )}
                                <div className={styles.blockProdukt}>
                                    {/*<div className={styles.blockImg}>*/}
                                    {/*    <img src={`http://localhost:5000/${elem.cover_image}`} alt='img'*/}
                                    {/*         className={styles.imgesBooks}/>*/}
                                    {/*</div>*/}
                                    <div className={styles.nameProduct}>Название: {elem.Book.title}</div>
                                    <div className={styles.nameProduct}>Автор: {elem.Book.author}</div>
                                    <div className={styles.nameProduct}>Год: {elem.Book.publication_year}</div>
                                    <div className={styles.nameProduct}>Описание: {elem.Book.description}</div>
                                    <div className={styles.nameProduct}>Цена: {elem.Book.price}</div>
                                    <button className={styles.link} onClick={() => handleDelete(elem.id)}>Удалить
                                    </button>
                                </div>
                            </ul>
                        );
                    })
            }</div>
        }
    </div>
    );
};

export default ApProfile;
