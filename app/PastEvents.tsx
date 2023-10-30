import Image from "next/image";
import React from "react";

function Event({
	date,
	imageSrc,
	eventName,
	theme,
}: {
	date: string;
	imageSrc: string;
	eventName: string;
	theme: string;
}) {
	return (
		<div className="flex phone:w-fit w-full flex-col bg-slate-100 pb-2 items-center phone:items-normal">
			<p className="text-sm font-semibold bg-tedx text-white w-fit p-1 border-b-4 border-white self-start">{date}</p>
			<div className="phone:h-80">
				<img
					src={imageSrc}
					alt="img"
					className="h-full aspect-auto object-contain phone:bg-cover px-2 phone:px-0"
				/>
			</div>
			<p className="text-tedx font-bold text-2xl mx-2">{eventName}</p>
			<p className="-mt-2 font-semibold mx-2">{theme}</p>
		</div>
	);
}

function PastEvents() {
	return (
		<div className="flex flex-col gap-4 phone:gap-8 phone:pl-28 pb-20 phone:py-20 font-work items-center phone:items-start ">
			<div className="phone:text-5xl text-3xl font-work font-bold text-tedx">
				PAST EVENTS
			</div>
			<div className="h-1 w-48 bg-tedx -mt-4" />
			<div className="flex flex-wrap gap-10 justify-center phone:justify-normal">
				<Event
					date="OCTOBER 29, 2022"
					imageSrc="/images/events/salon2022.png"
					eventName="TEDXPESU 2022"
					theme="Salon"
				/>
				<Event
					date="APRIL 9, 2021"
					imageSrc="/images/events/salon2021.png"
					eventName="TEDXPESU 2021"
					theme="Salon"
				/>
				<Event
					date="APRIL 19, 2021"
					imageSrc="/images/events/circles.png"
					eventName="TEDXPESU 2021"
					theme="Circles"
				/>
				<Event
					date="OCTOBER 18, 2020"
					imageSrc="/images/events/countdown.png"
					eventName="TEDXPESU 2020"
					theme="Countdown"
				/>
			</div>
		</div>
	);
}

export default PastEvents;
