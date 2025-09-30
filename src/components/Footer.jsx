import { ArrowUp } from "lucide-react";
import access from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/access.png"
import zenith from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/zenith.jpeg"
import navy from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/navy.jpeg"
import four from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/fourpoints.png"
import terra from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/terrakulcture.png"
import council from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/COUNC.jpeg"
import raddington from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/redddington.jpeg"
import nigeriannavy from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/nigerianNavy.jpeg"



export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Oniru Kindom.co. All rights reserved.
      </p>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl text-purple-900"> Partnership </h1>
        <div className=" flex flex-col md:flex-row w-17 align-center justify-center gap-4 mt-4">

         <img src={access} alt="access bank Nigeria" />
          <img src={zenith} alt="zenith bank Nigeria" />
          <img src={navy} alt="Nigerian Navy" />
          <img src={four} alt="four points by sheraton" />
          <img src={terra} alt="terrakulcture" />
          <img src={council} alt="Lagos state council" />
          <img src={raddington} alt="Raddington hotel" />
          <img src={nigeriannavy} alt="Nigerian Navy" />
       
        </div>
      
        
      </div>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
