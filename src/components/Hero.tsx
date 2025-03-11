
import React from 'react';
import { Button } from "@/components/ui/button";
import { Shield } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="camo-bg min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 inline-block">
          <Shield className="w-16 h-16 text-oneshot-gold mx-auto mb-2" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          <span className="text-oneshot-gold">הדרך המהירה</span> לרישיון נשק
        </h1>
        <h2 className="text-2xl md:text-3xl mb-8 text-oneshot-light">
          רק <span className="text-oneshot-red font-bold">7 ימי עסקים</span> - מינימום בירוקרטיה
        </h2>
        
        <div className="bg-black/60 p-6 rounded-lg mb-10 max-w-2xl mx-auto">
          <ul className="text-lg mb-8 space-y-4 text-right">
            <li className="flex items-center justify-end gap-2">
              <span>רישיון לנשק עד 7 ימי עסקים בלבד!</span>
              <span className="text-oneshot-gold text-2xl">✓</span>
            </li>
            <li className="flex items-center justify-end gap-2">
              <span>במחיר נוח – רק 999 ₪!</span>
              <span className="text-oneshot-gold text-2xl">✓</span>
            </li>
            <li className="flex items-center justify-end gap-2">
              <span>ליווי אישי מהשלב הראשון ועד קבלת הרישיון</span>
              <span className="text-oneshot-gold text-2xl">✓</span>
            </li>
            <li className="flex items-center justify-end gap-2">
              <span>מקסימום ביטחון, מינימום בירוקרטיה</span>
              <span className="text-oneshot-gold text-2xl">✓</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToContact}
            className="cta-button bg-oneshot-red text-xl py-6 px-10 font-bold animate-pulse-gold"
          >
            השאירו פרטים עכשיו!
          </Button>
          <Button 
            variant="outline" 
            className="border-oneshot-gold text-oneshot-gold hover:bg-oneshot-gold/10 hover:text-white text-xl py-6 px-10 font-bold"
            onClick={() => document.getElementById('soldier-offer')?.scrollIntoView({ behavior: 'smooth' })}
          >
            הצעה מיוחדת לחיילים משוחררים
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
