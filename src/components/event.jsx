import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import elegbafeast from "/projects/elegba image.jpeg";
import youth from "/projects/youthempowerment.jpeg";
import ejiwaelegba from "/projects/ejiwaelegba.png";
import olokun from "/projects/olokun.png";
import seafood from "/projects/seafood.png";
import { Footer } from "./Footer";
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
		description: `Ìṣẹ̀ṣe Day (Odun Ìṣẹ̀ṣe) is a family-centred festival that honours the creation traditions and spiritual heritage of our people. This day blends thanksgiving and cleansing rites with lively drumming, dance, masquerade and storytelling.`,
		details: `Ìṣẹ̀ṣe Day (Isese Day) is an annual cultural and religious celebration observed by practitioners of the Yoruba traditional religion, primarily in southwestern Nigeria. The day honours Yoruba deities (Orishas) and ancestors while celebrating the community's living cultural heritage.

History: The term Ìṣẹ̀ṣe means "tradition" in Yoruba. The day was formally recognised to support preservation of indigenous customs; Osun State declared it a public holiday in 2014, and other states including Lagos, Ogun and Oyo have since observed August 20 as Isese Day.

Key details: Date — August 20 (commonly observed); Location — notable celebrations are held at Oniru Palace, hosted by the Oniru of Iru Kingdom; Significance — a time for thanksgiving, cultural education and community renewal.

What to expect: communal offerings and thanksgiving rites, traditional drumming and dance, masquerade processions, storytelling, reconciliation and blessing ceremonies, cultural displays, and local food markets. Activities are family-friendly and welcoming to visitors who wish to learn about Yoruba traditions.

More information: For event-specific schedules and official announcements, check the Oniru Palace and Lagos State Government social channels. Please note festival activities may affect traffic; follow guidance from event officials to ensure safety and smooth movement during celebrations. `,
		image: elegbafeast,
		action: "modal",
	},
	{
		title: "OLOKUN FESTIVAL",
		description: "A ceremony to honour Olokun, guardian of the sea — reflecting Iru Kingdom’s maritime heritage.",
		details: `The Olokun Festival celebrates Olokun, the powerful Orisha associated with the sea, wealth and the deep waters in Yoruba belief. In Iru and other coastal communities, the festival honours the sea’s central role in local life — sustaining fishing livelihoods, trade and spiritual practice.

Ceremony & significance: Rituals often include offerings to the water, purification rites, communal prayers for prosperity and safe passage, traditional drumming and dance, and processions to sacred shores. The festival recognises the interdependence between the community and the sea and offers thanks, protection and renewed commitment to stewardship of marine resources.

What to expect: visits to shrines and sacred coastal sites, maritime blessings, cultural performances, fishermen’s parades, displays of arts and crafts inspired by the sea, and local seafood and refreshments. The event is family-friendly but participants should observe safety near water and follow organizers’ guidance.

More information: Dates and specific programme details vary by year and host location — check official Oniru Palace announcements or the event organisers for the exact schedule. For background reading, see: https://en.wikipedia.org/wiki/Olokun`,
		image: olokun,
		action: "modal",
		payload: "https://en.wikipedia.org/wiki/Olokun",
	},
	{
		title: "OSE",
		description:
			"A recurring nine-day gathering for worship, reconciliation and community discourse among the people of Iru.",
		details: `OSE is a traditional nine-day observance centred on prayer, reconciliation and community healing. The gathering brings together families, chiefs, priests and community leaders for focused worship, restorative dialogues and public ceremonies that strengthen social bonds.

Ceremony & purpose: The programme typically includes communal prayers and offerings, mediation sessions for resolving disputes, public recognitions, and cultural performances. The intent is to renew communal relationships, give thanks, and restore harmony.

What to expect: daily prayer sessions and liturgies, storytelling and cultural demonstrations, reconciliation meetings and council deliberations, communal meals, and opportunities for residents to raise local concerns with leadership. The event is respectful and family-friendly; attendees are encouraged to observe local customs and guidance from organisers.

More information: For enquiries or to coordinate participation, contact the organisers at the event email.`,
		image: elegbafeast,
		action: "modal",
		payload: "info@iru-kingdom.org",
	},
	{
		title: "INSTALLATION OF BAALES",
		description:
			"Ceremonies to appoint local chiefs and strengthen traditional governance across the kingdom.",
		details: `The Installation of Baales is a formal traditional ceremony that appoints ward or community chiefs (Baales) who serve as local leaders and custodians of custom. These rites affirm traditional governance, community representation, and continuity of local leadership.

Ceremony & purpose: The event typically includes traditional prayers, presentation of staff or insignia, speeches by elders and the ruling house, and formal recognition by the Oba or senior chiefs. The ceremony underlines the Baale’s role in dispute resolution, cultural stewardship and local development.

What to expect: processions, official investiture rituals, blessings and libations, cultural performances, and receptions where community members greet the newly installed Baales. Attendees should observe protocol and follow instructions from event marshals.

More information: For invitations, schedules or enquiries about protocol and participation, contact the organisers or the palace office. `,
		image: elegbafeast,
		action: "modal",
	},
	{
		title: "IWUYE",
		description:
			"Honouring individuals who have rendered exceptional service to Iru through installations and recognition events.",
		details: `Iwuye (Recognition) ceremonies celebrate people who have given outstanding service to the community. The programme recognises civic leaders, philanthropists, elders and volunteers whose contributions strengthen social welfare, culture and development across Iru.

Ceremony & purpose: Awards and installations often include formal presentations, citation readings, traditional blessings, photo recognitions and community acknowledgements. These events highlight exemplary examples of service and inspire civic participation.

What to expect: citation presentations, short speeches, formal recognitions by community leaders, cultural performances and a reception where guests meet awardees. The event is family-friendly and intended to honour and encourage public service.

More information: For nomination procedures or enquiries, visit the community portal or contact the organisers at the provided link.`,
		image: elegbafeast,
		action: "modal",
		payload: "https://example.com/iwuye",
	},
	{
		title: "LAGOS SEAFOOD FESTIVAL",
		description:
			"A popular festival highlighting Iru’s link to the sea and the culinary traditions of Lagos — a draw for tourism and commerce.",
		image: seafood,
		video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
		action: "video",
		details: `The Lagos Seafood Festival celebrates the rich maritime cuisine and coastal livelihoods of the region. It is both a culinary showcase and a celebration of Iru’s seaside heritage, attracting residents and visitors with seafood tastings, cooking demonstrations and cultural performances.

What to expect: a wide variety of local seafood stalls, cooking competitions, food demonstrations by local chefs, music and dance performances, maritime exhibitions and family-friendly activities. The festival highlights sustainable fishing practices and opportunities for local traders.

Practical notes: expect crowds and limited parking near the waterfront — plan to arrive early, use public transport if possible, and follow safety guidance around cooking areas and the shoreline.

More information: check official festival announcements for dates and vendor lineups.`,
	},
];

export function Event() {
	const sectionRef = useRef(null);
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedEvent, setSelectedEvent] = useState(null);
	const navigate = useNavigate();

	function navigateToContact(e) {
		e?.preventDefault();
		// navigate to home then attempt to scroll to #contact
		navigate('/');
		setTimeout(() => {
			const el = document.getElementById('contact');
			if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}, 250);
	}

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
			<section className="py-20 px-6 bg-linear-to-b from-white via-primary/5 to-white">
				<div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-10 md:p-16">
					<div className="text-center">
						<h1 className="text-xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight ">
							Tourism & Culture
						</h1>
						<p class='nameee' className="mx-auto max-w-3xl text-sm md:text-lg text-gray-600 mb-6">
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
							<button
								onClick={navigateToContact}
								className=" inline-block border border-primary text-primary font-medium rounded-lg px-3 py-2 hover:bg-primary/5 transition"
								aria-label="Contact for partnerships"
							>
								Contact for Partnerships
							</button>
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
									<div className="absolute inset-0 bg-linear-to-t from-black/45 to-transparent opacity-90" />
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
									<div className="text-sm text-gray-600 name">
										{selectedEvent.details ? (
											selectedEvent.details.split('\n\n').map((para, i) => (
												<p key={i} className="mb-4">{para}</p>
											))
										) : (
											<>
												<p className="mb-4">
													The Ejiwa Elegba Festival is a celebration of Iru Kingdom’s living heritage — an opportunity to honour our ancestors, preserve traditional knowledge, and showcase our culture to visitors and community members.
												</p>
												<p className="mb-4">
													Held annually, the festival brings people together for prayer, music, dance, and displays of art and talent. We are pleased to announce the forthcoming Ejiwa Elegba Iru Festival 2026 and invite sons and daughters of Olofin (home and abroad) to join the celebrations.
												</p>
												<p className="mb-4 text-sm text-gray-600">
													Please note that festival activities may affect traffic flow. Residents of Oniru Estate and neighbouring areas are kindly asked to follow directions from officials on the ground to ensure safety and smooth movement during events. Your cooperation is appreciated.
												</p>
											</>
										)}

										{selectedEvent.instagram && (
											<div className="carry">
												<blockquote className="instagram-media" data-instgrm-permalink={selectedEvent.instagram} data-instgrm-version="14">
													<a className="text-fuchsia-400" href={selectedEvent.instagram} target="_blank" rel="noreferrer">
														View this post on  <i className="bi bi-instagram" />
													</a>
												</blockquote>
											</div>
										)}
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		)}
		<Footer />
		</>
	);
}
