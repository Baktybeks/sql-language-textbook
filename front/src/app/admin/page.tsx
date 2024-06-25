'use client'

import React, {useEffect, useState} from 'react';
import styles from '../styles/admin/Admin.module.scss'
import Layout from "@/components/layout/Layout";

interface Direction {
    id: string;
    title: string;
    author: string;
    price: string;
    description: string;
    publication_year: string;
    image: string;
}


const PageAdmin = () => {
    const [books, setBooks] = useState<Direction[]>([]);
    const [training, setTraining] = useState<any[]>([]);
    const [video, setVideo] = useState<any[]>([]);
    const [newBooks, setNewBooks] = useState<Direction>({
        id: '',
        title: '',
        author: '',
        price: '',
        description: '',
        publication_year: '',
        image: '',
    });
    const [newTraining, setNewTraining] = useState<any>({
        id: '',
        title: '',
        description: '',
        image: '',
    });
    const [newVideo, setNewVideo] = useState<any>({
        id: '',
        title: '',
        url: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/api/book/');
            if (!response.ok) {
                throw new Error('Unable to fetch posts!');
            }
            const jsonData = await response.json();
            setBooks(jsonData);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/api/video/');
            if (!response.ok) {
                throw new Error('Unable to fetch posts!');
            }
            const jsonData = await response.json();
            setVideo(jsonData);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/api/training-block/');
            if (!response.ok) {
                throw new Error('Unable to fetch posts!');
            }
            const jsonData = await response.json();
            setTraining(jsonData);
        };

        fetchData();
    }, []);

    const handleChangeTraining = (e: any) => {
        const { name, value } = e.target;
        if (name === 'image') {
            setNewTraining((prevState: any) => ({
                ...prevState,
                [name]: e.target.files[0]
            }));
        } else {
            setNewTraining((prevState: any) => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        if (name === 'image') {
            setNewBooks(prevState => ({
                ...prevState,
                [name]: e.target.files[0]
            }));
        } else {
            setNewBooks(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleChangeVideo = (e: any) => {
        const {name, value} = e.target;
        setNewVideo((prevState: any) => ({
            ...prevState,
            [name]: value
        }));

    };

    const handleDelete = async (index: string) => {
        try {
            const response = await fetch(`http://localhost:5000/api/book/${index}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                setBooks((book: any) => book.filter((app: any) => app.id !== index));
                console.log('Объект удален')
            } else {
                console.error('Ошибка при удалении направления:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    };

    const handleDeleteVideo = async (index: string) => {
        try {
            const response = await fetch(`http://localhost:5000/api/video/${index}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                setVideo((book: any) => book.filter((app: any) => app.id !== index));
                console.log('Объект удален')
            } else {
                console.error('Ошибка при удалении направления:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    };

    const handleDeleteTraining = async (index: string) => {
        try {
            const response = await fetch(`http://localhost:5000/api/training-block/${index}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                setTraining((book: any) => book.filter((app: any) => app.id !== index));
                console.log('Объект удален')
            } else {
                console.error('Ошибка при удалении направления:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('id', newBooks.id);
            formData.append('title', newBooks.title);
            formData.append('author', newBooks.author);
            formData.append('price', newBooks.price);
            formData.append('description', newBooks.description);
            formData.append('publication_year', newBooks.publication_year);
            formData.append('image', newBooks.image);

            const response = await fetch('http://localhost:5000/api/book/', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const res = await fetch('http://localhost:5000/api/book/');
                if (!res.ok) {
                    throw new Error('Unable to fetch directions!');
                }
                const jsonData = await res.json();
                setBooks(jsonData);

                console.log('добавлен объект');
            } else {
                console.error('Ошибка при добавлении нового направления:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    };

    const handleSubmitTraining = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('id', newTraining.id);
            formData.append('title', newTraining.title);
            formData.append('description', newTraining.description);
            formData.append('image', newTraining.image);

            const response = await fetch('http://localhost:5000/api/training-block/', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const res = await fetch('http://localhost:5000/api/training-block/');
                if (!res.ok) {
                    throw new Error('Unable to fetch directions!');
                }
                const jsonData = await res.json();
                setTraining(jsonData);

                console.log('добавлен объект');
            } else {
                console.error('Ошибка при добавлении нового направления:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    };

    const handleSubmitVideo = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('id', newVideo.id);
            formData.append('title', newVideo.title);
            formData.append('url', newVideo.url);

            const response = await fetch('http://localhost:5000/api/video/', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const res = await fetch('http://localhost:5000/api/video/');
                if (!res.ok) {
                    throw new Error('Unable to fetch directions!');
                }
                const jsonData = await res.json();
                setTraining(jsonData);

                console.log('добавлен объект');
            } else {
                console.error('Ошибка при добавлении нового направления:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    };

    function getYoutubeVideoId(url: any) {
        const match = url.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})|youtu\.be\/([a-zA-Z0-9_-]{11})/);
        return match ? match[1] || match[2] : null;
    }

    return (
        <Layout Header='home' isFooterHidden>
            <div className={styles.wrapperAdmin}>
                <div className={styles.addBooks}>
                    <div>
                        <h2 className={styles.nameAdmin}>Добавить новую Книгу</h2>
                        <form className={styles.formAdmin} onSubmit={handleSubmit}>
                            <div className={styles.inputForm}>
                                <label>Название:</label>
                                <input className={styles.input} placeholder='Название' type="text" name="title"
                                       value={newBooks.title} onChange={handleChange}/>
                            </div>
                            <div className={styles.inputForm}>
                                <label>Автор:</label>
                                <input className={styles.input} placeholder='Автор' type="text" name="author"
                                       value={newBooks.author} onChange={handleChange}/>
                            </div><div className={styles.inputForm}>
                                <label>Цена:</label>
                                <input className={styles.input} placeholder='Цена' type="number" name="price"
                                       value={newBooks.price} onChange={handleChange}/>
                            </div><div className={styles.inputForm}>
                                <label>Текст:</label>
                                <input className={styles.input} placeholder='Текст' type="text" name="description"
                                       value={newBooks.description} onChange={handleChange}/>
                            </div><div className={styles.inputForm}>
                                <label>Год:</label>
                                <input className={styles.input} placeholder='Год' type="number" name="publication_year"
                                       value={newBooks.publication_year} onChange={handleChange}/>
                            </div>
                            <div className={styles.inputForm}>
                                <label>Картинка:</label>
                                <div className={styles.blockImages}>
                                    <input className={styles.imagesInput} type="file" name="image"
                                           accept='/image/*, .png, .jpg, .web'
                                           onChange={handleChange}/>
                                </div>
                            </div>

                            <button className={styles.summit} type="submit">Отправить</button>
                        </form>
                    </div>
                    <div>
                        <h2 className={styles.nameAdmin}>Добавить новую услугу</h2>
                        <form className={styles.formAdmin} onSubmit={handleSubmitTraining}>
                            <div className={styles.inputForm}>
                                <label>Название:</label>
                                <input className={styles.input} placeholder='Название' type="text" name="title"
                                       value={newTraining.title} onChange={handleChangeTraining}/>
                            </div>
                           <div className={styles.inputForm}>
                            <label>Текст:</label>
                            <input className={styles.input} placeholder='Текст' type="text" name="description"
                                   value={newTraining.description} onChange={handleChangeTraining}/>
                        </div>
                            <div className={styles.inputForm}>
                                <label>Картинка:</label>
                                <div className={styles.blockImages}>
                                    <input className={styles.imagesInput} type="file" name="image"
                                           accept='/image/*, .png, .jpg, .web'
                                           onChange={handleChangeTraining}/>
                                </div>
                            </div>

                            <button className={styles.summit} type="submit">Отправить</button>
                        </form>
                    </div>
                    <div>
                        <h2 className={styles.nameAdmin}>Добавить новое видео</h2>
                        <form className={styles.formAdmin} onSubmit={handleSubmitVideo}>
                            <div className={styles.inputForm}>
                                <label>Название:</label>
                                <input className={styles.input} placeholder='Название' type="text" name="title"
                                       value={newVideo.title} onChange={handleChangeVideo}/>
                            </div>
                            <div className={styles.inputForm}>
                                <label>URL:</label>
                                <input className={styles.input} placeholder='Текст' type="text" name="url"
                                       value={newVideo.url} onChange={handleChangeVideo}/>
                            </div>
                            <button className={styles.summit} type="submit">Отправить</button>
                        </form>
                    </div>
                </div>

                <h2 className={styles.nameBooksList}>Добавленные Книги</h2>
                <ul className={styles.blockList}>
                    {books.map((elem) => (
                            <li key={elem.id} className={styles.infoList}>
                                <div>
                                    <img src={`http://localhost:5000/${elem.image}`} alt='tower'
                                         className={styles.imgesBooks}/>
                                    <div className={styles.textBooks}>
                                        <div className={styles.renovationBook}>{elem.title}</div>
                                        <div className={styles.prise}>{elem.price} сом</div>
                                    </div>
                                </div>
                                <button className={styles.delete} onClick={() => handleDelete(elem.id)}>Удалить</button>
                            </li>
                        ))
                   }
                </ul>

                <h2 className={styles.nameBooksList}>Добавленные услуг</h2>
                <ul className={styles.blockList}>
                    {training.map((elem) => (
                        <li key={elem.id} className={styles.infoList}>
                            <div>
                                <img src={`http://localhost:5000/${elem.image}`} alt='tower'
                                     className={styles.imgesBooks}/>
                                <div className={styles.textBooks}>
                                    <div className={styles.renovationBook}>{elem.title}</div>
                                    <div className={styles.prise}>{elem.description}</div>
                                </div>
                            </div>
                            <button className={styles.delete} onClick={() => handleDeleteTraining(elem.id)}>Удалить</button>
                        </li>
                    ))
                    }
                </ul>

                <h2 className={styles.nameBooksList}>Добавленные Видео</h2>
                <ul className={styles.blockList}>
                    {video.map((elem) => (
                        <li key={elem.id} className={styles.infoList}>
                            <div>
                                <div className={styles.textBooks}>
                                    <iframe
                                        height="200"
                                        width="400"
                                        src={`https://www.youtube.com/embed/${getYoutubeVideoId(elem.url)}`}
                                        title="Vimeo video player"
                                        frameBorder="0"
                                        allowFullScreen
                                        loading="lazy"
                                    ></iframe>
                                    <div className={styles.textVideo}>{elem.title}</div>
                                </div>
                            </div>
                            <button className={styles.delete} onClick={() => handleDeleteVideo(elem.id)}>Удалить</button>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </Layout>
    );
};

export default PageAdmin;
