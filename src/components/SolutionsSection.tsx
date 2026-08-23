import { Card, CardContent } from "@/components/ui/card";
import { Shield, Settings, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { solutions } from "@/data/solutions";
import { fadeUp, iconSpring, revealOnce, revealOnceTight } from "@/lib/motion";

const approach = [
  { title: "Flexible Integration", desc: "Standalone or fully integrated systems tailored to your needs" },
  { title: "Remote Management", desc: "Both remote and on-site management capabilities" },
  { title: "Cost-Effective", desc: "Scalable and customizable solutions that grow with you" },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-20 bg-security-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={revealOnce}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="p-3 rounded-full bg-primary/10">
              <Shield className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-security-dark mb-4">
            Comprehensive ELV &amp; Security Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            From standalone systems to fully integrated solutions, we provide scalable, customizable, and cost-effective security and automation technologies.
          </p>
          <Link
            to="/solutions"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
          >
            View All 14 Solution Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <motion.div
                key={solution.slug}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={revealOnceTight}
                whileHover={{ y: -4 }}
              >
                <Link to={solution.path} className="block h-full">
                  <Card className="group relative h-full overflow-hidden transition-shadow duration-300 hover:shadow-security bg-white">
                    <span className="pointer-events-none absolute top-2 right-4 text-5xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors duration-300 select-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <CardContent className="p-6 relative">
                      <motion.div
                        className="inline-flex p-3 rounded-lg bg-primary/10 mb-4"
                        whileHover={{ scale: 1.12, rotate: 6 }}
                        transition={iconSpring}
                      >
                        <IconComponent className="w-7 h-7 text-primary" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-security-dark mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {solution.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                        Learn more
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Approach Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={revealOnce}
          variants={fadeUp}
          className="bg-white rounded-2xl p-8 shadow-card-custom"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 rounded-full bg-primary/10">
              <Settings className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-center text-security-dark mb-6">
            Our Approach
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {approach.map((a, i) => (
              <motion.div key={a.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={revealOnce}>
                <h4 className="text-lg font-semibold text-security-dark mb-2">{a.title}</h4>
                <p className="text-muted-foreground">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
