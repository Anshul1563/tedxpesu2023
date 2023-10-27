function Speakers() {
	const speakers = [1, 2, 3];
	const speakerElements = speakers.map((speaker, ind) => {
		return (
			<div
				key={ind}
				className=" aspect-[9/12] h-96 rounded-tr-xl rounded-bl-xl bg-no-repeat bg-cover bg-[url('../public/Images/CardBackground.svg')]"
			></div>
		);
	});
	return (
		<div className="flex flex-col gap-8">
			<div className="text-5xl font-work font-bold">SPEAKERS</div>
			<div className="flex gap-8 flex-wrap justify-between">
				{speakerElements}
			</div>
		</div>
	);
}

export default Speakers;
