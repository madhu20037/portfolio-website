import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Star,
  Calendar,
  MapPin,
  Trophy,
  Target
} from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "University College",
      location: "Tamil Nadu, India",
      duration: "2021 - 2023",
      grade: "7th University Rank",
      description: "Comprehensive study of IT fundamentals, programming, database management, and network technologies with exceptional academic performance.",
      highlights: [
        "7th University Rank Achievement",
        "Strong foundation in Computer Networks",
        "Database Management Systems",
        "Programming Languages (Python, Java)",
        "Web Technologies & Development"
      ],
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      degree: "Advanced Cybersecurity Training",
      institution: "Systech Institute",
      location: "Professional Training Center",
      duration: "2023 - 2024 (10 Months)",
      grade: "Hands-on Certification",
      description: "Intensive practical training in network security, ethical hacking, and cybersecurity tools with real-world project implementations.",
      highlights: [
        "Network Security & Firewalls",
        "Ethical Hacking & Penetration Testing",
        "Vulnerability Assessment",
        "Security Tools Mastery",
        "Industry Best Practices"
      ],
      icon: Award,
      color: "from-red-500 to-pink-500"
    }
  ];

  const achievements = [
    {
      title: "University Rank",
      value: "7th",
      description: "Out of hundreds of students",
      icon: Trophy,
      color: "text-yellow-400"
    },
    {
      title: "Training Duration",
      value: "10+",
      description: "Months of intensive learning",
      icon: Calendar,
      color: "text-blue-400"
    },
    {
      title: "Certifications",
      value: "6+",
      description: "Industry-recognized credentials",
      icon: Star,
      color: "text-green-400"
    },
    {
      title: "Specializations",
      value: "4",
      description: "Core technology areas",
      icon: Target,
      color: "text-purple-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <section id="education" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/10 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Academic Icons */}
        {[BookOpen, GraduationCap, Award].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-cyan-400/10"
            style={{
              left: `${20 + index * 30}%`,
              top: `${20 + index * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="h-16 w-16" />
          </motion.div>
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
              Education & Training
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            <span className="text-cyan-400 font-mono">&gt;</span> Academic excellence combined with practical industry training
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <achievement.icon className={`h-8 w-8 ${achievement.color} mx-auto mb-3`} />
              <div className="text-2xl font-bold text-white mb-1">{achievement.value}</div>
              <div className="text-sm font-semibold text-gray-300 mb-1">{achievement.title}</div>
              <div className="text-xs text-gray-400">{achievement.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Cards */}
        <motion.div
          className="space-y-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                  {/* Icon and Basic Info */}
                  <div className="flex-shrink-0 mb-6 lg:mb-0">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${edu.color} mb-4`}>
                      <edu.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-cyan-400 font-mono text-sm mb-1">{edu.duration}</div>
                      <div className="flex items-center text-gray-400 text-sm mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        {edu.location}
                      </div>
                      <div className="inline-flex items-center px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-sm">
                        <Star className="h-3 w-3 mr-1" />
                        {edu.grade}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <h4 className="text-lg text-cyan-400 mb-4 font-semibold">{edu.institution}</h4>
                    <p className="text-gray-300 leading-relaxed mb-6">{edu.description}</p>

                    {/* Highlights */}
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <BookOpen className="h-5 w-5 text-cyan-400 mr-2" />
                        Key Highlights
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <motion.div
                            key={highlightIndex}
                            className="flex items-center text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.2 + highlightIndex * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                            <span className="text-sm">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-1 bg-gray-700">
                <motion.div
                  className={`h-full bg-gradient-to-r ${edu.color}`}
                  initial={{ width: 0 }}
                  animate={inView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 1.5, delay: index * 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-blue-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Committed to staying updated with the latest cybersecurity trends, technologies, and best practices 
              to provide cutting-edge security solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm">
                Continuous Learning
              </span>
              <span className="px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-sm">
                Industry Certifications
              </span>
              <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-400 text-sm">
                Practical Experience
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;