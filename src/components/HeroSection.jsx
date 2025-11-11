import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
  id="hero"
  className="relative min-h-screen flex flex-col items-center justify-center px-4 w-full
             bg-[url('/projects/BGM7.jpeg')] bg-cover bg-center"
     >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6 align-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span class='name' className="opacity-0 animate-fade-in text-primary-900 text-2xl "> <br /><br /> HIS ROYAL MAJESTY<br /></span>
            <span className="text-black opacity-0 animate-fade-in-delay-1">
              {" "}
              OBA
            </span>
            <span class='name'className="text-black ml-2 opacity-0 animate-fade-in-delay-2 align-center">
              {" "}
           ABDULWASIU 
            </span>
             <span class='name' className="text-black md:text-6xl text-3xl ml-2 opacity-0 animate-fade-in-delay-3">
              {" "}
              OMOGBOLAHAN LAWAL (CON)
            </span>
            <span><p class='name' className="text-2xl">ABISOGUN II</p></span>
          </h1>

          <p class='nameee' className="text-black md:text-2xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3  ">
            The 15th Oniru of Iruland, a visionary leader dedicated to the
            progress and prosperity of his community.
            
          </p>
        
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              <span class='nameee'>Achievements</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
