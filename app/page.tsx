import Image from "next/image";
import RightBannerAlt from "../public/images/rightBannerAlt.png";
import About from "./About";
import Venue from "./Venue";
import AltVenue from "./AltVenue";
import Speakers from "./Speakers";

import type { Metadata } from "next";
import Tickets from "./Tickets";
import PastEvents from "./PastEvents";

export const metadata: Metadata = {
	title: "TEDxPESU2023",
};

export default function Home() {
	return (
		<>
			<div className="flex relative">
				<div className="flex-col flex xl:px-16  lg:px-20 phone:px-8 py-20 gap-20">
					<Speakers />
					<About />
				</div>
				<Image
					className="sticky top-0 h-screen w-fit right-0 hidden sm:block"
					alt="Right_banner"
					src={RightBannerAlt}
				/>
			</div>
			<AltVenue />
			<Tickets />
			<PastEvents />
		
		</>
	);
}
