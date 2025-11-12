import { Briefcase, Code, User, X } from "lucide-react";
import imgP from "/projects/self-img.jpg";
import teenager from "/projects/tennagerkabiyesi.jpg"
import ADC from "/projects/kabiyesiXADC.jpg"
import ADCII from "/projects/serviceofficer.jpg"
import shetima from "/projects/kabiyesiXsetima.jpg"

import { useState, useEffect } from "react";
import onigefon from "/projects/onigefon.jpeg";
import mabogunje from "/projects/mabogunje.jpeg";
import ihuntayi from "/projects/ihuntayi.jpeg";
import odudu from "/projects/odudu.jpeg";
import abanu from "/projects/abanu.jpeg";
import olaletan from "/projects/olaletan.jpeg"
import orisasanya from "/projects/orisasanya.jpeg"
import orunbe from "/projects/orunbe.jpeg"
import abisogun from "/projects/abisogun.jpeg"
import akiogun from "/projects/akiogun.jpeg"
import ogunyemi from "/projects/ogunyemi.jpeg"
import odunloye from "/projects/odunloye.jpeg"
import abiodun from "/projects/abiodun.jpeg"
import idowu from "/projects/abiodun.jpeg"

import old from "/projects/bridgeold.jpg"
import neww from "/projects/bridgenew.jpg"
import ikoyinew from "/projects/ikoyiclubnew.jpg"
import ikoyiold from "/projects/ikoyiclubold.jpg"








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
      <section id="about" className="py-20 px-4 relative overflow-hidden">
        {/* Background gradient accent */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent"> Kabiyesi</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the vision and leadership of Oba Abdulwasiu Omogbolahan Lawal
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left: Text Content */}
            <div className="space-y-6 animate-slide-in-left">
              <div className="space-y-3">
                <h3 className="text-3xl font-bold text-foreground">
                  Oba Abdulwasiu Omogbolahan Lawal
                </h3>
                <p className="text-lg font-semibold text-primary">
                  15th Oniru of Iruland
                </p>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-base md:text-lg">
                  Born on <span className="font-semibold text-foreground">July 24, 1970</span>, to Chief Taoreed Lawal-Akapo and Alhaja Muinat Olabisi Abeni Ajasa Lawal-Akapo, His Majesty was enthroned as the 15th Oniru of Iruland on <span className="font-semibold text-foreground">June 7, 2020</span>.
                </p>

                <p className="text-base md:text-lg">
                  A seasoned administrator with over 25 years of post-graduate experience, Kabiyesi brings exceptional knowledge of the public sector, having served as a three-time Honourable Commissioner in the Lagos State Government.
                </p>

                <p className="text-base md:text-lg">
                  His academic excellence is evident through his Master's degrees from SOAS, University of London, and the London School of Economics and Political Science (LSE), specializing in Violence, Conflict, and Development and Cities respectively.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="cosmic-button px-8 py-3 font-semibold" onClick={() => setShowModal(true)}>
                  Read Full Biography
                </button>

                <button
                  onClick={() => setActiveTab(true)}
                  className="px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 font-semibold"
                >
                  Kingdom History
                </button>
              </div>
            </div>

            {/* Right: Image */}
            <div className="animate-fade-in-delay-2">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-2xl blur-xl opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <img 
                  src={imgP} 
                  alt="Kabiyesi Oba Abdulwasiu Omogbolahan Lawal"
                  className="relative w-full rounded-2xl shadow-2xl object-cover h-96 md:h-[500px]"
                />
              </div>
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
        

{/* the about  */}
        {showModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in"
            onClick={() => setShowModal(false)}
          >
            <div
              className="relative rounded-2xl shadow-2xl w-full max-w-2xl mx-2 sm:mx-4 max-h-[95vh] overflow-hidden animate-scale-in"
              onClick={e => e.stopPropagation()}
            >
              {/* Header with gradient background */}
              <div className="bg-gradient-to-r from-primary via-purple-500 to-primary p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <button
                  className="absolute top-6 right-6 z-50 text-white hover:text-red-300 transition-colors"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                >
                  <X size={32} />
                </button>
                <h2 className="text-4xl font-bold mb-2 relative z-10">Full Biography</h2>
                <p className="text-white/90 text-lg relative z-10">Oba Abdulwasiu Omogbolahan Lawal - 15th Oniru of Iruland</p>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[calc(95vh-200px)] bg-white/95 backdrop-blur-lg p-8 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
                    <div className="w-1 h-8 bg-primary rounded-full"></div>
                    Early Life & Education
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    <span className="text-4xl font-bold text-primary">O</span>ba Abdulwasiu Omogbolahan Lawal was born on <strong>July 24, 1970</strong>, to Chief Taoreed Lawal-Akapo (former Ojora of Lagos, 1977–1993) and Alhaja Muinat Olabisi Abeni Ajasa Lawal-Akapo of Abisogun Oniru. Driven by an exceptional passion for knowledge and strategic leadership, he pursued advanced academic studies at world-renowned institutions.
                  </p>
                  <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
                    <p className="text-foreground font-semibold mb-2">Academic Credentials:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>✓ M.Sc. in Violence, Conflict and Development from SOAS, University of London</li>
                      <li>✓ Executive M.Sc. in Cities from London School of Economics and Political Science (LSE)</li>
                      <li>✓ Executive programs from Wharton School, University of Cape Town, World Bank Institute, and Harvard University</li>
                    </ul>
                  </div>
                  <img src={teenager} alt="Kabiyesi graduating" className="w-full rounded-xl shadow-lg mt-4" />
                </div>

                {/* Public Service */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
                    <div className="w-1 h-8 bg-primary rounded-full"></div>
                    Public Service Career
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    <span className="text-4xl font-bold text-primary">A</span> seasoned administrator with over 25 years of post-graduate experience, His Majesty brings exceptional expertise in public sector management and urban development. His career trajectory showcases unwavering commitment to service and excellence.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 p-4 rounded-lg border-l-4 border-primary">
                      <p className="font-bold text-foreground">1994-1996: Raw Materials Research & Development Council</p>
                      <p className="text-muted-foreground text-sm">Scientific Officer at Federal Ministry of Science and Technology, Abuja</p>
                    </div>
                    <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 p-4 rounded-lg border-l-4 border-primary">
                      <p className="font-bold text-foreground">1996-2008: Nigerian Police Force</p>
                      <p className="text-muted-foreground text-sm">Commissioned as Cadet Assistant Superintendent, retired as Superintendent of Police</p>
                    </div>
                    <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 p-4 rounded-lg border-l-4 border-primary">
                      <p className="font-bold text-foreground">1999-2007: Aide-de-Camp to Governor Tinubu</p>
                      <p className="text-muted-foreground text-sm">Chief Security Officer to the Governor of Lagos State</p>
                    </div>
                  </div>
                </div>

                {/* Commissioners Achievements */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
                    <div className="w-1 h-8 bg-primary rounded-full"></div>
                    Key Achievements as Commissioner
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Agriculture Commissioner */}
                    <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 p-5 rounded-xl border border-primary/20">
                      <p className="font-bold text-primary text-lg mb-3">Commissioner for Agriculture & Cooperatives (2011-2015)</p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>✓ Established The Eko Rice Mill, Imota - landmark agricultural infrastructure</li>
                        <li>✓ Launched School Agric Programme and Agric-YES Summer School</li>
                        <li>✓ Created Eko Farmers Mart and expanded cooperative societies (10,000+ societies)</li>
                        <li>✓ Generated direct employment for 250,000+ people in agricultural value chains</li>
                      </ul>
                    </div>

                    {/* Housing Commissioner */}
                    <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 p-5 rounded-xl border border-primary/20">
                      <p className="font-bold text-primary text-lg mb-3">Commissioner for Housing (2015-2019)</p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>✓ Pioneered Rent-to-Own Home Ownership programme</li>
                        <li>✓ Established Lagos Affordable Public Housing (LAPH)</li>
                        <li>✓ Promoted Transit-Oriented Development (TOD) initiatives</li>
                        <li>✓ Created Master Craftsman Programme for artisans and builders</li>
                      </ul>
                    </div>

                    {/* Agriculture & Food Systems */}
                    <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 p-5 rounded-xl border border-primary/20">
                      <p className="font-bold text-primary text-lg mb-3">Commissioner for Agriculture & Food Systems (2019-2020)</p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>✓ Developed Five-Year Agricultural Roadmap for Lagos State</li>
                        <li>✓ Led food security initiatives benefiting 1 million households during COVID-19</li>
                        <li>✓ Established Emergency Food Response and Temporary Food Markets</li>
                        <li>✓ Model adopted by other states and the FCT</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Leadership Training */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
                    <div className="w-1 h-8 bg-primary rounded-full"></div>
                    Professional Development
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    His commitment to excellence extends to continuous professional development through participation in global forums and conferences on development, governance, and urban planning.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="text-sm text-muted-foreground bg-white/50 p-3 rounded-lg">📍 World Bank Institute, Washington DC (2016)</div>
                    <div className="text-sm text-muted-foreground bg-white/50 p-3 rounded-lg">📍 African Property Investment Summit, Johannesburg (2017)</div>
                    <div className="text-sm text-muted-foreground bg-white/50 p-3 rounded-lg">📍 Harvard University Leadership Programs</div>
                    <div className="text-sm text-muted-foreground bg-white/50 p-3 rounded-lg">📍 Institute of Directors Conference, Lagos</div>
                  </div>
                </div>

                {/* Enthronement */}
                <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 p-6 rounded-xl border-2 border-primary/30 text-center">
                  <p className="text-muted-foreground mb-2">Oba Abdul-Wasiu Omogbolahan Lawal</p>
                  <p className="text-2xl font-bold text-primary">15th Oniru of Iruland</p>
                  <p className="text-muted-foreground mt-2">Enthroned on June 7, 2020</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default AboutSection;
