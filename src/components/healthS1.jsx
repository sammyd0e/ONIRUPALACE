import hero from "/projects/hero1.jpg";

export const Healthone = () => {
  return (
    <div
      className="h-120 bg-cover  bg-center mt-15"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="  flex flex-col items-start gap-4 h-10 text-white text-start px-20 pt-32">     
         <h1 className=" md:text-7xl text-3xl  text-primary">We Provide Top  <br />Medical Service </h1>
          <p className="text-shadow-purple-100 text-2xl">More than 10 Professionals </p>
           <div className="flex flex-row">
            <button className="cosmic-button w-full ">
              book Appointment
            </button>
            <button className="cosmic-button mx-2.5">
                About us!
            </button>

           </div>
          </div>
 
    </div>
  );
};