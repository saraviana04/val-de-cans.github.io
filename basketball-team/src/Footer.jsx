import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white px-10 py-4 flex flex-col items-center justify-center gap-2">
      <p className="text-sm text-center">Desenvolvido por Sara Viana</p>
      <div className="flex gap-4">
        <a href="#" className="hover:text-yellow-400 transition-colors">
          <FaLinkedin size={20} />
        </a>
        <a href="#" className="hover:text-yellow-400 transition-colors">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="hover:text-yellow-400 transition-colors">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="hover:text-yellow-400 transition-colors">
          <FaTwitter size={20} />
        </a>
        <a href="#" className="hover:text-yellow-400 transition-colors">
          <FaYoutube size={20} />
        </a>
      </div>
    </footer>
  );
}
