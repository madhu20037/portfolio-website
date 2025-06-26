import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Network, 
  Shield, 
  Cloud, 
  Code, 
  Server, 
  Lock,
  Wifi,
  Database,
  Terminal,
  Eye,
  Zap,
  Globe
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: "Networking",
      icon: Network,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "TCP/IP", level: 90 },
        { name: "DNS/DHCP", level: 85 },
        { name: "VLANs", level: 88 },
        { name: "Routing & Switching", level: 92 },
        { name: "NAT", level: 80 }
      ]
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      skills: [
        { name: "Vulnerability Assessment", level: 85 },
        { name: "Penetration Testing", level: 80 },
        { name: "Firewalls", level: 90 },
        { name: "MITRE ATT&CK", level: 75 },
        { name: "Ethical Hacking", level: 82 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Terminal,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Wireshark", level: 88 },
        { name: "Nmap", level: 85 },
        { name: "Metasploit", level: 78 },
        { name: "Packet Tracer", level: 92 },
        { name: "Kali Linux", level: 80 }
      ]
    },
    {
      title: "Cloud & Programming",
      icon: Cloud,
      color: "from-purple-500 to-indigo-500",
      skills: [
        { name: "AWS (IAM, EC2)", level: 75 },
        { name: "Python", level: 82 },
        { name: "SQL", level: 78 },
        { name: "Windows Server", level: 85 },
        { name: "HTML/CSS/JS", level: 80 }
      ]
    }
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

  const cardVariants = {
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
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
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
              Technical Arsenal
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            <span className="text-cyan-400 font-mono">&gt;</span> Mastering the tools and technologies that secure the digital world
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(6, 182, 212, 0.1)"
              }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {[Wifi, Database, Lock, Globe, Eye, Zap].map((Icon, index) => (
            <motion.div
              key={index}
              className="absolute text-cyan-400/20"
              style={{
                left: `${20 + (index * 15)}%`,
                top: `${30 + (index % 3) * 20}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
              }}
            >
              <Icon className="h-8 w-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;