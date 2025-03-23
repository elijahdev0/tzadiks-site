import React from 'react';
import { Button } from "@/components/ui/button";
import { Shield, Star, CheckCircle, ArrowRight } from 'lucide-react';

const ProductShowcase = () => {
  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-20 bg-oneshot-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-oneshot-gold">המסלולים שלנו</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Regular Package */}
          <div className="bg-oneshot-gray rounded-2xl overflow-hidden shadow-2xl border border-oneshot-gold/20 hover:translate-y-[-8px] transition-transform duration-300 relative">
            <div className="bg-oneshot-red px-4 py-2 absolute top-0 right-0 m-4 rounded-md font-bold z-10">
              מסלול רגיל
            </div>
            
            <div className="p-6 mt-12">
              <h3 className="text-2xl font-bold text-oneshot-gold mb-3">רישיון לנשק - מסלול רגיל</h3>
              <p className="mb-4 text-oneshot-light">
                קבל רישיון לנשק עד 14 ימי עסקים בלבד! בליווי מקצועי מלא.
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-oneshot-gold shrink-0 w-5 h-5" />
                  <span>ליווי אישי לאורך כל התהליך</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-oneshot-gold shrink-0 w-5 h-5" />
                  <span>מילוי וטיפול בכל המסמכים הנדרשים</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-oneshot-gold shrink-0 w-5 h-5" />
                  <span>עד 14 ימי עסקים לקבלת האישור</span>
                </li>
              </ul>
              
              <div className="text-center mb-4">
                <p className="text-4xl font-bold text-oneshot-gold">₪999</p>
                <p className="text-sm text-oneshot-light mt-1">תשלום חד פעמי</p>
              </div>
              
              <Button 
                onClick={scrollToContact}
                className="bg-oneshot-red hover:bg-red-800 text-white text-lg py-4 px-6 rounded-lg w-full"
              >
                <span>להתחיל את התהליך</span>
                <ArrowRight className="mr-2" />
              </Button>
            </div>
          </div>
          
          {/* Premium Package */}
          <div className="bg-oneshot-gray rounded-2xl overflow-hidden shadow-2xl border border-oneshot-gold/20 hover:translate-y-[-8px] transition-transform duration-300 relative">
            {/* Premium Badge */}
            <div className="absolute top-4 right-4 bg-oneshot-gold text-oneshot-dark px-3 py-1 rounded-full text-sm font-bold z-10">
              מומלץ!
            </div>
            
            <div className="bg-oneshot-gold px-4 py-2 absolute top-0 left-0 m-4 rounded-md font-bold text-black z-10">
              חבילת פרימיום
            </div>
            
            <div className="p-6 mt-12">
              <h3 className="text-2xl font-bold text-oneshot-gold mb-3">חבילת פרימיום מורחבת</h3>
              <p className="mb-4 text-oneshot-light">
                הדרך המהירה, הבטוחה והמשתלמת ביותר לרישיון נשק!🔥
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <Star className="text-oneshot-gold shrink-0 w-5 h-5" />
                  <span>רישיון לנשק עד 14 ימי עסקים בלבד!</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="text-oneshot-gold shrink-0 w-5 h-5" />
                  <span>תשלום רק לאחר קבלת הרישיון!</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="text-oneshot-gold shrink-0 w-5 h-5" />
                  <span>ליווי אישי של אחד ממשרדי עורכי הדין הגדולים בארץ</span>
                </li>
              </ul>
              
              <div className="text-center mb-4">
                <p className="text-4xl font-bold text-oneshot-gold">₪1,599</p>
                <p className="text-sm text-oneshot-light mt-1">תשלום רק לאחר קבלת הרישיון!</p>
              </div>
              
              <Button 
                onClick={scrollToContact}
                className="bg-oneshot-gold hover:bg-amber-600 text-oneshot-dark text-lg py-4 px-6 rounded-lg w-full animate-pulse-gold"
              >
                <span>השאירו פרטים עכשיו</span>
                <ArrowRight className="mr-2" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xl text-oneshot-light mb-6">
            💡 גר בסביבה לא בטוחה? רוצה להגן על המשפחה?<br/>
            אנחנו מקצרים לך את הדרך לרישיון נשק – בלי כאבי ראש ובלי סיבוכים!
          </p>
          <Button 
            onClick={scrollToContact}
            className="cta-button bg-oneshot-red text-xl py-6 px-10 font-bold animate-pulse-gold"
          >
            השאירו פרטים עכשיו!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase; 