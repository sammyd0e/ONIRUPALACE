


import React, { useEffect, useRef } from "react";
import elegbafeast from "/projects/elegba image.jpeg";
import youth from "/projects/youthempowerment.jpeg"
import ejiwaelegba from "/projects/ejiwaelegba.png"
import olokun from "/projects/olokun.png"
import seafood from "/projects/seafood.png"


const events = [
	{
		title: "EJIWA ELEGBA FEASTIVAL",
		description:
			"The Ejiwa Elegba festival celebrates Olofin's heritage, culture, and tradition. It's a symbolic event offering prayers for peace and prosperity in Iru kingdom, the state, and nation. It affords tourists an opportunity to understand the rich culture of Iruland by experiencing a 7-day long festival.",
		images: [ejiwaelegba, ejiwaelegba],
	},
	{
		title: "ODUN ISESE FEASTIVAL",
		description:
			"The Odun Isese festival in Oniru Kingdom, Lagos, Nigeria, is an annual Yoruba traditional celebration held on August 20th, featuring traditions to honor deities and showcase rich cultural heritage.",
		images: [elegbafeast, elegbafeast],
	},
	{
		title: "OLOKUN FEASTIVAL",
		description:
			"Olokun is regarded as the goddess of the ocean. As a kingdom surrounded by the ocean and historically renowned for fishing, tradition demands that certain deities be celebrated and appeased to maintain peace and prosperity. One of these deities is Olokun.",
		images: [olokun, olokun],
	},
	{
		title: "OSE",
		description:
			"Ose is a traditional event that takes place every nine days. It is a point where all sons and daughters of Iru Kingdom come together to worship and table any concerns before the deities and forebearers.",
		images: [elegbafeast, elegbafeast],
	},
	{
		title: "Installation of Baales",
		description:
			"Since my ascension we have installed over (7) Baales in Iru Kindom. This is borne out of the understanding that it is impossible for me to achieve the #LeGIT Vision alone and also the need to uphold the culture of Iru Kindom.",
		images: [elegbafeast, elegbafeast],
	},
	{
		title: "IWUYE",
		description:
			"As part of the activities of the first year anniversary, twelve honorary chiefs were installed. The wuye is done to recognize these people for their exceptional contributions to Iru King and to also expose the rich culture and heritage of Iru.",
		images: [elegbafeast, elegbafeast],
	},
	{
		title: "LAGOS SEA-FOOD FEASTIVAL",
		description:
			"The Lagos Seafood Festival has been hosted in Iru Kingdom since 2011 at the Eko Atlantic and was moved to the Muri Okunola park a few years later. The Seafood festival is organized by the Lagos State Ministry of Agriculture and aligns with the Agricultural and Tourism aspects of the #LeGIT Vision.",
		images: [seafood, seafood],
		video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Only last event has video
	},
];

export function Event() {
	const sectionRef = useRef(null);

	useEffect(() => {
		// Add transition classes after a short delay for smoother effect
		const timeout = setTimeout(() => {
			if (sectionRef.current) {
				sectionRef.current.classList.add("opacity-100", "translate-y-0");
			}
		}, 100); // Delay for effect

		return () => clearTimeout(timeout);
	}, []);

	return (
		<>
			{/* Intro Section */}
			<section className="transition-all duration-1000 ease-out opacity-100 translate-y-0 py-16 px-4 bg-gradient-to-br from-primary/10 via-white to-primary/5">
				<div className="max-w-4xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-10 md:p-16 flex flex-col gap-6">
					<h1 className="text-3xl md:text-5xl font-extrabold text-primary mb-4 text-center leading-tight animate-fade-in-delay-1">
						The #LeGIT Vision: Growing Iru Land Together
					</h1>
					<p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-2 text-center animate-fade-in-delay-1.4">
						Upon my ascension to the throne of my forebears as the 15th Oniru of
						Iru Kingdom, I conceived in my heart a vision to change the narrative
						of Iru and to ensure that the kingdom evolved into a sustainable city
						with a special breed of truly resilient people as captured in the{" "}
						<span className="font-bold text-primary">#LeGIT Vision</span> (Let's
						Grow Iru Land Together).
					</p>
					<p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-2 text-center animate-fade-in-delay-1.8">
						I had earmarked the areas to begin work in, the milestones to cover,
						and the key indicators of impact. To achieve this, eight (8) major
						focus areas were chosen, which include:{" "}
						<span className="font-semibold text-primary">
							Tourism & Culture, Education & Empowerment Initiatives, Healthcare,
							Environment, Security, Welfare, Infrastructure and Stakeholder
							Engagement
						</span>
						. I had also designed a workable plan to realize these milestones. In
						the last five years, we have been able to cover some ground and to
						achieve success in a number of areas. These areas include:
					</p>
					<div className="bg-primary/10 rounded-xl p-6 mt-4">
						<h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 text-center">
							Tourism & Culture
						</h2>
						<p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center">
							Culture is the basis of the existence of our very race. One of the
							most integral parts of the existence of the traditional institution
							is to preserve and promote the rich culture and heritage of the
							land. It is also to serve as an intermediary between the people and
							the government. Tourism, on the other hand, is an avenue for people
							from all walks of life to converge at Iru to unwind and learn about
							our culture. It is also a viable source of revenue to both the
							kingdom and the state at large, and this is why we have engaged in
							some activities to portray and promote the cultural values.
						</p>
					</div>
				</div>
			</section>


			{/* Events Section */}
			<section
				ref={sectionRef}
				className=" animate-fade-in-delay-1 transition-all duration-1000 ease-out opacity-0 translate-y-8 py-24 px-4 bg-gray-50"
			>
				<h2 className="text-4xl font-bold mb-16 text-center text-primary">
					Tourism & Culture
				</h2>
				<div className="max-w-5xl mx-auto flex flex-col gap-16">
					{events.map((event, idx) => (
						<div
							key={event.title}
							className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${
								idx === events.length - 1 ? "md:justify-end" : ""
							}`}
						>
							{/* Event details on the left */}
							<div className="flex-1">
								<h3 className="text-2xl md:text-5xl font-semibold text-primary mb-2 animate-fade-in-delay-1">
									{event.title}
								</h3>
								<p className="text-muted-foreground mb-4">
									{event.description}
								</p>
							</div>
							{/* Merged images and video on the right */}
							<div className="flex flex-col items-center gap-6 md:w-1/2 w-full">
								{/* Merged images - always visible, stacked on mobile */}
								<div className="relative w-full max-w-lg h-64 mb-2 flex flex-row md:block animate-fade-in-delay-1">
									<img
										src={event.images[0]}
										alt={event.title + " image 1"}
										className="w-1/2  hidden h-64 object-cover rounded-xl shadow-lg md:absolute md:left-0 md:top-0 md:w-3/5 md:h-full transition-all duration-700 ease-in-out"
									/>
									<img
										src={event.images[1]}
										alt={event.title + " image 2"}
										className=" animate-fade-in-delay-1 w-full h-74 object-cover rounded-xl shadow-lg opacity-80 md:absolute md:right-0 md:top-0 md:w-3/5 md:h-full transition-all duration-700 ease-in-out"
										style={{ zIndex: 1 }}
									/>
								</div>
								{/* Only show video for last event */}
								{event.video && (
									<div className="w-full max-w-lg h-64">
										<iframe
											src={event.video}
											title={event.title + " video"}
											frameBorder="0"
											allow="autoplay; encrypted-media"
											allowFullScreen
											className="w-full h-full rounded-xl shadow-lg transition-all duration-700 ease-in-out"
										></iframe>
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
}