import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/use-count-up";
import { companyStats, type CompanyStat } from "@/data/stats";

const StatCard = ({ stat, index }: { stat: CompanyStat; index: number }) => {
  const { ref, display } = useCountUp(stat.value);
  const IconComponent = stat.icon;
  const colorClass = stat.color === "primary" ? "text-primary" : "text-security-accent";

  return (
    <motion.div
      className="text-center group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="mb-4 flex justify-center">
        <div className="p-3 rounded-full bg-white shadow-card-custom group-hover:shadow-security transition-shadow duration-300">
          <IconComponent className={`w-8 h-8 ${colorClass}`} />
        </div>
      </div>
      <div className="text-3xl font-bold text-security-dark mb-2 tabular-nums" ref={ref}>
        {display}
      </div>
      <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-security-light">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-security-dark mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself. See why businesses across industries trust Sentinel Technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {companyStats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
