
function Intro() {
	return (
		<>
			<video
				className="z-20 h-screen w-full bg-black phone:hidden"
				src="/videos/intro.mp4"
				autoPlay
				muted
				playsInline
				disableRemotePlayback
			></video>
			<video
				className="z-20 h-screen w-full bg-black hidden phone:block"
				src="/videos/intro_2023_laptop.mp4"
				autoPlay
				muted
				playsInline
				disableRemotePlayback
			></video>
		</>
	);
}

export default Intro;
