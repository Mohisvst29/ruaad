import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Globe, 
  Smartphone, 
  Search, 
  ShoppingCart,
  Users,
  Award,
  Clock,
  MessageCircle,
  Send,
  X,
  Check,
  Zap,
  Shield,
  Headphones,
  Palette,
  Code,
  Rocket,
  ExternalLink,
  Monitor,
  Building,
  GraduationCap,
  Droplets,
  Car,
  Utensils,
  Briefcase
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    websiteActivity: '',
    description: '',
    plan: ''
  });

  // Background images for slideshow
  const backgroundImages = [
    'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePlanSelect = (planName: string, planPrice: string) => {
    setSelectedPlan(planName);
    setFormData(prev => ({
      ...prev,
      plan: planName
    }));
    setShowOrderForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.websiteActivity) {
      alert('يرجى ملء جميع الحقول المطلوبة (الاسم، رقم الجوال، نشاط الموقع)');
      return;
    }

    const message = `
🌟 *طلب موقع إلكتروني جديد* 🌟

👤 *الاسم:* ${formData.name}
📱 *رقم الهاتف:* ${formData.phone}
📧 *البريد الإلكتروني:* ${formData.email || 'غير محدد'}
📦 *الباقة المختارة:* ${formData.plan || 'غير محددة'}
🎯 *نشاط الموقع:* ${formData.websiteActivity}
📝 *وصف المشروع:* ${formData.description || 'لا يوجد وصف إضافي'}

---
تم إرسال هذا الطلب من موقع رواد الرقمية للدعاية والإعلان
    `.trim();

    const phoneNumber = '966541430116';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    setShowOrderForm(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      websiteActivity: '',
      description: '',
      plan: ''
    });
    setSelectedPlan('');
    
    alert('تم إرسال طلبك بنجاح! سيتم توجيهك إلى واتساب لإكمال التواصل.');
  };

  const services = [
    {
      icon: <Globe className="w-12 h-12 text-orange-500" />,
      title: "تصميم مواقع إلكترونية",
      description: "مواقع احترافية متجاوبة مع جميع الأجهزة"
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-orange-500" />,
      title: "متاجر إلكترونية",
      description: "حلول تجارة إلكترونية متكاملة وآمنة"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-orange-500" />,
      title: "تطبيقات الجوال",
      description: "تطبيقات ذكية لأنظمة iOS و Android"
    },
    {
      icon: <Search className="w-12 h-12 text-orange-500" />,
      title: "تحسين محركات البحث",
      description: "تصدر نتائج البحث وزيادة الزيارات"
    }
  ];

  const pricingPlans = [
    {
      name: "الموقع التعريفي",
      price: "1300",
      originalPrice: "3000",
      color: "from-emerald-500 to-emerald-600",
      popular: false,
      features: [
        "تصميم احترافي متجاوب",
        "5 صفحات رئيسية",
        "نموذج تواصل",
        "تحسين محركات البحث الأساسي",
        "ربط وسائل التواصل الاجتماعي",
        "شهادة SSL مجانية",
        "دومين مجاني لمدة سنتين",
        "استضافة مجانية مدى الحياة",
        "تصميم هوية بصرية للشعار",
        "دعم فني لمدة 3 أشهر"
      ]
    },
    {
      name: "المتجر الإلكتروني",
      price: "2300",
      originalPrice: "4000",
      color: "from-orange-500 to-red-500",
      popular: true,
      features: [
        "جميع مميزات الموقع التعريفي",
        "عدد لا محدود من المنتجات",
        "نظام إدارة المخزون",
        "بوابات دفع متعددة",
        "نظام الكوبونات والخصومات",
        "تقارير المبيعات",
        "لوحة تحكم متقدمة",
        "دومين مجاني لمدة سنتين",
        "استضافة مجانية مدى الحياة",
        "تصميم هوية بصرية للشعار",
        "دعم فني لمدة 6 أشهر",
        "تدريب على استخدام النظام"
      ]
    },
    {
      name: "الموقع المتقدم",
      price: "3500",
      originalPrice: "6000",
      color: "from-amber-500 to-orange-600",
      popular: false,
      features: [
        "جميع مميزات المتجر الإلكتروني",
        "تطبيق جوال مجاني",
        "نظام إدارة المحتوى المتقدم",
        "تكامل مع الأنظمة الخارجية",
        "تحليلات متقدمة",
        "نظام العضويات",
        "دعم متعدد اللغات",
        "دومين مجاني لمدة سنتين",
        "استضافة مجانية مدى الحياة",
        "تصميم هوية بصرية شاملة للشعار",
        "دعم فني لمدة سنة كاملة",
        "صيانة دورية مجانية"
      ]
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: "سرعة في التنفيذ",
      description: "تسليم المشروع في الوقت المحدد"
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: "أمان عالي",
      description: "حماية متقدمة لموقعك وبياناتك"
    },
    {
      icon: <Headphones className="w-8 h-8 text-orange-500" />,
      title: "دعم فني 24/7",
      description: "فريق دعم متاح على مدار الساعة"
    },
    {
      icon: <Palette className="w-8 h-8 text-orange-500" />,
      title: "تصميم هوية بصرية",
      description: "تصميم شعار وهوية بصرية مميزة"
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: "كود نظيف",
      description: "برمجة احترافية وفقاً لأفضل المعايير"
    },
    {
      icon: <Rocket className="w-8 h-8 text-orange-500" />,
      title: "أداء متميز",
      description: "مواقع سريعة ومحسنة للأداء"
    }
  ];

  const testimonials = [
    {
      name: "أحمد محمد",
      company: "شركة التقنية المتقدمة",
      rating: 5,
      comment: "خدمة ممتازة وتصميم رائع. فريق محترف ومتعاون.",
      icon: <Building className="w-12 h-12 text-orange-500" />
    },
    {
      name: "فاطمة العلي",
      company: "متجر الأناقة",
      rating: 5,
      comment: "موقع متجري الإلكتروني تجاوز توقعاتي. شكراً لكم!",
      icon: <ShoppingCart className="w-12 h-12 text-orange-500" />
    },
    {
      name: "خالد السعد",
      company: "مؤسسة النجاح",
      rating: 5,
      comment: "تعامل راقي وتسليم في الوقت المحدد. أنصح بهم بشدة.",
      icon: <Award className="w-12 h-12 text-orange-500" />
    }
  ];

  const portfolio = [
    {
      title: "شركة عهود المياه",
      url: "https://www.ohodwater.com/",
      category: "شركة مياه",
      status: "مكتمل",
      icon: <Droplets className="w-6 h-6 text-blue-500" />
    },
    {
      title: "موقع تجاري",
      url: "https://sparkling-youtiao-b21292.netlify.app/",
      category: "موقع تجاري",
      status: "تحت الإنشاء",
      icon: <Briefcase className="w-6 h-6 text-amber-500" />
    },
    {
      title: "أكاديمية كاين - بدر",
      url: "https://kain-academi-badr.vercel.app/",
      category: "أكاديمية تعليمية",
      status: "تحت الإنشاء",
      icon: <GraduationCap className="w-6 h-6 text-amber-500" />
    },
    {
      title: "العرابة الفريحة",
      url: "https://www.alaraba-alfareha.com/",
      category: "موقع تجاري",
      status: "مكتمل",
      icon: <Car className="w-6 h-6 text-blue-500" />
    },
    {
      title: "إكستريم نانو",
      url: "https://www.xtreme-nano.com/",
      category: "شركة تقنية",
      status: "مكتمل",
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: "الحازم الأول",
      url: "https://www.alhazimalawal.com/ar",
      category: "شركة خدمات",
      status: "مكتمل",
      icon: <Building className="w-6 h-6 text-blue-500" />
    },
    {
      title: "مطعم",
      url: "https://lively-semolina-294a8b.netlify.app/",
      category: "مطعم",
      status: "تحت الإنشاء",
      icon: <Utensils className="w-6 h-6 text-amber-500" />
    },
    {
      title: "مياه المدينة",
      url: "https://almadenahwater.com/",
      category: "شركة مياه",
      status: "مكتمل",
      icon: <Droplets className="w-6 h-6 text-blue-500" />
    },
    {
      title: "الأثاثي السعودية",
      url: "https://www.athathy-sa.com/",
      category: "شركة أثاث",
      status: "مكتمل",
      icon: <Building className="w-6 h-6 text-blue-500" />
    }
  ];

  const stats = [
    { number: "500+", label: "مشروع مكتمل", icon: <Award className="w-8 h-8" /> },
    { number: "300+", label: "عميل راضي", icon: <Users className="w-8 h-8" /> },
    { number: "5+", label: "سنوات خبرة", icon: <Clock className="w-8 h-8" /> },
    { number: "24/7", label: "دعم فني", icon: <MessageCircle className="w-8 h-8" /> }
  ];

  const websiteActivities = [
    "موقع شركة",
    "متجر إلكتروني",
    "موقع شخصي",
    "مدونة",
    "موقع خدمات",
    "موقع تعليمي",
    "موقع طبي",
    "موقع عقاري",
    "موقع مطعم",
    "موقع سياحي",
    "موقع رياضي",
    "موقع إخباري",
    "منصة تعليمية",
    "موقع حكومي",
    "موقع خيري",
    "أخرى"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4 space-x-reverse">
              <img 
                src="/ruaad logo.png" 
                alt="رواد الرقمية" 
                className="h-12 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  رواد الرقمية
                </h1>
                <p className="text-sm text-gray-600">للدعاية والإعلان</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 space-x-reverse">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">الرئيسية</a>
              <a href="#services" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">خدماتنا</a>
              <a href="#portfolio" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">أعمالنا</a>
              <a href="#pricing" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">الأسعار</a>
              <a href="#testimonials" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">آراء العملاء</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">تواصل معنا</a>
            </nav>

            {/* CTA Button */}
            <button 
              onClick={() => setShowOrderForm(true)}
              className="hidden md:flex items-center space-x-2 space-x-reverse bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-full hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span className="font-semibold">اطلب موقعك</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">الرئيسية</a>
                <a href="#services" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">خدماتنا</a>
                <a href="#portfolio" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">أعمالنا</a>
                <a href="#pricing" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">الأسعار</a>
                <a href="#testimonials" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">آراء العملاء</a>
                <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">تواصل معنا</a>
                <button 
                  onClick={() => {
                    setShowOrderForm(true);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center justify-center space-x-2 space-x-reverse bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-full hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg"
                >
                  <span className="font-semibold">اطلب موقعك</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images Slideshow */}
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 background-transition ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
          ))}
        </div>

        {/* Navy Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/85 to-slate-800/90"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          {/* Main Heading - Responsive Text Sizes */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="block mb-2">صمم موقعك الإلكتروني</span>
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent block">
              مع رواد الرقمية
            </span>
          </h1>
          
          {/* Subtitle - Responsive */}
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium mb-6 md:mb-8 text-orange-100 px-2">
            وارني بأعمالك - استشارة مجانية، ودعم كامل من البداية للنهاية
          </h2>
          
          {/* CTA Buttons - Responsive Stack */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12 px-4">
            <button 
              onClick={() => setShowOrderForm(true)}
              className="group bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 flex items-center space-x-3 space-x-reverse w-full sm:w-auto justify-center"
            >
              <span>اطلب موقعك الآن</span>
              <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a 
              href="#pricing"
              className="group border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center space-x-3 space-x-reverse w-full sm:w-auto justify-center"
            >
              <span>تعرف على الأسعار</span>
              <Globe className="w-4 md:w-5 h-4 md:h-5 group-hover:rotate-12 transition-transform" />
            </a>
          </div>

          {/* Quick Pricing Preview - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto px-4">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 md:p-6 text-center">
              <h3 className="text-lg md:text-xl font-bold text-emerald-400 mb-2">الموقع التعريفي</h3>
              <div className="text-2xl md:text-3xl font-bold mb-2">
                <span className="text-emerald-400">1300</span>
                <span className="text-sm md:text-lg text-gray-300"> ريال</span>
              </div>
              <div className="text-xs md:text-sm text-gray-300 line-through">بدلاً من 3000 ريال</div>
              <div className="text-xs text-emerald-300 mt-2">+ دومين سنتين + استضافة مدى الحياة</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 md:p-6 text-center">
              <h3 className="text-lg md:text-xl font-bold text-orange-400 mb-2">المتجر الإلكتروني</h3>
              <div className="text-2xl md:text-3xl font-bold mb-2">
                <span className="text-orange-400">2300</span>
                <span className="text-sm md:text-lg text-gray-300"> ريال</span>
              </div>
              <div className="text-xs md:text-sm text-gray-300 line-through">بدلاً من 4000 ريال</div>
              <div className="text-xs text-orange-300 mt-2">+ دومين سنتين + استضافة مدى الحياة</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-4 text-orange-200">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-orange-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">خدماتنا المتميزة</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نقدم حلول رقمية شاملة تساعدك على تحقيق النجاح في العالم الرقمي
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">بعض أعمالنا</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              اطلع على مجموعة من المشاريع التي نفذناها بنجاح لعملائنا
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    {project.icon}
                    <div>
                      <h3 className="font-bold text-gray-800">{project.title}</h3>
                      <p className="text-sm text-gray-600">{project.category}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'مكتمل' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 space-x-reverse bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-3 rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 group-hover:shadow-lg"
                >
                  <span>زيارة الموقع</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">باقاتنا وأسعارنا</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              اختر الباقة التي تناسب احتياجاتك وميزانيتك - جميع الباقات تشمل دومين لسنتين واستضافة مدى الحياة
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'ring-4 ring-orange-500 ring-opacity-50' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                      الأكثر طلباً
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
                    <div className="mb-4">
                      <span className={`text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                      <span className="text-gray-600 text-lg"> ريال</span>
                    </div>
                    <div className="text-gray-500 line-through text-lg">
                      بدلاً من {plan.originalPrice} ريال
                    </div>
                    <div className="mt-2 text-sm text-green-600 font-semibold">
                      شامل دومين سنتين + استضافة مدى الحياة
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3 space-x-reverse">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handlePlanSelect(plan.name, plan.price)}
                    className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg hover:shadow-orange-500/25' 
                        : `bg-gradient-to-r ${plan.color} text-white shadow-lg hover:shadow-xl`
                    }`}
                  >
                    اختر هذه الباقة
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              هل تحتاج باقة مخصصة؟ تواصل معنا للحصول على عرض سعر مخصص
            </p>
            <button 
              onClick={() => setShowOrderForm(true)}
              className="bg-gradient-to-r from-amber-600 to-orange-700 text-white px-8 py-4 rounded-full font-semibold hover:from-amber-700 hover:to-orange-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              طلب عرض سعر مخصص
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              لماذا تختار رواد الرقمية؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نحن نجمع بين الخبرة التقنية والإبداع في التصميم لنقدم لك موقعاً إلكترونياً يحقق أهدافك
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center space-x-4 space-x-reverse mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">آراء عملائنا</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اكتشف ما يقوله عملاؤنا عن تجربتهم معنا
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="flex justify-center items-center w-16 h-16 bg-orange-100 rounded-full ml-4">
                    {testimonial.icon}
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">تواصل معنا</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              نحن هنا لمساعدتك في تحقيق أهدافك الرقمية. تواصل معنا اليوم!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-8">معلومات التواصل</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="bg-orange-600 p-3 rounded-full">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">الهاتف</div>
                    <div className="text-gray-300">+966 54 143 0116</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="bg-orange-600 p-3 rounded-full">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">البريد الإلكتروني</div>
                    <div className="text-gray-300">sales@ruaadalraqamia.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="bg-orange-600 p-3 rounded-full">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">الموقع</div>
                    <div className="text-gray-300">المدينة المنورة - شوران - حي النبلاء</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8">احصل على استشارة مجانية</h3>
              <button 
                onClick={() => setShowOrderForm(true)}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-3 space-x-reverse"
              >
                <span>اطلب موقعك الآن</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-gray-400 text-center mt-4">
                استشارة مجانية • تقييم احترافي • عرض سعر مخصص
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 space-x-reverse mb-6">
              <img 
                src="/ruaad logo.png" 
                alt="رواد الرقمية" 
                className="h-12 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  رواد الرقمية
                </h3>
                <p className="text-gray-400">للدعاية والإعلان</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              نحن نساعدك في بناء حضورك الرقمي وتحقيق النجاح في العالم الإلكتروني
            </p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500">
                © 2024 رواد الرقمية للدعاية والإعلان. جميع الحقوق محفوظة.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Order Form Modal */}
      {showOrderForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-bounce-in">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">
                  {selectedPlan ? `طلب باقة ${selectedPlan}` : 'اطلب موقعك الإلكتروني'}
                </h2>
                <button
                  onClick={() => {
                    setShowOrderForm(false);
                    setSelectedPlan('');
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      websiteActivity: '',
                      description: '',
                      plan: ''
                    });
                  }}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {selectedPlan && (
                <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-4 mb-6">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <CheckCircle className="w-6 h-6 text-orange-600" />
                    <div>
                      <div className="font-bold text-orange-800">تم اختيار باقة: {selectedPlan}</div>
                      <div className="text-orange-600">السعر: {formData.plan === 'الموقع التعريفي' ? '1300' : formData.plan === 'المتجر الإلكتروني' ? '2300' : '3500'} ريال</div>
                      <div className="text-sm text-green-600">شامل دومين سنتين + استضافة مدى الحياة + تصميم هوية بصرية</div>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      رقم الجوال *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="05xxxxxxxx"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    نشاط الموقع *
                  </label>
                  <select
                    name="websiteActivity"
                    value={formData.websiteActivity}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  >
                    <option value="">اختر نشاط الموقع</option>
                    {websiteActivities.map((activity, index) => (
                      <option key={index} value={activity}>{activity}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    وصف المشروع أو متطلبات إضافية
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                    placeholder="اكتب وصفاً مختصراً عن مشروعك ومتطلباتك..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2 space-x-reverse"
                  >
                    <Send className="w-5 h-5" />
                    <span>إرسال الطلب</span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => {
                      setShowOrderForm(false);
                      setSelectedPlan('');
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        websiteActivity: '',
                        description: '',
                        plan: ''
                      });
                    }}
                    className="flex-1 sm:flex-none border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
                  >
                    إلغاء
                  </button>
                </div>
              </form>

              <div className="mt-8 p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-center space-x-2 space-x-reverse text-orange-800">
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-semibold">ملاحظة:</span>
                </div>
                <p className="text-orange-700 mt-2 text-sm">
                  بعد إرسال الطلب، سيتم توجيهك إلى واتساب للتواصل المباشر مع فريقنا وتلقي استشارة مجانية فورية.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;