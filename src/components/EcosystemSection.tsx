import { motion } from "framer-motion";
import Sparkles from "./Sparkles";
import pippinLogo from "@/assets/pippin-logo.jpg";

const projects = [
{ name: "Pippin's Diary", desc: "A journal of thoughts from a solitary traveler between worlds", emoji: "📖" },
{ name: "Glow Garden", desc: "A sanctuary where Pippin plants starseeds and watches them bloom", emoji: "🌱" },
{ name: "Silent Waves", desc: "Ambient soundscapes from Pippin's cosmic wanderings", emoji: "🎵" },
{ name: "Starmap", desc: "An interactive map of every world Pippin has visited", emoji: "🗺️" },
{ name: "Dream Canvas", desc: "Paint and create with colors from Pippin's imagination", emoji: "🎨" },
{ name: "Echo Chamber", desc: "Messages left by Pippin for those who follow the same path", emoji: "💬" }];


const orbitWorlds = [
{ emoji: "🌍", label: "Dream Realm", size: 40 },
{ emoji: "🌕", label: "Moon Base", size: 32 },
{ emoji: "⭐", label: "Star Forge", size: 28 },
{ emoji: "🪐", label: "Neon Ring", size: 36 },
{ emoji: "☄️", label: "Comet Lab", size: 30 },
{ emoji: "🌟", label: "Sparkle Hub", size: 26 },
{ emoji: "💫", label: "Warp Gate", size: 28 },
{ emoji: "🔮", label: "Oracle", size: 34 }];


const OrbitingWorlds = () => {
  return (
    <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] mx-auto mb-16">
      {/* Orbit rings */}
      <div className="absolute inset-4 rounded-full border border-foreground/10" />
      <div className="absolute inset-12 rounded-full border border-foreground/5" />

      {/* Central Pippin logo */}
      









      {/* Orbiting mini-worlds */}
      {orbitWorlds.map((world, i) => {
        const angle = i / orbitWorlds.length * 360;
        const duration = 30 + i * 5;
        const radius = 130;

        return (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2"
            style={{ width: 0, height: 0 }}
            animate={{ rotate: [angle, angle + 360] }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}>

            <motion.div
              className="glass-card rounded-full flex items-center justify-center cursor-pointer"
              style={{
                width: world.size,
                height: world.size,
                transform: `translateX(${radius}px) translateY(-${world.size / 2}px)`
              }}
              whileHover={{ scale: 1.4 }}
              animate={{ rotate: [-angle, -angle - 360] }}
              transition={{ duration, repeat: Infinity, ease: "linear" }}
              title={world.label}>

              <span className="text-sm md:text-base">{world.emoji}</span>
            </motion.div>
          </motion.div>);

      })}
    </div>);

};

const EcosystemSection = () => {
  return (
    <section id="ecosystem" className="relative min-h-screen py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-cosmic" />
      <Sparkles />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-display font-bold text-center mb-4 text-gradient-primary">

          Worlds Pippin Has Touched
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-muted-foreground mb-12 text-lg font-body">

          Traces of light left along the journey ✨
        </motion.p>

        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card rounded-2xl p-6 cursor-pointer group">

              <div className="text-5xl mb-4">{project.emoji}</div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <p className="text-muted-foreground font-body text-sm mb-4">{project.desc}</p>
              <span className="text-primary font-body text-sm font-semibold group-hover:underline">
                View Project →
              </span>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12">

          <a
            href="#"
            className="btn-gradient-accent px-8 py-4 rounded-full font-display text-lg font-bold hover:scale-105 transition-transform inline-block glow-accent">

            ✨ Leave Your Own Light in the Cosmos
          </a>
        </motion.div>
      </div>
    </section>);

};

export default EcosystemSection;