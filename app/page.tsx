import Image from "next/image";
import desktopBackground from "./assets/images/desktop-background.png";
import document from "./assets/images/document.svg";
import folder from "./assets/images/folder.svg";
import logo from "./assets/images/logo.svg";
import upload from "./assets/images/upload.svg";
import styles from "./Home.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<Image
				src={desktopBackground}
				alt=""
				className={styles.desktopBackground}
			/>
			<header className={styles.header}>
				<Image src={logo} alt="Fylo Logo" />
				<div className={styles.icons}>
					<div className={styles.iconWrapper}>
						<Image src={document} alt="Document Icon" />
					</div>
					<div className={styles.iconWrapper}>
						<Image src={folder} alt="Folder Icon" />
					</div>
					<div className={styles.iconWrapper}>
						<Image src={upload} alt="Upload Icon" />
					</div>
				</div>
			</header>
		</main>
	);
}
