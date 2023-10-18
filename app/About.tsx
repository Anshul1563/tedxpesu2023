import React from "react";
import Image from "next/image";

import RightBanner from "../public/Images/right_banner.png";

function About() {
	return (
		<div className="flex h-screen">
			<div className="px-28 font-work flex flex-col gap-16 py-20">
				<div className="flex flex-col gap-4">
					<div>
						<p className="font-bold text-3xl">What is a</p>
						<p className="font-bold text-5xl">TEDx Event?</p>
					</div>
					<div className="font-semibold">
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
				<div className="flex flex-col gap-4">
					<div>
						<p className="font-bold text-3xl">What is </p>
						<p className="font-bold text-5xl">TEDx PESU 2023?</p>
					</div>
					<div className="font-semibold">
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
			<Image alt="Right_banner" src={RightBanner} />
		</div>
	);
}

export default About;
