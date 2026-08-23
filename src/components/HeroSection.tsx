import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Lock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-building.jpg";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero py-20 lg:py-32 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="order-2 lg:order-1"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {/* <motion.div variants={item} className="flex items-center space-x-3 mb-6">
              <img src={"src/assets/sentinel-logo-transparent.png"} alt="" className="w-8 h-8" />
              <span className="text-lg font-semibold text-primary">Sentinel Technologies</span>
            </motion.div> */}

            <motion.h1 variants={item} className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-balance">
              Advanced Security &{" "}
              <span className="text-primary">ELV Solutions</span>
            </motion.h1>

            <motion.p variants={item} className="text-xl text-white/90 mb-8 leading-relaxed">
              Comprehensive security infrastructure including CCTV surveillance, access control,
              fire safety, and building automation. Trusted by leading organizations across industries.
            </motion.p>

            {/* Key Services Icons */}
            <motion.div variants={item} className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Camera className="w-8 h-8 text-primary" />
                </div>
                <span className="text-white/90 text-sm">CCTV Systems</span>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-8 h-8 text-primary" />
                </div>
                <span className="text-white/90 text-sm">Access Control</span>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <span className="text-white/90 text-sm">24/7 Support</span>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg rounded-lg shadow-security transition-transform duration-300 hover:scale-105"
              >
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-security-dark px-8 py-4 text-lg rounded-lg transition-all duration-300"
                onClick={() => document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Our Solutions
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <img
                src={heroImage}
                alt="Modern building with advanced security systems"
                className="rounded-2xl shadow-security w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-security-dark/30 to-transparent rounded-2xl"></div>

              {/* Floating Stats Cards */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-security animate-float"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </motion.div>

              <motion.div
                className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-security animate-float"
                style={{ animationDelay: "1.2s" }}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.5 }}
              >
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 pt-12 border-t border-white/20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">ISO</div>
              <div className="text-white/80">Certified Quality</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-white/80">Years Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;