import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Healthone } from "../components/healthS1";
import Healthsectwo from "../components/healthSectwo";
import { Thirdhealthsec } from "../components/thirdhealthsec";
import { Healthfour } from "../components/healthfour";

 export const Health = () => {
  return (
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle />
        <StarBackground />
  
        <Navbar />
        <main>
          <Healthone />
          <Healthsectwo/>
          <Thirdhealthsec/>
          <Healthfour/>
        </main>
  
      </div>
  );
}