import Image, { StaticImageData } from "next/image"
import HeroImg from "@/public/images/circles/hero.png"
import TagsImg from "@/public/images/circles/tags.png"
import MandalaImg from "@/public/images/circles/mandala.png"
import DescImg from "@/public/images/circles/desc.png"
import SpeakerHeaderImg from "@/public/images/circles/SpeakerHeader.png"
import SpeakerBGImg from "@/public/images/circles/SpeakerBG.png"

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

export default function Circles() {
    return (<div className="flex flex-col">
        <Hero />
        <Intro />
        <Desc />
        <Speakers />
    </div>)
}

function Hero() {
    return (<div className="relative text-center m-24 mt-12">
        <Image className="" src={HeroImg} alt="TEDxCircles"/>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-9xl">TEDxCircles</h1>
        <Image className="absolute scale-[50%] bottom-0 left-0 origin-bottom-left" src={TagsImg} alt="Tags"/>
    </div>)
}

function Intro() {
    return (<div className="relative place-content-center my-[10%]">
        <Image className="absolute top-0 right-0 translate-x-1/2 opacity-30 origin-center" src={MandalaImg} alt="Mandala"/>
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 text-5xl w-[50%] font-bold text-center">TEDxCircles is a community of small groups that engage in fruitful conversations encircling big ideas. It takes place virtually and helps communities stay connected, which is of the essence during the pandemic.</p>
        <Image className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 scale-75" src={MandalaImg} alt="Mandala"/>
    </div>)
}

function Desc() {
    return (<div className="m-24 mt-[25%] relative place-content-center">
        <Image src={DescImg} alt="Description"/>
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white font-extrabold text-5xl">TEDxCircles</p>
    </div>)
}

function Speakers() {
	const speakers = [
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
			title: "Professor(retd.) at centre for sustainable technologies, IISC,Bengaluru",
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
			title: "Director - Clean Energy Finance Program in Shakti Sustainable Energy Foundation",
			image: shubha,
		},
		{
			name: "Yashima Jain",
			title: "Technical Specialist - Technical Development, Green Business Certification Institute (GBCI)",
			image: yashima,
		},
	];
    return (<div className="m-12">
        <Image className="scale-75" src={SpeakerHeaderImg} alt="Speakers"/>
        <div className="grid grid-cols-3 gap-48 m-24">
            {speakers.map(speaker => <Speaker key={speaker.name} {...speaker}/>)}
        </div>
    </div>)
}

function Speaker({image, name, title}: {image: StaticImageData, name: string, title: string}) {
    return (<div className="relative">
        <Image className="relative top-0 left-0 z-0" src={SpeakerBGImg} alt="Speaker"/>
        <Image className="absolute top-0 left-0 z-10" src={image} alt={name}/>
        <div className="mt-2">
            <h1 className="text-4xl">{name}</h1>
            <p>{title}</p>
        </div>
    </div>)
}