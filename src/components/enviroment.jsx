import { Navbar } from "./Navbar.jsx";
import { ThemeToggle } from "./ThemeToggle.jsx";
import { StarBackground } from './StarBackground.jsx'
import { Footer } from "./Footer.jsx";
import cleaning from "/projects/cleaning.JPG";
import plants from "/projects/plants.JPG";
import lawman from "/projects/LAWMA.JPG";
import clanningII from "/projects/cleaningII.JPG";
import env1 from "/projects/env1.jpeg";
import env2 from "/projects/env2.jpeg";
import env3 from "/projects/env3.jpeg";
import env4 from "/projects/env4.jpeg";
import env5 from "/projects/env5.jpeg";
import env6 from "/projects/env6.jpeg";
import env7 from "/projects/env7.jpeg";

export function ENviroment() {
  const landmarks = [
    {
      name: "Four Points Sheraton Oniru",
      image: env1,
      description: "Premier hospitality destination offering world-class accommodations and amenities"
    },
    {
      name: "The Palms Shopping Mall",
      image: env2,
      description: "Upscale retail and entertainment complex serving the affluent Oniru community"
    },
    {
      name: "Get Arena",
      image: env3,
      description: "State-of-the-art entertainment and events venue"
    },
    {
      name: "Landmark Centre",
      image: env4,
      description: "Premier commercial and retail destination"
    },
    {
      name: "Oriental Hotel",
      image: env5,
      description: "Iconic luxury hospitality establishment"
    },
    {
      name: "Oniru Palace",
      image: env6,
      description: "Historic seat of traditional authority and cultural significance"
    }
  ];

  return (
    <>
      <Navbar />
      <ThemeToggle />
      <StarBackground />
      
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-slate-900 via-slate-800 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Oniru, Lagos
          </h1>
          <p className="text-xl text-gray-200 mb-2 font-light">An Official Area Guide</p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of Lagos's most prestigious residential and commercial district
          </p>
        </div>
      </section>

      {/* Geographic Location Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Geographical Location of Oniru</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Oniru is strategically nestled between Victoria Island and Lekki Phase 1, positioning it as one of Lagos's most sought-after residential and commercial districts on the Lekki Peninsula.
              </p>
              <div className="bg-blue-50 border-l-4 border-primary p-6 rounded">
                <h3 className="font-semibold text-slate-900 mb-3 text-lg">Boundaries</h3>
                <p className="text-gray-700">
                  Oniru borders Victoria Island to the south and Lekki Phase 1 to the north, offering unparalleled proximity to Lagos's most important business, shopping, and entertainment centers.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-12 rounded-lg">
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide">Distance from Key Hubs</p>
                  <p className="text-2xl font-bold text-slate-900 mt-2">Minutes to Victoria Island</p>
                </div>
                <div className="border-b pb-4">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide">Accessibility</p>
                  <p className="text-2xl font-bold text-slate-900 mt-2">Premium Transportation Links</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide">Classification</p>
                  <p className="text-2xl font-bold text-slate-900 mt-2">Tier-1 Residential District</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Key Features & Amenities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Strategic Proximity</h3>
              <p className="text-gray-700 leading-relaxed">
                Oniru's prime location enables residents to enjoy seamless access to Victoria Island's business hub and Lekki's burgeoning commercial and residential developments, making it ideal for professionals and investors.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Luxury Amenities</h3>
              <p className="text-gray-700 leading-relaxed">
                An abundance of premium offerings including world-class shopping malls, upscale dining establishments, five-star hotels, and sophisticated recreational facilities cater to the most discerning residents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demographics & Lifestyle Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Demographics & Lifestyle</h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Population Profile</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Oniru is home to a carefully curated demographic comprising influential executives, international expatriates, and accomplished upper-middle-class professionals who value quality of life and sophistication.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg mt-1">•</span>
                  <span className="text-gray-700">Young professionals and corporate leaders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg mt-1">•</span>
                  <span className="text-gray-700">High-net-worth individuals and entrepreneurs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg mt-1">•</span>
                  <span className="text-gray-700">International expatriate community</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg mt-1">•</span>
                  <span className="text-gray-700">Established business professionals</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Lifestyle Attributes</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4 py-2">
                  <p className="font-semibold text-slate-900 mb-1">Refined Urban Living</p>
                  <p className="text-gray-600 text-sm">Premium residential spaces seamlessly integrated with vibrant city amenities</p>
                </div>
                <div className="border-l-4 border-primary pl-4 py-2">
                  <p className="font-semibold text-slate-900 mb-1">Culinary Excellence</p>
                  <p className="text-gray-600 text-sm">Access to fine dining, beachside restaurants, and upscale lounges</p>
                </div>
                <div className="border-l-4 border-primary pl-4 py-2">
                  <p className="font-semibold text-slate-900 mb-1">Leisure & Recreation</p>
                  <p className="text-gray-600 text-sm">World-class entertainment venues and recreational facilities</p>
                </div>
                <div className="border-l-4 border-primary pl-4 py-2">
                  <p className="font-semibold text-slate-900 mb-1">Community Tranquility</p>
                  <p className="text-gray-600 text-sm">Serene residential environment with proximity to dynamic commercial centers</p>
                </div>
              </div>
            </div>
          </div>
          {/* Lifestyle Image Gallery */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Community Spaces & Amenities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition h-56">
                <img src={plants} alt="Community Gardens" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition h-56">
                <img src={cleaning} alt="Community Maintenance" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition h-56">
                <img src={lawman} alt="Environmental Care" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition h-56">
                <img src={clanningII} alt="Community Cleanliness" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate Market Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Real Estate Market Overview</h2>
          
          {/* Residential Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-8">Residential Properties</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Oniru's residential portfolio comprises meticulously designed luxury properties that exemplify contemporary sophistication and architectural excellence.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">Property Offerings</p>
                <h4 className="text-lg font-bold text-slate-900 mb-3">Diverse Portfolio</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• High-rise luxury apartments</li>
                  <li>• Executive villas</li>
                  <li>• Gated residential communities</li>
                  <li>• Townhouses</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">Apartment Pricing</p>
                <h4 className="text-lg font-bold text-slate-900 mb-3">₦10M – ₦50M+</h4>
                <p className="text-sm text-gray-600">Dependent on size, location, architectural features, and premium amenities</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">Villa Pricing</p>
                <h4 className="text-lg font-bold text-slate-900 mb-3">₦50M – ₦200M+</h4>
                <p className="text-sm text-gray-600">Premium luxury villas reflecting exceptional value and prestige</p>
              </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-primary p-6 rounded mt-6">
              <p className="font-semibold text-slate-900 mb-2">Rental Market Performance</p>
              <p className="text-gray-700">Apartments command annual rental rates of ₦1M–₦5M, whilst luxury villas attract premium rates reflecting their high-value status and exclusive features.</p>
            </div>
          </div>

          {/* Commercial Section */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-8">Commercial Properties</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Oniru has emerged as a dynamic commercial destination, attracting forward-thinking businesses and institutional investors capitalizing on the area's affluent demographics and premium infrastructure.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-slate-900 mb-3">Office Spaces</h4>
                <p className="text-gray-700 mb-4">Prime office accommodations designed for enterprises serving high-net-worth clientele and international business interests.</p>
                <p className="text-sm text-gray-600 font-semibold">Pricing varies by location, infrastructure quality, and facility specifications</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-slate-900 mb-3">Retail Spaces</h4>
                <p className="text-gray-700 mb-4">Strategic retail locations capitalizing on the growing concentration of affluent consumers and luxury-oriented merchants.</p>
                <p className="text-sm text-gray-600 font-semibold">High demand among brands targeting premium market segments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Drivers Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Market Growth Catalysts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏗️</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Infrastructure Development</h3>
              <p className="text-gray-700">Strategic investments in road networks, utilities, and commercial infrastructure enhance Oniru's appeal as a premier real estate investment destination.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Strategic Investment</h3>
              <p className="text-gray-700">Continued capital allocation from premium developers focused on luxury residential and high-end commercial property development.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Regulatory Framework</h3>
              <p className="text-gray-700">Robust government policies ensure sustainable development, providing institutional confidence for long-term property investment.</p>
            </div>
          </div>
          {/* Investment opportunity image */}
          <div className="mt-12">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={env7} alt="Oniru Development Opportunity" className="w-full h-96 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Notable Developments Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Notable Developments</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Residential Prestige Projects</h3>
              <ul className="space-y-4">
                <li className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-slate-900">Oniru Estate</p>
                  <p className="text-gray-600 text-sm mt-1">Contemporary luxury living with state-of-the-art residential amenities</p>
                </li>
                <li className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-slate-900">The Grandview</p>
                  <p className="text-gray-600 text-sm mt-1">Sophisticated residential enclave offering premium modern design</p>
                </li>
                <li className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-slate-900">Vantage Court</p>
                  <p className="text-gray-600 text-sm mt-1">Exclusive residential community with premium facilities and services</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Commercial Developments</h3>
              <ul className="space-y-4">
                <li className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-slate-900">The Metropole</p>
                  <p className="text-gray-600 text-sm mt-1">Premier office complex catering to institutional and corporate tenants</p>
                </li>
                <li className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-slate-900">Landmark Village</p>
                  <p className="text-gray-600 text-sm mt-1">Sophisticated retail spaces serving the affluent consumer market</p>
                </li>
                <li className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-slate-900">Mixed-Use Developments</p>
                  <p className="text-gray-600 text-sm mt-1">Contemporary commercial-residential complexes driving market innovation</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Landmarks Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Iconic Landmarks</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Defining institutions that exemplify Oniru's sophistication and prestige</p>
          <div className="grid md:grid-cols-3 gap-8">
            {landmarks.map((landmark, idx) => (
              <div key={idx} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative h-56 overflow-hidden bg-gray-200">
                  <img 
                    src={landmark.image} 
                    alt={landmark.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{landmark.name}</h3>
                  <p className="text-gray-600 text-sm">{landmark.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Oniru Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto text-white">
          <h2 className="text-4xl font-bold mb-8 text-center">Why Choose Oniru?</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-3">Prime Strategic Location</h3>
              <p className="text-gray-200">Positioned between Lagos's premier business and residential hubs, offering unmatched accessibility and commercial opportunity.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <div className="text-3xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-3">Luxury Market Excellence</h3>
              <p className="text-gray-200">Synonymous with premium real estate offerings that attract discerning homeowners, sophisticated investors, and international principals.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <div className="text-3xl mb-4">💎</div>
              <h3 className="text-xl font-bold mb-3">Investment Potential</h3>
              <p className="text-gray-200">Strong market fundamentals, robust rental yields, and enduring demand for premium commercial space create compelling investment returns.</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/20 rounded-lg p-8 text-center">
            <p className="text-lg leading-relaxed mb-4">
              Whether acquiring luxury residences, prestigious villas, or strategically positioned commercial assets, Oniru represents the definitive choice for sophisticated investors and discerning residents who demand premium standards and exceptional returns.
            </p>
            <p className="text-gray-300 text-sm">
              As Oniru continues its evolution as Lagos's premier address, its real estate market remains an exceptional wealth-creation opportunity for both principal residents and institutional investors alike.
            </p>
          </div>
        </div>
      </section>

      {/* Future Prospects Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Future Outlook & Market Trajectory</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Growth Trajectory</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Oniru is positioned to maintain its status as one of Lagos's premier real estate destinations, supported by ongoing infrastructure expansion, sustained capital investment, and robust market demand for luxury properties.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Continued infrastructure development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Expansion of commercial facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Persistent investor confidence</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Market Trends</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The sustained trajectory toward high-end, luxury property development is expected to persist, ensuring Oniru's continued appeal to affluent residential buyers, institutional investors, and commercial enterprises.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">→</span>
                  <span>Growing demand for premium residences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">→</span>
                  <span>Expansion of commercial real estate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">→</span>
                  <span>Enhanced value appreciation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Character & Experience Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">The Oniru Experience</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-bold text-slate-900 mb-2 text-lg">The Community</h3>
                  <p className="text-gray-700">An distinguished cohort of prominent executives, international expatriates, and celebrated professionals who epitomize excellence and sophistication.</p>
                </div>
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-bold text-slate-900 mb-2 text-lg">The Essence</h3>
                  <p className="text-gray-700">Oniru exemplifies refined residential living characterised by contemporary architecture, gated security, and meticulously designed communities.</p>
                </div>
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-bold text-slate-900 mb-2 text-lg">The Character</h3>
                  <p className="text-gray-700">A tranquil, family-oriented environment that seamlessly balances serene residential aesthetics with vibrant urban connectivity.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-bold text-slate-900 mb-2 text-lg">What to Expect</h3>
                  <p className="text-gray-700">Sophisticated residential compounds, contemporary townhouses, and carefully managed security infrastructure that prioritises resident safety and privacy.</p>
                </div>
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-bold text-slate-900 mb-2 text-lg">The Appeal</h3>
                  <p className="text-gray-700">Peaceful residential tranquility, expedited access to Victoria Island's business district, proximity to Lekki Phase 1, and exceptional beachside dining and leisure venues.</p>
                </div>
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-bold text-slate-900 mb-2 text-lg">Market Evolution</h3>
                  <p className="text-gray-700">Continued development of contemporary high-rise residential and commercial structures that expand Oniru's real estate portfolio and market opportunity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-lg p-12 shadow-sm text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Premier Oniru Experience Awaits</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
              Oniru represents the pinnacle of Lagos's residential and commercial real estate market. From luxury family residences to institutional office spaces, Oniru offers uncompromising standards of design, amenity, and lifestyle. Whether you are an international investor, a corporate professional, or a family seeking a premium address, Oniru remains the definitive choice for those who demand the finest in urban living and investment opportunity.
            </p>
            <p className="text-primary font-semibold text-lg">
              Experience Oniru — Where Lagos's Legacy Meets Its Future
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
