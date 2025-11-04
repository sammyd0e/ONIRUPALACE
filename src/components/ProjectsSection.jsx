import React, { useState } from "react";
import { ArrowDown, ArrowRight, ExternalLink, Github } from "lucide-react";
import fire from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/firefighters.jpeg";
import health from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/healthcenter.jpeg"
import { Link } from "react-router-dom";
import police from '/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/police.jpg'
import traffic from '/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/TRAFFICONIRU.png'
import gazette from '/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/gazette.png'
import eststeoffice from '/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/estateoffice.jpeg'
import intheeyesbook from '/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/in the eyes book.jpg'
import mosque from '/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/onirucentralmosque.png'
import mexcio from '/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/mexicoambessdor.png'
const projects = [
  {
    id: 1,
    title: "Oniru Fire Station",
    description: " in colaboration with the Lagos state Goverment, The Oniru Fire Station is dedicated to providing top-notch fire safety and emergency response services to the Iru community.",
    image: fire,
    tags: ["#Oniru", "#LeGIT", "#Lagostategov"],
    demoUrl: "#",
    githubUrl: "#",
  },               
  {
    id: 2,
    title: "Oniru Health Center",
    description:"We have established a health center in Iru Kingdom to provide accessible and quality healthcare services to the community.",
    image: health,
    tags: ["#health", "#LeGIT", "#Oniru"],
    demoUrl: "/health",
    githubUrl: "#", 
  },                  
  {
    id: 3,
    title: "Oniru Police Station",
    description:
"We've enhanced security in Oniru through measures like access control, street lights, new gates, and partnerships with the Nigerian Police Force, supplemented by trained security personnel and helplines for reporting incidents. These efforts aim to establish a safe and peaceful environment, supporting sustainability and resilience in the community.",
    image: police,
    tags: ["#Security", "#LEGIT", "#ONIRU"],
    demoUrl: "#",
    githubUrl: "/heritagehub",
  },
];

export const ProjectsSection = () => {
  const [showMore, setShowMore] = useState(false);

 
  const moreProjects = [
    {
      id: 4,
      title: "Oniru Estate Office&Housing Plan",
      description:
        " To achieve the #LeGIT Vision, we contracted Gbenga Olaniyan and his team at Estate links, we developed a strategic infrastructure plan for Oniru Estate through stakeholder engagement, town hall meetings, and a robust feedback process involving 3,182 residents. Key initiatives include establishing an estate office for land management, enforcing physical planning rules, and launching road rehabilitation projects with Lagos State Government support.",
      image: eststeoffice,
      tags: ["#LSG", "#LEGIT", "#ONIRU"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Traffic Regulation Initiative Oniru",
      description:
        " in collaboration with the Lagos State Goverment, this project agender is to improve traffic flow and safety within Iru Land through better signage, road markings, and community awareness campaigns.",
      image: traffic,
      tags: ["#LSG", "#LEGIT", "#ONIRU"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Oniru Gazette Publication",
      description: "The Oniru Gazette is a bi-monthly magazine promoting Iru's culture and tourism, and an official land document recording community ownership rights. It serves as a platform for information and a legal title for landowners. Two entities, one goal: showcasing and securing Oniru's heritage.",
      image: gazette,
      tags: ["#LEGIT", "#CULTURE  "],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 7,
      title: " A BOOK - In The Eyes of Our Children (Co-Writer)",
      description:
      "  'In the Eyes of Our Houston' showcases Houston through the creative vision of 132 elementary and middle school students, highlighting its diversity, landmarks, and culture. Through photography and printmaking, they capture the city's essence, from iconic symbols like the rodeo and space exploration to tranquil gardens and vibrant culture.",
      image: intheeyesbook,
      tags: ["#Houston", "#LEGIT", "#ONIRU"],
      demoUrl: "#",
      githubUrl: "#",
    },
     {
      id: 8,
      title: " COMMISSIONING OF THE ONIRU CENTRAL MOSQUE",
      description:
      " Friday, 6th of june 2025, we proudly commissioned the Oniru Central Mosque, a significant milestone in our community development efforts. This state-of-the-art facility not only serves as a place of worship but also as a center for community gatherings and educational activities, reflecting our commitment to fostering unity and spiritual growth within Iru Land.",
      image: mosque,
      tags: ["#LSG", "#LEGIT", "#ONIRU"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 9,
      title: "Courtesy Visit from Alfredo Medina",
      description:
      "Alfredo Medina, the Mexican Ambassador to Nigeria, paid a courtesy visit to discuss strengthening bilateral relations and exploring opportunities for collaboration between Mexico and Nigeria in various sectors.",
      image: mexcio,
      tags: ["#LSG", "#LEGIT", "#ONIRU"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-xl md:text-4xl font-bold mb-9 text-center">
          {" "}
          THE JOURNEY SO FAR!<span className="text-primary"> #LEGIT </span>
        </h2>

        <p class='nameee' className="text-center text-muted-foreground mb-18 max-w-2xl mx-auto">
As the 15th Oniru of Iru Kingdom, I envision transforming Iru into a sustainable city with resilient people through the #LeGIT Vision, revolutionizing the kingdom's narrative and driving collective growth. <span className="text-primary">Let's Grow Iru Land Together</span>, fostering a thriving community for generations to come.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={tag + idx} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 class ='nameee' className="text-primary font-bold mb-1"> {project.title}</h3>
                <p  class ='name' className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    {project.id === 2 ? (
                      <Link
                        to={project.githubUrl}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </Link>
                    ) : (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            type="button"
            onClick={() => setShowMore(true)}
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            View more projects <ArrowDown size={16} />
          </button>
        </div>

        {/* Modal: show more projects */}
        {showMore && (
          <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm ">
            <div
              className="absolute inset-0 bg-black/30 animate-fade-in-delay-1"
              onClick={() => setShowMore(false)}
            />

            <div className="relative bg-base-100 rounded-lg shadow-lg w-11/12 max-w-4xl mx-auto p-6 overflow-auto max-h-[80vh]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold"></h3>
                <button
                  type="button"
                  onClick={() => setShowMore(false)}
                  className="px-4 py-2 rounded-md text-3xl text-primary hover:bg-gray-300"
                >
                  x
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-delay-2">
                {moreProjects.map((p) => (
                  <div key={p.id} className="bg-card rounded-md overflow-hidden shadow-sm animate-fade-in-delay-2">
                    <div className="h-80 overflow-hidden animate-fade-in-delay-2">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-100 object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {p.tags?.map((tag, idx) => (
                          <span key={tag + idx} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h4 className="font-bold text-primary mb-1">{p.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{p.description}</p>
                      <div className="flex items-center gap-3">
                        <a href={p.demoUrl} target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary">
                          <ExternalLink size={18} />
                        </a>
                        <a href={p.githubUrl} target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary">
                          <Github size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
