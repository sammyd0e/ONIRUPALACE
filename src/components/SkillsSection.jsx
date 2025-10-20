import React, { useState } from "react";
import elegbafeast from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/chiefedited.jpg";
import { Event } from "./event";
import { Chiefs } from "./chief";
import whiteCAP1 from '/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/whiteCAP1.png'
import whiteCAP2 from '/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/whiteCAP2.png'
import whiteCAP3 from '/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/whiteCAP3.png'
import whiteCapALL from '/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/whiteCapALL.png'

export const SkillsSection = () => {
  const [activeSection, setActiveSection] = useState(null); // 'events', 'chiefs', etc.

const whiteCapChiefs = [
    { id: 1, name: "Chief Wakeel Abiodun Ajasa", title: "Basorun of Iruland", img: whiteCAP1 },
    { id: 2, name: "Chief Tajudeen Kushanu", title: "Olotu of Iruland", img: whiteCAP2 },
    { id: 3, name: "Chief Owolabi Alder", title: "Alawe of Iruland", img: whiteCAP3 },
    { id: 4, name: "Chief Olumide Abiodun Oniru", title: "Olopon of Iruland", img: whiteCapALL },
  ];

  const formatSerial = (n) => String(n).padStart(3, "0");

  const baales = [
    { id: 2, name: "Chief Wasiu Ogunbambi", title: "Olisa of Iru Land" },
    { id: 3, name: "Chief Rasak Aromire", title: "Olowa of Iru Land" },
    { id: 4, name: "Chief Saliu Abiogun", title: "Odofin of Iru Land" },
    { id: 5, name: "Chief Abayomi Daramola", title: "Balogun of Iru Land" },
    { id: 6, name: "Chief Olumide Oniru", title: "Olopon of Iru Land" },
    { id: 7, name: "Chief Tajudeen Kushanu", title: "Olotu of Iru Land" },
    { id: 8, name: "Chief Adebayo Alder", title: "Alaawe of Iru Land" },
    { id: 9, name: "Chief Luqman Owolabi Alapafuja", title: "Aro of Iru Land" },
    { id: 10, name: "Chief Isa Salalwu", title: "Baale Igbosere" },
    { id: 11, name: "Chief Tajudeen Liasu", title: "Baale Mosafejo" },
    { id: 12, name: "Chief Ganiyu Kareem", title: "Baale Osho Ilu Okiti" },
    { id: 13, name: "Chief Musiliu Atanda Olowu", title: "Baale Ipehun" },
    { id: 14, name: "Chief Wasiu Okoya", title: "Baale Itinrin" },
    { id: 15, name: "Chief Lateefu Bello", title: "Baale Falomo" },
    { id: 16, name: "Chief Bashir Arowolo Afolami, FCTI", title: "Baale Oroke" },
    { id: 17, name: "Chief Abdul-Rafiu Aruna", title: "Baale Apapa Eleko" },
    { id: 18, name: "Chief Ganiyu Kelani", title: "Baale Olukotun" },
    { id: 19, name: "Chief Yusuf Babatunde Okoya", title: "Baale Abule Ode" },
    { id: 20, name: "Chief Ganiyu Lasisi", title: "Baale Magbon" },
    { id: 21, name: "Chief Jelil Omotunde Giwa", title: "Baale Inupa" },
    { id: 22, name: "Chief Abdulazeez Oladipupo Ashimi", title: "Baale Apese" },
    { id: 23, name: "Chief Yusuf Omobolaji Yakubu", title: "Baale Tukuru" },
    { id: 24, name: "Chief Oseni Abodunrin", title: "Akogun of Iru Land" },
    { id: 25, name: "Alhaji Raheem Ayinde Ogunyemi", title: "Rep. of the Ogunyemi Ruling House" },
    { id: 26, name: "Mr Kola Fagbayi", title: "Rep. of the Abisogun Ruling House" }
  ];

  return (
    <section className="flex flex-col space-y-12 py-24 px-4" id="skills">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Community Leadership & Honorary Rolls</h2>
        <p class='name' className="mt-3 text-sm md:text-base ">
          A curated registry of Iru Land’s traditional leadership — from local Baales (community heads) who steward neighbourhoods,
          to the White Cap Chiefs (Idejo), the historic kingmakers and land custodians, and the Honorary Chiefs appointed for distinguished service.
          <span className="text-primary"> Click</span> on the controls below to explore official titles, photographic records, and IDs useful for ceremonial rolls, banners, and event programmes.
        </p>
      </div>

      <div className="flex md:flex-row items-center justify-center gap-2 flex-col  ">
        <button className="cosmic-button" onClick={() => setActiveSection("events")}>Baale's</button>
        <button className="cosmic-button" onClick={() => setActiveSection("updates")}>white cap chiefs</button>
        <button className="cosmic-button" onClick={() => setActiveSection("chiefs")}>New Honorary chiefs</button>
        <button className="cosmic-button" onClick={() => setActiveSection("gallery")}>Existing Honorary chiefs </button>
      </div>

      {/* Events / Baales section */}
      <div className={`transition-opacity duration-700 ${activeSection === "events" ? "block animate-fade-in" : "hidden"}`}>
        <div
          className="relative rounded-lg overflow-hidden mb-8 shadow-lg"
          style={{
            backgroundImage: `url(${elegbafeast})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative p-6 md:p-10 text-white">
            <h3 className="text-2xl md:text-3xl font-semibold">Baale Roll — Honourary Community Heads</h3>
            <p className="mt-2 text-sm md:text-base text-white max-w-2xl">
              A curated list of community Baales with their official titles. Each entry shows a serial in 000 format,
              the Baale's full name, and their title — useful for event rosters, printed banners, or provenance.
            </p>
          </div>
        </div>

        {/* List / Template */}
        <div className="grid gap-4">
          {baales.map((b, idx) => (
            <div
              key={b.id}
              className="flex items-center gap-4 p-4 bg-white/80 dark:bg-slate-800/80 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="flex-none">
                <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-gradient-to-br bg-primary text-white font-mono text-lg md:text-xl">
                  {formatSerial(idx + 1)}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-baseline justify-between">
                  <h4 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-100">{b.name}</h4>
                  <span className="text-sm text-slate-500 dark:text-slate-300">ID: {b.id}</span>
                </div>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{b.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* White Cap Chiefs (updates) */}
      <div className={`transition-opacity duration-700 ${activeSection === "updates" ? "block animate-fade-in" : "hidden"}`}>
        <div className="max-w-6xl mx-auto bg-white/80 dark:bg-slate-800/80 rounded-lg p-6 md:p-10 shadow-lg">
          <h3 class='namee' className="text-2xl  text-purple-500 md:text-3xl font-semibold text-center">White Cap Chiefs — Idejo (Kingmakers)</h3>
          <p class='nameee' className="mt-3 text-sm md:text-base text-slate-700 dark:text-slate-300 text-center max-w-3xl mx-auto">
             As part of the Idejo class, these chiefs have ancient roots tracing back to the founder of Lagos, Olofin.
            The Idejo are the original landowners of Lagos and hold significant cultural and traditional roles, including being kingmakers.
          </p>
          <p class='name' className="mt-2 text-sm italic text-slate-600 dark:text-slate-400 text-center">Installation: The current chiefs were installed on May 24, 2021 by the Oniru of Iru Kingdom, Oba Abdul Wasiu Omogbolahan Lawal, Abisogun II.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whiteCapChiefs.map((c, idx) => (
              <div key={c.id} className="bg-white dark:bg-slate-900 rounded-lg p-4 text-center shadow hover:shadow-lg transition transform hover:-translate-y-1">
                <div className="mx-auto w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/20">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
                </div>

                <h4 className="mt-3 font-semibold text-lg text-slate-900 dark:text-slate-100">{c.name}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{c.title}</p>

                <div className="mt-3 text-xs text-slate-500 dark:text-slate-400">Role: White Cap Chief</div>
                <div className="mt-2 text-xs px-2 inline-block bg-primary/10 text-primary rounded-full">ID: {formatSerial(idx + 1)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chiefs Section */}
      <div className={`transition-opacity duration-700 ${activeSection === "chiefs" ? "block animate-fade-in" : "hidden"}`}>
        <Chiefs />
      </div>

      {/* You can add more sections for 'updates' and 'gallery' here if needed */}
    </section>
  );
};







