import React, { useState, useEffect } from 'react';
import { 
  Monitor, 
  Smartphone, 
  Tablet, 
  CheckCircle, 
  Star, 
  Globe, 
  Shield, 
  Headphones, 
  Zap,
  Send,
  Quote,
  Users,
  Award,
  ArrowLeft,
  ShoppingCart,
  Building,
  Camera,
  Utensils,
  Briefcase,
  Heart,
  GraduationCap,
  Car,
  Phone,
  MessageCircle,
  MapPin,
  Link,
  Clock,
  DollarSign,
  Truck,
  X
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    websiteType: '',
    notes: ''
  });

  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 5000); // Show after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('شكراً لك! سنتواصل معك قريباً');
  };

  const handleCall = (phoneNumber: string = '+966541430116') => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleWhatsApp = (phoneNumber: string = '+966541430116') => {
    window.open(`https://wa.me/${phoneNumber.replace('+', '')}?text=مرحباً، أريد استشارة مجانية لتصميم موقع إلكتروني`, '_blank');
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  const features = [
    { icon: Monitor, text: 'تصميم احترافي متوافق مع جميع الأجهزة' },
    { icon: Globe, text: 'دومين مجاني لأول سنة' },
    { icon: Zap, text: 'استضافة سريعة وآمنة' },
    { icon: Headphones, text: 'دعم فني مستمر' },
    { icon: Shield, text: 'حماية قوية ضد التهديدات' },
    { icon: Award, text: 'ضمان الجودة والتسليم في الوقت المحدد' }
  ];

  const websiteTypes = [
    { value: 'متجر-إلكتروني', label: 'متجر إلكتروني', icon: ShoppingCart },
    { value: 'موقع-شركة', label: 'موقع شركة', icon: Building },
    { value: 'معرض-أعمال', label: 'معرض أعمال', icon: Camera },
    { value: 'موقع-مطعم', label: 'موقع مطعم', icon: Utensils },
    { value: 'موقع-خدمات', label: 'موقع خدمات', icon: Briefcase },
    { value: 'موقع-طبي', label: 'موقع طبي', icon: Heart },
    { value: 'موقع-تعليمي', label: 'موقع تعليمي', icon: GraduationCap },
    { value: 'موقع-سيارات', label: 'موقع سيارات', icon: Car },
    { value: 'أخرى', label: 'أخرى', icon: Globe }
  ];

  const testimonials = [
    {
      name: 'أحمد السعيد',
      business: 'مطعم النخيل الذهبي',
      rating: 5,
      comment: 'خدمة ممتازة وتصميم راقي جداً، زاد عدد زبائننا بشكل ملحوظ بعد إطلاق الموقع'
    },
    {
      name: 'فاطمة محمد',
      business: 'متجر الأزياء العصرية',
      rating: 5,
      comment: 'فريق محترف ومتعاون، صمموا لنا موقع إلكتروني يعكس هوية علامتنا التجارية بطريقة مثالية'
    },
    {
      name: 'خالد العتيبي',
      business: 'شركة الإنشاءات المتقدمة',
      rating: 5,
      comment: 'الموقع أصبح واجهتنا الرقمية الأولى، والدعم الفني متواصل ومميز'
    }
  ];

  const portfolioItems = [
    {
      title: 'شركة مياه عهود',
      url: 'https://www.ohodwater.com/',
      category: 'موقع شركة',
      status: 'مكتمل'
    },
    {
      title: 'مشروع تجاري',
      url: 'https://sparkling-youtiao-b21292.netlify.app/',
      category: 'متجر إلكتروني',
      status: 'تحت الإنشاء'
    },
    {
      title: 'أكاديمية كين - بدر',
      url: 'https://kain-academi-badr.vercel.app/',
      category: 'موقع تعليمي',
      status: 'تحت الإنشاء'
    },
    {
      title: 'العرابة الفارحة',
      url: 'https://www.alaraba-alfareha.com/',
      category: 'موقع تراثي',
      status: 'مكتمل'
    },
    {
      title: 'إكستريم نانو',
      url: 'https://www.xtreme-nano.com/',
      category: 'موقع خدمات',
      status: 'مكتمل'
    },
    {
      title: 'الحازم الأول',
      url: 'https://www.alhazimalawal.com/ar',
      category: 'موقع شركة',
      status: 'مكتمل'
    },
    {
      title: 'مشروع إبداعي',
      url: 'https://lively-semolina-294a8b.netlify.app/',
      category: 'معرض أعمال',
      status: 'تحت الإنشاء'
    },
    {
      title: 'مياه المدينة',
      url: 'https://almadenahwater.com/',
      category: 'موقع شركة',
      status: 'مكتمل'
    },
    {
      title: 'عطاثي السعودية',
      url: 'https://www.athathy-sa.com/',
      category: 'متجر إلكتروني',
      status: 'مكتمل'
    }
  ];

  // Contact numbers
  const contactNumbers = [
    { number: '+966541430116', label: 'الرقم الأول' },
    { number: '+966540301696', label: 'الرقم الثاني' }
  ];

  // Background images for animation
  const backgroundImages = [
    'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ];

  return (
    <div className="min-h-screen bg-white font-sans" dir="rtl">
      {/* Notification Popup */}
      {showNotification && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 animate-bounce-in">
            <div className="relative">
              {/* Close button */}
              <button
                onClick={closeNotification}
                className="absolute top-4 left-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
              >
                <X className="h-4 w-4 text-gray-600" />
              </button>

              {/* Header with gradient */}
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 rounded-t-3xl text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">عرض خاص لفترة محدودة!</h3>
                <p className="text-orange-100">لا تفوت الفرصة</p>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <DollarSign className="h-5 w-5 text-green-600" />
                      <span className="font-bold text-green-800">الموقع التعريفي</span>
                    </div>
                    <div className="text-2xl font-black text-green-600">1300 ريال</div>
                    <div className="text-sm text-green-700 line-through">بدلاً من 3000 ريال</div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <ShoppingCart className="h-5 w-5 text-blue-600" />
                      <span className="font-bold text-blue-800">المتجر الإلكتروني</span>
                    </div>
                    <div className="text-2xl font-black text-blue-600">2300 ريال</div>
                    <div className="text-sm text-blue-700 line-through">بدلاً من 4000 ريال</div>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Clock className="h-5 w-5 text-orange-600" />
                      <span className="font-bold text-orange-800">التسليم السريع</span>
                    </div>
                    <div className="text-2xl font-black text-orange-600">4 أيام</div>
                    <div className="text-sm text-orange-700">أيام عمل فقط</div>
                  </div>

                  <div className="text-gray-700">
                    <p className="font-semibold mb-2">احصل على موقعك الإلكتروني الآن!</p>
                    <p className="text-sm text-gray-600">استشارة مجانية + دومين مجاني + استضافة</p>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col gap-3 mt-6">
                  <button
                    onClick={() => {
                      closeNotification();
                      scrollToForm();
                    }}
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-6 rounded-xl font-bold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    اطلب موقعك الآن
                  </button>
                  <button
                    onClick={() => {
                      closeNotification();
                      handleWhatsApp();
                    }}
                    className="w-full border-2 border-green-500 text-green-600 py-3 px-6 rounded-xl font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
                  >
                    استشارة مجانية - واتساب
                  </button>
                </div>

                <p className="text-xs text-gray-500 mt-4">
                  العرض ساري لفترة محدودة
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <div className="fixed left-6 bottom-6 z-50">
        <button
          onClick={() => handleWhatsApp()}
          className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110 animate-pulse hover:animate-none"
          aria-label="تواصل عبر واتساب"
        >
          <MessageCircle className="h-7 w-7" />
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            تواصل معنا عبر واتساب
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-full border-4 border-transparent border-r-gray-900"></div>
          </div>
        </button>
      </div>

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 space-x-reverse">
            <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-white shadow-sm">
              <img 
                src="/ruaad logo.png" 
                alt="رواد الرقمية" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">رواد الرقمية</h1>
              <p className="text-xs text-gray-600">للدعاية والإعلان</p>
            </div>
          </div>
          
          {/* Contact Info in Header */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="h-4 w-4 text-orange-600" />
              <span className="text-sm">المدينة المنورة - حي النبلاء</span>
            </div>
            <div className="flex gap-2">
              {contactNumbers.map((contact, index) => (
                <div key={index} className="flex gap-1">
                  <button
                    onClick={() => handleCall(contact.number)}
                    className="flex items-center gap-2 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">{contact.label}</span>
                  </button>
                  <button
                    onClick={() => handleWhatsApp(contact.number)}
                    className="flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-sm">واتساب</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Contact */}
          <div className="md:hidden flex gap-2">
            <button
              onClick={() => handleCall()}
              className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              <Phone className="h-4 w-4" />
            </button>
            <button
              onClick={() => handleWhatsApp()}
              className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors duration-200"
            >
              <MessageCircle className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Animated Background Images */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Images */}
        <div className="absolute inset-0 w-full h-full">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-[3000ms] ease-in-out animate-background-slide-${index}`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                animationDelay: `${index * 4}s`,
                animationDuration: `${backgroundImages.length * 4}s`,
                opacity: index === 0 ? 1 : 0
              }}
            />
          ))}
          
          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-orange-900/75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Icons */}
          <div className="absolute top-20 left-10 animate-float-slow opacity-20">
            <Monitor className="h-16 w-16 text-white" />
          </div>
          <div className="absolute top-40 right-20 animate-float-delayed opacity-20">
            <Smartphone className="h-12 w-12 text-orange-300" />
          </div>
          <div className="absolute bottom-40 left-20 animate-float opacity-20">
            <Globe className="h-14 w-14 text-red-300" />
          </div>
          <div className="absolute top-60 right-10 animate-float-slow opacity-20">
            <Tablet className="h-10 w-10 text-white" />
          </div>
          <div className="absolute bottom-20 right-40 animate-float-delayed opacity-20">
            <Zap className="h-12 w-12 text-yellow-300" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8 text-center lg:text-right">
              <div className="space-y-8">
                <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
                  <div className="mb-6 md:mb-8">
                    <span className="block text-white drop-shadow-2xl shadow-black/50 text-4xl md:text-5xl lg:text-7xl xl:text-8xl">
                      صمّم موقعك الإلكتروني
                    </span>
                  </div>
                  <div className="mb-6 md:mb-8">
                    <span className="block text-white drop-shadow-2xl shadow-black/50 text-2xl md:text-3xl lg:text-5xl xl:text-6xl">
                      مع
                    </span>
                  </div>
                  <div className="mb-6 md:mb-8">
                    <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl font-black text-4xl md:text-5xl lg:text-7xl xl:text-8xl">
                      رواد الرقمية
                    </span>
                  </div>
                  <div>
                    <span className="block text-white drop-shadow-2xl shadow-black/50 text-2xl md:text-3xl lg:text-5xl xl:text-6xl">
                      وارتقِ بأعمالك
                    </span>
                  </div>
                </h1>
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed font-semibold drop-shadow-lg">
                    استشارتك مجانية، ودعم كامل من البداية للنهاية
                  </p>
                </div>
              </div>

              {/* Pricing and Delivery Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-green-600/90 to-green-500/90 backdrop-blur-sm rounded-2xl p-6 border border-green-400/30">
                  <div className="flex items-center gap-3 mb-2">
                    <Building className="h-6 w-6 text-white" />
                    <h3 className="text-white font-bold text-lg">الموقع التعريفي</h3>
                  </div>
                  <p className="text-white text-2xl font-black">1300 ريال</p>
                  <p className="text-green-100 text-sm line-through">بدلاً من 3000 ريال</p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-600/90 to-blue-500/90 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
                  <div className="flex items-center gap-3 mb-2">
                    <ShoppingCart className="h-6 w-6 text-white" />
                    <h3 className="text-white font-bold text-lg">المتجر الإلكتروني</h3>
                  </div>
                  <p className="text-white text-2xl font-black">2300 ريال</p>
                  <p className="text-blue-100 text-sm line-through">بدلاً من 4000 ريال</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-600/90 to-red-500/90 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/30">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="h-6 w-6 text-white" />
                  <h3 className="text-white font-bold text-lg">التسليم السريع</h3>
                </div>
                <p className="text-white text-2xl font-black">4 أيام</p>
                <p className="text-orange-100 text-sm">أيام عمل فقط</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={scrollToForm}
                  className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border-2 border-white/20"
                >
                  اطلب موقعك الآن
                </button>
                <button 
                  onClick={() => handleWhatsApp()}
                  className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm"
                >
                  تواصل واتساب
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                  <Users className="h-5 w-5 text-orange-400" />
                  <span className="text-white text-sm md:text-base font-semibold">+500 عميل راضٍ</span>
                </div>
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                  <Award className="h-5 w-5 text-orange-400" />
                  <span className="text-white text-sm md:text-base font-semibold">خبرة +7 سنوات</span>
                </div>
              </div>

              {/* Contact Info in Hero */}
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 mt-8 border border-white/20">
                <h3 className="text-white font-bold mb-4 text-center text-lg">تواصل معنا الآن</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactNumbers.map((contact, index) => (
                    <div key={index} className="space-y-2">
                      <div className="text-center text-white text-sm font-medium">{contact.label}</div>
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => handleCall(contact.number)}
                          className="flex items-center justify-center gap-3 bg-green-600 text-white px-4 py-3 rounded-xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105 font-semibold border border-green-500"
                        >
                          <Phone className="h-4 w-4" />
                          <span className="text-sm">{contact.number}</span>
                        </button>
                        <button
                          onClick={() => handleWhatsApp(contact.number)}
                          className="flex items-center justify-center gap-3 bg-green-500 text-white px-4 py-3 rounded-xl hover:bg-green-600 transition-all duration-300 transform hover:scale-105 font-semibold border border-green-400"
                        >
                          <MessageCircle className="h-4 w-4" />
                          <span className="text-sm">واتساب</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-2 mt-4 text-white/90">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-medium">المدينة المنورة - حي النبلاء</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative">
                {/* Desktop mockup */}
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-4 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 border border-white/10">
                  <div className="bg-white rounded-lg p-6 h-64">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gradient-to-r from-orange-200 to-red-200 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        <div className="h-12 bg-orange-100 rounded"></div>
                        <div className="h-12 bg-red-100 rounded"></div>
                        <div className="h-12 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile mockup */}
                <div className="absolute -bottom-8 -right-8 bg-gray-900/80 backdrop-blur-sm rounded-2xl p-2 shadow-xl transform -rotate-12 hover:rotate-0 transition-transform duration-500 border border-white/10">
                  <div className="bg-white rounded-lg p-3 w-24 h-48">
                    <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-2"></div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gradient-to-r from-orange-200 to-red-200 rounded"></div>
                      <div className="h-1 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-1 bg-gray-200 rounded w-1/2"></div>
                      <div className="grid grid-cols-2 gap-1 mt-2">
                        <div className="h-6 bg-orange-100 rounded"></div>
                        <div className="h-6 bg-red-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tablet mockup */}
                <div className="absolute -top-4 -left-8 bg-gray-900/80 backdrop-blur-sm rounded-xl p-3 shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-500 border border-white/10">
                  <div className="bg-white rounded-lg p-4 w-32 h-24">
                    <div className="space-y-2">
                      <div className="h-2 bg-gradient-to-r from-orange-200 to-red-200 rounded w-3/4"></div>
                      <div className="h-1 bg-gray-200 rounded w-1/2"></div>
                      <div className="grid grid-cols-3 gap-1 mt-2">
                        <div className="h-3 bg-orange-100 rounded"></div>
                        <div className="h-3 bg-red-100 rounded"></div>
                        <div className="h-3 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">أعمالنا المميزة</h2>
            <p className="text-xl text-gray-600">مجموعة من المشاريع التي نفخر بإنجازها</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === 'مكتمل' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {item.status}
                    </div>
                    <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {item.category}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Globe className="h-4 w-4" />
                    <span className="text-sm truncate">{item.url}</span>
                  </div>
                  
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span>زيارة الموقع</span>
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl shadow-sm p-8 max-w-2xl mx-auto border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">هل تريد موقعاً مثل هذه المواقع؟</h3>
              <p className="text-gray-600 mb-6">
                نحن متخصصون في تصميم مواقع إلكترونية احترافية تناسب جميع الأنشطة التجارية
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={scrollToForm}
                  className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  اطلب موقعك الآن
                </button>
                <button 
                  onClick={() => handleWhatsApp()}
                  className="border-2 border-green-500 text-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  استشارة مجانية
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">أسعار تنافسية وتسليم سريع</h2>
            <p className="text-xl text-gray-600">احصل على موقعك الإلكتروني بأفضل الأسعار وأسرع وقت</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Website Pricing */}
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Building className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">الموقع التعريفي</h3>
                  <p className="text-gray-600">مثالي للشركات والأعمال</p>
                </div>

                <div className="text-center mb-8">
                  <div className="text-5xl font-black text-green-600 mb-2">1300 ريال</div>
                  <p className="text-gray-500 line-through text-lg">بدلاً من 3000 ريال</p>
                  <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold inline-block mt-2">
                    وفر 1700 ريال
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    'تصميم احترافي متجاوب',
                    'دومين مجاني لسنة كاملة',
                    'استضافة سريعة وآمنة',
                    'شهادة SSL مجانية',
                    'دعم فني مستمر',
                    'تحسين محركات البحث'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={scrollToForm}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  اطلب الموقع التعريفي
                </button>
              </div>

              {/* E-commerce Pricing */}
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-bold">
                    الأكثر طلباً
                  </div>
                </div>

                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">المتجر الإلكتروني</h3>
                  <p className="text-gray-600">للتجارة الإلكترونية</p>
                </div>

                <div className="text-center mb-8">
                  <div className="text-5xl font-black text-blue-600 mb-2">2300 ريال</div>
                  <p className="text-gray-500 line-through text-lg">بدلاً من 4000 ريال</p>
                  <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold inline-block mt-2">
                    وفر 1700 ريال
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    'جميع مميزات الموقع التعريفي',
                    'نظام إدارة المنتجات',
                    'عربة التسوق المتقدمة',
                    'نظام الدفع الآمن',
                    'إدارة الطلبات والعملاء',
                    'تقارير المبيعات التفصيلية'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={scrollToForm}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  اطلب المتجر الإلكتروني
                </button>
              </div>
            </div>

            {/* Delivery Time */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 max-w-md mx-auto border border-orange-200">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">التسليم السريع</h3>
                <div className="text-4xl font-black text-orange-600 mb-2">4 أيام</div>
                <p className="text-gray-600">أيام عمل فقط لجميع الأنواع</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">مميزات خدمتنا</h2>
            <p className="text-xl text-gray-600">نقدم لك أفضل الحلول الرقمية المتكاملة</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">اطلب موقعك الإلكتروني</h2>
              <p className="text-xl text-gray-600">املأ البيانات وسنتواصل معك خلال 24 ساعة</p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                      الاسم بالكامل *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="أدخل اسمك الكامل"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      رقم الجوال *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="05xxxxxxxx"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="websiteType" className="block text-sm font-semibold text-gray-700 mb-2">
                    نوع الموقع المطلوب *
                  </label>
                  <select
                    id="websiteType"
                    name="websiteType"
                    value={formData.websiteType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    required
                  >
                    <option value="">اختر نوع الموقع</option>
                    {websiteTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">
                    ملاحظات أو رابط موقع شبيه بالمطلوب
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="أضف أي ملاحظات أو رابط موقع تريد تصميم مشابه له..."
                  />
                  <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
                    <Link className="h-4 w-4" />
                    <span>يمكنك إضافة رابط موقع تعجبك لنصمم لك مشابه له</span>
                  </div>
                </div>

                {/* Website Types Visual Grid */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">أنواع المواقع التي نصممها</h3>
                  <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
                    {websiteTypes.map((type, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors duration-200 cursor-pointer"
                        onClick={() => setFormData({...formData, websiteType: type.value})}
                      >
                        <type.icon className={`h-6 w-6 mb-2 ${formData.websiteType === type.value ? 'text-orange-600' : 'text-gray-600'}`} />
                        <span className={`text-xs text-center ${formData.websiteType === type.value ? 'text-orange-600 font-semibold' : 'text-gray-600'}`}>
                          {type.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  اطلب موقعك الآن
                </button>

                <div className="text-center mt-6">
                  <p className="text-gray-600 text-sm mb-4">
                    أو تواصل معنا مباشرة عبر الواتساب
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {contactNumbers.map((contact, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleWhatsApp(contact.number)}
                        className="inline-flex items-center justify-center gap-2 text-green-600 hover:text-green-700 font-semibold bg-green-50 hover:bg-green-100 px-4 py-3 rounded-xl transition-all duration-200"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>{contact.label}: {contact.number}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">آراء عملائنا</h2>
            <p className="text-xl text-gray-600">ثقة عملائنا هي أغلى ما نملك</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-orange-500 mb-4" />
                  <p className="text-gray-700 leading-relaxed">"{testimonial.comment}"</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.business}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              هل أنت مستعد لبناء موقعك الإلكتروني؟
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              لا تفوت الفرصة، ابدأ رحلتك الرقمية اليوم واحصل على استشارة مجانية من خبرائنا
            </p>
            
            {/* Highlight pricing and delivery */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Building className="h-6 w-6" />
                  <span className="font-bold">الموقع التعريفي</span>
                </div>
                <p className="text-2xl font-black">1300 ريال</p>
                <p className="text-sm opacity-90 line-through">بدلاً من 3000 ريال</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <ShoppingCart className="h-6 w-6" />
                  <span className="font-bold">المتجر الإلكتروني</span>
                </div>
                <p className="text-2xl font-black">2300 ريال</p>
                <p className="text-sm opacity-90 line-through">بدلاً من 4000 ريال</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="h-6 w-6" />
                  <span className="font-bold">التسليم</span>
                </div>
                <p className="text-2xl font-black">4 أيام</p>
                <p className="text-sm opacity-90">أيام عمل فقط</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToForm}
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                اطلب موقعك الآن
              </button>
              <button 
                onClick={() => handleCall()}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                تواصل معنا الآن
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-white shadow-sm">
                <img 
                  src="/ruaad logo.png" 
                  alt="رواد الرقمية" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">رواد الرقمية</h3>
                <p className="text-sm text-gray-400">للدعاية والإعلان</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {contactNumbers.map((contact, index) => (
                  <div key={index} className="space-y-2">
                    <div className="text-gray-300 text-sm font-medium">{contact.label}</div>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => handleCall(contact.number)}
                        className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                      >
                        <Phone className="h-4 w-4" />
                        <span className="text-sm">{contact.number}</span>
                      </button>
                      <button
                        onClick={() => handleWhatsApp(contact.number)}
                        className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span className="text-sm">واتساب</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>المدينة المنورة - حي النبلاء</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 رواد الرقمية للدعاية والإعلان. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;