
import React from 'react';
import { Clock, Shield, Users, DollarSign } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="w-12 h-12 text-oneshot-gold mb-4" />,
      title: "תהליך מהיר",
      description: "עד 7 ימי עסקים בלבד - המהיר ביותר בישראל"
    },
    {
      icon: <Shield className="w-12 h-12 text-oneshot-gold mb-4" />,
      title: "מקסימום ביטחון",
      description: "הגנו על עצמכם ועל משפחתכם עם רישיון נשק חוקי"
    },
    {
      icon: <Users className="w-12 h-12 text-oneshot-gold mb-4" />,
      title: "ליווי אישי מלא",
      description: "צוות מקצועי מלווה אתכם מהרישום ועד לאישור הסופי"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-oneshot-gold mb-4" />,
      title: "מחיר משתלם",
      description: "רק 999 ₪ - השקעה קטנה לביטחון ארוך טווח"
    }
  ];

  return (
    <section className="py-16 bg-oneshot-gray px-4" id="benefits">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-12">למה לבחור ב-One Shot?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card text-center">
              <div className="flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-oneshot-gold">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
