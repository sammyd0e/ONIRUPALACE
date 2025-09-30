import { Navbar } from "../components/Navbar";
import market from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/001.jpeg"
import book from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/books.jpeg"
import bead from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/beads.jpeg"
import sculpture from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/sculpturearts.jpg"
import attires from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/attires.jpeg"
import artcraft from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/artandcraft.jpeg"
import musical from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/musicalinstruments.jpeg"
import city from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/citynew.png"
import ooni from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/ooni ojaja II.jpeg"

export function HeritageHub() {
  return (
    <section className="min-h-screen bg-gray-100 text-foreground overflow-x-hidden">
      <Navbar />
              <h1 className="p-20 text-3xl text-primary">Heritage Hub</h1>

      <div  className="margin-40 p-10 rounded-lg shadow-lg pt-30 flex flex-col gap-6 bg-no-repeat bg-cover bg-center" 
      style={{ backgroundImage: `url(${market})` }} >
        
        <h1 className="text-start pl-10 text-2xl text-primary md:text-8xl font-stretch-50%">Discover The spirit <br /> of Tradition</h1>
        <p className=" md:w-100 md:text-2xl text-white text-start pl-10 font-stretch-70%">
         Authentic Books, Artifacts,Cultural Treasures,Sculptures, Textiles, Jewelry, Music, and more.
         Sold with pride and purpose.
        </p>
        <div className="flex flex-col md:flex-row gap-4 align-center justify-start pl-10"> 
          <button className="cosmic-button ">
            Shop Online
          </button>
          <button className="cosmic-button mx-2.5">
            Live Shoping   
          </button>
          </div>
      </div>

      <div>

        <h1 className="text-4xl text-center p-10 pt-19 text-primary" >Shop by Category</h1>

        <div className="md:grid md:grid-cols-3 md:gap-4 md:p-40 md:pr-20 grid grid-cols-2 pl-8" >
            <div className="flex flex-col md:w-45 w-30">
              <img src={book} alt="" />
              <p>Books</p>
            </div>
            <div className="flex flex-col md:w-50 w-30">
              <img src={bead} alt="" />
              <p>Beads</p>
            </div>
            <div className="flex flex-col md:w-50 w-30">
              <img src={musical} alt="" />
              <p>Musical Instruments</p>
            </div>
            <div className="flex flex-col md:w-50 w-30">
              <img src={sculpture} alt="" />
              <p>Sculptures </p>
            </div>
            <div className="flex flex-col md:w-50 w-30">
              <img src={artcraft} alt="" />
              <p>Art and crafts </p>
            </div>
            <div className="flex flex-col md:w-50 w-30">
              <img src={attires} alt="" />
              <p>Attires</p>
            </div>

        </div>
      </div>

      <div>
        <h1 className="text-4xl text-center p-10 text-primary">Featured Product</h1>
        <div className="flex flex-col md:flex-row gap-1 align-center justify-center md:pl-20" id="health-section-2">
        <div className="flex flex-col align-center justify-center  md:flex-row gap-10" >
          <div className="text-black w-70 rounded-lg  flex flex-col bg-white gap-5 shadow-lg p-2 m-20">
            <img src={city} alt="" className="w-full"/>
            <h1 className="p-1 text-primary text-1.7xl">From City To MEGACITY</h1>
            <p className="">A Memoir of Lagos Urbanization (1999–2023)” by His Royal Majesty, The Oniru of Iru Kingdom.</p>
            <div className="flex flex-row justify-between items-center">
            <h1 className="text-primary p-1">N10,000</h1>
            <button className="cosmic-button w-30">
            <i class="bi bi-cart-plus"></i> 
             </button>
          </div>
          </div>
        </div>
               <div className="align-center justify-center flex flex-col md:flex-row " > 
          <div className="text-black w-70 rounded-lg  flex flex-col bg-white gap-1 shadow-lg p-2 m-20">
            <img src={ooni} alt="" />
            <h1 className="p-1 text-primary text-1.7xl">OONI OJAJA II (photo frame)</h1>
            <p className="">He is the traditional ruler and a spiritual link to the deities, representing the unity and heritage of the Yoruba people,</p>
            <div className="flex flex-row justify-between items-center">
            <h1 className="text-primary p-1">N50,000</h1>
            <button className="cosmic-button w-30">
            <i class="bi bi-cart-plus"></i> 
             </button>
          </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}