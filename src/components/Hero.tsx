
import React from 'react';
import { Button } from "@/components/ui/button";
import { Shield, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

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

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
          <Button 
            onClick={scrollToContact}
            className="cta-button bg-oneshot-red text-xl py-6 px-10 font-bold animate-pulse-gold"
          >
            השאירו פרטים עכשיו!
          </Button>
          <Link to="/products">
            <Button
              className="bg-oneshot-gold text-oneshot-dark hover:bg-oneshot-gold/90 text-xl py-6 px-10 font-bold"
            >
              לצפייה במסלולים שלנו
            </Button>
          </Link>
        </div>
        
        {/* Premium Product Highlight */}
        <div className="bg-oneshot-gray/40 p-6 rounded-lg border border-oneshot-gold/30 max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center mb-3">
            <Award className="w-10 h-10 text-oneshot-gold mr-2" />
            <h3 className="text-2xl font-bold text-oneshot-gold">חבילת הפרימיום שלנו</h3>
          </div>
          <p className="text-xl mb-4">
            קבל רישיון לנשק באופן מיידי עם ליווי VIP לאורך כל התהליך, כולל הכשרה מעשית וייעוץ אישי!
          </p>
          <div className="flex justify-between items-center max-w-md mx-auto py-2 px-4 bg-black/30 rounded-lg mb-4">
            <span className="text-2xl font-bold text-oneshot-gold">₪1,999</span>
            <span className="text-lg">כולל הכשרה מעשית ושיעור ירי ראשון</span>
          </div>
          <Link to="/products">
            <Button 
              className="bg-oneshot-gold text-oneshot-dark hover:bg-oneshot-gold/90 text-lg py-3 px-6"
            >
              לחבילת הפרימיום המלאה
            </Button>
          </Link>
        </div>
        
        {/* Fast Process Highlight */}
        <div className="flex items-center justify-center gap-3 bg-oneshot-red/20 p-4 rounded-lg max-w-lg mx-auto mb-8">
          <Clock className="w-8 h-8 text-oneshot-red" />
          <p className="text-xl font-semibold">
            לא מחכים! מתחילים מיד בתהליך - <Link to="/products" className="text-oneshot-gold underline">לכל המסלולים</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
