import ExternalHorizontal from "@/public/Images/tickets/External_horizontal.png"
import InternalHorizontal from "@/public/Images/tickets/Internal_horizontal.png"; 
import Image from "next/image";


function Tickets() {
	return (
		<div className="px-28 py-20 flex items-start justify-between gap-8">
			<div className="font-work">
				<div className="text-sm font-bold text-tedx">
					SECURE YOUR SEAT
				</div>
				<div className="text-4xl font-bold mb-4">
					Get Your Tickets Now!
				</div>
				<div className="text-sm">
					Embark on an electrifying journey filled with
					thought-provoking talks, inspiring performances, and
					engaging discussions at TEDxPESU 2023. Don&apos;t miss the
					opportunity to secure your tickets now and reserve your
					place for this upcoming event. Limited seating is available,
					so early booking is highly recommended to guarantee your
					spot.
				</div>
			</div>
			<div className=" flex justify-center items-start flex-col gap-8 shrink-0">
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
		</div>
	);
}

export default Tickets;
