import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import ProductShowcase from '@/components/ProductShowcase';
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
            כל המסלולים שלנו
          </Button>
        </Link>
      </div>
      <Hero />
      <Benefits />
      <ProductShowcase />
      <ContactForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
