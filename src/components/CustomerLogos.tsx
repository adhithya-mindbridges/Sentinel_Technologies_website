import { Card } from "@/components/ui/card";

import kpl from "@/assets/customers/logos/kpl.png";
import hero from "@/assets/customers/logos/hero.png";
import ashokLeyland from "@/assets/customers/logos/ashok-leyland.png";
import pegatron from "@/assets/customers/logos/pegatron.png";
import daimler from "@/assets/customers/logos/daimler.png";
import danfoss from "@/assets/customers/logos/danfoss.png";
import tvs from "@/assets/customers/logos/tvs.png";
import addison from "@/assets/customers/logos/addison.png";
import foxconnHonHai from "@/assets/customers/logos/foxconn-honhai.png";
import foxconn from "@/assets/customers/logos/foxconn.png";
import tata from "@/assets/customers/logos/tata.png";
import dixon from "@/assets/customers/logos/dixon.png";
import flex from "@/assets/customers/logos/flex.png";
import motherson from "@/assets/customers/logos/motherson.png";
import voltas from "@/assets/customers/logos/voltas.png";
import tvsTyres from "@/assets/customers/logos/tvs-tyres.png";
import sagtaur from "@/assets/customers/logos/sagtaur.png";
import keltron from "@/assets/customers/logos/keltron.png";
import firstSolar from "@/assets/customers/logos/first-solar.png";
import chennaiMetroRail from "@/assets/customers/logos/chennai-metro-rail.png";
import bharatFih from "@/assets/customers/logos/bharat-fih.png";
import jktyre from "@/assets/customers/logos/jktyre.png";
import padget from "@/assets/customers/logos/padget.png";
import kcic from "@/assets/customers/logos/kcic.png";
import cisb from "@/assets/customers/logos/cisb.png";
import mrf from "@/assets/customers/logos/mrf.png";
import bvg from "@/assets/customers/logos/bvg.png";

const customers = [
  { name: "KPL", logo: kpl },
  { name: "Hero MotoCorp", logo: hero },
  { name: "Ashok Leyland", logo: ashokLeyland },
  { name: "Pegatron", logo: pegatron },
  { name: "Daimler", logo: daimler },
  { name: "Danfoss", logo: danfoss },
  { name: "TVS", logo: tvs },
  { name: "Addison & Co", logo: addison },
  { name: "Foxconn / Hon Hai", logo: foxconnHonHai },
  { name: "Foxconn", logo: foxconn },
  { name: "Tata", logo: tata },
  { name: "Dixon", logo: dixon },
  { name: "Flex", logo: flex },
  { name: "Motherson", logo: motherson },
  { name: "Voltas", logo: voltas },
  { name: "TVS Tyres", logo: tvsTyres },
  { name: "SagTaur", logo: sagtaur },
  { name: "Keltron", logo: keltron },
  { name: "First Solar", logo: firstSolar },
  { name: "Chennai Metro Rail Limited", logo: chennaiMetroRail },
  { name: "Bharat FIH", logo: bharatFih },
  { name: "JK Tyre", logo: jktyre },
  { name: "Padget", logo: padget },
  { name: "KCIC", logo: kcic },
  { name: "CISB", logo: cisb },
  { name: "MRF", logo: mrf },
  { name: "bvg", logo: bvg },
];

const CustomerLogos = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-security-dark mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're proud to serve some of the most respected companies across various industries
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll w-max">
            {[...customers, ...customers].map((customer, index) => (
              <Card
                key={`${customer.name}-${index}`}
                className="flex-shrink-0 mx-4 p-6 bg-white hover:shadow-md transition-shadow duration-300"
              >
                <div className="h-12 w-32 flex items-center justify-center">
                  <img
                    src={customer.logo}
                    alt={customer.name}
                    className="max-h-12 max-w-32 w-auto h-auto object-contain"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: marquee 30s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default CustomerLogos;
