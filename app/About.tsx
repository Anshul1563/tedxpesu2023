import React from "react";
import Image from "next/image";

import RightBanner from "../public/Images/right_banner.png";

function About() {
	return (
		<div className="flex h-fit">
			<div className="xl:px-28 lg:px-20 phone:px-8 px-2 font-work flex flex-col phone:gap-16 gap-8 py-20">
				<div className="flex flex-col phone:gap-4">
					<p className="font-bold text-xl lg:text-3xl">What is a</p>
					<p className="font-bold text-3xl lg:text-5xl">
						TEDx Event?
					</p>
					<div className="font-semibold text-slate-800 text-xs phone:text-sm lg:text-base">
						TEDx, a grassroots initiative, embodies the core
						principles of TED - technology, entertainment, and
						design which are the driving forces shaping our world
						today. These highly curated talks feature expert
						speakers who passionately share their innovative ideas
						with the audience. TEDx brings the spirit of TED to
						communities worldwide, fostering the discovery and
						dissemination of &quot;ideas worth spreading.&quot;
						Organized by dedicated individuals, these local TEDx
						events showcase the latest research and insights from
						their respective areas, sparking meaningful
						conversations within their communities. These events
						feature live speakers as well as recorded TED Talks, all
						organized independently under a free license granted by
						TED.
					</div>
				</div>
				<div className="flex flex-col phone:gap-4">
					<p className="font-bold text-xl lg:text-3xl">What is </p>
					<p className="font-bold text-3xl lg:text-5xl">
						TEDx PESU 2023?
					</p>
					<div className="font-semibold text-slate-800 text-xs phone:text-sm lg:text-base">
						TEDx is an independently organized TED event which
						exposes you to a multitude of ideas. Keeping in mind the
						TED slogan of &apos;Ideas worth Spreading &apos;, TEDx
						PESU 2023 gives you an opportunity to witness live TEDx
						talks, this time centered around the theme of The Indian
						Tapestry Of Thought delivered by the greatest of Indian
						minds. <br /> Join us on the fourth of November for an
						evening filled with captivating talks on intriguing
						topics and much more!!
					</div>
				</div>
			</div>
			<div className="h-full w-[340px] shrink-0 hidden sm:block"></div>
			<Image
				className="fixed h-screen w-fit right-0 hidden sm:block"
				alt="Right_banner"
				src={RightBanner}
			/>
		</div>
	);
}

export default About;
