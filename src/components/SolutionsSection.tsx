import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Settings, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { solutions } from "@/data/solutions";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] },
  }),
};

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-20 bg-security-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <motion.div
                key={solution.slug}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
              <Card
                className="h-full hover:shadow-security transition-all duration-300 hover:scale-105 bg-white"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-security-dark">
                      {solution.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full group">
                    <Link to={solution.path}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Approach Section */}
        <div className="bg-white rounded-2xl p-8 shadow-card-custom">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 rounded-full bg-primary/10">
              <Settings className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-center text-security-dark mb-6">
            Our Approach
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-lg font-semibold text-security-dark mb-2">Flexible Integration</h4>
              <p className="text-muted-foreground">Standalone or fully integrated systems tailored to your needs</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-security-dark mb-2">Remote Management</h4>
              <p className="text-muted-foreground">Both remote and on-site management capabilities</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-security-dark mb-2">Cost-Effective</h4>
              <p className="text-muted-foreground">Scalable and customizable solutions that grow with you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;