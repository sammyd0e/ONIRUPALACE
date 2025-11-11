import { Navbar } from "./Navbar.jsx";
import { ThemeToggle } from "./ThemeToggle.jsx";
import { StarBackground } from './StarBackground.jsx'
import { Footer } from "./Footer.jsx";
import cleaning from "/projects/cleaning.JPG"
import plants from "/projects/plants.JPG"
import lawman from "/projects/LAWMA.JPG"
import clanningII from "/projects/cleaningII.JPG"


export function ENviroment() {
  return (
    <>
      <Navbar />
      <ThemeToggle />
      <StarBackground/>
      <div
        className="transition-all-in-out duration-1000 ease-in-out opacity-100 translate-y-0 scale-100"
      >
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-white to-primary/5">
          <h1 className="text-4xl font-bold mb-12 text-center text-primary animate-fade-in-delay-2">
            Environmental Sustainability Initiatives
          </h1>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            {/* Text Side */}
            <div className="md:w-1/2 w-full bg-white/80 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary ">Environmental Sustainability Initiatives</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed animate-fade-in-delay-3">
                Environmental sustainability is a core pillar of the #LeGIT Vision. We believe that a healthy environment is essential for the well-being of our community and future generations. Our initiatives focus on promoting eco-friendly practices, conservation efforts, and raising awareness about environmental issues.
                <br /><br />
                Over the past five years, we have undertaken several projects aimed at enhancing environmental sustainability in Iru Kingdom:
                <ul className="list-disc ml-6 mt-2 mb-2">
                  <li>Tree Planting Campaigns: In partnership with local schools and community groups, we have planted over 5,000 trees to combat deforestation and improve air quality.</li>
                  <li>Waste Management Programs: We have implemented waste segregation and recycling initiatives to reduce landfill waste and promote responsible disposal practices.</li>
                  <li>Clean-Up Drives: Regular community clean-up events have been organized to keep public spaces free from litter and promote civic responsibility.</li>
                  <li>Environmental Education Workshops: We conduct workshops and seminars to educate residents about the importance of environmental conservation and sustainable living practices.</li>
                  <li>Promotion of Renewable Energy: Encouraging the use of solar energy and other renewable sources to reduce our carbon footprint.</li>
                </ul>
              </p>
            </div>

            {/* Images & Video Side */}

            <div className="md:w-1/2 w-full flex flex-col gap-8 items-center">
              <div className="flex flex-col sm:flex-row flex-wrap gap-6 w-full justify-center">
                <img
                  src={plants}
                  alt="Tree Planting Campaign"
                  className="animate-fade-in-delay-1 md:w-full sm:w-1/2 h-84 object-cover rounded-xl shadow-lg transition-all duration-700"
                />        
                <img
                  src={lawman}
                  alt="Community Clean-Up Drive"
                  className="animate-fade-in-delay-1.4 md:w-full sm:w-1/2 h-84 object-cover rounded-xl shadow-lg transition-all duration-700"
                />
                <img
                  src={clanningII}
                  alt="Recycling Program"
                  className=" animate-fade-in-delay-1.8 md:w-full sm:w-1/2 h-84 object-cover rounded-xl shadow-lg transition-all duration-700"
                />
                 
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
