


import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import elegbafeast from "/projects/elegba image.jpeg";
import youth from "/projects/youthempowerment.jpeg";
import ejiwaelegba from "/projects/ejiwaelegba.png";
import olokun from "/projects/olokun.png";
import seafood from "/projects/seafood.png";

const events = [
	{
		title: "EJIWA ELEGBA FESTIVAL",
		description:
			"A week-long celebration of Iru Kingdom's heritage and traditions — a cultural showcase for visitors and locals alike.",
		image: ejiwaelegba,
		action: "modal",
		instagram: "https://www.instagram.com/gbirin_leko_n_dan/reel/DPPIra8DAUz/",
	},
	{
		title: "ODUN ISESE FESTIVAL",
		description:
			"An annual traditional celebration honoring deities and preserving the Yoruba customs of the Oniru people.",
		image: elegbafeast,
		action: "route",
		payload: "/HERITAGEHUB",
	},
	{
		title: "OLOKUN FESTIVAL",
		description:
			"A ceremony to honour Olokun, guardian of the sea — reflecting Iru Kingdom’s maritime heritage.",
		image: olokun,
		action: "external",
		payload: "https://en.wikipedia.org/wiki/Olokun",
	},
	{
		title: "OSE",
		description:
			"A recurring nine-day gathering for worship, reconciliation and community discourse among the people of Iru.",
		image: elegbafeast,
		action: "contact",
		payload: "info@iru-kingdom.org",
	},
	{
		title: "INSTALLATION OF BAALES",
		description:
			"Ceremonies to appoint local chiefs and strengthen traditional governance across the kingdom.",
		image: elegbafeast,
		action: "download",
	},
	{
		title: "IWUYE",
		description:
			"Honouring individuals who have rendered exceptional service to Iru through installations and recognition events.",
		image: elegbafeast,
		action: "external",
		payload: "https://example.com/iwuye",
	},
	{
		title: "LAGOS SEAFOOD FESTIVAL",
		description:
			"A popular festival highlighting Iru’s link to the sea and the culinary traditions of Lagos — a draw for tourism and commerce.",
		image: seafood,
		video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
		action: "video",
	},
];

export function Event() {
	const sectionRef = useRef(null);
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedEvent, setSelectedEvent] = useState(null);
	const navigate = useNavigate();

	function handleLearnMore(ev) {
		switch (ev.action) {
			case "route":
				if (ev.payload) navigate(ev.payload);
				break;
			case "external":
				if (ev.payload) window.open(ev.payload, "_blank", "noopener,noreferrer");
				break;
			case "contact":
				// open mail client
				if (ev.payload) window.location.href = `mailto:${ev.payload}?subject=Inquiry about ${encodeURIComponent(ev.title)}`;
				break;
			case "download": {
				// download the image
				const a = document.createElement("a");
				a.href = ev.image;
				a.download = `${ev.title.replace(/\s+/g, "_")}.jpg`;
				document.body.appendChild(a);
				a.click();
				a.remove();
				break;
			}
			case "video":
			case "modal":
			default:
				setSelectedEvent(ev);
				setModalOpen(true);
				break;
		}
	}

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (sectionRef.current) {
				sectionRef.current.classList.add("opacity-100", "translate-y-0");
			}
		}, 120);
		return () => clearTimeout(timeout);
	}, []);

	useEffect(() => {
		// Load Instagram embed script when modal opens or updates
		if (modalOpen && window.instgrm) {
			window.instgrm.Embeds.process();
		}
	}, [modalOpen]);

	return (
		<>
			<section className="py-20 px-6 bg-gradient-to-b from-white via-primary/5 to-white">
				<div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-10 md:p-16">
					<div className="text-center">
						<h1 className="text-xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight ">
							Tourism & Culture
						</h1>
						<p className="mx-auto max-w-3xl text-sm md:text-lg text-gray-600 mb-6">
							The #LeGIT Vision places culture and tourism at the core of Iru’s
							sustainable growth. Below are the key festivals and ceremonies that
							showcase our heritage and bring our people together.
						</p>
						<div className="flex items-center justify-center gap-4">
							<a
								href="#events"
								className="inline-block bg-primary text-white font-medium rounded-lg px-4 py-1 shadow hover:shadow-lg transition"
								aria-label="See events"
							>
								View Events
							</a>
							<a
								href="/ContactSection"
								className=" inline-block border border-primary text-primary font-medium rounded-lg px-3 py-2 hover:bg-primary/5 transition"
								aria-label="Contact for partnerships"
							>
								Contact for Partnerships
							</a>
						</div>
					</div>
				</div>
			</section>

			<section
				id="events"
				ref={sectionRef}
				className="transition-all duration-700 ease-out opacity-0 translate-y-6 py-16 px-6 bg-gray-50"
			>
				<div className="max-w-6xl mx-auto">
					<h2 className="sr-only">Events and Festivals</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{events.map((ev, idx) => (
							<article
								key={ev.title}
								className="group bg-white rounded-2xl shadow hover:shadow-2xl transition transform hover:-translate-y-1 overflow-hidden"
								aria-labelledby={`event-${idx}-title`}
							>
								<div className="relative h-56 md:h-48">
									<img
										src={ev.image}
										alt={ev.title}
										className="w-full h-full object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent opacity-90" />
									<div className="absolute left-4 bottom-4">
										<h3
											id={`event-${idx}-title`}
											className="text-white text-lg md:text-xl font-semibold drop-shadow"
										>
											{ev.title}
										</h3>
									</div>
								</div>

								<div className="p-6 md:p-8">
									<p className="text-gray-700 mb-4 text-sm md:text-base">{ev.description}</p>
									<div className="flex items-center justify-between">
										<div className="text-sm text-gray-500">Iru Kingdom</div>
										<div className="flex items-center gap-3">
											{ev.video ? (
												<a
													href={ev.video}
													target="_blank"
													rel="noreferrer"
													className="text-primary font-medium text-sm hover:underline"
												>
													Watch video
												</a>
											) : (
												<span className="text-sm text-gray-400">—</span>
											)}
											<button
												onClick={() => handleLearnMore(ev)}
												className="inline-block text-sm bg-primary/5 text-primary px-2 py-1 rounded-md border border-primary/10 hover:bg-primary/10"
												aria-label={`Learn more about ${ev.title}`}
											>
												Learn more
											</button>
										</div>
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

		{/* Modal for details / video */}
		{modalOpen && selectedEvent && (
			<div
				className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
				onClick={() => {
					setModalOpen(false);
					setSelectedEvent(null);
				}}
			>
				<div
					className="bg-white rounded-lg max-w-3xl w-full mx-4 max-h-[90vh] flex flex-col relative"
					onClick={(e) => e.stopPropagation()}
				>
					<button
						onClick={() => {
							setModalOpen(false);
							setSelectedEvent(null);
						}}
						className="absolute right-4 top-4 text-gray-600 hover:text-gray-900 text-2xl font-bold z-10"
						aria-label="Close details"
					>
						✕
					</button>
					<div className="overflow-y-auto flex-1 p-6">
						<h3 className="text-2xl font-semibold text-primary mb-3 pr-8">{selectedEvent.title}</h3>
						<div className="flex flex-col md:flex-row gap-4">
							<img src={selectedEvent.image} alt="" className="w-full md:w-1/3 object-cover rounded" />
							<div className="text-gray-700">
								<p className="mb-4">{selectedEvent.description}</p>
								{selectedEvent.video ? (
									<div className="aspect-video w-full md:w-2/3">
										<iframe
											src={selectedEvent.video}
											title={selectedEvent.title}
											frameBorder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
											className="w-full h-full rounded"
										/>
									</div>
								) : (
									<div class='name' className="text-sm text-gray-600">
										<p>The Ejiwa Elegba festival is an opportunity for us to take a walk back in time and witness how the sons and daughters of Olofin celebrated their fore-bearers in time past, appreciating culture, tradition, and ancient knowledge.

It is symbolic because it is a time set aside annually to offer prayers for peace and prosperity for Iru kingdom and her indigenes, the state, and the nation at large.

As the custodian of our rich heritage, culture, and tradition, I hereby announce the forthcoming Ejiwa Elegba Iru festival 2026. 

Whilst I look forward to the drumming, dancing, Singing, and display of talents by the great people of Iru land, sons and daughters of Olofin (Home and Abroad), even as we embrace the #LeGIT future ahead of us as well as many more moments of celebration and unending victory, I acknowledge in advance the inconvenience this might cause on the traffic flow even as I implore all residents of the Oniru Estate and environs to please adhere to all traffic instructions given to them by the officials who will be on ground to ensure that traffic flows seamlessly.
</p>
<div className='carry'>
	<blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/gbirin_leko_n_dan/reel/DPPIra8DAUz/" data-instgrm-version="14">
		<a href="https://www.instagram.com/gbirin_leko_n_dan/reel/DPPIra8DAUz/" target="_blank" rel="noreferrer">
			View this post on Instagram
		</a>
	</blockquote>
</div>


									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		)}
		</>
	);
}
