import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Cpu, Wrench, ShieldCheck, DollarSign, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical laptop repair take?",
    answer:
      "Most repairs are completed within 24-48 hours, depending on the issue. Complex repairs might take up to 3-5 days.",
    icon: <Wrench size={20} className="text-blue-500" />,
  },
  {
    question: "Do you offer a warranty on repairs?",
    answer:
      "Yes, all of our repairs come with a 6-month warranty covering both parts and labor.",
    icon: <ShieldCheck size={20} className="text-blue-500" />,
  },
  {
    question: "Can you upgrade my laptop hardware?",
    answer:
      "Absolutely! We can upgrade your RAM, hard drive, SSD, and other components to enhance your laptop’s performance.",
    icon: <Cpu size={20} className="text-blue-500" />,
  },
  {
    question: "How much does a typical repair cost?",
    answer:
      "Repair costs vary depending on the issue, but diagnostic checks are free. We provide a detailed quote before proceeding with any repair.",
    icon: <DollarSign size={20} className="text-blue-500" />,
  },
  {
    question: "Do you repair all laptop brands?",
    answer:
      "Yes, we repair all major laptop brands including Dell, HP, Lenovo, Asus, Acer, and more.",
    icon: <HelpCircle size={20} className="text-blue-500" />,
  },
];

const FAQ = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="multiple" className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="mb-4 bg-gray-800 rounded-lg"
            >
              <AccordionTrigger className="flex items-center justify-between w-full px-4 py-3 text-xl font-semibold text-left hover:bg-gray-700 rounded-lg transition-colors duration-200">
                <div className="flex items-center">
                  {faq.icon}
                  <span className="ml-3">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 text-gray-300 bg-gray-800">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
