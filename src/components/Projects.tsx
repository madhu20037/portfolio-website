import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Terminal, 
  Shield, 
  Network, 
  Eye, 
  Lock, 
  Server,
  ExternalLink,
  Github,
  Play,
  Code
} from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Network Security Lab",
      subtitle: "Firewall Configuration & Management",
      description: "Comprehensive network security implementation using FortiGate firewalls, including policy configuration, VPN setup, and intrusion prevention systems.",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      technologies: ["FortiGate", "VPN", "IPS", "Network Policies"],
      features: [
        "Multi-zone firewall configuration",
        "Site-to-site VPN implementation",
        "Intrusion prevention rules",
        "Traffic monitoring and analysis"
      ],
      terminalOutput: [
        "$ config firewall policy",
        "$ edit 1",
        "$ set srcintf 'internal'",
        "$ set dstintf 'external'",
        "$ set action accept",
        "$ set schedule 'always'",
        "$ next",
        "Policy configured successfully ✓"
      ]
    },
    {
      title: "Penetration Testing Suite",
      subtitle: "Vulnerability Assessment & Exploitation",
      description: "Comprehensive penetration testing framework using Kali Linux tools for vulnerability discovery, exploitation, and security assessment.",
      icon: Eye,
      color: "from-green-500 to-emerald-500",
      technologies: ["Kali Linux", "Metasploit", "Nmap", "Wireshark"],
      features: [
        "Network reconnaissance and scanning",
        "Vulnerability identification and analysis",
        "Exploitation framework integration",
        "Comprehensive reporting system"
      ],
      terminalOutput: [
        "$ nmap -sS -O target_network",
        "Starting Nmap scan...",
        "Host discovery completed",
        "21/tcp   open  ftp",
        "22/tcp   open  ssh",
        "80/tcp   open  http",
        "Scan completed: 3 hosts up ✓"
      ]
    },
    {
      title: "Network Monitoring Dashboard",
      subtitle: "Real-time Traffic Analysis",
      description: "Advanced network monitoring solution with real-time traffic analysis, bandwidth monitoring, and automated alerting system.",
      icon: Network,
      color: "from-blue-500 to-cyan-500",
      technologies: ["Wireshark", "Python", "SNMP", "Grafana"],
      features: [
        "Real-time packet capture and analysis",
        "Bandwidth utilization monitoring",
        "Automated threat detection",
        "Custom dashboard visualization"
      ],
      terminalOutput: [
        "$ python network_monitor.py",
        "Initializing packet capture...",
        "Monitoring interface: eth0",
        "Packets captured: 1,247",
        "Suspicious activity detected!",
        "Alert sent to admin ✓"
      ]
    },
    {
      title: "Cloud Security Architecture",
      subtitle: "AWS Infrastructure Hardening",
      description: "Secure cloud infrastructure design and implementation on AWS with IAM policies, security groups, and compliance monitoring.",
      icon: Lock,
      color: "from-purple-500 to-indigo-500",
      technologies: ["AWS", "IAM", "CloudTrail", "Security Groups"],
      features: [
        "Multi-factor authentication setup",
        "Least privilege access policies",
        "Automated compliance monitoring",
        "Incident response automation"
      ],
      terminalOutput: [
        "$ aws iam create-policy",
        "Policy created successfully",
        "$ aws ec2 create-security-group",
        "Security group configured",
        "$ aws cloudtrail create-trail",
        "Audit logging enabled ✓"
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
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2300ffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
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
              Security Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            <span className="text-cyan-400 font-mono">&gt;</span> Hands-on cybersecurity implementations and network security solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Project Cards */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`p-6 bg-gray-800/50 backdrop-blur-sm border rounded-xl cursor-pointer transition-all duration-300 ${
                  activeProject === index 
                    ? 'border-cyan-400 shadow-lg shadow-cyan-400/20' 
                    : 'border-gray-700 hover:border-gray-600'
                }`}
                variants={cardVariants}
                onClick={() => setActiveProject(index)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} flex-shrink-0`}>
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-cyan-400 text-sm mb-2 font-mono">{project.subtitle}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-700/50 border border-gray-600 rounded text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Project Details */}
          <motion.div
            className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Terminal Header */}
            <div className="bg-gray-800/50 px-4 py-3 border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4 font-mono">
                  {projects[activeProject].title.toLowerCase().replace(/\s+/g, '_')}.sh
                </span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {projects[activeProject].title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {projects[activeProject].description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-cyan-400 mb-3 font-mono">&gt; Key Features</h4>
                <ul className="space-y-2">
                  {projects[activeProject].features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="text-gray-300 flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-green-400 mr-2">▸</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Terminal Output */}
              <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                <div className="text-green-400 mb-2">$ ./run_security_scan.sh</div>
                {projects[activeProject].terminalOutput.map((line, index) => (
                  <motion.div
                    key={index}
                    className={`${
                      line.includes('$') ? 'text-cyan-400' : 
                      line.includes('✓') ? 'text-green-400' : 
                      line.includes('!') ? 'text-red-400' : 
                      'text-gray-300'
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {line}
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 mt-6">
                <button className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                  <Play className="h-4 w-4 mr-2" />
                  Run Demo
                </button>
                <button className="flex items-center px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-all duration-300">
                  <Code className="h-4 w-4 mr-2" />
                  View Code
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;