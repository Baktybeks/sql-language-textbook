'use client'

import React, { useEffect, useState } from 'react';
import {useSession} from "next-auth/react";
import styles from './TheAddAplication.module.scss';


interface Props {
    name: string;
    email: string;
    BookId: number;
    processed: boolean;
}

interface PropsActive {
    onActive: (value: boolean) => void;
    active: boolean;
    idAplication: number;
}

const TheAddAplication = ({onActive, active, idAplication}: PropsActive) => {
    const session = useSession();
    const [newDirection, setNewDirection] = useState<Props>({
        name: '',
        email: '',
        BookId: idAplication,
        processed: false,
    });
    console.log(session,'session')
    useEffect(() => {
        if (session?.data?.user?.email) {
            setNewDirection(prevState => ({
                ...prevState,
                // @ts-ignore
                name: session?.data?.user.name ?? '',
                email: session?.data?.user.email ?? '',
            }));
        }
    }, [session]);

    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setNewDirection(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleChangeActive = () => {
        onActive(!active);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', newDirection.name);
            formData.append('email', newDirection.email);
            formData.append('BookId', idAplication.toString());
            formData.append('processed', newDirection.processed.toString());

            const response = await fetch('http://localhost:5000/api/application/', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('заявка отправлена');
            } else {
                console.error('Ошибка при добавлении нового направления:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        } finally {
            handleChangeActive()
        }
    };

    return (
        <div className={styles.componentApplication}>
                <form className={styles.headerInput} onSubmit={handleSubmit}>
                    <h2 className={styles.nameApplication}>Оформите покупку</h2>
                    <div className={styles.inputsAdds}>
                        <div className={styles.inputForm}>
                            <label className={styles.textInput}>ФИО:</label>
                            <input type='text' name='name' value={newDirection.name} className={styles.inputs}
                                   placeholder='Имя' onChange={handleChange}/>
                        </div>
                        <div className={styles.inputForm}>
                            <label className={styles.textInput}>Email:</label>
                            <input type='email' name='email' value={newDirection.email} className={styles.inputs}
                                   placeholder='email' onChange={handleChange}/>
                        </div>
                        <div className={styles.checboxInfo}>
                            <div>
                                <input type='checkbox' name='processed' value={'false'} required id='checkbox'
                                       onChange={handleChange} className={styles.checkbox}/>
                            </div>
                            <label className={styles.textInput} htmlFor='checkbox'>Подтвердить покупку</label>
                        </div>
                    </div>
                    {
                        session?.data ? <button className={styles.submit}>Отправить</button> :
                            <div className={styles.warning}>Для того что бы купить книгу вы должны
                                авторизоваться</div>
                    }
                </form>
            </div>
    )
};

export default TheAddAplication;
