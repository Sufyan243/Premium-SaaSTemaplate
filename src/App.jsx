import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Star, 
  Check, 
  Play, 
  ArrowRight, 
  Menu, 
  X, 
  Zap, 
  Shield, 
  Rocket, 
  Users,
  BarChart3,
  Globe,
  Award,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowUp,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Target,
  DollarSign,
  Briefcase,
  MessageCircle,
  Bot,
  ChevronDown,
  ChevronUp,
  Monitor,
  Smartphone,
  Tablet,
  Moon,
  Sun,
  Eye,
  MousePointer,
  Database,
  Settings,
  CreditCard,
  Gift,
  Plus,
  Minus,
  Camera,
  Video,
  FileText,
  Code,
  Layers,
  Lock,
  Cloud,
  Activity,
  Cpu,
  Building2,
  HeartHandshake,
  Lightbulb,
  TrendingDown
} from 'lucide-react';

const SaaSLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [showStickyButton, setShowStickyButton] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    users: 0,
    companies: 0,
    revenue: 0,
    uptime: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 400);
      setShowStickyButton(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Time tracking for exit intent
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);

    // Show modal after 30 seconds or on exit intent
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && timeSpent > 10) {
        setShowExitModal(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Auto-show after 45 seconds
    const autoModal = setTimeout(() => {
      if (!showExitModal) setShowExitModal(true);
    }, 45000);

    return () => {
      clearInterval(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(autoModal);
    };
  }, [timeSpent, showExitModal]);

  // Animate numbers on mount
  useEffect(() => {
    const animateNumber = (key, target, duration = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedNumbers(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 16);
    };

    animateNumber('users', 50000);
    animateNumber('companies', 10000);
    animateNumber('revenue', 25);
    animateNumber('uptime', 99.9);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { number: animatedNumbers.users, suffix: '+', label: 'Active Users' },
    { number: animatedNumbers.companies, suffix: '+', label: 'Companies Trust Us' },
    { number: animatedNumbers.revenue, suffix: 'M+', label: 'Revenue Generated' },
    { number: animatedNumbers.uptime, suffix: '%', label: 'Uptime SLA' }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Performance",
      description: "Built for speed with optimized performance and instant loading times. Experience 3x faster load times.",
      highlight: "3x Faster",
      screenshot: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, SOC2 compliance, and advanced threat protection.",
      highlight: "SOC2 Compliant",
      screenshot: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "One-Click Integration",
      description: "Connect with 100+ tools including Slack, Salesforce, and Google Workspace in under 5 minutes.",
      highlight: "100+ Integrations",
      screenshot: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Real-time Collaboration",
      description: "Work together seamlessly with live editing, instant notifications, and team activity feeds.",
      highlight: "Live Editing",
      screenshot: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "AI-Powered Analytics",
      description: "Get actionable insights with machine learning-powered reports and predictive analytics.",
      highlight: "AI-Powered",
      screenshot: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Infrastructure",
      description: "99.9% uptime with CDN across 50+ regions worldwide. Lightning-fast performance everywhere.",
      highlight: "99.9% Uptime",
      screenshot: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
    }
  ];

  const useCases = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "For Startups",
      description: "Launch faster with pre-built components and integrations",
      benefits: ["Reduced development time by 70%", "Built-in payment processing", "Scalable architecture from day one"],
      cta: "Start Building",
      image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=500&h=300&fit=crop"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "For Enterprises",
      description: "Enterprise-grade security and compliance features",
      benefits: ["SOC2 & HIPAA compliance", "Advanced user management", "Dedicated support team"],
      cta: "Book Demo",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=300&fit=crop"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "For Developers",
      description: "Full API access and customization options",
      benefits: ["REST & GraphQL APIs", "Webhook integrations", "Custom UI components"],
      cta: "View Docs",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      originalPrice: "$49",
      period: "/month",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 5 team members", 
        "10GB storage", 
        "Basic analytics", 
        "Email support",
        "Mobile app access",
        "Basic integrations"
      ],
      popular: false,
      savings: "Save 40%"
    },
    {
      name: "Professional",
      price: "$99",
      originalPrice: "$149",
      period: "/month",
      description: "For growing businesses that need more power",
      features: [
        "Up to 25 team members", 
        "100GB storage", 
        "Advanced analytics + AI insights", 
        "Priority support",
        "Custom integrations",
        "Advanced security features",
        "API access",
        "White-label options"
      ],
      popular: true,
      savings: "Save 33%"
    },
    {
      name: "Enterprise",
      price: "$299",
      originalPrice: "$449",
      period: "/month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited team members", 
        "1TB storage", 
        "Enterprise analytics + Custom reports", 
        "24/7 phone support",
        "Custom development",
        "SLA guarantee",
        "Dedicated account manager",
        "On-premise deployment",
        "Advanced compliance (HIPAA, GDPR)"
      ],
      popular: false,
      savings: "Save 33%"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      company: "TechStart Inc.",
      content: "This platform transformed how we work. Our productivity increased by 300% in just 2 months. The ROI was incredible - we saved $50K in operational costs.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      metric: "300% productivity increase",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateCorp",
      company: "InnovateCorp",
      content: "The best investment we've made. The ROI was immediate and the team adoption was seamless. We reduced our deployment time from weeks to hours.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      metric: "95% faster deployment",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "VP Operations, GrowthCo",
      company: "GrowthCo",
      content: "Finally, a tool that actually delivers on its promises. Our entire workflow is now streamlined and we've cut operational overhead by 60%.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      metric: "60% cost reduction",
      rating: 5
    }
  ];

  const clientLogos = [
    { name: "Google", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
    { name: "Microsoft", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg" },
    { name: "Apple", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" },
    { name: "Amazon", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Slack", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
    { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/168px-Spotify_logo_without_text.svg.png" }
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Save 20+ Hours Per Week",
      description: "Automate repetitive tasks and focus on what matters most"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Reduce Costs by 40%",
      description: "Cut operational expenses with our efficient workflow solutions"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Boost Revenue by 25%",
      description: "Optimize your processes and increase your bottom line"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Improve Accuracy by 99%",
      description: "Eliminate human error with automated quality checks"
    }
  ];

  const AnimatedStar = ({ filled = true, delay = 0 }) => (
    <div 
      className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-600'} transition-all duration-300`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Star className="w-full h-full fill-current animate-pulse" />
    </div>
  );

  const theme = isDarkMode ? {
    bg: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
    cardBg: 'bg-slate-800/30',
    borderColor: 'border-slate-700',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    textMuted: 'text-gray-400'
  } : {
    bg: 'bg-gradient-to-br from-gray-50 via-purple-50 to-gray-50',
    cardBg: 'bg-white/80',
    borderColor: 'border-gray-200',
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-700',
    textMuted: 'text-gray-500'
  };

  return (
    <div className={`min-h-screen ${theme.bg} relative overflow-x-hidden transition-colors duration-300`}>
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-bounce"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? `${theme.cardBg} backdrop-blur-sm ${theme.borderColor} border-b shadow-2xl` : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="ml-3">
                <span className={`text-xl font-bold ${theme.textPrimary}`}>SaaSFlow</span>
                <div className="w-2 h-2 bg-green-400 rounded-full inline-block ml-2 animate-pulse"></div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`p-2 rounded-lg ${theme.cardBg} ${theme.borderColor} border hover:scale-105 transition-all`}
                >
                  {isDarkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-purple-500" />}
                </button>
                <a href="#features" className={`${theme.textSecondary} hover:${theme.textPrimary} transition-colors relative group`}>
                  Features
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#pricing" className={`${theme.textSecondary} hover:${theme.textPrimary} transition-colors relative group`}>
                  Pricing
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#testimonials" className={`${theme.textSecondary} hover:${theme.textPrimary} transition-colors relative group`}>
                  Testimonials
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </a>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                  Start Free Trial
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${theme.textSecondary} hover:${theme.textPrimary}`}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${theme.cardBg} backdrop-blur-sm ${theme.borderColor} border-b`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#features" className={`${theme.textSecondary} hover:${theme.textPrimary} block px-3 py-2`}>Features</a>
              <a href="#pricing" className={`${theme.textSecondary} hover:${theme.textPrimary} block px-3 py-2`}>Pricing</a>
              <a href="#testimonials" className={`${theme.textSecondary} hover:${theme.textPrimary} block px-3 py-2`}>Testimonials</a>
              <button className="w-full text-left bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-2 rounded-lg mt-2">
                Start Free Trial
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Trust indicators */}
            <div className={`inline-flex items-center px-6 py-3 rounded-full ${theme.cardBg} ${theme.borderColor} border mb-8 backdrop-blur-sm`}>
              <Award className="w-4 h-4 text-yellow-400 mr-2" />
              <span className={`text-sm ${theme.textSecondary}`}>Featured on ProductHunt #1 • Trusted by 10,000+ companies</span>
              <div className="flex ml-3 -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <AnimatedStar key={i} delay={i * 100} />
                ))}
              </div>
            </div>
            
            <h1 className={`text-5xl md:text-7xl font-bold ${theme.textPrimary} mb-6 leading-tight`}>
              Build Your
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-pulse"> Dream SaaS </span>
              in Minutes
            </h1>
            
            <p className={`text-xl ${theme.textSecondary} mb-8 max-w-3xl mx-auto leading-relaxed`}>
              Transform your ideas into powerful web applications with our cutting-edge platform. 
              Join thousands of developers who've <strong className={theme.textPrimary}>accelerated their workflow by 10x</strong> and reduced development time by 80%.
            </p>

            {/* Key benefits */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className={`flex items-center ${theme.cardBg} px-4 py-2 rounded-full ${theme.borderColor} border`}>
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className={`text-sm ${theme.textSecondary}`}>No credit card required</span>
              </div>
              <div className={`flex items-center ${theme.cardBg} px-4 py-2 rounded-full ${theme.borderColor} border`}>
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className={`text-sm ${theme.textSecondary}`}>14-day free trial</span>
              </div>
              <div className={`flex items-center ${theme.cardBg} px-4 py-2 rounded-full ${theme.borderColor} border`}>
                <Shield className="w-4 h-4 text-green-400 mr-2" />
                <span className={`text-sm ${theme.textSecondary}`}>30-day money-back guarantee</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 flex items-center shadow-lg hover:shadow-purple-500/25">
                <Sparkles className="w-5 h-5 mr-2" />
                Start Free Trial
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => scrollToSection('demo')}
                className={`group ${theme.cardBg} ${theme.borderColor} border ${theme.textPrimary} px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-700/50 transition-all duration-200 flex items-center backdrop-blur-sm`}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo (2 min)
              </button>
            </div>

            {/* Animated stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl md:text-4xl font-bold ${theme.textPrimary} mb-2`}>
                    {stat.number.toLocaleString()}{stat.suffix}
                  </div>
                  <div className={`${theme.textMuted} text-sm`}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Hero Dashboard Preview with real screenshots */}
            <div className="relative" id="demo">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl animate-pulse"></div>
              <div className={`relative ${theme.cardBg} ${theme.borderColor} border rounded-3xl p-8 backdrop-blur-sm shadow-2xl`}>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                  <div className="h-4 bg-slate-600 rounded-full animate-pulse delay-100"></div>
                  <div className="h-4 bg-slate-600 rounded-full animate-pulse delay-200"></div>
                </div>
                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop" 
                    alt="Dashboard Preview"
                    className="w-full h-full object-cover rounded-2xl opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 -translate-x-full animate-[shimmer_2s_infinite]"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <button className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4 hover:bg-white/20 transition-all group">
                      <Play className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Client logos */}
            <div className="mt-16">
              <p className={`${theme.textMuted} text-sm mb-8`}>Trusted by leading companies worldwide</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {clientLogos.map((client, index) => (
                  <div key={index} className="flex items-center space-x-2 hover:opacity-100 transition-opacity">
                    <img src={client.logo} alt={client.name} className="w-8 h-8" />
                    <span className={`${theme.textMuted} font-semibold text-lg hover:${theme.textPrimary} transition-colors`}>
                      {client.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-slate-800/20' : 'bg-gray-100/50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold ${theme.textPrimary} mb-6`}>
              Built for Every
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Use Case</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className={`${theme.cardBg} ${theme.borderColor} border rounded-2xl p-8 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 relative overflow-hidden group`}
              >
                <img 
                  src={useCase.image} 
                  alt={useCase.title}
                  className="w-full h-48 object-cover rounded-lg mb-6 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  {useCase.icon}
                </div>
                <h3 className={`text-xl font-semibold ${theme.textPrimary} mb-4`}>{useCase.title}</h3>
                <p className={`${theme.textSecondary} mb-6`}>{useCase.description}</p>
                <ul className="space-y-2 mb-6">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className={`flex items-start ${theme.textSecondary} text-sm`}>
                      <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all">
                  {useCase.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold ${theme.textPrimary} mb-6`}>
              Why Choose
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> SaaSFlow?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  {benefit.icon}
                </div>
                <h3 className={`text-xl font-bold ${theme.textPrimary} mb-2`}>{benefit.title}</h3>
                <p className={`${theme.textMuted} text-sm`}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Screenshots */}
      <section id="features" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-slate-800/20' : 'bg-gray-100/50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold ${theme.textPrimary} mb-6`}>
              Powerful Features That
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Drive Results</span>
            </h2>
            <p className={`text-xl ${theme.textSecondary} max-w-3xl mx-auto`}>
              Everything you need to build, deploy, and scale your SaaS application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group ${theme.cardBg} ${theme.borderColor} border rounded-2xl p-8 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 relative overflow-hidden`}
              >
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {feature.highlight}
                </div>
                
                {/* Feature Screenshot */}
                <div className="mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={feature.screenshot} 
                    alt={feature.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-semibold ${theme.textPrimary} mb-4`}>{feature.title}</h3>
                <p className={`${theme.textSecondary} leading-relaxed`}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold ${theme.textPrimary} mb-6`}>
              Simple, Transparent
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Pricing</span>
            </h2>
            
            {/* One-line benefit header */}
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-8 py-3 inline-block mb-8">
              <p className="text-green-300 font-semibold text-lg">
                💰 Save thousands in development costs - Start building in minutes, not months
              </p>
            </div>

            <p className={`text-xl ${theme.textSecondary} max-w-3xl mx-auto mb-8`}>
              Choose the perfect plan for your needs. Upgrade or downgrade at any time.
            </p>
            <div className="inline-flex items-center bg-green-500/20 border border-green-500/30 text-green-300 px-6 py-2 rounded-full">
              <Sparkles className="w-4 h-4 mr-2" />
              Limited Time: Save up to 40% on all plans!
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative ${theme.cardBg} ${theme.borderColor} border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-purple-500 scale-105 shadow-2xl shadow-purple-500/20' 
                    : `${theme.borderColor} hover:border-purple-500/50`
                } transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      🚀 Most Popular
                    </span>
                  </div>
                )}

                <div className="absolute top-4 right-4 bg-green-500/20 border border-green-500/30 text-green-300 px-3 py-1 rounded-full text-xs font-semibold">
                  {plan.savings}
                </div>

                {/* Money-back guarantee badge */}
                <div className="absolute top-16 right-4 bg-blue-500/20 border border-blue-500/30 text-blue-300 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                  <Shield className="w-3 h-3 mr-1" />
                  30-day guarantee
                </div>

                <div className="text-center mb-8 mt-6">
                  <h3 className={`text-2xl font-bold ${theme.textPrimary} mb-2`}>{plan.name}</h3>
                  <p className={`${theme.textSecondary} mb-4`}>{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className={`text-5xl font-bold ${theme.textPrimary}`}>{plan.price}</span>
                    <span className={`${theme.textSecondary} ml-2`}>{plan.period}</span>
                  </div>
                  <div className="flex items-center justify-center mt-2">
                    <span className={`${theme.textMuted} line-through text-lg mr-2`}>{plan.originalPrice}</span>
                    <span className="text-green-400 text-sm font-semibold">{plan.savings}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-start ${theme.textSecondary}`}>
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25'
                    : `${isDarkMode ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'}`
                }`}>
                  Start Free Trial
                </button>
                
                <p className={`text-center ${theme.textMuted} text-xs mt-3`}>
                  No credit card required • Cancel anytime
                </p>
              </div>
            ))}
          </div>

          {/* Compare Plans CTA */}
          <div className="text-center mt-12">
            <p className={`${theme.textMuted} mb-4`}>Need help choosing the right plan?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={`${theme.cardBg} ${theme.borderColor} border ${theme.textPrimary} px-8 py-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200 flex items-center justify-center`}>
                <Eye className="w-5 h-5 mr-2" />
                Compare All Plans
              </button>
              <button className={`${theme.cardBg} ${theme.borderColor} border ${theme.textPrimary} px-8 py-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200 flex items-center justify-center`}>
                <Briefcase className="w-5 h-5 mr-2" />
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-slate-800/20' : 'bg-gray-100/50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold ${theme.textPrimary} mb-6`}>
              Loved by
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Thousands</span>
            </h2>
            <p className={`text-xl ${theme.textSecondary} max-w-3xl mx-auto`}>
              See what our customers are saying about their experience
            </p>
          </div>

          {/* Featured testimonial with animated stars */}
          <div className="mb-16">
            <div className={`${theme.cardBg} ${theme.borderColor} border rounded-3xl p-12 text-center relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-6 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <AnimatedStar key={i} delay={i * 100} />
                  ))}
                </div>
                <blockquote className={`text-2xl md:text-3xl ${theme.textPrimary} font-medium mb-8 leading-relaxed`}>
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div className="flex items-center justify-center">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full mr-4 border-2 border-purple-500"
                  />
                  <div className="text-left">
                    <h4 className={`${theme.textPrimary} font-semibold text-lg`}>{testimonials[currentTestimonial].name}</h4>
                    <p className={theme.textMuted}>{testimonials[currentTestimonial].role}</p>
                    <p className="text-purple-400 text-sm font-semibold">{testimonials[currentTestimonial].company}</p>
                  </div>
                </div>
                <div className="mt-6 inline-flex items-center bg-green-500/20 border border-green-500/30 text-green-300 px-4 py-2 rounded-full">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  {testimonials[currentTestimonial].metric}
                </div>
              </div>
            </div>
            
            {/* Testimonial indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                      : `${isDarkMode ? 'bg-slate-600 hover:bg-slate-500' : 'bg-gray-400 hover:bg-gray-500'}`
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`${theme.cardBg} ${theme.borderColor} border rounded-2xl p-8 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:border-purple-500/50`}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border border-slate-600"
                  />
                  <div>
                    <h4 className={`${theme.textPrimary} font-semibold`}>{testimonial.name}</h4>
                    <p className={`${theme.textMuted} text-sm`}>{testimonial.role}</p>
                    <p className="text-purple-400 text-xs">{testimonial.company}</p>
                  </div>
                </div>
                <p className={`${theme.textSecondary} leading-relaxed italic mb-4`}>"{testimonial.content}"</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <AnimatedStar key={i} delay={i * 50} />
                    ))}
                  </div>
                  <span className="text-green-400 text-xs font-semibold bg-green-500/10 px-2 py-1 rounded">
                    {testimonial.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold ${theme.textPrimary} mb-6`}>
              Frequently Asked
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can I get started?",
                answer: "You can get started in under 5 minutes! Simply sign up for your free trial, and you'll have immediate access to all features. Our onboarding wizard will guide you through the setup process."
              },
              {
                question: "Is there a free trial available?",
                answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required, and you can cancel anytime during the trial period."
              },
              {
                question: "What's your money-back guarantee policy?",
                answer: "We offer a 30-day money-back guarantee on all plans. If you're not completely satisfied, we'll refund your payment, no questions asked."
              },
              {
                question: "What kind of support do you offer?",
                answer: "We provide 24/7 email support for all plans, priority support for Professional plans, and dedicated phone support for Enterprise customers. Our average response time is under 2 hours."
              },
              {
                question: "Can I integrate with my existing tools?",
                answer: "Absolutely! We offer 100+ integrations including Slack, Salesforce, Google Workspace, Microsoft Teams, and many more. Most integrations can be set up in under 5 minutes."
              },
              {
                question: "Is my data secure?",
                answer: "Security is our top priority. We use bank-level encryption, are SOC2 compliant, and undergo regular security audits. Your data is stored in secure, redundant data centers with 99.9% uptime."
              }
            ].map((faq, index) => (
              <div key={index} className={`${theme.cardBg} ${theme.borderColor} border rounded-2xl p-6 hover:bg-slate-800/50 transition-all duration-300`}>
                <h3 className={`text-lg font-semibold ${theme.textPrimary} mb-3`}>{faq.question}</h3>
                <p className={`${theme.textSecondary} leading-relaxed`}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-slate-800/20' : 'bg-gray-100/50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h2 className={`text-4xl md:text-5xl font-bold ${theme.textPrimary} mb-6`}>
                Ready to Transform Your Business?
              </h2>
              <p className={`text-xl ${theme.textSecondary} mb-8 max-w-2xl mx-auto`}>
                Join thousands of companies already using our platform to accelerate their growth. 
                Start your free trial today and see results in minutes, not months.
              </p>
              
              {/* Urgency indicator */}
              <div className="inline-flex items-center bg-orange-500/20 border border-orange-500/30 text-orange-300 px-6 py-2 rounded-full mb-8">
                <Clock className="w-4 h-4 mr-2" />
                Limited time offer: Save 40% - Expires in 24 hours
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-purple-500/25">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start Your Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className={`${theme.cardBg} ${theme.borderColor} border ${theme.textPrimary} px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-700/50 transition-all duration-200 backdrop-blur-sm flex items-center justify-center`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule a Demo
                </button>
              </div>

              {/* Trust indicators */}
              <div className={`flex flex-wrap justify-center gap-6 text-sm ${theme.textMuted}`}>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-green-400" />
                  30-day money-back guarantee
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  GDPR Compliant
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-2 text-green-400" />
                  SOC2 Certified
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-green-400" />
                  99.9% Uptime
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-slate-900/50' : 'bg-gray-200/50'} ${theme.borderColor} border-t py-12 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className={`text-xl font-bold ${theme.textPrimary} ml-3`}>SaaSFlow</span>
              </div>
              <p className={`${theme.textMuted} mb-6 max-w-md`}>
                Building the future of SaaS development, one template at a time. 
                Trusted by 10,000+ companies worldwide.
              </p>
              
              {/* Social links */}
              <div className="flex space-x-4">
                <a href="#" className={`w-10 h-10 ${theme.cardBg} rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors`}>
                  <Twitter className={`w-5 h-5 ${theme.textMuted} hover:text-white`} />
                </a>
                <a href="#" className={`w-10 h-10 ${theme.cardBg} rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors`}>
                  <Linkedin className={`w-5 h-5 ${theme.textMuted} hover:text-white`} />
                </a>
                <a href="#" className={`w-10 h-10 ${theme.cardBg} rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors`}>
                  <Github className={`w-5 h-5 ${theme.textMuted} hover:text-white`} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className={`${theme.textPrimary} font-semibold mb-4`}>Product</h3>
              <ul className={`space-y-2 ${theme.textMuted}`}>
                <li><a href="#" className={`hover:${theme.textPrimary} transition-colors`}>Features</a></li>
                <li><a href="#" className={`hover:${theme.textPrimary} transition-colors`}>Pricing</a></li>
                <li><a href="#" className={`hover:${theme.textPrimary} transition-colors`}>Integrations</a></li>
                <li><a href="#" className={`hover:${theme.textPrimary} transition-colors`}>API Docs</a></li>
                <li><a href="#" className={`hover:${theme.textPrimary} transition-colors`}>Changelog</a></li>
              </ul>
            </div>

            <div>
              <h3 className={`${theme.textPrimary} font-semibold mb-4`}>Company</h3>
              <ul className={`space-y-2 ${theme.textMuted}`}>
                <li><a href="#" className={`hover:${theme.textPrimary} transition-colors`}>About Us</a></li>
                <li><a href="#" className={`hover:${theme.textPrimary} transition-colors`}>Blog</a></li>
                <li><a href="#" className={`hover:${theme.textPrimary} transition-colors`}>Careers</a></li>
                <li><a href="#" className={`hover:${theme.textPrimary} transition-colors`}>Press Kit</a></li>
                <li><a href="#" className={`hover:${theme.textPrimary} transition-colors`}>Partners</a></li>
              </ul>
            </div>

            <div>
              <h3 className={`${theme.textPrimary} font-semibold mb-4`}>Support</h3>
              <ul className={`space-y-2 ${theme.textMuted}`}>
                <li><a href="#" className={`hover:${theme.textPrimary} transition-colors`}>Help Center</a></li>
                <li><a href="#" className={`hover:${theme.textPrimary} transition-colors`}>Community</a></li>
                <li><a href="#" className={`hover:${theme.textPrimary} transition-colors`}>Status Page</a></li>
                <li><a href="#" className={`hover:${theme.textPrimary} transition-colors`}>Contact Us</a></li>
              </ul>
              
              <div className="mt-6">
                <h4 className={`${theme.textPrimary} font-semibold mb-2`}>Contact</h4>
                <div className={`space-y-2 text-sm ${theme.textMuted}`}>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    support@saasflow.com
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    +1 (555) 123-4567
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    San Francisco, CA
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${theme.borderColor} border-t mt-12 pt-8`}>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className={`${theme.textMuted} text-center md:text-left`}>
                © 2025 SaaSFlow. All rights reserved. Built with React & Tailwind CSS.
              </p>
              <div className={`flex space-x-6 mt-4 md:mt-0 text-sm ${theme.textMuted}`}>
                <a href="#" className={`hover:${theme.textPrimary} transition-colors`}>Privacy Policy</a>
                <a href="#" className={`hover:${theme.textPrimary} transition-colors`}>Terms of Service</a>
                <a href="#" className={`hover:${theme.textPrimary} transition-colors`}>Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Live Chat Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => setShowLiveChat(!showLiveChat)}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-200 transform hover:scale-110 animate-bounce"
        >
          {showLiveChat ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
        
        {/* Chat Widget */}
        {showLiveChat && (
          <div className={`absolute bottom-16 left-0 w-80 h-96 ${theme.cardBg} ${theme.borderColor} border rounded-2xl shadow-2xl backdrop-blur-sm overflow-hidden transform transition-all duration-300`}>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Bot className="w-6 h-6 mr-2" />
                  <div>
                    <h3 className="font-semibold">AI Assistant</h3>
                    <p className="text-xs opacity-90">Usually replies instantly</p>
                  </div>
                </div>
                <button onClick={() => setShowLiveChat(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-4 h-64 overflow-y-auto">
              <div className={`${theme.cardBg} p-3 rounded-lg mb-3 max-w-xs`}>
                <p className={`text-sm ${theme.textSecondary}`}>
                  👋 Hi! I'm here to help you get started with SaaSFlow. What questions do you have?
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <button className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs hover:bg-purple-200 transition-colors">
                  Pricing questions
                </button>
                <button className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs hover:bg-purple-200 transition-colors">
                  Demo request
                </button>
                <button className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs hover:bg-purple-200 transition-colors">
                  Technical support
                </button>
              </div>
            </div>
            
            <div className="p-3 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className={`flex-1 px-3 py-2 ${theme.cardBg} ${theme.borderColor} border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500`}
                />
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Sticky Mobile CTA Button */}
      {showStickyButton && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-purple-500 to-pink-500 z-40">
          <button className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold flex items-center justify-center shadow-lg">
            <Sparkles className="w-5 h-5 mr-2" />
            Get Started Free
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      )}

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-purple-500/25 transition-all duration-200 transform hover:scale-110 z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Exit Intent Modal */}
      {showExitModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`${theme.cardBg} ${theme.borderColor} border rounded-3xl p-8 max-w-md w-full relative transform transition-all duration-300 scale-100`}>
            <button
              onClick={() => setShowExitModal(false)}
              className={`absolute top-4 right-4 ${theme.textMuted} hover:${theme.textPrimary}`}
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Gift className="w-8 h-8 text-white" />
              </div>
              
              <h3 className={`text-2xl font-bold ${theme.textPrimary} mb-4`}>
                Wait! Don't Miss Out 🎁
              </h3>
              
              <p className={`${theme.textSecondary} mb-6`}>
                Get an <strong className="text-orange-400">exclusive 50% discount</strong> on your first month. 
                This offer expires in 10 minutes!
              </p>
              
              <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-4 mb-6">
                <div className={`text-orange-300 font-semibold text-lg`}>
                  🔥 LIMITED TIME: SAVE50
                </div>
                <p className="text-orange-200 text-sm mt-1">
                  Use code at checkout - Valid for 10 minutes only
                </p>
              </div>
              
              <div className="flex flex-col gap-3">
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all flex items-center justify-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Claim 50% Discount Now
                </button>
                <button
                  onClick={() => setShowExitModal(false)}
                  className={`${theme.textMuted} hover:${theme.textPrimary} text-sm`}
                >
                  No thanks, I'll pay full price
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.3); }
          50% { box-shadow: 0 0 30px rgba(147, 51, 234, 0.6); }
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SaaSLandingPage;