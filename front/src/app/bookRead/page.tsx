'use client'

import React, {useState} from 'react';
import Layout from "@/components/layout/Layout";
import ChaptersList from "@/components/chaptersList/ChaptersList";
import ChapterContent from "@/components/chapterContent/ChapterContent";
import {bookData} from "@/components/BoolSQL/BookSQL";

import styles from '../styles/booksRead/booksRead.module.scss';

const PageBooksRead = () => {
    return (
        <Layout Header='home'>
            <div className={styles.blockBooks}>
                <ChapterContent chapter={bookData} />
                <ChaptersList chapters={bookData.pages} />
            </div>
        </Layout>
    );
};

export default PageBooksRead;