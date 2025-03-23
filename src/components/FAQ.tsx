import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "כמה זמן לוקח לקבל רישיון לנשק?",
      answer: "באמצעות השירות שלנו, התהליך אורך עד 14 ימי עסקים בלבד. זהו זמן מהיר משמעותית מהתהליך הרגיל שיכול לקחת שבועות או אף חודשים."
    },
    {
      question: "מה התשלום עבור השירות?",
      answer: "אנו מציעים שני מסלולים: מסלול רגיל בעלות של 999₪ ומסלול פרימיום מורחב בעלות של 1,599₪ שבו התשלום מתבצע רק לאחר קבלת הרישיון. לחיילים משוחררים יש מסלול מיוחד שכולל רישיון לאקדח בנוסף."
    },
    {
      question: "מה ההבדל בין המסלול הרגיל לפרימיום?",
      answer: "במסלול הפרימיום (1,599₪) אתם משלמים רק לאחר קבלת הרישיון וזוכים לליווי אישי של אחד ממשרדי עורכי הדין הגדולים בארץ. כמו כן, אנו מתמודדים גם עם ערעורים וסירובים של בקשות."
    },
    {
      question: "האם אני זכאי לרישיון נשק?",
      answer: "הזכאות לרישיון נשק מוגדרת על פי קריטריונים שונים כגון מקום מגורים, תפקיד, היסטוריה אישית ועוד. השאירו פרטים ונבדוק את זכאותכם באופן אישי."
    },
    {
      question: "מה כלול בשירות שלכם?",
      answer: "השירות שלנו כולל ליווי מלא מתחילת התהליך ועד לקבלת הרישיון, כולל מילוי טפסים, הגשת בקשות, סיוע בהכנת המסמכים הנדרשים, וייצוג מול הרשויות הרלוונטיות."
    },
    {
      question: "איך מתבצע תהליך התשלום?",
      answer: "במסלול הרגיל, התשלום מתבצע מראש. בחבילת הפרימיום, אתם משלמים רק לאחר קבלת הרישיון - מה שמבטיח לכם שקט נפשי ומוטיבציה גבוהה מצדנו להצלחת התהליך."
    }
  ];

  return (
    <section className="py-16 px-4 bg-oneshot-dark" id="faq">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-oneshot-gold">שאלות נפוצות</h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-oneshot-gold/20 rounded-lg overflow-hidden bg-oneshot-gray/20"
              >
                <AccordionTrigger className="px-6 py-4 text-right hover:bg-oneshot-gray/40 transition-all text-oneshot-gold font-bold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-right">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
