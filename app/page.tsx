import Image from "next/image";
import desktopBackground from "./assets/images/desktop-background.png";
import document from "./assets/images/document.svg";
import folder from "./assets/images/folder.svg";
import logo from "./assets/images/logo.svg";
import mobileBackground from "./assets/images/mobile-background.png";
import upload from "./assets/images/upload.svg";
import styles from "./Home.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<article className={styles.article}>
				<Image
					src={desktopBackground}
					alt=""
					className={styles.desktopBackground}
				/>
				<Image
					src={mobileBackground}
					alt=""
					className={styles.mobileBackground}
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
				<section className={styles.section}>
					<div className={styles.sectionWrapper}>
						<p className={styles.usedText}>
							You&apos;ve used
							<span className={styles.capacity}>815 GB</span>of
							your storage
						</p>
						<div>
							<div className={styles.bar}>
								<div className={styles.outerBar} />
								<div className={styles.innerBar} />
								<div className={styles.indicator} />
								<div className={styles.numbers}>
									<p className={styles.number}>0 GB</p>
									<p className={styles.number}>1,000 GB</p>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.leftText}>
						<p className={styles.figureText}>
							<span className={styles.figure}>185</span>GB LEFT
						</p>
						<div className={styles.arrow} />
					</div>
				</section>
			</article>
		</main>
	);
}
