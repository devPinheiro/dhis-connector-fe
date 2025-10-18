import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { motion, MotionValue, useAnimation } from 'framer-motion';
import LightRays from '../ui/LightRays';

// Text reveal animation variants
const textRevealVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Typewriter component for Scale.com-style text reveal
function TypewriterText({ text, delay = 0, speed = 50 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        setIsComplete(true);
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay, speed]);

  return (
    <span className="relative">
      {displayedText}
      {!isComplete && (
        <motion.span
          className="absolute inline-block w-0.5 h-full bg-blue-400 ml-1"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </span>
  );
}

// Word reveal component for staggered animations
function RevealText({ children, delay = 0 }) {
  const words = children.split(' ');
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: delay
      }
    }
  };
  
  const wordVariants: any = {
    hidden: {
      y: 100,
      opacity: 0,
      rotateX: -90,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="inline-block"
    >
      {words.map((word: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | MotionValue<number> | MotionValue<string> | null | undefined, index: React.Key | null | undefined) => (
        <motion.span
          key={index}
          variants={wordVariants!}
          className="inline-block mr-2 last:mr-0"
          style={{ transformOrigin: '50% 100%' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}


export function HeroSection() {
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      if (!hasAnimated) {
        await controls.start("visible");
        setHasAnimated(true);
      }
    };
    sequence();
  }, [controls, hasAnimated]);

  return (
    <div className="relative overflow-hidden bg-transparent py-32">
      {/* Professional WebGL Light Rays Background */}
      <div className="absolute inset-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={0.2}
          lightSpread={0.6}
          rayLength={9.8}
          pulsating={true}
          fadeDistance={1.2}
          saturation={1.0}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.0}
          distortion={0.0}
          className="opacity-90"
        />
      </div>
      {/* Content overlay with enhanced backdrop */}
      <div className="absolute inset-0 bg-stone-950/40 backdrop-blur-sm"></div>
      
      {/* Additional gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/20 via-stone-950/10 to-stone-950/60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left column - Main content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Announcement badge */}
            <div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-stone-800/80 backdrop-blur-sm border border-stone-700/50 text-blue-400 text-xs font-normal"
              // initial={{ opacity: 0, scale: 0.8 }}
              // animate={{ opacity: 1, scale: 1 }}
              // transition={{ duration: 0.6, delay: 0.2 }}
              // whileHover={{ scale: 1.05, borderColor: 'rgb(59 130 246 / 0.5)' }}
            >
              <motion.span 
                className="w-2 h-2 bg-blue-500 rounded-full mr-2"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              New: Real-time DHIS2 integration
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>

            {/* Main headline with Scale.com-style animations */}
            <div className="text-8xl sm:text-5xl lg:text-6xl font-bold text-white overflow-hidden">
              {/* First line with staggered reveal */}
              <motion.div 
                className="block mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <RevealText delay={0.6}>Transform</RevealText>
              </motion.div>
              
              {/* Second line with gradient and advanced animation */}
              <motion.div 
                className="block mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <motion.span
                  className="text-white"
                  initial={{ 
                    backgroundPosition: "-200% center",
                    opacity: 0,
                    scale: 0.8,
                    y: 50
                  }}
                  animate={{ 
                    backgroundPosition: "200% center",
                    opacity: 1,
                    scale: 1,
                    y: 0
                  }}
                  transition={{
                    backgroundPosition: {
                      duration: 2,
                      ease: "easeInOut",
                      delay: 1.4
                    },
                    opacity: {
                      duration: 0.8,
                      delay: 1.4
                    },
                    scale: {
                      duration: 0.8,
                      delay: 1.4,
                      ease: [0.22, 1, 0.36, 1]
                    },
                    y: {
                      duration: 0.8,
                      delay: 1.4,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }}
                  style={{
                    backgroundSize: "200% auto"
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <RevealText delay={1.5}>Health Data</RevealText>
                </motion.span>
              </motion.div>
              
              {/* Third line with typewriter effect */}
              <motion.div 
                className="block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
              >
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    delay: 2.4,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  Into{' '}
                  <motion.span
                    className="inline-block"
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ 
                      delay: 3.0,
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <TypewriterText text="Action" delay={3200} speed={120} />
                  </motion.span>
                </motion.span>
              </motion.div>
            </div>

            {/* Subtitle with character-by-character reveal */}
            <motion.div
              className="text-xl text-gray-300 leading-relaxed overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.0 }}
            >
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  delay: 4.2,
                  duration: 1.0,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <TypewriterText 
                  text="Unify DHIS2 and OpenLMIS data streams into actionable insights. Monitor supply chains, predict stockouts, and ensure every facility has what it needs to save lives."
                  delay={4400}
                  speed={30}
                />
              </motion.p>
            </motion.div>

            {/* Key benefits with advanced staggered animations */}
            {/* <motion.div 
              className="flex flex-col gap-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 7.0
                  }
                }
              }}
            >
              {[
                'Real-time monitoring',
                'Predictive analytics', 
                'Automated alerts'
              ].map((benefit, index) => (
                <motion.div 
                  key={benefit}
                  className="flex items-center text-gray-300 group cursor-pointer"
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 50,
                      scale: 0.8,
                      rotateX: -90
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      rotateX: 0,
                      transition: {
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1]
                      }
                    }
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformOrigin: '50% 100%' }}
                >
                  <motion.div
                    className="h-5 w-5 text-green-400 mr-2"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: 7.2 + index * 0.2,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <CheckCircle className="h-5 w-5" />
                  </motion.div>
                  <span className="font-medium group-hover:text-blue-300 transition-colors duration-300">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div> */}

            {/* CTA buttons with Scale.com-style entrance */}
            {/* <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.3,
                    delayChildren: 8.0
                  }
                }
              }}
            >
              <motion.a
                href="/login"
                className="group bg-white text-stone-900 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg w-full sm:w-auto hover:bg-stone-100 transition-all duration-300"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 80,
                    scale: 0.8,
                    rotateX: -90
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateX: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.4)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                style={{ transformOrigin: '50% 100%' }}
              >
                <span>Start Free Trial</span>
                <motion.div
                  className="inline ml-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </motion.a>
              
              <motion.button 
                className="group flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold text-white border-2 border-white/50 hover:bg-white hover:text-stone-900 w-full sm:w-auto backdrop-blur-sm transition-all duration-300"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 80,
                    scale: 0.8,
                    rotateX: -90
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateX: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  borderColor: 'rgb(59 130 246 / 0.8)',
                  backgroundColor: 'rgba(31, 41, 55, 0.3)',
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                style={{ transformOrigin: '50% 100%' }}
              >
                <motion.div
                  className="h-5 w-5 mr-2 relative z-10"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                >
                  <Play className="h-5 w-5" />
                </motion.div>
                <span>Watch Demo</span>
              </motion.button>
            </motion.div> */}
          </motion.div>

          {/* Right column - Dashboard preview */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              {/* Enhanced glow effect */}
              <motion.div 
                className="absolute rounded-3xl "
                // animate={{
                //   scale: [1, 1.05, 1],
                //   opacity: [0.3, 0.5, 0.3]
                // }}
                // transition={{
                //   duration: 4,
                //   repeat: Infinity,
                //   ease: "easeInOut"
                // }}
              />
              
              {/* Dashboard mockup */}
              <motion.div 
                className="relative bg-stone-900/70  rounded-2xl  border border-stone-700/50 overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-stone-800 px-6 py-4 border-b border-stone-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="ml-4 text-sm text-gray-400 font-mono">
                      healthflow.ai/dashboard
                    </div>
                  </div>
                </div>
                
                {/* Dashboard content placeholder */}
                <div className="p-8 space-y-6">
                  {/* Health metrics cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { title: "Active Facilities", value: "1,247", color: "blue" },
                      { title: "Stock Alerts", value: "23", color: "red" },
                      { title: "Supply Accuracy", value: "94.2%", color: "green" }
                    ].map((metric, index) => (
                      <motion.div 
                        key={index}
                        className="bg-stone-800/50 rounded-lg p-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 3 + index * 0.1 }}
                      >
                        <div className="text-gray-400 text-sm">{metric.title}</div>
                        <div className={`text-2xl font-bold ${
                          metric.color === 'blue' ? 'text-blue-400' :
                          metric.color === 'red' ? 'text-red-400' : 'text-green-400'
                        }`}>
                          {metric.value}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart placeholder */}
                  <motion.div 
                    className="bg-stone-800/50 rounded-lg p-6 h-48"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 3.5 }}
                  >
                    <div className="text-gray-400 text-sm mb-4">Supply Chain Overview</div>
                    <div className="space-y-3">
                      {[80, 65, 90, 45].map((width, index) => (
                        <motion.div 
                          key={index}
                          className="bg-stone-700 rounded h-3"
                          initial={{ width: 0 }}
                          animate={{ width: `${width}%` }}
                          transition={{ duration: 1, delay: 4 + index * 0.1 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Social proof section - properly spaced */}
        <motion.div 
          className="text-center mt-32 py-32  border-stone-700/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 9.0 }}
        >
          <motion.p 
            className="text-gray-400 text-sm mb-6 tracking-wide uppercase font-medium letter-spacing-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 9.2, duration: 0.6 }}
          >
            Trusted by health organizations worldwide
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-6 lg:gap-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 9.4
                }
              }
            }}
          >
            {[
              'WHO', 'UNICEF', 'CDC', 'Gates Foundation', 'USAID'
            ].map((org, index) => (
              <motion.div 
                key={org}
                className="text-gray-500 font-bold text-xs lg:text-sm hover:text-gray-300 transition-colors cursor-pointer tracking-wider"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                    scale: 0.8,
                    filter: 'blur(10px)'
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: 'blur(0px)',
                    transition: {
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }
                }}
               
              >
                {org}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}