import Image from "next/image";
import RightBannerAlt from "../public/Images/RightBannerAlt.png";
import About from "./About";
import Venue from "./Venue";
import AltVenue from "./AltVenue";
import Speakers from "./Speakers";

import type { Metadata } from "next";
import Tickets from "./Tickets";
import PastEvents from "./PastEvents";
import Intro from "./Intro";

export const metadata: Metadata = {
	title: "TEDxPESU2023",
};

export default function Home() {
	return (
		<>
			<Intro />
			<div className="flex-col flex xl:px-16  lg:px-20 phone:px-8 py-20 gap-20">
				<Speakers />
				<About />
			</div>
			<AltVenue />
			<Tickets />
			<PastEvents />
		</>
	);
}
