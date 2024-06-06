import React from 'react';
import Layout from "@/components/layout/Layout";
import KyrsSQL from "@/components/kyrsSQL/KyrsSQL";
import styles from "@/app/styles/sqlInfo/sqlInfo.module.scss";
import File from "@/components/file/File";

const PageSQL = () => {
    return (
        <Layout Header='home'>
            <>
                <section className={styles.wrapperOpenWorld}>
                    <KyrsSQL/>
                </section>
                <section className={styles.wrapperCriteria}>
                    <File/>
                </section>
            </>
        </Layout>
    );
};

export default PageSQL;