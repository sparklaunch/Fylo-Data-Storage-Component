import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway();

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="ko" className={raleway.className}>
			<body>{children}</body>
		</html>
	);
}
