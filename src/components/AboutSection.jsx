import { Briefcase, Code, User, X } from "lucide-react";
import imgP from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/self-img.jpg";
import teenager from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/tennagerkabiyesi.jpg"
import ADC from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/kabiyesiXADC.jpg"
import ADCII from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/serviceofficer.jpg"
import shetima from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/kabiyesiXsetima.jpg"

import { useState, useEffect } from "react";
import onigefon from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/onigefon.jpeg";
import mabogunje from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/mabogunje.jpeg";
import ihuntayi from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/ihuntayi.jpeg";
import odudu from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/odudu.jpeg";
import abanu from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/abanu.jpeg";
import olaletan from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/olaletan.jpeg"
import orisasanya from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/orisasanya.jpeg"
import orunbe from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/orunbe.jpeg"
import abisogun from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/abisogun.jpeg"
import akiogun from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/akiogun.jpeg"
import ogunyemi from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/ogunyemi.jpeg"
import odunloye from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/odunloye.jpeg"
import abiodun from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/abiodun.jpeg"
import idowu from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/abiodun.jpeg"

import old from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/bridgeold.jpg"
import neww from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/bridgenew.jpg"
import ikoyinew from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/ikoyiclubnew.jpg"
import ikoyiold from "/Users/sammydoe/Downloads/beautiful-react-tailwind-portfolio-main/public/projects/ikoyiclubold.jpg"








const slides = [
  {
    image: onigefon,
    h1: "Oniru Onigefon ",
    h3: "1958-1620",
    // p: "She is a royal-born entrepreneur who built a major textile business with her late husband and later served 14 years in the UK's NHS. She is remembered for her resilience, service, and devotion to family.",
    socials: [
      // { href: "https://twitter.com/", icon: "bi bi-twitter" },
      // { href: "https://facebook.com/", icon: "bi bi-facebook" },
      // { href: "https://instagram.com/", icon: "bi bi-instagram" },
    ],
  },
  {
    image: mabogunje,
    h1: "Oniru Mabogunje  ",
    h3: "1621-1654",
    //  p: "He is a business leader and philanthropist, founder of Aircom Nigeria and the Nathaniel Idowu Foundation. He is noted for his contributions to sports, education, and healthcare, leaving a legacy of service and community impact.",
    socials: [
      // { href: "https://twitter.com/", icon: "bi bi-twitter" },
      // { href: "https://facebook.com/", icon: "bi bi-facebook" },
      // { href: "https://instagram.com/", icon: "bi bi-instagram" }
    ],
  },
  {
    image: ihuntayi,
    h1: "Oniru Ihuntayi ",
    h3: "1665-1687 ",
    // p: "He is a banker, politician, and philanthropist from Kwara State. He has held senior banking roles, served as Executive Director at the Federal Mortgage Bank, and contributed to reforms, politics, and community growth. He is also known for philanthropy, education support, and traditional titles.",
    socials: [
      // { href: "https://instagram.com/", icon: "bi bi-instagram" },
      // { href: "https://facebook.com/", icon: "bi bi-facebook" },
      // { href: "https://twitter.com/", icon: "bi bi-twitter" }
    ],
  },
  {
    image: odudu,
    h1: "Oniru Odudu Eleyiwo ",
    h3: "1688-1709",
    // p: "Queen of Nigerian Theatre,” She is a filmmaker, director, and producer, and founder of Terra Kulture and Terra Academy for the Arts, which has trained thousands. She has staged acclaimed productions and directed films like 93 Days, The Bling Lagosians, and House of Ga’a, earning global recognition as a top African storyteller.",
    socials: [
      // { href: "https://instagram.com/", icon: "bi bi-instagram" },
      // { href: "https://facebook.com/", icon: "bi bi-facebook" },
      // { href: "https://twitter.com/", icon: "bi bi-twitter" }
    ],
  },
  {
    image: abanu,
    h1: "Oniru Abanu ",
    h3: "1710-1735",
    // p: "He is a public administrator and neuroscientist with over 20 years’ experience in governance. As MD/CEO of LAWMA, he drives waste management reforms using innovation, circular economy practices, and sustainability. He has also advised national leaders and advanced policies that promote cleaner, resilient cities.",
    socials: [
      // { href: "https://instagram.com/", icon: "bi bi-instagram" },
      // { href: "https://facebook.com/", icon: "bi bi-facebook" },
      // { href: "https://twitter.com/", icon: "bi bi-twitter" }
    ],
  },
  {
    image: olaletan,
    h1: " Oniru Olaletan ",
    h3: "1936-1790",
    // p: "He is a public administrator and neuroscientist with over 20 years’ experience in governance. As MD/CEO of LAWMA, he drives waste management reforms using innovation, circular economy practices, and sustainability. He has also advised national leaders and advanced policies that promote cleaner, resilient cities.",
    socials: [
      // { href: "https://instagram.com/", icon: "bi bi-instagram" },
      // { href: "https://facebook.com/", icon: "bi bi-facebook" },
      // { href: "https://twitter.com/", icon: "bi bi-twitter" }
    ],
  },
  {
    image: orisasanya,
    h1: "Oniru Orisasanya ",
    h3: "1792-1820",
    // h3: "CHIEF MUYIWA GBADEGESIN, Ph.D",
    // p: "He is a public administrator and neuroscientist with over 20 years’ experience in governance. As MD/CEO of LAWMA, he drives waste management reforms using innovation, circular economy practices, and sustainability. He has also advised national leaders and advanced policies that promote cleaner, resilient cities.",
    socials: [
      // { href: "https://instagram.com/", icon: "bi bi-instagram" },
      // { href: "https://facebook.com/", icon: "bi bi-facebook" },
      // { href: "https://twitter.com/", icon: "bi bi-twitter" }
    ],
  },
  {
    image: orunbe,
    h1: "Oniru Orunbe",

    h3: "1821-1835 ",
    // p: "He is a public administrator and neuroscientist with over 20 years’ experience in governance. As MD/CEO of LAWMA, he drives waste management reforms using innovation, circular economy practices, and sustainability. He has also advised national leaders and advanced policies that promote cleaner, resilient cities.",
    socials: [
      // { href: "https://instagram.com/", icon: "bi bi-instagram" },
      // { href: "https://facebook.com/", icon: "bi bi-facebook" },
      // { href: "https://twitter.com/", icon: "bi bi-twitter" }
    ],
  },
  {
    image: abisogun,
    h1: "Oniru Abisogun",

    h3: "1836-1855 ",
    // p: "He is a public administrator and neuroscientist with over 20 years’ experience in governance. As MD/CEO of LAWMA, he drives waste management reforms using innovation, circular economy practices, and sustainability. He has also advised national leaders and advanced policies that promote cleaner, resilient cities.",
    socials: [
      // { href: "https://instagram.com/", icon: "bi bi-instagram" },
      // { href: "https://facebook.com/", icon: "bi bi-facebook" },
      // { href: "https://twitter.com/", icon: "bi bi-twitter" }
    ],
  },
  {
    image: akiogun,
    h1: "Oniru Akiogun",

    h3: "1856-1893  ",
    // p: "He is a public administrator and neuroscientist with over 20 years’ experience in governance. As MD/CEO of LAWMA, he drives waste management reforms using innovation, circular economy practices, and sustainability. He has also advised national leaders and advanced policies that promote cleaner, resilient cities.",
    socials: [
      // { href: "https://instagram.com/", icon: "bi bi-instagram" },
      // { href: "https://facebook.com/", icon: "bi bi-facebook" },
      // { href: "https://twitter.com/", icon: "bi bi-twitter" }
    ],
  },
  {
    image: ogunyemi,
    h1: "Oniru Ogunyemi ",

    h3: "1894-1926",
    // p: "He is a public administrator and neuroscientist with over 20 years’ experience in governance. As MD/CEO of LAWMA, he drives waste management reforms using innovation, circular economy practices, and sustainability. He has also advised national leaders and advanced policies that promote cleaner, resilient cities.",
    socials: [
      // { href: "https://instagram.com/", icon: "bi bi-instagram" },
      // { href: "https://facebook.com/", icon: "bi bi-facebook" },
      // { href: "https://twitter.com/", icon: "bi bi-twitter" }
    ],
  },
  {
    image: odunloye,
    h1: "Oniru Lawani Odunloye ",

    h3: "(1927 - 1933) ",
    // p: "He is a public administrator and neuroscientist with over 20 years’ experience in governance. As MD/CEO of LAWMA, he drives waste management reforms using innovation, circular economy practices, and sustainability. He has also advised national leaders and advanced policies that promote cleaner, resilient cities.",
    socials: [
      // { href: "https://instagram.com/", icon: "bi bi-instagram" },
      // { href: "https://facebook.com/", icon: "bi bi-facebook" },
      // { href: "https://twitter.com/", icon: "bi bi-twitter" }
    ],
  },
  {
    image: abiodun,
    h1: "Oniru Yesufa Abiodun ",

    h3: "1934 - 1983",
    // p: "He is a public administrator and neuroscientist with over 20 years’ experience in governance. As MD/CEO of LAWMA, he drives waste management reforms using innovation, circular economy practices, and sustainability. He has also advised national leaders and advanced policies that promote cleaner, resilient cities.",
    socials: [
      // { href: "https://instagram.com/", icon: "bi bi-instagram" },
      // { href: "https://facebook.com/", icon: "bi bi-facebook" },
      // { href: "https://twitter.com/", icon: "bi bi-twitter" }
    ],
  },
  {
    image: idowu,
    h1: "Oniru Idowu Abiodun  ",

    h3: "1994-2019", 
    // p: "He is a public administrator and neuroscientist with over 20 years’ experience in governance. As MD/CEO of LAWMA, he drives waste management reforms using innovation, circular economy practices, and sustainability. He has also advised national leaders and advanced policies that promote cleaner, resilient cities.",
    socials: [
      // { href: "https://instagram.com/", icon: "bi bi-instagram" },
      // { href: "https://facebook.com/", icon: "bi bi-facebook" },
      // { href: "https://twitter.com/", icon: "bi bi-twitter" }
    ],
  },

];


export const AboutSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState(false);
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
    <>
      <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary"> Kabiyesi</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">
                Kabiyesi Alaiyeluwa of Iru Kingdom
              </h3>

              <p class='name' className="text-muted-foreground">
                Oba Abdulwasiu Omogbolahan Lawal (Abisogun II) is the 15th Oniru of Iruland. Born on July 24, 1970, to Chief Taoreed Lawal-Akapo and Alhaja Muinat Olabisi Abeni Ajasa Lawal-Akapo, he was enthroned on June 7, 2020, after serving as Commissioner for Agriculture in Lagos State. 
              </p>

              <p class='name'className="text-muted-foreground">
                He holds degrees from the University of Port Harcourt and the University of London, and has attended various prestigious programs, including Harvard University and the Wharton School. <span className="text-glow text-foreground"> </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <button className="cosmic-button" onClick={() => setShowModal(true)}>
                  Read More
                </button>

                <button
                  onClick={() => setActiveTab(true)}
              
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  History of Iru Land 
                </button>
              </div>
            </div>

            <div>
              <img src={imgP} alt="kabiyesi" className="border-r"/>
            </div>
          </div>
        </div>

        {activeTab && (
          <div className="absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center z-50" onClick={() => setActiveTab(false)}>
            <div className=
              "relative rounded-lg shadow-xl w-full max-w-xs sm:max-w-md md:max-w-lg mx-2 sm:mx-4 p-2 sm:p-4 md:p-8 overflow-y-auto max-h-[90vh] animate-fade-in-delay-1 backdrop-blur-2xl bg-white/120"
              onClick={e => e.stopPropagation()}
            >
                  
              <button
                className="absolute top-4 right-4 text-primary hover:text-red-500"
                onClick={() => setActiveTab(false)}
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <h3 className="text-xl font-bold mb-4 text-primary">History of Iru Land</h3>
              <p className=" text-white font-medium mb-2 text-justify text-sm sm:text-base">
                <span className="text-2xl">I</span>ru Kingdom, located in Lagos State, Nigeria, has a rich history dating back several centuries. It is one of the traditional Yoruba kingdoms and has played a significant role in the cultural and political landscape of the region. The kingdom is known for its vibrant culture, traditional festivals, and historical landmarks. Over the years, Iru Kingdom has evolved while preserving its heritage, making it a unique blend of tradition and modernity.
              </p>
               <div className="relative w-full h-72 md:h-96 overflow-hidden">
    <img 
      src="https://images.unsplash.com/photo-1577086664690-5acb0a48bf3d?auto=format&fit=crop&w=1600&q=80" 
      alt="Lagos waterfront traditional heritage" 
      class="absolute inset-0 w-full h-full object-cover brightness-75"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
    <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 fade-in">
      <h1 class="text-3xl md:text-5xl font-bold mb-3 tracking-wide">
        The Transformation of Idejo & Oniru
      </h1>
      <p class="text-lg md:text-xl italic opacity-90">A reflection on Lagos' evolving traditional heritage since the 1990s</p>
    </div>
  </div>
    <div class="space-y-6">
      <p className="text-white">
        There are two leading traditional issues trailing the <span class="font-semibold text-[#0d3b66]">Idejo chiefs of Lagos</span>, namely:
        how many are they, and how many have successfully transmuted to traditional suzerain with political power over a kingdom?
        The first question has seen very political and judicial responses about social relationships involving people, authority, and power.
      </p>

      <p className="text-white">
        Depending on the objective, the number of the Idejo chiefs have been given variously as <span class="italic">11, 16, and even 32</span>.
        However, the number that is relatively free from distortions and political or personal insertion is <span class="font-semibold">11</span>.
        Thus, the Idejo chiefs are historically believed to be the direct sons of <span class="font-semibold">Olofin Iddo</span>, who moved in the throes of migrations
        from Iddo to their present kingdoms or chiefdoms, depending on their current traditional political statuses.
      </p>

      <p className="text-white">
        The Idejos, eleven in number, have enjoyed substantial acceptance with near practicable measure of refutation.
        Various judicial panels and boards of enquiry have affirmed this position, and this has been registered in folklores and social music—
        most popular of which was serenaded by <span class="font-semibold">Lefty Salami</span> titled
        <em class="text-primary">"Oloye Mokanla."</em>
      </p>

      <h2 class="text-xl font-bold text-primary mt-10 border-l-4 border-primary pl-3">
        The Eleven Idejo Chiefs
      </h2>
      <p className="text-white">
        The eleven Idejo chiefs are:
        <span class="font-medium">Aromire, Olumegbon, Onikoyi, Onitano, Ojora, Oluwa, Onisowo, Onitolo, Oloto, Oniru,</span>
        and <span class="font-medium">Elegushi</span>.
      </p>

      <h2 class="text-xl font-bold text-primary mt-10 border-l-4 border-primary pl-3">
        Further Transformations
      </h2>
      <p className="text-white">
        The other issue is that of change in the traditional stead of Idejo title holders,
        reflecting ongoing evolution within Lagos’ socio-political and cultural landscape.
      </p>

     <div>
      <h1 className="text-primary text-2xl font-bold mt-10  border-primary pl-3">ONIRU'S EVALUATION </h1>
       <div className="flex flex-col items-center justify-center w-full py-8">
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
    </div> 
     </div>
     <div id="mafo" className="mt-12">
      <div className=" rounded-xl shadow-2xl p-6 md:p-10 animate-fade-in-delay-2 border border-primary/40 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08)_0%,transparent_70%)]"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-slide-in-up">Early Settlements and the Iru Kingdom</h2>
        <p className="text-lg text-white/90 mb-4 animate-fade-in">
          The Iru Kingdom is identified as one of the earliest settlements in the Eti-Osa area of Lagos.
        </p>
        <ul className="list-disc list-inside text-white/80 mb-6 space-y-2 animate-fade-in-delay-1">
          <li>
            <span className="font-semibold text-primary">Location:</span> Primarily located on modern-day Victoria Island, the epicenter of Iru's traditional government. Bounded in the south by the Atlantic and in the north by the Five Cowries Creek estuary, sharing a boundary with Onisiwo at Itomaro.
          </li>
          <li>
            <span className="font-semibold text-primary">The Oniru Chieftaincy:</span> The initial Awori settlers established suzerainty over about 18 villages, each under a chief and assistant.
          </li>
          <li>
            <span className="font-semibold text-primary">Antiquity of Iru:</span> Iru, as one of the Idejo settlements, is believed to predate Benin's influence over Lagos.
          </li>
          <li>
            <span className="font-semibold text-primary">Apese's Seafaring:</span> Chief Apese's people were renowned for seafaring and fishing, influencing their settlement choice.
          </li>
        </ul>
        <h3 className="text-2xl font-bold text-primary mb-4 animate-slide-in-up">The Mahin People and Their Migration</h3>
        <p className="text-white/90 mb-4 animate-fade-in">
          The Mahin people, originating from ancient Lagos Kingdom in present-day Ondo State (and Benin Republic), were expert fishermen. Their migration to Lagos was driven by rich fishing opportunities, leading to settlements in Lagos Island (Apese, Onisiwo), Mainland (Ebute-Metta, Iwaya, Otto, Iddo, Ijora, Ojo), Lekki, Epe, Ikorodu, Amuwo-Odofin, and the Western District.
        </p>
        <p className="text-white/80 mb-4 animate-fade-in-delay-1">
          Early Mahin settlements became trading depots, fostering cultural exchange and integration with Awori and Benin elements.
        </p>
        <h3 className="text-2xl font-bold text-primary mb-4 animate-slide-in-up">The Conquest of Lagos and the Role of Benin</h3>
        <p className="text-white/90 mb-4 animate-fade-in">
          In the late sixteenth century, Benin forces conquered Lagos, establishing kingship and incorporating original settlers. Chiefs like Gbaogun of Iddo and the Oba of Benin's daughter (Olu of Lagos) played key roles.
        </p>
        <p className="text-white/80 mb-4 animate-fade-in-delay-1">
          King Akinsemoyin (circa 1760) attracted Igbos to Lagos, with the nucleus of Lagos Island and Eko founded by Igbos and later ruled by Benin chiefs. The Oniru was both a chief under Lagos and referred to as Oba Mahin.
        </p>
        <h3 className="text-2xl font-bold text-primary mb-4 animate-slide-in-up">Conflicting Perspectives on Lagos History</h3>
        <p className="text-white/90 mb-4 animate-fade-in">
          Awori chiefs acknowledged Benin suzerainty but maintained local control. The Mahin, supporting both Awori and Benin, became second-class chiefs after the conquest. Some views suggest Mahin influence was economic and military, shaping Lagos through constant interaction and warfare.
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-6 items-center animate-fade-in-delay-2">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Iru Kingdom" className="rounded-lg shadow-lg w-full md:w-1/2 object-cover border-4 border-primary/30 animate-zoom-in" />
          <div className="flex-1">
            <p className="text-white/80 text-base md:text-lg">
              This complex history highlights the multifaceted origins and influences—Awori, Benin, and Mahin—that contributed to the emergence of modern-day Lagos.
            </p>
          </div>
         
        </div>
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-tr from-primary via-purple-500 to-transparent rounded-full blur-2xl opacity-40 animate-pulse"></div>
      </div>
    </div>
    <div className="mt-10">
  <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 text-center">
    <span className="text-primary">Prominent Places in Iru LGA</span> <span className="text-purple-400">Before & Now</span>
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="group relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-black/70 via-primary/30 to-purple-900/40 backdrop-blur-lg border border-primary/30 p-4 transition-all duration-500 hover:scale-105">
      <div className="flex gap-4">
        <div className="flex-1">
          <img src={ikoyiold} alt="Iru Before" className="rounded-xl w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
          <p className="mt-2 text-white/80 text-center font-semibold">Before</p>
        </div>
        <div className="flex-1">
          <img src={ikoyinew} alt="Iru Now" className="rounded-xl w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
          <p className="mt-2 text-primary text-center font-semibold">Now</p>
        </div>
      </div>
      <div class="nameee"className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg backdrop-blur-md">
        Ikoyi Club, Ikoyi
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08)_0%,transparent_70%)]"></div>
      </div>
    </div>
    <div className="group relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-black/70 via-primary/30 to-purple-900/40 backdrop-blur-lg border border-primary/30 p-4 transition-all duration-500 hover:scale-105">
      <div className="flex gap-4">
        <div className="flex-1">
          <img src={old}alt="Market Before" className="rounded-xl w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
          <p className="mt-2 text-white/80 text-center font-semibold">Before</p>
        </div>
        <div className="flex-1">
          <img src={neww} alt="Market Now" className="rounded-xl w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
          <p className="mt-2 text-primary text-center font-semibold">Now</p>
        </div>
      </div>
      <div  class ="nameee" className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg backdrop-blur-md">
        Bridge market, Victoria Island
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08)_0%,transparent_70%)]"></div>
      </div>
    </div>
  </div>
</div>
  
 
   
  

    
    </div>

            </div>
          </div>
        )   
        }
        


        {showModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 animate-fade-in-delay-6"
            onClick={() => setShowModal(false)}
          >
            <div
              className="relative rounded-lg shadow-xl w-full max-w-xs sm:max-w-md md:max-w-lg mx-2 sm:mx-4 p-2 sm:p-4 md:p-8 overflow-y-auto max-h-[90vh] animate-fade-in-delay-1 backdrop-blur-2xl bg-white/120"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="fixed top-4 right-4 z-50 text-primary hover:text-red-500 flex items-center justify-center"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                <X size={28} className="sm:size-8" />
              </button>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-primary">Education</h3>
              <p class='name' className="text-white font-medium mb-2 text-justify text-sm sm:text-base">
                <span className="text-3xl sm:text-5xl">O</span>ba Abdulwasiu Omogbolahan Lawal was born on July 24, 1970, to Chief Taoreed Lawal-Akapo, former Ojora of Lagos (1977–1993), and Alhaja Muinat Olabisi Abeni Ajasa Lawal-Akapo of Abisogun Oniru. Driven by a passion for knowledge and leadership, he earned an M.Sc. in Violence, Conflict and Development from SOAS, University of London, and an Executive M.Sc. in Cities from the London School of Economics and Political Science (LSE).<br /><br />
                Throughout his academic journey, Kabiyesi focused on understanding human conflict, development, and urban challenges. His research explored topics such as the drivers of the Niger-Delta conflict and the impact of travel costs on urban communities in Lagos. He has also completed numerous executive and certificate programs at renowned institutions, including the Wharton School, University of Cape Town, World Bank Institute, and Harvard University.<br /><br />
                Kabiyesi’s lifelong commitment to learning and service has shaped his vision for leadership and community development in Iru Kingdom.
              </p>
              <img src={teenager} alt="kabiyesi graduating" className="w-full h-auto rounded-lg my-3 sm:my-4" />
              <p className="text-white font-medium mb-2 text-justify text-sm sm:text-base">
                <span className="text-3xl sm:text-5xl">H</span>is Majesty is a seasoned administrator with over 25 years post-graduate experience and in-depth knowledge of the workings of the Public Sector in Nigeria, having served as a three-time Honourable Commissioner in the Lagos State Government.
                Kabiyesi started his public service career as a Scientific Officer with the Raw Materials Research and Development Council at the Federal Ministry of Science and Technology, Abuja in 1994. His Majesty later joined The Nigerian Police Force and was commissioned as a Cadet Assistant Superintendent.
                Amongst several other duties while in service, Kabiyesi was Aide-De-Camp to Asiwaju Bola Ahmed Tinubu GCFR, who was then the Governor of Lagos State and now President and Commander-in-Chief of the Armed Forces of the Federal Republic. His Majesty voluntarily retired from the Nigerian Police in 2008 as a Superintendent of Police.
                Subsequently, Oba Lawal was appointed as a Senior Special Assistant to the Governor Mr. Babatunde Raji Fashola, SAN on Special Projects. In this capacity, he coordinated the Agriculture-Based Youth Empowerment Scheme (Agric-YES). The success of the innovative Agric-YES paved the way for his appointment as the Honourable Commissioner for Agriculture and Cooperatives in Lagos State in 2011. During his time as the Honourable Commissioner, Ministry of Agriculture and Cooperatives (2011- 2015)
              </p>
              <p className="text-white font-medium mb-2 text-justify text-sm sm:text-base">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-primary">Service</h3>
                <span className="text-2xl sm:text-3xl">H</span>e Initiated the following programmes and reforms:
                <ul className="list-disc list-inside ml-4">
                  <li>The School Agric Programme and the Agric-YES Summer School for Senior Secondary Schools</li>
                  <li>The Eko Rice Mill, Imota</li>
                  <li>The High Quality Cassava Factory, Araga</li>
                  <li>The Annual Lagos Seafood Festival now Lagos Food Festival</li>
                  <li>The Agric Value-chain Empowerment programme</li>
                  <li>The Eko Farmers Mart</li>
                  <li>Eko Live Animal Transport project - this put an end to walking animals from the animal market to the slaughter slab/abbatoir in Lagos</li>
                  <li>Raised the State's food security profile by creating jobs and wealth directly and indirectly for over 250,000 people across the agricultural value chains for the benefit of Lagos State.</li>
                  <li>Supervised and managed over 10,000 cooperative societies with a member strength of one million persons spread across public and private organizations with an asset base of over N60 billion.</li>
                </ul>
                His Majesty's impeccable public service record and ability to address urban challenges, led to another appointment as the Honourable Commissioner for Housing by Governor Akinwunmi Ambode, an office Oba Lawal served in from October 2015 till May 2019. During the period, a lot of programs and landmark projects were designed, implemented and achieved under his leadership as Honourable Commissioner such as:
                Rent-to-own Home Ownership, Master craftsman program (an initiative for artisans and workmen in the built industry), Lagos Affordable Public Housing (LAPH), 4-in-14 days Bungalow Housing Development, as well as, promoted Transit-Oriented development (TOD).
                On August, 20th 2019, Oba Lawal was again appointed as the Honourable Commissioner, Ministry of Agriculture and food systems, until he ascended the throne of his forebearers in June 2020. In that time, <br /> He was able to achieve the following:
                <ul className="list-disc list-inside ml-4">
                  <li>Developed the five-year Agricultural Roadmap for the State (2020-2025).</li>
                  <li>Midwifed and superintended the State Government's food security and palliative efforts during the COVID-19 public health emergency. This effort benefitted about 1 million vulnerable households in Lagos. It became a model adopted by other states and the FCT</li>
                  <li>Coordinated and to the admiration of all, the twin efforts of the Emergency Food Response and the Temporary Food Markets.</li>
                  <li>In addition to being a member of the Lagos State Executive Council, His Majesty also served as a Board Member of the Lagos State Security Trust Fund for 8 years.</li>
                </ul>
              </p>
              <p className="text-white font-medium mb-2 text-justify text-sm sm:text-base">
                Oba Abdulwasiu Omogbolahan Lawal
had a very impressive work history which in an evaluative sense. He started on Oct. 1992 to Sept. 1993, when he participated in the mandatory one-year NYSC at Federal Capital Development Authority, Abuja (NYSC). This was soon to be followed by his employment at the Raw Materials Research and Development Council, <br />
<br /> <img src={ADC} alt="" />
<br />
Federal Ministry of Science and Technology from July 1994 to July 1996. He later enlisted in the Nigeria Police Force from August 1996 to April 1998, when he was commissioned as Assistant Superintendent of Police and by October 2008 he had retired as Superintendent of Police. His police assignment was an exposé to the people and societies of the Nigerian state as he moved around the country in the service of his duty to the nation. Oba Lawal's veridical of public office however started in June 1999 when he was Aide de Camp (ADC)/Escort Commander to the Covernor of Lagos State. He carried out his assignments with dispatch until 2007 when his designated goal of Chief Security Officer to the Governor came to an end with the completion of Asiwaju Bola Ahmed Tinibu's tenure as governor.He was later appointed Senior Special Assistant (Special Projects) to the succeeding Governor Fashola fromDecember 2008 through July 2011. Oba Lawal is a three-time Honorable Commissioner in Lagos, a seasoned security and development practitioner, with a deep grasp of political economy of development especially in low-and middle-income economies. He served as Commissioner for Agriculture & Cooperatives from July 2011 - May 2015, Commissioner for Housing from October 2015 to May 2019, and Commissioner for Agriculture, August 2019 till June 4, 2020. Oba Abdul-Wasiu Omogbolahan Lawal became the 15th Oniru on June 7, 2020.
<br /> <br /><img src={ADCII} alt="" />
              </p>
              <p className="text-white font-medium mb-2 text-justify text-sm sm:text-base">
                <br /><span className="text-2xl">T</span>he Iru kingdom may be about to witness one of the most unprecedented developments directly under a monarch.
                Many theories of development have attirmed that development thrives on ideas but more important is the tact that ideas are not self-applying, individuals will have to drive them. To be able to do this, such individuals the drivers of development) must first be refined and possess key indicators that they also have internalized the process at personal level.
                For a monarch of Oba Lawa's pedigree, a personal limit has been set for what can be said to be acceptable standard and value for human development. The Oba attended conferences and workshops to put him in his stead to bring more development to Iru Kingdom. <br />
                Some of such trainings included but not limited to the following: 
                <ul className="list-disc list-inside ml-4">
                  <li>Lagos State Security Summit (April 2018)</li>
                  <li>Workshop on Building an End-to-End Ecosystem for Affordable Housing, Lagos (2017)</li>
                  <li>Nigeria Real Estate Summit and Expo 2017</li>
                  <li>West Africa Property Investment Summit, Lagos (Nov. 2017)</li>
                  <li>Real Estate Investment Seminar (REIT), Lagos (2017)</li>
                  <li>Young Achievers Summit, 2017</li>
                  <li>Workshop for Judicial Officers on the Nigeria Housing Finance Program (Sept 2017)</li>
                  <li>African Property Investment Summit, Johannesburg, South Africa (August 2017)</li>
                  <li>African Union Housing Finance (AUHF) Conference, Abuja (Sept. 2016)</li>
                  <li>Institute of Directors Conference, Lagos (July 2016)</li> <li>7th Global Housing Finance Conference, World Bank Institute, Washington DC, USA (May 2016)</li>
                  <li>Resource Person at World Bank Learning Forum for Niger Delta States: Abuja, Nigeria (December 2009)</li>
                  <li>World Bank Learning Forum on Social Protection Responses to the Three Waves of Crisis viz Finance, Food & Fuel: Cairo, Egypt (June 2009)</li> <br /> Oba Abdulwasiu Omogbolahan Lawal had a very impressive work history, which, in an evaluative sense, began on Oct. 1992 to Sept. 1993, when he participated in the mandatory one-year NYSC at the Federal Capital Development Authority, Abuja (NYSC). This was soon to be followed by his employment at the Raw Materials Research and Development Council.
                  <p>He served at the <strong>Federal Ministry of Science and Technology</strong> from July 1994 to July 1996. He later enlisted in the <strong>Nigeria Police Force</strong> from August 1996 to April 1998, when he was commissioned as Assistant Superintendent of Police. By October 2008, he had retired as Superintendent of Police. His police assignment provided exposure to the people and societies of the Nigerian state as he moved around the country in the service of his duty to the nation.</p><p>Oba Lawal's veridical journey in public office began in June 1999 when he was appointed <strong>Aide-de-Camp (ADC)/Escort Commander</strong> to the Governor of Lagos State. He carried out his assignments with dispatch until 2007, when his designated goal of Chief Security Officer to the Governor came to an end with the completion of Asiwaju Bola Ahmed Tinubu's tenure as governor.</p>

<p>He was later appointed <strong>Senior Special Assistant (Special Projects)</strong> to the succeeding Governor, Fashola, from December 2008 through July 2011.</p>

<p>Oba Lawal is a <strong>three-time Honorable Commissioner</strong> in Lagos, a seasoned security and development practitioner with a deep grasp of the political economy of development, especially in low- and middle-income economies. He served as:</p>

<ul>
  <li><strong>Commissioner for Agriculture & Cooperatives</strong> from July 2011 to May 2015</li>
  <li><strong>Commissioner for Housing</strong> from October 2015 to May 2019</li>
  <li><strong>Commissioner for Agriculture</strong> from August 2019 to June 4, 2020</li>
</ul>

<p><strong>Oba Abdul-Wasiu Omogbolahan Lawal</strong> became the <strong>15th Oniru of Iruland</strong> on June 7, 2020.  <img src={shetima} alt="" /></p>
                </ul>
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  );
};
