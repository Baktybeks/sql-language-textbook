'use client';

import React, { useEffect, useState } from 'react';
import TheOpenWorld from '@/components/theOpenWorld/TheOpenWorld';
import TheCriteria from '@/components/theCriteria/TheCriteria';
import TheReceipts from '@/components/theReceipts/TheReceipts';
import TheBooksSold from '@/components/theBooksSold/TheBooksSold';
import TheAddAplication from "@/components/theAddAplication/TheAddAplication";

import styles from './styles/Home/Home.module.scss';
import classNames from 'classnames';
import Layout from "@/components/layout/Layout";

interface FormData {
	option?: string;
	date?: Date;
}

interface DataItem {
	option: string;
	date: string;
}

const Home: React.FC = () => {
	const [active, setActive] = useState<boolean>(false);
	const [selectedOption, setSelectedOption] = useState<string>('');
	const [selectedDate, setSelectedDate] = useState<Date>(new Date());
	const [formData, setFormData] = useState<FormData>({});
	const [data, setData] = useState<DataItem[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('http://localhost:5000/api/rent');
			if (!response.ok) {
				throw new Error('Unable to fetch posts!');
			}
			const jsonData = await response.json();
			setData(jsonData);
		};

		fetchData();
	}, []);

	return (
		<Layout Header='home'>
			<div
				className={classNames(styles.shadow, { [styles.shadowNot]: !active })}
				onClick={() => setActive(!active)}
			></div>
			<div className={classNames(styles.application, { [styles.applicationNot]: !active })}>
				<TheAddAplication onActive={setActive} active={active} />
			</div>
			{!formData ? (
				<div>
					<p>Form data matches an item in the fetched data!</p>
				</div>
			) : (
				<>
					<section className={styles.wrapperOpenWorld}>
						<TheOpenWorld/>
					</section>
					<section className={styles.wrapperCriteria}>
						<TheCriteria />
					</section>
					<section className={styles.wrapperReceipts}>
						<TheReceipts />
					</section>
					<section className={styles.wrapperBooksSold}>
						<TheBooksSold />
					</section>
				</>
			)}
		</Layout>
	);
};

export default Home;
