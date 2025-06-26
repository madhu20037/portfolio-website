import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail, Shield } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="container mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image with Glow Effect */}
        <motion.div 
          className="mb-8"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative inline-block">
            <img
              src="/Myprofile.png"
              alt="Madhumitha S"
              className="w-32 h-32 rounded-full mx-auto border-4 border-cyan-400 shadow-2xl object-cover"
            />
            {/* Removed the glowing circle border */}
            {/* <div className="absolute inset-0 rounded-full border-4 border-cyan-400 animate-pulse opacity-50"></div> */}
            <motion.div 
              className="absolute -top-2 -right-2 bg-green-500 p-2 rounded-full"
              variants={floatingVariants}
              animate="animate"
            >
              <Shield className="h-4 w-4 text-white" />
            </motion.div>
          </div>
        </motion.div>

        {/* Main Heading with Typing Effect */}
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Madhumitha S
          </span>
        </motion.h1>
        
        <motion.h2 
          className="text-xl md:text-2xl text-cyan-400 mb-6 font-mono"
          variants={itemVariants}
        >
          Network & Cybersecurity Engineer
        </motion.h2>
        
          <motion.p 
          className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          <span className="text-cyan-400 font-mono">{'>'}</span> Building secure networks, one layer at a time.
          <br />
          <span className="text-green-400 font-mono">{'>'}</span> Protecting digital infrastructure with cutting-edge cybersecurity.
        </motion.p>

        {/* Animated Stats */}
        <motion.div 
          className="flex justify-center gap-8 mb-8"
          variants={itemVariants}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">10+</div>
            <div className="text-sm text-gray-400">Months Training</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">7th</div>
            <div className="text-sm text-gray-400">University Rank</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">6+</div>
            <div className="text-sm text-gray-400">Certifications</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          variants={itemVariants}
        >
          <motion.a
            href="/Madhumitha_S.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </motion.a>
          
          <div className="flex gap-4">
            {[
              { href: "https://www.linkedin.com/in/madhumitha-s-25342b2b2/", icon: Linkedin, color: "blue" },
              { href: "https://github.com/madhu20037", icon: Github, color: "gray" },
              { href: "mailto:madhumitha332004@gmail.com", icon: Mail, color: "red" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:border-cyan-400 transition-all duration-300"
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)",
                  borderColor: "rgb(34, 211, 238)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="h-6 w-6 text-gray-300 hover:text-cyan-400 transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="flex flex-col items-center"
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-gray-400 text-sm mb-2 font-mono">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 text-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
