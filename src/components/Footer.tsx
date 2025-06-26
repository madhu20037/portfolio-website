import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Heart, 
  Lock, 
  Github, 
  Linkedin, 
  Mail,
  Phone,
  MapPin,
  Code
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/madhumitha-s",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: Github,
      href: "https://github.com/madhumitha-s",
      label: "GitHub",
      color: "hover:text-gray-400"
    },
    {
      icon: Mail,
      href: "mailto:madhumitha332004@gmail.com",
      label: "Email",
      color: "hover:text-red-400"
    },
    {
      icon: Phone,
      href: "tel:+919363116415",
      label: "Phone",
      color: "hover:text-green-400"
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Madhumitha S</h3>
                <p className="text-cyan-400 font-mono">Network & Cybersecurity Engineer</p>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Passionate about securing digital infrastructure and building robust network solutions. 
              Ready to protect your organization's digital assets with cutting-edge cybersecurity expertise.
            </p>

            <div className="flex items-center space-x-2 text-gray-400 mb-2">
              <MapPin className="h-4 w-4 text-cyan-400" />
              <span>Tiruchirappalli, Tamil Nadu, India</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <Mail className="h-4 w-4 text-cyan-400" />
              <span>madhumitha332004@gmail.com</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Connect</h4>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center text-gray-400 ${social.color} transition-all duration-300 group`}
                  whileHover={{ x: 5 }}
                >
                  <social.icon className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                  {social.label}
                </motion.a>
              ))}
            </div>

            <div className="mt-8">
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Shield className="h-4 w-4 mr-2" />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <motion.div
                className="mx-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Code className="h-4 w-4 text-cyan-400" />
              </motion.div>
              <span>and secured with</span>
              <motion.div
                className="mx-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Lock className="h-4 w-4 text-green-400" />
              </motion.div>
            </div>
            
            <div className="text-gray-400 text-sm">
              © {currentYear} Madhumitha S. All rights reserved.
            </div>
          </div>

          {/* Security Badge */}
          <motion.div
            className="text-center mt-6 pt-6 border-t border-gray-800"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-400">
              <Shield className="h-4 w-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 font-mono">&gt;</span>
              <span className="ml-2">Securing the digital world, one network at a time</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;