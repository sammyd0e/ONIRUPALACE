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
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-col items-center text-center gap-6">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Oniru Kindom.co. All rights reserved.
      </p>

      <p class="nameee" className="text-sm text-primary md:text-2xl">Partnership</p>

      <div className="flex flex-row justify-center items-center gap-4  w-6 md:w-12 lg:w-20 ">
         <img src={access} alt="access bank Nigeria" />
         <img src={zenith} alt="zenith bank Nigeria" />
         <img src={navy} alt="Nigerian Navy" />
         <img src={four} alt="four points by sheraton" />
         <img src={terra} alt="terrakulcture" />
         <img src={council} alt="Lagos state council" />
         <img src={raddington} alt="Raddington hotel" />
         <img src={nigeriannavy} alt="Nigerian Navy" />
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
