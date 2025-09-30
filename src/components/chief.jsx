
import { useState, useEffect } from "react";
import basira from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/BASIRA-TITILAYO-SMITH.jpg";
import adeyemi from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/ADEYEMI-IDOWU.jpg";
import muyiwa from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/MUYIWA GBADEGESIN.jpg";
import lukmon from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/LUMON MUSTAPHA.jpg";
import bolanle from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/BOLANLEAUSTENPETERS.jpg";


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

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx) => setCurrent(idx);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const next = () => setCurrent((prev) => (prev + 1) % slides.length);

  const slide = slides[current];

  return (
    <section className="flex flex-col items-center justify-center w-full py-8">
  <div className="relative w-full max-w-4xl h-[400px] bg-black rounded-lg shadow-lg overflow-hidden">
  <img src={slide.image} alt={slide.h3} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-text-primary bg-opacity-40 flex flex-col justify-end p-6 py-100">
          <h3 className="text-xlg font-semibold text-purple-900 mb-1">{slide.h3}</h3>
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-2">{slide.h1}</h1>
          
          <p className="text-purple-700 mb-4 text-2xl">{slide.p}</p>
          <div className="flex space-x-4 mb-2">
            {slide.socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="text-black text-xl hover:text-purple-300">
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        </div>
        {/* Navigation Buttons */}
  <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-purple-500 bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition">
          <span className="sr-only">Previous</span>
          &#8592;
        </button>
        <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-500 bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition">
          <span className="sr-only">Next</span>
          &#8594;
        </button>
        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`w-3 h-3 rounded-full ${current === idx ? 'bg-white' : 'bg-purple-400'} border-2 border-white`}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
