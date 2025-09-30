import React, { useEffect, useRef } from "react";
import empowermentImg1 from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/elegba image.jpeg";
import empowermentImg2 from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/elegba image.jpeg";
import youth from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/youthempowerment.jpeg";
import children from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/children.png";
import road from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/road.png";
import roadII from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/roadII.png";
import road111 from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/road111.png";
import epm1 from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/epm1.png";
import { Navbar } from "./Navbar.jsx";
import { ThemeToggle } from "./ThemeToggle.jsx";
// import {StarBackground } from './StarBackground.jsx'

// filepath: /Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/src/components/empowerment.jsx
export function Empowerment() {
  const pageRef = useRef(null);

  useEffect(() => {
    // Animate page entrance
    if (pageRef.current) {
      pageRef.current.classList.add("opacity-100", "translate-y-0", "scale-100");
    }
  }, []);

  return (
    <>
      <Navbar />
      <ThemeToggle />
      {/* <StarBackground/> */}
      <div
        ref={pageRef}
        className="transition-all-in-out duration-1000 ease-in-out opacity-0 translate-y-8 scale-95"
      >
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-white to-primary/5">
          <h1 className="text-4xl font-bold mb-12 text-center text-primary animate-fade-in-delay-2">
            Education and Empowerment Initiatives
          </h1>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            {/* Text Side */}
            <div className="md:w-1/2 w-full bg-white/80 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary ">Education & Empowerment Initiatives</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed animate-fade-in-delay-3">
                Education and Empowerment are two major parts of the #LeGIT Vision because it is impossible to build a sustainable city and develop resilient people without giving them the means of survival and enabling them to stand independently. In line with this, we have in the past five (5) years, partnered with reputable organizations and bodies like The Lagos State Ministry for Women Affairs and Poverty Alleviation (WAPA), The Lagos Chapter of the Institute of Chartered Accountants of Nigeria (ICAN), The Lagos State Ministry of Agriculture, The Happiness Center, the office of The Senior Special Assistant on SDG to the President etc among others.
                <br /><br />
                Through these initiatives, about 1000 Women and Youths have been trained and empowered:
                <ul className="list-disc ml-6 mt-2 mb-2">
                  <li>Iru Empowerment Hub (Entrepreneurship opportunities facilitation) for youth in partnership with The Lagos State Ministry of Agriculture.</li>
                  <li>The Skill Acquisition Program for Women and youth of Iru in partnership with The Lagos State Ministry for Women Affairs and Poverty Alleviation (WAPA)</li>
                  <li>9-Day Business partnership for Entrepreneurs in Iruland in partnership with The Institute of Chartered Accountants of Nigeria (ICAN)</li>
                  <li>Distribution of exercise books to indigent students in Government-owned primary schools in the Iru / Victoria Island LCDA.</li>
                  <li>Partnered with the office of the Senior Special Assistant to the President on SDGs, to build a vocational center to serve as the hub for training, skill acquisition and innovation in Iru Kingdom.</li>
                  <li>Iru Affordable Transportation Initiative: As part of the #LeGIT vision to promote sustainable living for the indigenes and residents of Iru Kingdom.</li>
                </ul>
              </p>
            </div>
            {/* Images & Video Side */}
            <div className="md:w-1/2 w-full flex flex-col gap-8 items-center">
              <div className="flex flex-col sm:flex-row flex-wrap gap-6 w-full justify-center">
                <img
                  src={youth}
                  alt="Empowerment 1"
                  className="animate-fade-in-delay-1 md:w-full sm:w-1/2 h-84 object-cover rounded-xl shadow-lg transition-all duration-700"
                />
                <img
                  src={children}
                  alt="Empowerment 2"
                  className="animate-fade-in-delay-1.4 md:w-full sm:w-1/2 h-84 object-cover rounded-xl shadow-lg transition-all duration-700"
                />
                <img
                  src={epm1}
                  alt="Empowerment 3"
                  className=" animate-fade-in-delay-1.8 md:w-full sm:w-1/2 h-84 object-cover rounded-xl shadow-lg transition-all duration-700"
                />
              </div>
              <div className="w-full max-w-lg h-64 mt-4">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Empowerment Video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full rounded-xl shadow-lg transition-all duration-700"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Transportation Empowerment Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-primary/10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
              {/* Text Content */}
            <div className="md:w-1/2 w-full bg-white/90 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Transportation Empowerment</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                His Royal Majesty has forged strategic partnerships to improve local transportation. In collaboration with the Federal Government through the Presidential Compressed Natural Gas Initiative (PCNGI), the Lagos State Government via the Ministry of Transportation, and the Lagos Metropolitan Area Transport Authority (LAMATA), over 40 Compressed Natural Gas (CNG) buses have been deployed in the community.
                <br /><br />
                This initiative not only provides affordable and eco-friendly transportation options for residents and indigenes but also serves as a catalyst for job creation and revenue generation, reinforcing ru kingdom's commitment to inclusive and sustainable development.
                <br /><br />
                <span className="font-bold text-primary">IRU EMPOWERMENT HUB</span>
              </p>
            </div>
            {/* Images around the text */}
            <div className="md:w-1/2 w-full flex flex-col sm:flex-row flex-wrap gap-6 justify-center mb-8 md:mb-0">
              <img
                src={road}
                alt="CNG Bus 1"
                className="md:w-2xl md:h-75 w-full sm:w-1/3 h-40 object-cover rounded-xl shadow-lg transition-all duration-700"
              />
              <img
                src={road111}
                alt="CNG Bus 2"
                className="w-full md:w-2xs sm:w-1/3 h-80 object-cover rounded-xl shadow-lg transition-all duration-700"
              />
              <img
                src={roadII}
                alt="CNG Bus 3"
                className="w-full sm:w-1/3 h-40 object-cover rounded-xl shadow-lg transition-all duration-700"
              />
            </div>
          
          </div>
        </section>
      </div>
    </>
  );
}