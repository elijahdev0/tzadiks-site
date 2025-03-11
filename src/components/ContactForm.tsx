
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    isVeteran: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "פרטיך התקבלו בהצלחה!",
        description: "נציג מטעמנו יצור איתך קשר בהקדם",
        variant: "default"
      });
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        isVeteran: false
      });
    }, 1500);
  };

  return (
    <section id="contact-form" className="py-16 bg-oneshot-gray px-4">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto bg-oneshot-dark p-8 rounded-xl shadow-xl border border-oneshot-gold/20">
          <h2 className="section-title text-center mb-8">
            השאירו פרטים ונחזור אליכם בהקדם
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6 text-right">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-right block">שם מלא</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="הכנס את שמך המלא"
                required
                className="bg-oneshot-gray/20 border-oneshot-gray text-right"
                dir="rtl"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-right block">טלפון</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="הכנס את מספר הטלפון שלך"
                required
                className="bg-oneshot-gray/20 border-oneshot-gray text-right"
                dir="rtl"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-right block">אימייל (לא חובה)</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="הכנס את כתובת האימייל שלך"
                className="bg-oneshot-gray/20 border-oneshot-gray text-right"
                dir="rtl"
              />
            </div>
            
            <div className="flex items-center justify-end space-x-2 space-x-reverse">
              <Label htmlFor="isVeteran" className="order-2">חייל משוחרר?</Label>
              <Input
                id="isVeteran"
                name="isVeteran"
                type="checkbox"
                checked={formData.isVeteran}
                onChange={handleChange}
                className="w-4 h-4 order-1"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full cta-button bg-oneshot-red py-6 text-xl" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <span className="mr-2">שולח...</span>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <span className="ml-2">שלחו לי פרטים</span>
                  <CheckCircle className="h-5 w-5" />
                </span>
              )}
            </Button>
            
            <p className="text-sm text-gray-400 text-center mt-4">
              בלחיצה על כפתור השליחה אני מאשר/ת קבלת פנייה מנציג בנושא רישיון נשק
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
