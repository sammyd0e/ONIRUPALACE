
import React, { useState } from "react";
import elegbafeast from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/elegba image.jpeg";
import { Event } from "./event";
import { Chiefs } from "./chief";

export const SkillsSection = () => {
  const [activeSection, setActiveSection] = useState(null); // 'events', 'chiefs', etc.

  return (
    <section className="flex flex-col space-y-12 py-24 px-4" id="skills">
      <div className="flex flex-row items-center justify-center gap-5">
        <button className="cosmic-button" onClick={() => setActiveSection('events')}>Events</button>
        <button className="cosmic-button" onClick={() => setActiveSection('updates')}>Updates</button>
        <button className="cosmic-button" onClick={() => setActiveSection('chiefs')}>Chiefs</button>
        <button className="cosmic-button" onClick={() => setActiveSection('gallery')}>Gallery</button>
      </div>

      {/* Events Section */}
      <div className={`transition-opacity duration-700 ${activeSection === 'events' ? 'block animate-fade-in' : 'hidden'}`}>
        {/* <Event /> */}
      </div>

      {/* Chiefs Section */}
      <div className={`transition-opacity duration-700 ${activeSection === 'chiefs' ? 'block animate-fade-in' : 'hidden'}`}>
        <Chiefs />
      </div>

      {/* You can add more sections for 'updates' and 'gallery' here if needed */}
    </section>
  );
};







