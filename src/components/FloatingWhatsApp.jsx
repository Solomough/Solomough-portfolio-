import React from "react";
import { MessageCircle } from "lucide-react";

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/2347076560169"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}

export default FloatingWhatsApp;
