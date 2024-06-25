'use client'

import React, { useEffect, useState } from 'react';
import styles from "@/app/styles/admin/Admin.module.scss";
import Layout from "@/components/layout/Layout";

interface Props {
    processed: boolean;
}

const PageApplications = () => {
    const [applications, setApplications] = useState<any[]>([]);

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
                setApplications((prevApplications) => prevApplications.filter((app) => app.id !== index));
                console.log('Объект удален');
            } else {
                console.error('Ошибка при удалении направления:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    };

    const handleSubmit = async (index: string) => {
        try {
            const updatedApplications = applications.map((app) => {
                if (app.id === index) {
                    return { ...app, processed: !app.processed };
                }
                return app;
            });
            setApplications(updatedApplications);

            const formData = new FormData();
            formData.append('processed', (!applications.find((app) => app.id === index).processed).toString());

            const response = await fetch(`http://localhost:5000/api/application/${index}`, {
                method: 'PUT',
                body: formData,
            });

            if (response.ok) {
                console.log('добавлен объект');
            } else {
                console.error('Ошибка при добавлении нового направления:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    };

    return (
        <Layout Header='home' isFooterHidden>
            <div className={styles.wrapperAdmin}>
                <h1 className={styles.nameAdmin}>Заявки пользователей</h1>
                <ul className={styles.blockList}>
                    {applications.map((elem) => (
                        <li key={elem.id} className={styles.infoList}>
                            <div className={styles.blockInfo}>
                                <h2 className={styles.name}>Имя: {elem.name}</h2>
                                <p className={styles.email}>Email: {elem.email}</p>
                                <div className={styles.nameCategories}>Название: {elem.Book.title}</div>
                                <div className={styles.nameProduct}>Автор: {elem.Book.author}</div>
                                <div className={styles.nameProduct}>Год: {elem.Book.publication_year}</div>
                                <div className={styles.nameProduct}>Описание: {elem.Book.description}</div>
                                <div className={styles.nameProduct}>Цена: {elem.Book.price}</div>
                                <div className={styles.checboxInfo}>
                                    <div className={styles.checboxBlock}>
                                        <input
                                            type='checkbox' // Изменение здесь
                                            name='processed'
                                            checked={elem.processed}
                                            onChange={() => handleSubmit(elem.id)} // Изменение здесь
                                            className={styles.checkbox}
                                        />
                                        <p className={styles.textInput}>
                                            Подтверждение заявки
                                        </p>
                                    </div>
                                </div>
                                <button className={styles.delete} onClick={() => handleDelete(elem.id)}>Удалить</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default PageApplications;
