import ExternalHorizontal from "@/public/images/tickets/External_horizontal.png";
import InternalHorizontal from "@/public/images/tickets/Internal_horizontal.png";

import Image from "next/image";

function Tickets() {
	return (
		<div className="phone:px-28 px-8 py-20 flex flex-col phone:flex-row items-start justify-between gap-8">
			<div className="font-work">
				<div className="text-sm font-bold text-tedx">
					SECURE YOUR SEAT
				</div>
				<div className="phone:text-4xl text-2xl font-bold mb-4">
					Get Your Tickets Now!
				</div>
				<div className="phone:text-sm text-xs">
					Embark on an electrifying journey filled with
					thought-provoking talks, inspiring performances, and
					engaging discussions at TEDxPESU 2023.
					<br className="phone:hidden " />{" "}
					<br className="phone:hidden " /> Don&apos;t miss the
					opportunity to secure your tickets now and reserve your
					place for this upcoming event. Limited seating is available,
					so early booking is highly recommended to guarantee your
					spot.
				</div>
			</div>
			<div className=" phone:flex justify-center items-start flex-col gap-8 shrink-0 hidden">
				<Image
					height={250}
					alt="internal_ticket"
					src={InternalHorizontal}
					className="p-3 bg-gray-200"
				/>
				<Image
					height={250}
					alt="external_ticket"
					src={ExternalHorizontal}
					className="p-3 bg-gray-200"
				/>
			</div>
			<div className="flex phone:hidden justify-center items-center w-full phone:w-auto phone:items-start flex-col gap-8 shrink-0">
				<div className="h-screen py-8">
					<img
						alt="internal_ticket"
						src="/images/tickets/Internal_vertical.png"
						className="p-3 bg-gray-200 h-full "
					/>
				</div>
				<div className="h-screen py-8">
					<img
						alt="internal_ticket"
						src="/images/tickets/External_vertical.png"
						className="p-3 bg-gray-200 h-full "
					/>
				</div>
			</div>
		</div>
	);
}

export default Tickets;
