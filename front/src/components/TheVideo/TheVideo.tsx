'use client'

import React, {useEffect, useState} from 'react';
import styles from './TheVideo.module.scss';

interface DataItem {
    option: string;
    date: string;
}

const TheVideo = () => {
    const [data, setData] = useState<DataItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/api/video/');
            if (!response.ok) {
                throw new Error('Unable to fetch posts!');
            }
            const jsonData = await response.json();
            setData(jsonData);
        };

        fetchData();
    }, []);

    function getYoutubeVideoId(url: any) {
        const match = url.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})|youtu\.be\/([a-zA-Z0-9_-]{11})/);
        return match ? match[1] || match[2] : null;
    }

    return (
        <>
            <h2 className={styles.nameHeadr}>Обучающие видео</h2>
            <div className={styles.blockVideo}>
                {data.map((elem: any) => (
                    <div>
                        <iframe
                            height="200"
                            width="400"
                            src={`https://www.youtube.com/embed/${getYoutubeVideoId(elem.url)}`}
                            title="Vimeo video player"
                            frameBorder="0"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                        <p className={styles.textVideo}>{elem.title}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TheVideo;