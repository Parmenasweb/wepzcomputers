"use client";
import { Button } from "../ui/button";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+917399712002"; // Replace with your actual WhatsApp number
    const message = encodeURIComponent(
      "Hello wepzcomputers, I have a question about laptop repair."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-10 rounded-full inline-flex items-center transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      aria-label="Contact us via WhatsApp"
    >
      <MessageCircle className="mr-2" />
      WhatsApp Us Now!
    </Button>
  );
}
