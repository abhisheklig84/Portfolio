"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  ChevronDown,
  Zap,
  Target,
  Users,
  TrendingUp,
  Menu,
  X,
  Award,
  Star,
  Trophy,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Enhanced text animation
const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// Floating animation
const floatingAnimation = {
  y: [-5, 5, -5],
  transition: {
    duration: 3,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  },
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Loading animation
    setTimeout(() => setIsLoading(false), 2000);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const skills = [
    { name: "React JS", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "Next JS", level: 90, color: "from-gray-700 to-gray-900" },
    { name: "TypeScript", level: 88, color: "from-blue-600 to-blue-800" },
    { name: "JavaScript", level: 92, color: "from-yellow-400 to-yellow-600" },
    { name: "Redux/RTK", level: 85, color: "from-purple-500 to-purple-700" },
    { name: "Express js", level: 90, color: "from-teal-400 to-teal-600" },
    { name: "Node js", level: 80, color: "from-orange-500 to-orange-700" },
    {
      name: "Performance Optimization",
      level: 92,
      color: "from-green-500 to-green-700",
    },
  ];

  const projects = [
    {
      title: "Simple Energy Connected Platform",
      description:
        "A real-time EV telematics and diagnostics platform enabling live vehicle monitoring, OTA firmware updates, and HMI flashing for service teams.",
      tech: ["Next js", "Scss", "Redux", "Graphql", "Websockets", "GraphQL"],
      link: "https://matrix.simpleenergy.in/",
      achievements: [
        "Built real-time dashboards for GPS, speed, battery health, and diagnostics using React + data-viz libraries.",
        "Developed NodeJS/GraphQL APIs to process and stream live vehicle data at scale.",
        "Implemented OTA firmware updates & HMI flashing using WebUSB.",
        "Optimized performance and reliability to support thousands of connected vehicles.",
      ],
    },
    {
      title: "Simple Energy - Product Advisor",
      description:
        "A Salesforce-integrated PWA used by service advisors and dealership teams to manage customer service operations, bookings, vehicle diagnostics, and workflow tracking.",
      tech: ["Next JS", "TypeScript", "Redux", "Performance Optimization"],
      link: "https://luigi-stage.simpleenergy.in/",
      achievements: [
        "Built end-to-end service advisor workflows using Next.js.",
        "Integrated Salesforce APIs for customer data, service history, and job card sync.",
        "Developed modules for booking management, service status tracking, and technician assignment.",
        "Improved service efficiency and helped achieve a 72% walk-in to service conversion rate.",
        "70% bundle size reduction",
      ],
    },
    {
      title: "Simple Energy",
      description:
        "A high-traffic, responsive booking and product website for electric scooters, focused on speed, SEO, and conversion optimization.",
      tech: ["Next JS", "Graphql", "Scss", "Redux", "CMS (Strapi)"],
      link: "https://www.simpleenergy.in/",
      achievements: [
        "Built a scalable and responsive UI using Next.js for product pages, bookings, and user flows.",
        "Optimized SEO, page load speed, and Core Web Vitals, contributing to 47% revenue growth and 99K+ organic visitors.",
        "Integrated backend APIs for bookings, payments, and user data.",
        "Improved overall performance by reducing bundle size and implementing Next.js optimizations.",
      ],
    },
    {
      title: "Fourth Party",
      description:
        "A workflow automation and appointment management platform for legal professionals, enabling smooth case scheduling, communication, and admin operations.",
      tech: ["React JS", "JavaScript", "Node.js", "Express.js"],
      link: "https://www.fourthparty.app/",
      achievements: [
        "Built a responsive, user-friendly UI for appointments, client workflows, and admin dashboards.",
        "Integrated REST APIs to manage bookings, automated emails, and user communication.",
        "Implemented reusable React components to streamline UI consistency and speed up development.",
      ],
    },
    {
      title: "The Doge Pound",
      description:
        "A Web3 NFT platform for Doge-themed digital collectibles, featuring dashboards for holders, creators, and admins with seamless NFT interactions.",
      tech: ["React JS", "JavaScript", "Node.js", "Express.js"],
      link: "https://thedogepoundnft.com/",
      achievements: [
        "Built responsive React.js UI components for holder, creator, and admin dashboards.",
        "Integrated REST APIs / Web3 APIs for NFT metadata, wallet connection, and user flows.",
        "Implemented reusable components and business logic to manage NFT perks, rewards, and listings.",
        "Improved UI performance and ensured smooth user experience across all sections.",
      ],
    },
    {
      title: "Techlanz",
      description:
        "Techlanz is a global technology company focused on advancing electric vehicle development through engineering services, training, and strategic partnerships, delivering practical and sustainable mobility solutions.",
      tech: ["React JS", "JavaScript", "Node.js", "Express.js", "Bootstrap"],
      link: "https://www.techlanz.com/",
      achievements: [
        "Built a fast, responsive website showcasing EV engineering services and solutions.",
        "Implemented clean UI components for services, training programs, and partnership sections.",
        "Optimized for SEO, performance, and accessibility across all pages.",
        "Improved UI performance and ensured smooth user experience across all sections.",
      ],
    },
  ];

  const personalProjects = [
    {
      title: "Dummy Dashboard",
      tech: ["React JS", "Framer motion"],
      link: "http://ui-assesment-abhishek.netlify.app/",
    },
    {
      title: "Custom Table With Filter",
      tech: ["React JS", "Tanstack table"],
      link: "https://effulgent-narwhal-416beb.netlify.app/",
    },
    {
      title: "Chess",
      tech: ["React JS"],
      link: "http://chess-made-by-abhishek.netlify.app",
    },
    {
      title: "Dummy Codepen",
      tech: ["React JS"],
      link: "http://codepen-made-by-abhishek.netlify.app",
    },
  ];

  const experience = [
    {
      title: "Software Development Engineer 2 (Frontend)",
      company: "Simple Energy",
      period: "August 2023 - Present",
      location: "Bangalore",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbPBozoIvwF7dQPGaZjRtAl7bBdaENdN0a0A&s",
      highlights: [
        "Built a real-time EV telematics platform showing speed, GPS, battery status, diagnostics, and alerts.",
        "Developed NodeJS + GraphQL APIs to fetch and process live vehicle data.",
        "Used D3.js, Chart.js, and ECharts to visualize real-time data and analytics.",
        "Built a Salesforce-integrated PWA for dealers, advisors, and service teams.",
        "Created workflows for inventory, bookings, service operations, and customer lifecycle.",
        "Enabled real-time service operations, resulting in a 72% walk-in to service conversion rate.",
        "Designed and developed a high-traffic booking website for EV scooters.",
        "Optimized performance, SEO, and UI/UX, contributing to a 47% revenue increase.",
        "Improved load speed and reduced bundle size using Next.js optimizations.",
      ],
    },
    {
      title: "Product Engineer (Frontend)",
      company: "Sketch Brahma Technologies",
      period: "April 2023 - January 2025",
      location: "Bangalore",
      logo: "https://images.yourstory.com/cs/images/companies/76abd225ecdb-sketchbrahmaicon-1622096458091.png?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff",
      highlights: [
        "Architected entire UI structure for Titan.",
        "Implemented role-based authentication & secure workflows.",
        "Collaborated with designers, QA, and backend teams in an agile environment.",
        "Participated in code reviews and architecture discussions to improve system quality.",
      ],
    },
    {
      title: "Software Developer (Frontend)",
      company: "HK Infosoft",
      period: "January 2022 - April 2023",
      location: "Ahmedabad",
      logo: "data:image/jpeg;base64,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",
      highlights: [
        "Developed frontend for Hodleperks – NFT Rewards Platform using ReactJS with modular, reusable components.",
        "Integrated REST APIs and implemented business logic for Holder, Creator, and Admin dashboards.",
        "Built responsive UI and workflow screens for Fourth Party – LegalTech Platform.",
        "Implemented appointment scheduling, automated emails, and admin dashboards.",
        "Worked closely with backend and design teams to deliver smooth user flows.",
        "Improved product reliability through thorough testing and debugging.",
      ],
    },
  ];

  const technologies = [
    {
      name: "React JS",
      icon: "⚛️",
      color: "from-blue-400 to-cyan-400",
      description: "Component Library",
    },
    {
      name: "Next.js",
      icon: "▲",
      color: "from-gray-600 to-gray-800",
      description: "Full-Stack Framework",
    },
    {
      name: "TypeScript",
      icon: "TS",
      color: "from-blue-600 to-blue-800",
      description: "Type Safety",
    },
    {
      name: "JavaScript",
      icon: "JS",
      color: "from-yellow-400 to-yellow-600",
      description: "Core Language",
    },
    {
      name: "Redux/RTK",
      icon: "🔄",
      color: "from-purple-500 to-purple-700",
      description: "State Management",
    },
    {
      name: "Tailwind CSS",
      icon: "🎨",
      color: "from-teal-400 to-teal-600",
      description: "Utility-First CSS",
    },
    {
      name: "Performance",
      icon: "⚡",
      color: "from-orange-500 to-red-500",
      description: "Web Vitals & Speed",
    },

    {
      name: "Responsive Design",
      icon: "📱",
      color: "from-cyan-500 to-blue-500",
      description: "Mobile-First",
    },
    {
      name: "Micro-frontends",
      icon: "🔧",
      color: "from-violet-500 to-purple-500",
      description: "Architecture",
    },
  ];

  // Loading screen
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-emerald-950 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-2xl font-bold text-white"
          >
            {"Loading Portfolio...".split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-emerald-950 text-white overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full blur-2xl"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-2xl"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 1 },
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/20 rounded-full"
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
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Enhanced Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <motion.div
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            Abhishek kumar
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {[
              "hero",
              "about",
              "skills",
              "projects",
              "experience",
              "contact",
            ].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="hover:text-cyan-400 transition-colors cursor-pointer capitalize"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                {item === "hero" ? "Home" : item}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {[
                "hero",
                "about",
                "skills",
                "projects",
                "experience",
                "contact",
              ].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left hover:text-cyan-400 transition-colors cursor-pointer capitalize py-2"
                  whileHover={{ x: 10 }}
                >
                  {item === "hero" ? "Home" : item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Sticky Social Links - Hidden on mobile */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ delay: 1 }}
        className="fixed left-4 lg:left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col items-center space-y-4"
      >
        <div className="w-0.5 h-16 bg-gradient-to-b from-transparent to-emerald-500"></div>
        <motion.a
          href="https://www.linkedin.com/in/abhishek-kumar-singh02/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, x: 5 }}
          className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full flex items-center justify-center hover:from-emerald-500 hover:to-green-500 transition-all shadow-lg"
        >
          <Linkedin className="w-5 h-5 text-white" />
        </motion.a>
        <motion.a
          href="https://github.com/abhisheklig84"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, x: 5 }}
          className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center hover:from-gray-600 hover:to-gray-700 transition-all shadow-lg"
        >
          <Github className="w-5 h-5 text-white" />
        </motion.a>
        <motion.a
          href="https://drive.google.com/file/d/1C3-fCzHkiPRgVZo9uEhVkBv91FM6oZGF/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, x: 5 }}
          className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full flex items-center justify-center hover:from-emerald-500 hover:to-green-500 transition-all shadow-lg"
        >
          <GraduationCap className="w-5 h-5 text-white" />
        </motion.a>
        <div className="w-0.5 h-16 bg-gradient-to-b from-emerald-500 to-transparent"></div>
      </motion.div>

      {/* Enhanced Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative pt-20"
      >
        <motion.div
          style={{ y }}
          className="container mx-auto px-4 sm:px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
            className="mb-8"
          >
            <motion.div
              className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 p-1"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
                scale: {
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
            >
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, -360] }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <Code className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-400" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6"
          >
            <motion.span
              className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              {"Frontend Developer".split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto px-4"
          >
            Crafting exceptional user experiences with React, Next.js, and
            modern web technologies. Specialized in performance optimization and
            scalable frontend architectures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-12 px-4"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-6 sm:px-8 py-3 rounded-full w-full sm:w-auto"
                onClick={() =>
                  window.open("mailto:abhisheklig84@gmail.com", "_blank")
                }
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 hover:text-emerald-300 hover:border-emerald-300 px-6 sm:px-8 py-3 rounded-full bg-transparent w-full sm:w-auto transition-all duration-300"
                onClick={() =>
                  window.open("https://github.com/abhisheklig84", "_blank")
                }
              >
                <Github className="w-4 h-4 mr-2" />
                View GitHub
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="animate-bounce"
          >
            <motion.button
              onClick={() => scrollToSection("about")}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronDown className="w-8 h-8 mx-auto text-emerald-400" />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* REDESIGNED Awards Section */}

      {/* Enhanced About Section */}
      <section id="about" className="py-12 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-white/5 backdrop-blur-md border-white/10 p-6 sm:p-8 hover:border-emerald-500/30 transition-all duration-300">
                  <CardContent className="p-0">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-emerald-400">
                      Frontend Engineer
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                      Passionate Frontend Developer with 4+ years of experience
                      building scalable web applications. Currently working at
                      Simple Energy, where I've contributed to significant
                      revenue growth through innovative frontend solutions and
                      performance optimizations.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <motion.div
                        className="flex items-center"
                        whileHover={{ x: 5 }}
                      >
                        <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 mr-2 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-300">
                          Bangalore, India
                        </span>
                      </motion.div>
                      <motion.div
                        className="flex items-center"
                        whileHover={{ x: 5 }}
                      >
                        <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 mr-2 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-300">
                          +91-7033999554
                        </span>
                      </motion.div>
                      <motion.div
                        className="flex items-center"
                        whileHover={{ x: 5 }}
                      >
                        <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 mr-2 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-300">
                          abhisheklig84@gmail.com
                        </span>
                      </motion.div>
                      <motion.div
                        className="flex items-center"
                        whileHover={{ x: 5 }}
                      >
                        <GraduationCap className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 mr-2 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-300">
                          B.Tech (CS)
                        </span>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <motion.div
                  whileHover={{ scale: 1.02, rotateZ: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 border-emerald-500/30 p-4 sm:p-6 text-center hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
                    <CardContent className="p-0">
                      <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-emerald-400 mx-auto mb-2" />
                      <div className="text-lg sm:text-2xl font-bold text-emerald-400 mb-1">
                        Problem Solver
                      </div>
                      <div className="text-xs text-gray-200">
                        Creative Solutions
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02, rotateZ: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30 p-4 sm:p-6 text-center hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                    <CardContent className="p-0">
                      <Target className="w-6 sm:w-8 h-6 sm:h-8 text-purple-400 mx-auto mb-2" />
                      <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-1">
                        Goal Oriented
                      </div>
                      <div className="text-xs text-gray-200">
                        Results Driven
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02, rotateZ: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-gradient-to-br from-green-500/20 to-teal-500/20 border-green-500/30 p-4 sm:p-6 text-center hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
                    <CardContent className="p-0">
                      <Users className="w-6 sm:w-8 h-6 sm:h-8 text-green-400 mx-auto mb-2" />
                      <div className="text-lg sm:text-2xl font-bold text-green-400 mb-1">
                        Team Player
                      </div>
                      <div className="text-xs text-gray-200">Collaborative</div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02, rotateZ: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30 p-4 sm:p-6 text-center hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">
                    <CardContent className="p-0">
                      <TrendingUp className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-400 mx-auto mb-2" />
                      <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-1">
                        Growth Mindset
                      </div>
                      <div className="text-xs text-gray-200">
                        Always Learning
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-12 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Skills & Expertise
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 sm:gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, rotateX: 5 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 sm:p-6 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-white text-sm sm:text-base">
                    {skill.name}
                  </span>
                  <motion.span
                    className="text-emerald-400 font-bold text-sm sm:text-base"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16 grid md:grid-cols-3 gap-6 sm:gap-8"
          >
            {[
              {
                icon: Code,
                title: "Frontend Development",
                desc: "React, Next.js, TypeScript, Redux",
                color: "from-cyan-500 to-blue-500",
              },
              {
                icon: Award,
                title: "Performance Optimization",
                desc: "Web Vitals, Bundle Optimization, SEO",
                color: "from-violet-500 to-purple-500",
              },
              {
                icon: Briefcase,
                title: "UI/UX Implementation",
                desc: "Responsive Design, Storybook, Figma",
                color: "from-emerald-500 to-teal-500",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{
                  scale: 1.02,
                  rotateY: 10,
                  boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card
                  className={`bg-gradient-to-br ${item.color}/20 border-2 border-transparent hover:border-white/20 p-4 sm:p-6 transition-all duration-300`}
                >
                  <CardContent className="p-0 text-center">
                    <motion.div
                      animate={floatingAnimation}
                      transition={{
                        ...floatingAnimation.transition,
                        delay: index * 0.5,
                      }}
                    >
                      <item.icon className="w-10 sm:w-12 h-10 sm:h-12 text-white mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-xs sm:text-sm">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-12 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                whileHover={{
                  y: -15,
                  scale: 1.02,
                  rotateX: 5,
                  boxShadow: "0 25px 50px rgba(6, 182, 212, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group cursor-pointer"
                onClick={() => window.open(project.link, "_blank")}
              >
                <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:border-emerald-500/50 transition-all duration-300 h-full overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  <CardContent className="p-4 sm:p-6 h-full flex flex-col relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <motion.h3
                        className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 45 }}
                        className="text-cyan-400 hover:text-cyan-300"
                      >
                        <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5" />
                      </motion.div>
                    </div>

                    <p className="text-gray-300 mb-4 flex-grow text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <Badge
                              variant="secondary"
                              className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/30 transition-colors text-xs"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center text-xs sm:text-sm text-gray-400"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.div
                            className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: i * 0.2,
                            }}
                          />
                          {achievement}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-12 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Personal Projects
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {personalProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                whileHover={{
                  y: -15,
                  scale: 1.02,
                  rotateX: 5,
                  boxShadow: "0 25px 50px rgba(6, 182, 212, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group cursor-pointer"
                onClick={() => window.open(project.link, "_blank")}
              >
                <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:border-emerald-500/50 transition-all duration-300 h-full overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  <CardContent className="p-4 sm:p-6 h-full flex flex-col relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <motion.h3
                        className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 45 }}
                        className="text-cyan-400 hover:text-cyan-300"
                      >
                        <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5" />
                      </motion.div>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <Badge
                              variant="secondary"
                              className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/30 transition-colors text-xs"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies & Skills Carousel - FIXED EDGE-TO-EDGE */}
      <section className="py-12 sm:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Technologies I Work With
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Modern frontend technologies and tools I use to build exceptional
              web experiences
            </p>
          </motion.div>
        </div>

        {/* Fixed Infinite Carousel - TRUE EDGE-TO-EDGE with padding for hover */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-4">
          <motion.div
            className="flex space-x-6 items-center"
            animate={{
              x: [0, -100 * 6], // Move by 6 items width
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            style={{ width: "max-content" }}
          >
            {/* Create seamless loop by tripling the array */}
            {[...technologies, ...technologies, ...technologies].map(
              (tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card
                    className={`bg-gradient-to-br ${tech.color}/20 border-2 border-transparent hover:border-emerald-500/30 transition-all duration-300 group w-44 sm:w-48 h-28 sm:h-32`}
                  >
                    <CardContent className="p-3 sm:p-4 h-full flex flex-col justify-center items-center text-center relative overflow-hidden">
                      <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                      <motion.div
                        className="text-2xl sm:text-3xl mb-2"
                        animate={{
                          rotate: tech.name === "React JS" ? [0, 360] : 0,
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          rotate: {
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          },
                          scale: {
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          },
                        }}
                      >
                        {tech.icon}
                      </motion.div>

                      <h4
                        className={`font-bold text-xs sm:text-sm mb-1 bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}
                      >
                        {tech.name}
                      </h4>

                      <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                        {tech.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            )}
          </motion.div>
        </div>

        {/* Achievement Stats - Updated */}
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            {[
              {
                value: "70%",
                label: "Bundle Size Reduction",
                icon: "📦",
                color: "emerald",
              },
              {
                value: "30%",
                label: "Search Performance Boost",
                icon: "🔍",
                color: "blue",
              },
              {
                value: "40%",
                label: "Revenue Impact",
                icon: "📈",
                color: "green",
              },
              {
                value: "4+",
                label: "Years Experience",
                icon: "⏱️",
                color: "purple",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`text-center p-4 sm:p-6 bg-gradient-to-br from-${stat.color}-500/20 to-${stat.color}-600/20 rounded-lg border border-${stat.color}-500/30 hover:border-${stat.color}-400/50 transition-all duration-300`}
              >
                <motion.div
                  className="text-2xl sm:text-3xl mb-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.5,
                  }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  className={`text-2xl sm:text-3xl font-bold text-${stat.color}-400 mb-1`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs sm:text-sm text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 text-4xl opacity-20"
          animate={floatingAnimation}
          transition={{ ...floatingAnimation.transition, delay: 0 }}
        >
          💻
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-3xl opacity-20"
          animate={floatingAnimation}
          transition={{ ...floatingAnimation.transition, delay: 1.5 }}
        >
          🚀
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-5 text-2xl opacity-20"
          animate={floatingAnimation}
          transition={{ ...floatingAnimation.transition, delay: 3 }}
        >
          ⚡
        </motion.div>
      </section>

      {/* Enhanced Experience Section */}
      <section id="experience" className="py-12 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Experience
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-8 sm:mb-12 last:mb-0"
              >
                {/* Enhanced Timeline line */}
                {index < experience.length - 1 && (
                  <motion.div
                    className="absolute left-6 sm:left-8 top-16 w-0.5 bg-gradient-to-b from-emerald-500 to-green-500"
                    initial={{ height: 0 }}
                    whileInView={{ height: 128 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                )}

                <div className="flex items-start">
                  <motion.div
                    className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mr-4 sm:mr-6 flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex-grow"
                  >
                    <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:border-emerald-500/30 transition-all duration-300">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <img
                              src={exp.logo || "/placeholder.svg"}
                              alt={`${exp.company} logo`}
                              className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded"
                            />
                            <div>
                              <motion.h3
                                className="text-lg sm:text-xl font-bold text-white mb-1"
                                whileHover={{ color: "#22d3ee" }}
                              >
                                {exp.title}
                              </motion.h3>
                              <p className="text-cyan-400 font-semibold text-sm sm:text-base">
                                {exp.company}
                              </p>
                            </div>
                          </div>
                          <div className="text-left md:text-right mt-2 md:mt-0">
                            <p className="text-gray-300 font-medium text-sm sm:text-base">
                              {exp.period}
                            </p>
                            <p className="text-gray-400 text-xs sm:text-sm">
                              {exp.location}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <motion.div
                              key={i}
                              className="flex items-start text-gray-300 text-xs sm:text-sm"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              viewport={{ once: true }}
                              whileHover={{ x: 5 }}
                            >
                              <motion.div
                                className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{
                                  duration: 2,
                                  repeat: Number.POSITIVE_INFINITY,
                                  delay: i * 0.3,
                                }}
                              />
                              <span>{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-12 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Let's Work Together
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Ready to bring your ideas to life? Let's discuss how we can create
              something amazing together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateX: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:border-emerald-500/30 transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-6 text-emerald-400">
                        Get In Touch
                      </h3>
                      <div className="space-y-4">
                        <motion.a
                          href="mailto:abhisheklig84@gmail.com"
                          whileHover={{ x: 10, scale: 1.02 }}
                          className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors"
                        >
                          <Mail className="w-4 sm:w-5 h-4 sm:h-5 mr-4" />
                          <span className="text-sm sm:text-base">
                            abhisheklig84@gmail.com
                          </span>
                        </motion.a>
                        <motion.a
                          href="tel:+917033999554"
                          whileHover={{ x: 10, scale: 1.02 }}
                          className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors"
                        >
                          <Phone className="w-4 sm:w-5 h-4 sm:h-5 mr-4" />
                          <span className="text-sm sm:text-base">
                            +91-7033999554
                          </span>
                        </motion.a>
                        <motion.div
                          whileHover={{ x: 10, scale: 1.02 }}
                          className="flex items-center text-gray-300"
                        >
                          <MapPin className="w-4 sm:w-5 h-4 sm:h-5 mr-4" />
                          <span className="text-sm sm:text-base">
                            Bangalore, India
                          </span>
                        </motion.div>
                      </div>

                      <div className="flex space-x-4 mt-8">
                        <motion.a
                          href="https://www.linkedin.com/in/abhishek-kumar-singh02"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                          className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center hover:from-cyan-600 hover:to-blue-600 transition-all"
                        >
                          <Linkedin className="w-4 sm:w-5 h-4 sm:h-5" />
                        </motion.a>
                        <motion.a
                          href="https://github.com/abhisheklig84"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: -360 }}
                          transition={{ duration: 0.3 }}
                          className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center hover:from-gray-600 hover:to-gray-800 transition-all"
                        >
                          <Github className="w-4 sm:w-5 h-4 sm:h-5" />
                        </motion.a>
                      </div>

                      {/* Mobile Social Links */}
                      <div className="lg:hidden mt-6">
                        <h4 className="text-lg font-bold mb-4 text-purple-400">
                          Quick Links
                        </h4>
                        <div className="flex space-x-4">
                          <motion.a
                            href="https://www.linkedin.com/in/abhishek-kumar-singh02"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full flex items-center justify-center"
                          >
                            <Linkedin className="w-5 h-5 text-white" />
                          </motion.a>
                          <motion.a
                            href="https://github.com/abhisheklig84"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center"
                          >
                            <Github className="w-5 h-5 text-white" />
                          </motion.a>
                          <motion.a
                            href="https://drive.google.com/file/d/1C3-fCzHkiPRgVZo9uEhVkBv91FM6oZGF/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full flex items-center justify-center"
                          >
                            <GraduationCap className="w-5 h-5 text-white" />
                          </motion.a>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-6 text-purple-400">
                        Quick Stats
                      </h3>
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        {[
                          {
                            value: "4+",
                            label: "Years Experience",
                            color: "cyan",
                          },
                          {
                            value: "5+",
                            label: "Major Projects",
                            color: "purple",
                          },
                          {
                            value: "70%",
                            label: "Performance Boost",
                            color: "green",
                          },
                          {
                            value: "40%",
                            label: "Revenue Impact",
                            color: "yellow",
                          },
                        ].map((stat, index) => (
                          <motion.div
                            key={stat.label}
                            whileHover={{ scale: 1.1, rotateZ: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className={`text-center p-3 sm:p-4 bg-gradient-to-br from-${
                              stat.color
                            }-500/20 to-${
                              stat.color === "cyan"
                                ? "blue"
                                : stat.color === "purple"
                                ? "pink"
                                : stat.color === "green"
                                ? "teal"
                                : "orange"
                            }-500/20 rounded-lg border border-${
                              stat.color
                            }-500/30 hover:border-${
                              stat.color
                            }-400/50 transition-all duration-300`}
                          >
                            <motion.div
                              className={`text-xl sm:text-2xl font-bold text-${stat.color}-400 mb-1`}
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{
                                delay: index * 0.1,
                                type: "spring",
                              }}
                              viewport={{ once: true }}
                            >
                              {stat.value}
                            </motion.div>
                            <div className="text-xs text-gray-300">
                              {stat.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <motion.footer
        className="py-6 sm:py-8 border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.p
            className="text-gray-400 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
          >
            © 2025 Abhishek kumar. Crafted with passion and modern web
            technologies.
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
}
