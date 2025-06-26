import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  Shield, 
  Cloud, 
  Network,
  Lock,
  Eye,
  Server
} from 'lucide-react';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const certifications = [
    {
      name: "CCNA",
      issuer: "Cisco",
      icon: Network,
      color: "from-blue-500 to-cyan-500",
      description: "Cisco Certified Network Associate - Routing and Switching",
      skills: ["Routing", "Switching", "Network Security", "Troubleshooting"],
      glow: "shadow-blue-500/25"
    },
    {
      name: "CCNP",
      issuer: "Cisco",
      icon: Network,
      color: "from-blue-600 to-indigo-600",
      description: "Cisco Certified Network Professional - Advanced Networking",
      skills: ["Advanced Routing", "Enterprise Networks", "Security", "Automation"],
      glow: "shadow-indigo-500/25"
    },
    {
      name: "AWS Cloud Fundamentals",
      issuer: "Amazon Web Services",
      icon: Cloud,
      color: "from-orange-500 to-yellow-500",
      description: "AWS Cloud Computing Fundamentals and Best Practices",
      skills: ["EC2", "IAM", "S3", "Cloud Security"],
      glow: "shadow-orange-500/25"
    },
    {
      name: "FortiGate Certified",
      issuer: "Fortinet",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      description: "Fortinet Network Security Expert Certification",
      skills: ["Firewall Management", "VPN", "Security Policies", "Threat Protection"],
      glow: "shadow-red-500/25"
    },
    {
      name: "MCSA / MCSE",
      issuer: "Microsoft",
      icon: Server,
      color: "from-blue-500 to-purple-500",
      description: "Microsoft Certified Solutions Associate/Expert",
      skills: ["Windows Server", "Active Directory", "Group Policy", "PowerShell"],
      glow: "shadow-purple-500/25"
    },
    {
      name: "Ethical Hacking",
      issuer: "Cisco/NPTEL",
      icon: Eye,
      color: "from-green-500 to-emerald-500",
      description: "Certified Ethical Hacker - Penetration Testing",
      skills: ["Penetration Testing", "Vulnerability Assessment", "Security Auditing", "OWASP"],
      glow: "shadow-green-500/25"
    }
  ];

  const nextCert = () => {
    setCurrentIndex((prev) => (prev + 1) % certifications.length);
  };

  const prevCert = () => {
    setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="certifications" className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-black"></div>
        {/* Floating Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-xl"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            <span className="text-cyan-400 font-mono">&gt;</span> Industry-recognized credentials validating expertise
          </p>
        </motion.div>

        {/* Certification Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  className={`p-6 rounded-full bg-gradient-to-r ${certifications[currentIndex].color} mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {React.createElement(certifications[currentIndex].icon, { className: "h-12 w-12 text-white" })}
                </motion.div>

                <h3 className="text-3xl font-bold text-white mb-2">
                  {certifications[currentIndex].name}
                </h3>
                
                <p className="text-cyan-400 text-lg mb-4 font-mono">
                  {certifications[currentIndex].issuer}
                </p>
                
                <p className="text-gray-300 text-lg mb-6 max-w-2xl">
                  {certifications[currentIndex].description}
                </p>

                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {certifications[currentIndex].skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      className="px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-full text-sm text-gray-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.05,
                        borderColor: "rgb(34, 211, 238)",
                        color: "rgb(34, 211, 238)"
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevCert}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full text-white hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextCert}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full text-white hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Certification Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {certifications.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-cyan-400 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {[
            { number: "6+", label: "Certifications", icon: Award },
            { number: "10+", label: "Months Training", icon: Shield },
            { number: "4", label: "Major Vendors", icon: Network },
            { number: "100%", label: "Commitment", icon: Lock }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-cyan-400/50 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;