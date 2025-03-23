import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Shield, Clock, Users, DollarSign, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Footer from '@/components/Footer';

const Products = () => {
  const [activeTab, setActiveTab] = useState<'regular' | 'soldier'>('regular');

  const handleTabChange = (tab: 'regular' | 'soldier') => {
    setActiveTab(tab);
  };

  const scrollToContact = () => {
    window.location.href = '/#contact-form';
  };

  return (
    <div className="min-h-screen bg-oneshot-dark text-white" dir="rtl">
      {/* Hero Section */}
      <div className="py-16 bg-oneshot-gray">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-oneshot-gold">
            מוצרים ומסלולים
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            המסלול המהיר והיעיל ביותר לקבלת רישיון נשק
          </p>
        </div>
      </div>

      {/* Product Selection Tabs */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            onClick={() => handleTabChange('regular')}
            className={`px-8 py-6 text-lg ${activeTab === 'regular' ? 'bg-oneshot-gold text-oneshot-dark' : 'bg-oneshot-gray'}`}
          >
            מסלול רגיל
          </Button>
          <Button 
            onClick={() => handleTabChange('soldier')}
            className={`px-8 py-6 text-lg ${activeTab === 'soldier' ? 'bg-oneshot-gold text-oneshot-dark' : 'bg-oneshot-gray'}`}
          >
            מסלול לחיילים משוחררים
          </Button>
        </div>

        {/* Regular Package */}
        {activeTab === 'regular' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-oneshot-gray rounded-2xl overflow-hidden shadow-2xl border border-oneshot-gold/20 mb-10">
              <div className="relative p-8">
                <div className="bg-oneshot-red px-4 py-2 absolute top-0 right-0 m-4 rounded-md font-bold z-10">
                  המסלול המבוקש ביותר!
                </div>
                
                <div className="mt-12">
                  <h2 className="text-3xl font-bold text-oneshot-gold mb-4">
                    מסלול רגיל - רישיון לנשק
                  </h2>
                  <p className="mb-6 text-oneshot-light">
                    קבל רישיון לנשק עד 14 ימי עסקים בלבד! בליווי מקצועי מלא מהרישום ועד האישור.
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">המסלול כולל:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-lg">
                        <CheckCircle className="text-oneshot-gold shrink-0" />
                        <span>ליווי אישי לאורך כל התהליך</span>
                      </li>
                      <li className="flex items-center gap-2 text-lg">
                        <CheckCircle className="text-oneshot-gold shrink-0" />
                        <span>מילוי וטיפול בכל המסמכים הנדרשים</span>
                      </li>
                      <li className="flex items-center gap-2 text-lg">
                        <CheckCircle className="text-oneshot-gold shrink-0" />
                        <span>עד 14 ימי עסקים לקבלת האישור</span>
                      </li>
                      <li className="flex items-center gap-2 text-lg">
                        <CheckCircle className="text-oneshot-gold shrink-0" />
                        <span>הכנה לראיון ותמיכה בתהליך</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-oneshot-dark/70 p-4 rounded-lg mb-6 border border-oneshot-gold/20">
                    <p className="text-oneshot-light text-center">
                      💡 גר בסביבה לא בטוחה? רוצה להגן על המשפחה?<br/>
                      אנחנו מקצרים לך את הדרך לרישיון נשק – בלי כאבי ראש ובלי סיבוכים!
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <div className="text-center mb-4">
                      <p className="text-lg text-oneshot-light">מחיר רגיל</p>
                      <p className="text-4xl font-bold text-oneshot-gold">₪999</p>
                      <p className="text-sm text-oneshot-light mt-1">תשלום חד פעמי</p>
                    </div>
                    
                    <Button 
                      onClick={scrollToContact}
                      className="bg-oneshot-red hover:bg-red-800 text-white text-xl py-6 px-6 rounded-lg w-full animate-pulse-gold"
                    >
                      <span>להתחיל את התהליך</span>
                      <ArrowRight />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Product - Premium Package */}
            <div className="bg-oneshot-gray rounded-2xl overflow-hidden shadow-2xl border border-oneshot-gold/20 mb-10">
              <div className="relative p-8">
                <div className="bg-oneshot-gold px-4 py-2 absolute top-0 right-0 m-4 rounded-md font-bold text-black z-10">
                  חבילת פרימיום
                </div>
                
                <div className="absolute top-4 left-4 bg-oneshot-gold text-oneshot-dark px-3 py-1 rounded-full text-sm font-bold z-10">
                  מומלץ!
                </div>
                
                <div className="mt-12">
                  <h2 className="text-3xl font-bold text-oneshot-gold mb-4">
                    חבילת פרימיום מורחבת
                  </h2>
                  <p className="mb-6 text-oneshot-light">
                    הדרך המהירה, הבטוחה והמשתלמת ביותר לרישיון נשק!🔥
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">החבילה כוללת:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-lg">
                        <Star className="text-oneshot-gold shrink-0" />
                        <span>רישיון לנשק עד 14 ימי עסקים בלבד!</span>
                      </li>
                      <li className="flex items-center gap-2 text-lg">
                        <Star className="text-oneshot-gold shrink-0" />
                        <span>תשלום רק לאחר קבלת הרישיון!</span>
                      </li>
                      <li className="flex items-center gap-2 text-lg">
                        <Star className="text-oneshot-gold shrink-0" />
                        <span>ליווי אישי של אחד ממשרדי עורכי הדין הגדולים בארץ</span>
                      </li>
                      <li className="flex items-center gap-2 text-lg">
                        <Star className="text-oneshot-gold shrink-0" />
                        <span>מקסימום ביטחון, מינימום בירוקרטיה</span>
                      </li>
                      <li className="flex items-center gap-2 text-lg">
                        <Star className="text-oneshot-gold shrink-0" />
                        <span>מתאים למי ששירת בצבא</span>
                      </li>
                      <li className="flex items-center gap-2 text-lg">
                        <Star className="text-oneshot-gold shrink-0" />
                        <span>מתמודדים גם עם ערעורים וסירובים של בקשות</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-oneshot-dark/70 p-4 rounded-lg mb-6 border border-oneshot-gold/20">
                    <p className="text-oneshot-light text-center">
                      💡 גר בסביבה לא בטוחה? רוצה להגן על המשפחה?<br/>
                      אנחנו מקצרים לך את הדרך לרישיון נשק – בלי כאבי ראש ובלי סיבוכים!
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <div className="text-center mb-4">
                      <p className="text-lg text-oneshot-light">מחיר מיוחד</p>
                      <p className="text-4xl font-bold text-oneshot-gold">₪1,599</p>
                      <p className="text-sm text-oneshot-light mt-1">תשלום רק לאחר קבלת הרישיון!</p>
                    </div>
                    
                    <Button 
                      onClick={scrollToContact}
                      className="bg-oneshot-gold hover:bg-amber-600 text-oneshot-dark text-xl py-6 px-6 rounded-lg w-full animate-pulse-gold"
                    >
                      <span>השאירו פרטים עכשיו</span>
                      <ArrowRight />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-oneshot-gold mb-6 text-center">למה לבחור ב-One Shot?</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="benefit-card">
                  <div className="flex justify-center mb-4">
                    <Clock className="w-12 h-12 text-oneshot-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-oneshot-gold text-center">תהליך מהיר</h3>
                  <p className="text-gray-300 text-center">עד 14 ימי עסקים בלבד - המהיר ביותר בישראל</p>
                </div>
                <div className="benefit-card">
                  <div className="flex justify-center mb-4">
                    <Shield className="w-12 h-12 text-oneshot-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-oneshot-gold text-center">מקסימום ביטחון</h3>
                  <p className="text-gray-300 text-center">הגנו על עצמכם ועל משפחתכם עם רישיון נשק חוקי</p>
                </div>
                <div className="benefit-card">
                  <div className="flex justify-center mb-4">
                    <Users className="w-12 h-12 text-oneshot-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-oneshot-gold text-center">ליווי אישי מלא</h3>
                  <p className="text-gray-300 text-center">צוות מקצועי מלווה אתכם מהרישום ועד לאישור הסופי</p>
                </div>
                <div className="benefit-card">
                  <div className="flex justify-center mb-4">
                    <DollarSign className="w-12 h-12 text-oneshot-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-oneshot-gold text-center">מחיר משתלם</h3>
                  <p className="text-gray-300 text-center">רק 1,599 ₪ - השקעה קטנה לביטחון ארוך טווח</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Soldier Package */}
        {activeTab === 'soldier' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-oneshot-gray rounded-2xl overflow-hidden shadow-2xl border border-oneshot-gold/20">
              <div className="relative p-8">
                <div className="bg-oneshot-green px-4 py-2 absolute top-0 right-0 m-4 rounded-md font-bold z-10">
                  מסלול לחיילים משוחררים
                </div>
                
                <div className="mt-12">
                  <h2 className="text-3xl font-bold text-oneshot-gold mb-4">
                    מסלול לחיילים משוחררים
                  </h2>
                  <p className="mb-6 text-oneshot-light">
                    שחררת פיקדון? קבל רישיון לנשק + רישיון לאקדח בקלות ובמהירות!
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">המסלול כולל:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-lg">
                        <CheckCircle className="text-oneshot-gold shrink-0" />
                        <span>ליווי מלא – אנחנו דואגים לכל הבירוקרטיה</span>
                      </li>
                      <li className="flex items-center gap-2 text-lg">
                        <CheckCircle className="text-oneshot-gold shrink-0" />
                        <span>תהליך מהיר – עד 14 ימי עסקים בלבד</span>
                      </li>
                      <li className="flex items-center gap-2 text-lg">
                        <CheckCircle className="text-oneshot-gold shrink-0" />
                        <span>רישיון לנשק + רישיון לאקדח</span>
                      </li>
                      <li className="flex items-center gap-2 text-lg">
                        <CheckCircle className="text-oneshot-gold shrink-0" />
                        <span>ייעוץ בבחירת הנשק והמשך התהליך</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <div className="text-center mb-4">
                      <p className="text-lg text-oneshot-light">מחיר מיוחד לחיילים משוחררים</p>
                      <p className="text-4xl font-bold text-oneshot-gold">₪1,999</p>
                      <p className="text-sm text-oneshot-light mt-1">ניצול חכם של הפיקדון</p>
                    </div>
                    
                    <Button 
                      onClick={scrollToContact}
                      className="bg-oneshot-green hover:bg-green-800 text-white text-xl py-6 px-6 rounded-lg w-full animate-pulse-gold"
                    >
                      <span>קבל הצעה אישית</span>
                      <ArrowRight />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-oneshot-dark/70 p-8 rounded-xl shadow-lg mt-12 border border-oneshot-gold/20">
              <h3 className="text-2xl font-bold text-oneshot-gold mb-4 text-center">
                למה זה מתאים במיוחד לחיילים משוחררים?
              </h3>
              <p className="text-lg mb-6 text-center">
                ניצול חכם של פיקדון החייל המשוחרר לטובת בטחון אישי וקריירה עתידית
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-oneshot-gray/50 p-6 rounded-lg text-center">
                  <h4 className="text-xl font-bold text-oneshot-gold mb-2">ניצול פיקדון חכם</h4>
                  <p>השקעה בעתיד מקצועי באבטחה ושמירה</p>
                </div>
                <div className="bg-oneshot-gray/50 p-6 rounded-lg text-center">
                  <h4 className="text-xl font-bold text-oneshot-gold mb-2">תהליך מזורז</h4>
                  <p>יתרון לחיילים ששירתו בתפקידי קרבי או אבטחה</p>
                </div>
                <div className="bg-oneshot-gray/50 p-6 rounded-lg text-center">
                  <h4 className="text-xl font-bold text-oneshot-gold mb-2">רישיון כפול</h4>
                  <p>מסלול ייחודי המאפשר קבלת רישיון לנשק ולאקדח</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Products;
