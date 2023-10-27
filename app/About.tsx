function About() {
	return (
		<div className=" font-work flex flex-col phone:gap-16 gap-8">
			<div className="flex flex-col phone:gap-4 bg-slate-100 p-8">
				<p className="font-bold text-xl lg:text-3xl">What is a</p>
				<p className="font-bold text-3xl lg:text-5xl -mt-6">
					TEDx Event?
				</p>
				<div className="font-semibold text-slate-900 text-xs phone:text-sm lg:text-base">
					TEDx, a grassroots initiative, embodies the core principles
					of TED - technology, entertainment, and design which are the
					driving forces shaping our world today. These highly curated
					talks feature expert speakers who passionately share their
					innovative ideas with the audience. <br /> <br /> TEDx
					brings the spirit of TED to communities worldwide, fostering
					the discovery and dissemination of &quot;ideas worth
					spreading.&quot; Organized by dedicated individuals, these
					local TEDx events showcase the latest research and insights
					from their respective areas, sparking meaningful
					conversations within their communities. These events feature
					live speakers as well as recorded TED Talks, all organized
					independently under a free license granted by TED.
				</div>
			</div>
			<div className="flex flex-col phone:gap-4 bg-slate-100 p-8">
				<p className="font-bold text-xl lg:text-3xl">What is </p>
				<p className="font-bold text-3xl lg:text-5xl -mt-6">
					TEDx PESU 2023?
				</p>
				<div className="font-semibold text-slate-900 text-xs phone:text-sm lg:text-base">
					TEDx is an independently organized TED event which exposes
					you to a multitude of ideas. Keeping in mind the TED slogan
					of &apos;Ideas worth Spreading &apos;, TEDx PESU 2023 gives
					you an opportunity to witness live TEDx talks, this time
					centered around the theme of The Indian Tapestry Of Thought
					delivered by the greatest of Indian minds. <br /> <br />{" "}
					Join us on the{" "}
					<span className=" text-tedx font-bold">
						Fourth of November{" "}
					</span>
					for an evening filled with captivating talks on intriguing
					topics and much more!!
				</div>
			</div>
		</div>
	);
}

export default About;
