
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import SoldierOffer from '@/components/SoldierOffer';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-oneshot-dark text-white" dir="rtl">
      <div className="container mx-auto py-4 px-4 flex justify-end">
        <Link to="/products">
          <Button
            variant="outline"
            className="border-oneshot-gold text-oneshot-gold hover:bg-oneshot-gold/10"
          >
            המסלולים שלנו
          </Button>
        </Link>
      </div>
      <Hero />
      <Benefits />
      <div 
        className="py-16 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/lovable-uploads/703f2906-0db8-43f1-bae1-8be8fcf4dd6a.png')" }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="container mx-auto relative z-10 px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-oneshot-gold">
            רישיון לנשק עד 7 ימי עסקים
          </h2>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            גר בסביבה לא בטוחה? רוצה להגן על המשפחה?
            <br />אנחנו מקצרים לך את הדרך לרישיון נשק – בלי כאבי ראש ובלי סיבוכים!
          </p>
          <div className="mt-8">
            <Link to="/products">
              <Button className="bg-oneshot-gold text-oneshot-dark hover:bg-oneshot-gold/90 text-lg py-3 px-6">
                לצפייה במסלולים שלנו
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <SoldierOffer />
      <ContactForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
