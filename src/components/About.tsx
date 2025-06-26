import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MapPin, 
  Calendar, 
  Award, 
  Target, 
  Zap,
  Shield,
  Network,
  Code
} from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const timeline = [
    {
      year: "2024",
      title: "Advanced Cybersecurity Training",
      description: "10 months intensive training at Systech Institute",
      icon: Shield,
      color: "from-red-500 to-pink-500"
    },
    {
      year: "2023",
      title: "B.Sc. IT Graduate",
      description: "7th University Rank - Academic Excellence",
      icon: Award,
      color: "from-yellow-500 to-orange-500"
    },
    {
      year: "2023",
      title: "Network Certifications",
      description: "CCNA, CCNP, and AWS Cloud Fundamentals",
      icon: Network,
      color: "from-blue-500 to-cyan-500"
    },
    {
      year: "2024",
      title: "Security Specialization",
      description: "FortiGate, Ethical Hacking, MITRE ATT&CK",
      icon: Code,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { number: "10+", label: "Months Training", icon: Calendar },
    { number: "7th", label: "University Rank", icon: Award },
    { number: "6+", label: "Certifications", icon: Shield },
    { number: "100%", label: "Dedication", icon: Target }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/10 to-black"></div>
        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 0 10 L 10 10 L 10 0 M 10 10 L 20 10 M 10 10 L 10 20" 
                      stroke="cyan" strokeWidth="0.5" fill="none" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
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
              About Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            <span className="text-cyan-400 font-mono">&gt;</span> Passionate about securing the digital frontier
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Personal Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Zap className="h-6 w-6 text-cyan-400 mr-3" />
                Professional Profile
              </h3>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  <span className="text-cyan-400 font-mono">&gt;</span> Network & Cybersecurity Engineer with a passion for 
                  protecting digital infrastructure and implementing robust security solutions.
                </p>
                
                <p>
                  <span className="text-green-400 font-mono">&gt;</span> Completed intensive 10-month training at Systech Institute, 
                  gaining hands-on experience with industry-leading tools and technologies.
                </p>
                
                <p>
                  <span className="text-blue-400 font-mono">&gt;</span> Academic excellence with 7th University Rank in B.Sc. IT, 
                  demonstrating strong theoretical foundation and practical application skills.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 text-cyan-400 mr-3" />
                  <span>Tiruchirappalli, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Target className="h-5 w-5 text-green-400 mr-3" />
                  <span>Seeking Network Infrastructure & Security Roles</span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Calendar className="h-6 w-6 text-cyan-400 mr-3" />
              Journey Timeline
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500"></div>

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    {/* Timeline Dot */}
                    <div className={`relative z-10 p-3 rounded-full bg-gradient-to-r ${item.color} mr-6 flex-shrink-0`}>
                      <item.icon className="h-4 w-4 text-white" />
                    </div>

                    {/* Content */}
                    <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 flex-1 hover:border-cyan-400/50 transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-white">{item.title}</h4>
                        <span className="text-cyan-400 text-sm font-mono">{item.year}</span>
                      </div>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Career Goals */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-blue-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-cyan-400 font-mono">&gt;</span> Career Objective
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Seeking challenging opportunities in <span className="text-cyan-400 font-semibold">Network Infrastructure</span> and 
              <span className="text-green-400 font-semibold"> Cybersecurity</span> roles where I can leverage my technical expertise, 
              certifications, and passion for security to protect and optimize organizational digital assets. 
              Ready to contribute to innovative security solutions and grow with forward-thinking technology companies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;