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
  X
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    budget: '',
    description: ''
  });

  // Background images for slideshow
  const backgroundImages = [
    'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // تحقق من أن جميع الحقول المطلوبة مملوءة
    if (!formData.name || !formData.phone || !formData.projectType) {
      alert('يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    // إنشاء رسالة واتساب
    const message = `
🌟 *طلب موقع إلكتروني جديد* 🌟

👤 *الاسم:* ${formData.name}
📱 *رقم الهاتف:* ${formData.phone}
📧 *البريد الإلكتروني:* ${formData.email || 'غير محدد'}
🎯 *نوع المشروع:* ${formData.projectType}
💰 *الميزانية:* ${formData.budget || 'غير محددة'}
📝 *وصف المشروع:* ${formData.description || 'لا يوجد وصف إضافي'}

---
تم إرسال هذا الطلب من موقع رواد الرقمية للدعاية والإعلان
    `.trim();

    // رقم واتساب مع كود الدولة
    const phoneNumber = '966541430116';
    
    // إنشاء رابط واتساب
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // فتح واتساب في نافذة جديدة
    window.open(whatsappUrl, '_blank');
    
    // إغلاق النموذج وإعادة تعيين البيانات
    setShowOrderForm(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      projectType: '',
      budget: '',
      description: ''
    });
    
    // رسالة تأكيد
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

  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: "تصميم احترافي",
      description: "تصاميم عصرية تواكب أحدث الاتجاهات"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: "متجاوب مع الأجهزة",
      description: "يعمل بكفاءة على جميع الأجهزة والشاشات"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: "سرعة في التحميل",
      description: "مواقع سريعة ومحسنة للأداء"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: "دعم فني مستمر",
      description: "دعم تقني على مدار الساعة"
    }
  ];

  const testimonials = [
    {
      name: "أحمد محمد",
      company: "شركة التقنية المتقدمة",
      rating: 5,
      comment: "خدمة ممتازة وتصميم رائع. فريق محترف ومتعاون."
    },
    {
      name: "فاطمة العلي",
      company: "متجر الأناقة",
      rating: 5,
      comment: "موقع متجري الإلكتروني تجاوز توقعاتي. شكراً لكم!"
    },
    {
      name: "خالد السعد",
      company: "مؤسسة النجاح",
      rating: 5,
      comment: "تعامل راقي وتسليم في الوقت المحدد. أنصح بهم بشدة."
    }
  ];

  const stats = [
    { number: "500+", label: "مشروع مكتمل", icon: <Award className="w-8 h-8" /> },
    { number: "300+", label: "عميل راضي", icon: <Users className="w-8 h-8" /> },
    { number: "5+", label: "سنوات خبرة", icon: <Clock className="w-8 h-8" /> },
    { number: "24/7", label: "دعم فني", icon: <MessageCircle className="w-8 h-8" /> }
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
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">من نحن</a>
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
                <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">من نحن</a>
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

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500 bg-opacity-20 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-red-500 bg-opacity-20 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-orange-400 bg-opacity-15 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-12 h-12 bg-red-400 bg-opacity-25 rounded-full animate-parallax-float"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent animate-gradient">
              رواد الرقمية
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-orange-100">
            للدعاية والإعلان
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 leading-relaxed">
            نصمم مواقع إلكترونية احترافية تعكس هويتك التجارية وتحقق أهدافك الرقمية
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => setShowOrderForm(true)}
              className="group bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 flex items-center space-x-3 space-x-reverse"
            >
              <span>اطلب موقعك الآن</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a 
              href="#services"
              className="group border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center space-x-3 space-x-reverse"
            >
              <span>تعرف على خدماتنا</span>
              <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
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

      {/* Features Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                لماذا تختار رواد الرقمية؟
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                نحن نجمع بين الخبرة التقنية والإبداع في التصميم لنقدم لك موقعاً إلكترونياً يحقق أهدافك ويتفوق على منافسيك.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 space-x-reverse">
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="فريق العمل" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">+500</div>
                <div className="text-orange-100">مشروع ناجح</div>
              </div>
            </div>
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
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.comment}"</p>
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
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
                    <div className="text-gray-300">info@ruaaddigital.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="bg-orange-600 p-3 rounded-full">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">الموقع</div>
                    <div className="text-gray-300">المملكة العربية السعودية</div>
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
                <h2 className="text-3xl font-bold text-gray-800">اطلب موقعك الإلكتروني</h2>
                <button
                  onClick={() => setShowOrderForm(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

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
                      رقم الهاتف *
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      نوع المشروع *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    >
                      <option value="">اختر نوع المشروع</option>
                      <option value="موقع تعريفي">موقع تعريفي</option>
                      <option value="متجر إلكتروني">متجر إلكتروني</option>
                      <option value="موقع شركة">موقع شركة</option>
                      <option value="مدونة">مدونة</option>
                      <option value="تطبيق ويب">تطبيق ويب</option>
                      <option value="أخرى">أخرى</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      الميزانية المتوقعة
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    >
                      <option value="">اختر الميزانية</option>
                      <option value="أقل من 5000 ريال">أقل من 5000 ريال</option>
                      <option value="5000 - 10000 ريال">5000 - 10000 ريال</option>
                      <option value="10000 - 20000 ريال">10000 - 20000 ريال</option>
                      <option value="20000 - 50000 ريال">20000 - 50000 ريال</option>
                      <option value="أكثر من 50000 ريال">أكثر من 50000 ريال</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    وصف المشروع
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
                    onClick={() => setShowOrderForm(false)}
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