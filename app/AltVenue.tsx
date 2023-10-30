function AltVenue() {
	return (
		<div className="h-screen bg-[url('/images/gjbc.jpeg')] bg-cover bg-no-repeat bg-center font-work relative text-white -mt-1">
			<div className="absolute h-full w-full bg-black opacity-80"></div>
			<div className="w-fit flex flex-col items-center px-4 phone:px-0 justify-center phone:h-auto h-full phone:block phone:absolute phone:bottom-40 phone:right-20">
				<p className="phone:text-4xl text-2xl text-start mb-4 font-bold opacity-90 phone:opacity-100">
					VENUE
				</p>
				<div className="phone:text-6xl text-3xl mb-4 font-bold border-2 phone:border-4 border-tedx p-4 opacity-90 phone:opacity-100">
					GJB Auditorium <br />{" "}
					<p className="phone:text-2xl text-xl opacity-80 font-semibold">
						PESU RR Campus, Bangalore
					</p>
				</div>
				<p className=" text-tedx font-bold text-xl opacity-90 phone:opacity-100">
					November 4, 2023
				</p>
			</div>
		</div>
	);
}

export default AltVenue;
