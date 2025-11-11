import { useState, useEffect } from "react";
import basira from "/projects/BASIRA-TITILAYO-SMITH.jpg";
import adeyemi from "/projects/ADEYEMI-IDOWU.jpg";
import muyiwa from "/projects/MUYIWA GBADEGESIN.JPG";
import lukmon from "/projects/LUMON MUSTAPHA.jpg";
import bolanle from "/projects/BOLANLEAUSTENPETERS.jpg";


const slides = [
  {
    image: basira,
    h1: "IYA OBA OF IRU LAND",
    h3: "CHIEF (MRS) BASIRA TITILAYO SMITH",
    p: "She is a royal-born entrepreneur who built a major textile business with her late husband and later served 14 years in the UK's NHS. She is remembered for her resilience, service, and devotion to family.",
    socials: [
      { href: "https://twitter.com/", icon: "bi bi-twitter" },
      { href: "https://facebook.com/", icon: "bi bi-facebook" },
      { href: "https://instagram.com/", icon: "bi bi-instagram" },
    ],
  },
  {
    image: adeyemi,
    h1: "AARE MAJEOBAJE OF IRU KINDOM",
    h3: "CHIEF ADEYEMI IDOWU",
    p: "He is a business leader and philanthropist, founder of Aircom Nigeria and the Nathaniel Idowu Foundation. He is noted for his contributions to sports, education, and healthcare, leaving a legacy of service and community impact.",
    socials: [
      { href: "https://twitter.com/", icon: "bi bi-twitter" },
      { href: "https://facebook.com/", icon: "bi bi-facebook" },
      { href: "https://instagram.com/", icon: "bi bi-instagram" }
    ],
  },
  {
    image: lukmon,
    h1: "AARE F'IWAGBOYE OF IRU KINDOM",
    h3: "CHIEF LUKMON OLAYIWOLA MUSTPHA",
    p: "He is a banker, politician, and philanthropist from Kwara State. He has held senior banking roles, served as Executive Director at the Federal Mortgage Bank, and contributed to reforms, politics, and community growth. He is also known for philanthropy, education support, and traditional titles.",
    socials: [
      { href: "https://instagram.com/", icon: "bi bi-instagram" },
      { href: "https://facebook.com/", icon: "bi bi-facebook" },
      { href: "https://twitter.com/", icon: "bi bi-twitter" }
    ],
  },
  {
    image: bolanle,
    h1: "ERELU ASA OF IRU KINDOM",
    h3: "CHIEF(MRS) BOLANLE AUSTEN-PETERS",
    p: "Queen of Nigerian Theatre,” She is a filmmaker, director, and producer, and founder of Terra Kulture and Terra Academy for the Arts, which has trained thousands. She has staged acclaimed productions and directed films like 93 Days, The Bling Lagosians, and House of Ga’a, earning global recognition as a top African storyteller.",
    socials: [
      { href: "https://instagram.com/", icon: "bi bi-instagram" },
      { href: "https://facebook.com/", icon: "bi bi-facebook" },
      { href: "https://twitter.com/", icon: "bi bi-twitter" }
    ],
  },
  {
    image: muyiwa,
    h1: "AARE SO'LUDERO OF IRU KINDOM",
    h3: "CHIEF MUYIWA GBADEGESIN, Ph.D",
    p: "He is a public administrator and neuroscientist with over 20 years’ experience in governance. As MD/CEO of LAWMA, he drives waste management reforms using innovation, circular economy practices, and sustainability. He has also advised national leaders and advanced policies that promote cleaner, resilient cities.",
    socials: [
      { href: "https://instagram.com/", icon: "bi bi-instagram" },
      { href: "https://facebook.com/", icon: "bi bi-facebook" },
      { href: "https://twitter.com/", icon: "bi bi-twitter" }
    ],
  },
  {
    image: muyiwa,
    h1: "AARE SO'LUDERO OF IRU KINDOM",
    h3: "CHIEF MUYIWA GBADEGESIN, Ph.D",
    p: "He is a public administrator and neuroscientist with over 20 years’ experience in governance. As MD/CEO of LAWMA, he drives waste management reforms using innovation, circular economy practices, and sustainability. He has also advised national leaders and advanced policies that promote cleaner, resilient cities.",
    socials: [
      { href: "https://instagram.com/", icon: "bi bi-instagram" },
      { href: "https://facebook.com/", icon: "bi bi-facebook" },
      { href: "https://twitter.com/", icon: "bi bi-twitter" }
    ],
  },
  {
    image: muyiwa,
    h1: "AARE SO'LUDERO OF IRU KINDOM",
    h3: "CHIEF MUYIWA GBADEGESIN, Ph.D",
    p: "He is a public administrator and neuroscientist with over 20 years’ experience in governance. As MD/CEO of LAWMA, he drives waste management reforms using innovation, circular economy practices, and sustainability. He has also advised national leaders and advanced policies that promote cleaner, resilient cities.",
    socials: [
      { href: "https://instagram.com/", icon: "bi bi-instagram" },
      { href: "https://facebook.com/", icon: "bi bi-facebook" },
      { href: "https://twitter.com/", icon: "bi bi-twitter" }
    ],
  },
  {
    image: muyiwa,
    h1: "AARE SO'LUDERO OF IRU KINDOM",
    h3: "CHIEF MUYIWA GBADEGESIN, Ph.D",
    p: "He is a public administrator and neuroscientist with over 20 years’ experience in governance. As MD/CEO of LAWMA, he drives waste management reforms using innovation, circular economy practices, and sustainability. He has also advised national leaders and advanced policies that promote cleaner, resilient cities.",
    socials: [
      { href: "https://instagram.com/", icon: "bi bi-instagram" },
      { href: "https://facebook.com/", icon: "bi bi-facebook" },
      { href: "https://twitter.com/", icon: "bi bi-twitter" }
    ],
  },
];

export function Chiefs() {
  const [current, setCurrent] = useState(0);

  // Auto-advance every 20 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx) => setCurrent(idx);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const next = () => setCurrent((prev) => (prev + 1) % slides.length);

  const slide = slides[current];

  return (
    <section className="flex flex-col items-center justify-center w-full py-8">
      <div className="w-full max-w-4xl">
        {/* Image container */}
        <div className="relative w-full h-[400px] bg-black rounded-lg shadow-lg overflow-hidden">
          <img src={slide.image} alt={slide.h3} className="w-full h-220 object-cover" />

          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-purple-500 bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition"
            aria-label="Previous slide"
          >
            &#8592;
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-500 bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition"
            aria-label="Next slide"
          >
            &#8594;
          </button>
        </div>
          <div className="mt-4 bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-purple-900 mb-1">{slide.h3}</h3>
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-2">{slide.h1}</h1>
          <p class="nameee" className="text-gray-500 mb-4 text-base md:text-lg">{slide.p}</p>

          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              {slide.socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black text-xl hover:text-purple-500"
                  aria-label={`Open ${s.href}`}
                >
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
            <div className="flex space-x-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`w-3 h-3 rounded-full ${current === idx ? "bg-purple-700" : "bg-gray-300"} border-2 border-white`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
