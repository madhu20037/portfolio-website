import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Github,
  MessageSquare,
  User,
  FileText,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
    setTimeout(() => {
      setFormStatus({ type: '', message: '' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9363116415",
      href: "tel:+919363116415",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Mail,
      label: "Email",
      value: "madhumitha332004@gmail.com",
      href: "mailto:madhumitha332004@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tiruchirappalli, Tamil Nadu",
      href: "#",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/madhumitha-s",
      color: "hover:text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/madhumitha-s",
      color: "hover:text-gray-400"
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
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
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
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            <span className="text-cyan-400 font-mono">&gt;</span> Ready to secure your network? Let's connect and discuss opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageSquare className="h-6 w-6 text-cyan-400 mr-3" />
                Let's Connect
              </h3>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm actively seeking opportunities in network infrastructure and cybersecurity roles. 
                Whether you're looking for a dedicated security professional or want to discuss potential 
                collaborations, I'd love to hear from you.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="flex items-center p-4 bg-gray-700/30 border border-gray-600 rounded-lg hover:border-cyan-400/50 transition-all duration-300 group"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} mr-4 group-hover:scale-110 transition-transform`}>
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">{info.label}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-400 ${social.color} transition-all duration-300`}
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Send className="h-6 w-6 text-cyan-400 mr-3" />
              Send Message
            </h3>

            {formStatus.message && (
              <motion.div
                className={`mb-6 p-4 rounded-lg flex items-center ${
                  formStatus.type === 'success' 
                    ? 'bg-green-500/20 border border-green-500/50 text-green-400' 
                    : 'bg-red-500/20 border border-red-500/50 text-red-400'
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {formStatus.type === 'success' ? (
                  <CheckCircle className="h-5 w-5 mr-2" />
                ) : (
                  <AlertCircle className="h-5 w-5 mr-2" />
                )}
                {formStatus.message}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
                
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="relative">
                <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  required
                  rows={6}
                  className="w-full pl-12 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-blue-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Secure Your Network?
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Let's discuss how my cybersecurity expertise can protect and enhance your digital infrastructure.
            </p>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="h-5 w-5 mr-2" />
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;