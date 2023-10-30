import Image from "next/image";

function Speakers() {
	const speakers = ["f1", "f2", "f3", "f4"];
	const speakerElements = speakers.map((speaker, ind) => {
		return (
			<div key={ind}>
				<Image
					src={`/images/speakers/${speaker}.svg`}
					width={350}
					height={300}
					alt={`Speaker ${ind}`}
				/>
			</div>
		);
	});
	return (
		<div className="flex flex-col gap-4 phone:gap-8 items-center phone:items-start">
			<div className="phone:text-5xl text-3xl font-work font-bold text-tedx">
				SPEAKERS
			</div>
			<div className="h-1 w-48 bg-tedx -mt-4" />
			<div className="phone:flex hidden gap-24">{speakerElements}</div>
			<div className="phone:hidden flex flex-col gap-8 mt-4 px-12">
				{speakerElements}
			</div>
		</div>
	);
}

export default Speakers;
