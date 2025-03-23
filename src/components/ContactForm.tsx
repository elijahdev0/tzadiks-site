import React, { useEffect } from 'react';

const ContactForm = () => {
  useEffect(() => {
    // Load the script when component mounts
    const script = document.createElement('script');
    script.src = 'https://embedsocial.com/cdn/ef.js';
    script.id = 'EmbedSocialFormsScript';
    script.async = true;
    document.head.appendChild(script);

    // Clean up on component unmount
    return () => {
      if (document.getElementById('EmbedSocialFormsScript')) {
        document.getElementById('EmbedSocialFormsScript')?.remove();
      }
    };
  }, []);

  return (
    <section id="contact-form" className="py-16 bg-oneshot-gray px-4">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto bg-oneshot-dark p-8 rounded-xl shadow-xl border border-oneshot-gold/20">
          <h2 className="text-3xl font-bold text-center mb-8 text-oneshot-gold">
            השאירו פרטים ונחזור אליכם בהקדם
          </h2>
          
          <div 
            className="embedsocial-forms-iframe" 
            data-ref="41f30a3e8bc7be7b92e6bce2491a8c528109ecb0" 
            data-widget="true" 
            data-height="auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
