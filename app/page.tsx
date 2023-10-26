import About from "./About";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "TEDxPESU2023",
};
 

export default function Home() {
	return (
		<div className="">
			<About />
		</div>
	);
}
