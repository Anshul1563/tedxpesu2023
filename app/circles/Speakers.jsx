import React from "react";
import Image from "next/image";
import apurba from "../../assets/images/circles/ApurbaMitra.jpg";
import ravindra from "../../assets/images/circles/DrNHRavindranath.jpeg";
import karthik from "../../assets/images/circles/KarthikS.jpg";
import maria from "../../assets/images/circles/MarianneManuel.jpg";
import pranab from "../../assets/images/circles/PranabMukhopadhyay.jpg";
import nandini from "../../assets/images/circles/ProfNandiniRajamani.jpg";
import puja from "../../assets/images/circles/PujaMitra.jpg";
import rina from "../../assets/images/circles/RinaSingh.jpg";
import shubha from "../../assets/images/circles/ShubhashisDey.jpg";
import yashima from "../../assets/images/circles/YashimaJain.png";

const Speakers = () => {
	const speakerDetails = [
		{
			name: "Apurba Mitra",
			title: "Head, Climate Program, WRI India",
			image: apurba,
		},
		{
			name: "Karthik S",
			title: "Chief naturalist at Jungle Lodges Resorts",
			image: karthik,
		},
		{
			name: "Marianne Manuel",
			title: "Assistant Director at Dakshin Foundation",
			image: maria,
		},
		{
			name: "Prof. Nandini Rajamani",
			title: "Assistant Professor at IISER Tirupati",
			image: nandini,
		},
		{
			name: "Dr. NH Ravindranath",
			title:
				"Professor(retd.) at centre for sustainable technologies, IISC,Bengaluru",
			image: ravindra,
		},
		{
			name: "Pranab Mukhopadhyay",
			title: "Professor of Economics, Goa University",
			image: pranab,
		},
		{
			name: "Puja Mitra",
			title: "Founder- Director of TerraConscious",
			image: puja,
		},
		{
			name: "Rina Singh",
			title: "Founder and Designer, Eka, Eka Core",
			image: rina,
		},
		{
			name: "Shubhashis Dey",
			title:
				"Director - Clean Energy Finance Program in Shakti Sustainable Energy Foundation",
			image: shubha,
		},
		{
			name: "Yashima Jain",
			title:
				"Technical Specialist - Technical Development, Green Business Certification Institute (GBCI)",
			image: yashima,
		},
	];

	const speakerElements = speakerDetails.map((speaker) => {
		return (
			<div
				key={speaker.name}
				className="flex w-full flex-col gap-8 items-center phone:w-fit"
			>
				<Image
					src={speaker.image}
					alt="Profile"
					className=" aspect-[17/18] w-full object-cover phone:w-[340px] rounded-full"
				/>
				<div className="flex w-min min-w-full gap-2 flex-col text-white">
					<p className=" text-center text-4xl font-bold">
						{speaker.name}
					</p>
					<p className="text-white text-lg font-medium text-center ">
						{speaker.title}
					</p>
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className="flex flex-col items-center gap-16 bg-black">
				<div className="text-7xl font-extrabold text-[#EB0028]">Speakers</div>
				<div className="grid w-full grid-cols-1 items-end justify-items-center gap-y-20 p-4 font-['Helvetica'] phone:p-0 md:grid-cols-2 xl:grid-cols-3 phone:pb-10">
					{speakerElements}
				</div>
			</div>
		</div>
	);
};

export default Speakers;
