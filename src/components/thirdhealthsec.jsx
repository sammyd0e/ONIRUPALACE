export function Thirdhealthsec() {
  return(
    <section className="grid grid-cols-1 md:grid-cols-3 p-8 bg-gray-100 text-gray-800">
      <div className="flex flex-col gap-10 bg-blue-300 p-6 rounded-lg shadow">
        <div>
          <h1 className="text-3xl">For Emergencies</h1>
          <p>Call us 24/7 at +234 907 6664 963</p>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Perferendis id explicabo quam quo nisi nihil ducimus, 
          possimus. Lorem ipsum dolor sit amet.</p></div>
      <div className="flex flex-col gap-10 bg-blue-500 p-6 rounded-lg shadow">
        <h1 className="text-3xl">The Doctors</h1>
        <p>Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit. Perferendis id explicabo 
          quam quo nisi nihil ducimus, possimus. 
          Lorem ipsum dolor sit amet.</p></div>
      <div className="flex flex-col gap-10 bg-blue-200 p-6 rounded-lg shadow">
        <h1 className="text-3xl">Appointment</h1>
        <div>
<form className="flex flex-col gap-4 bg-blue-200 p-6 rounded-lg shadow">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <button
            type="submit"
            className="cosmic-button w-full mt-2"
          >
            Book Now
          </button>
        </form>
        </div>
      </div>
    </section>
  )
}