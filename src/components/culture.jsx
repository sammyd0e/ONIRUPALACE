import { Event } from "./event";
import { ThemeToggle } from "./ThemeToggle";
import { Navbar } from "./Navbar";
export function Culture(){
  return(
       <section>
        <ThemeToggle/>
        <Navbar/>
        <Event />
       </section>
  )
};