import React, { useEffect, useRef } from "react";
import empowermentImg1 from "/projects/elegba image.jpeg";
import empowermentImg2 from "/projects/elegba image.jpeg";
import youth from "/projects/youthempowerment.jpeg";
import children from "/projects/children.png";
import road from "/projects/road.png";
import roadII from "/projects/roadII.png";
import road111 from "/projects/road111.png";
import epm1 from "/projects/epm1.png";
import { Navbar } from "./Navbar.jsx";
import { ThemeToggle } from "./ThemeToggle.jsx";
import { ChevronRight } from "lucide-react";

export function Empowerment() {
  const pageRef = useRef(null);

  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.classList.add("opacity-100", "translate-y-0", "scale-100");
    }
  }, []);

  return (
    <>
      <Navbar />
      <ThemeToggle />
      <div
        ref={pageRef}
        className="transition-all duration-1000 ease-in-out opacity-0 translate-y-8 scale-95 bg-gradient-to-b from-background via-background to-background/50"
      >
        {/* ===== HERO SECTION ===== */}
        <section className="relative min-h-screen pt-32 px-4 md:px-8 lg:px-16 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

          <div className="max-w-7xl mx-auto">
            {/* Hero Title */}
            <div className="mb-16 text-center animate-fade-in">
              <h1 className="text-3xl md:text-7xl font-bold mb-6 text-foreground">
                Leadership, <span className="text-primary">Empowerment</span> 
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                Oba Oniru's Vision for Youth Engagement and Sustainable Community Development
              </p>
            </div>

            {/* Hero Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {/* Left Image */}
              <div className="lg:col-span-1 animate-fade-in-delay-1">
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl h-96">
                  <img
                    src={youth}
                    alt="Oba Oniru Leadership"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Center Content */}
              <div className="lg:col-span-1 animate-fade-in-delay-2 flex flex-col justify-center">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Oba Oniru Lauds LJLA</h2>
                  <p className="text-foreground/80 leading-relaxed mb-6 text-lg">
                    <span className="font-semibold text-primary">Championing Youth & Community Engagement</span>
                  </p>
                  <p className="text-foreground/70 leading-relaxed mb-6">
                    "LJLA is a testament to the power of investing in young minds. It is through institutions like this that we can create a generation of visionary leaders who are not just reactive but proactive in shaping the future."
                  </p>
                  <div className="flex items-center text-primary font-semibold hover:translate-x-2 transition-transform">
                    <span>Read Full Story</span>
                    <ChevronRight size={20} className="ml-2" />
                  </div>
                </div>
              </div>
                {/* Center Content II*/}
              <div className="lg:col-span-1 animate-fade-in-delay-2 flex flex-col justify-center">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl">
                  <h2 className="text-2xl font-bold mb-6 text-primary">IRU <span className="text-primary">EMPOWERMENT HUB</span></h2>
                  <p className="text-foreground/80 leading-relaxed mb-6 text-lg">
                    <span className="font-semibold text-primary">Championing Youth & Community Engagement</span>
                  </p>
                  <p className="text-foreground/70 leading-relaxed mb-6">
                   a project by the HRM Abisogun II Foundation for Peace and Development in Lagos, Nigeria, which aims to build business capacity for women and provide seed capital for their startups.
                  </p>
                  <div className="flex items-center text-primary font-semibold hover:translate-x-2 transition-transform">
                    <span>Read Full Story</span>
                    <ChevronRight size={20} className="ml-2" />
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-1 animate-fade-in-delay-3">
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl h-96">
                  <img
                    src={empowermentImg2}
                    alt="Community Engagement"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* Key Quote Section */}
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-l-4 border-primary rounded-xl p-8 md:p-12 mb-20 animate-fade-in">
              <p className="text-2xl md:text-3xl font-bold text-foreground italic mb-4">
                "You are the game-changers, the ones who will correct societal ills through innovative and strategic approaches."
              </p>
              <p className="text-lg text-foreground/70">
                — His Royal Majesty, Oba Abdulwasiu Omogbolahan Lawal (Abisogun II), The Oniru of Iruland
              </p>
            </div>
          </div>
        </section>

        {/* ===== INITIATIVES SECTION ===== */}
        <section className="py-24 px-4 md:px-8 lg:px-16 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-5xl font-bold mb-6 text-foreground">
                Education & <span className="text-primary">Empowerment</span> Initiatives
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/30 mx-auto mb-8"></div>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Building sustainable communities through education, skills training, and youth empowerment
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
              {/* Text Content */}
              <div className="animate-fade-in-delay-1">
                <h3 className="text-3xl font-bold mb-6 text-foreground">Vision & Impact</h3>
                <p className="text-foreground/80 leading-relaxed mb-6 text-lg">
                  Education and Empowerment are two major parts of the #LeGIT Vision because it is impossible to build a sustainable city and develop resilient people without giving them the means of survival and enabling them to stand independently.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-8">
                  In line with this, we have in the past five (5) years, partnered with reputable organizations and bodies like The Lagos State Ministry for Women Affairs and Poverty Alleviation (WAPA), The Lagos Chapter of the Institute of Chartered Accountants of Nigeria (ICAN), and The Lagos State Ministry of Agriculture.
                </p>
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-8">
                  <p className="text-2xl font-bold text-primary mb-2">1000+</p>
                  <p className="text-foreground/80">Women and Youths trained and empowered</p>
                </div>
              </div>

              {/* Initiatives Grid */}
              <div className="animate-fade-in-delay-2">
                <div className="space-y-4">
                  {[
                    {
                      title: "Iru Empowerment Hub",
                      desc: "Entrepreneurship opportunities facilitation for youth in partnership with Lagos State Ministry of Agriculture",
                    },
                    {
                      title: "Skill Acquisition Program",
                      desc: "Training for Women and youth in partnership with Ministry for Women Affairs and Poverty Alleviation",
                    },
                    {
                      title: "Business Partnership",
                      desc: "9-Day Business partnership for Entrepreneurs in partnership with Institute of Chartered Accountants",
                    },
                    {
                      title: "Education Support",
                      desc: "Distribution of exercise books to indigent students in Government-owned primary schools",
                    },
                    {
                      title: "Vocational Center",
                      desc: "Building innovation hub for training, skill acquisition and entrepreneurship in Iru Kingdom",
                    },
                    {
                      title: "Sustainable Transportation",
                      desc: "Affordable Transportation Initiative promoting sustainable living for indigenes and residents",
                    },
                  ].map((initiative, idx) => (
                    <div
                      key={idx}
                      className="bg-white/8 hover:bg-white/15 border border-white/10 hover:border-primary/30 rounded-lg p-4 transition-all duration-300 group cursor-pointer"
                    >
                      <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {initiative.title}
                      </h4>
                      <p className="text-foreground/70 text-sm">{initiative.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {[youth, children, epm1].map((img, idx) => (
                <div
                  key={idx}
                  className={`relative group overflow-hidden rounded-xl shadow-lg animate-fade-in transition-all duration-700 h-72 ${
                    idx === 0 ? "md:col-span-1" : idx === 1 ? "md:col-span-1" : "md:col-span-1"
                  }`}
                  style={{ animationDelay: `${idx * 200}ms` }}
                >
                  <img
                    src={img}
                    alt={`Initiative ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TRANSPORTATION SECTION ===== */}
        <section className="py-24 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Images */}
              <div className="animate-fade-in-delay-1 grid grid-cols-2 gap-6">
                <div className="col-span-2 relative group overflow-hidden rounded-xl shadow-lg h-80">
                  <img
                    src={road}
                    alt="CNG Transportation"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative group overflow-hidden rounded-xl shadow-lg h-64">
                  <img
                    src={road111}
                    alt="Iru Fleet"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative group overflow-hidden rounded-xl shadow-lg h-64">
                  <img
                    src={roadII}
                    alt="Transportation Initiative"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="animate-fade-in-delay-2">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  <span className="text-primary">Iru Affordable</span> Transportation Initiative
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-6 text-lg">
                  His Royal Majesty has forged strategic partnerships to improve local transportation and promote sustainable living for the indigenes and residents of Iru Kingdom.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "40+ Compressed Natural Gas (CNG) buses deployed",
                    "Partnership with Federal Government through PCNGI",
                    "Collaboration with Lagos State Ministry of Transportation",
                    "Support from Lagos Metropolitan Area Transport Authority (LAMATA)",
                    "Job creation and revenue generation for the community",
                    "Eco-friendly and affordable transportation options",
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground/80">{point}</p>
                    </div>
                  ))}
                </div>
                <p className="text-foreground/70 italic">
                  This initiative reinforces Iru Kingdom's commitment to inclusive and sustainable development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Join the Movement for Change
            </h2>
            <p className="text-xl text-foreground/70 mb-12">
              Be part of Iru Kingdom's transformation through education, empowerment, and sustainable development initiatives.
            </p>
            <button className="cosmic-button text-lg px-8 py-4 rounded-full">
              Learn More
            </button>
          </div>
        </section>
      </div>
    </>
  );
}