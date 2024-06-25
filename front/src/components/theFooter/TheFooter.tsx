import styles from './TheFooter.module.scss'
import LogoFooter from "@/components/theFooter/icons/logoFooter";

const TheFooter = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.contentYslug}>
				<div className={styles.yslygi}>
					<div className={styles.infoFooter}>
						<div><LogoFooter/></div>
						<p>г.Бишкек <br/> ул. Киевская 495</p>
					</div>
					<ul className={styles.tel}>
						<li className={styles.textTel}>Телефон</li>
						<li>+996 555 555 555</li>
						<li>+996 555 555 555</li>
						<li>+996 555 555 555</li>
					</ul>
				</div>
			</div>

		</footer>
	)
}

export { TheFooter }
