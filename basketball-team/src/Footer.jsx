// src/Footer.jsx
import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white px-10 py-4 flex flex-col items-center justify-center gap-2">
      <p className="text-sm text-center">Desenvolvido por Sara Viana</p>
      <div className="flex gap-4">
        {/* Se você tiver os links reais, troca <button> por <a href="https://seu-link" ...> */}
        <button
          type="button"
          className="hover:text-yellow-400 transition-colors bg-transparent p-0 border-0"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20} />
        </button>

        <button
          type="button"
          className="hover:text-yellow-400 transition-colors bg-transparent p-0 border-0"
          aria-label="Instagram"
        >
          <FaInstagram size={20} />
        </button>

        <button
          type="button"
          className="hover:text-yellow-400 transition-colors bg-transparent p-0 border-0"
          aria-label="Facebook"
        >
          <FaFacebook size={20} />
        </button>

        <button
          type="button"
          className="hover:text-yellow-400 transition-colors bg-transparent p-0 border-0"
          aria-label="Twitter"
        >
          <FaTwitter size={20} />
        </button>

        <button
          type="button"
          className="hover:text-yellow-400 transition-colors bg-transparent p-0 border-0"
          aria-label="YouTube"
        >
          <FaYoutube size={20} />
        </button>
      </div>
    </footer>
  );
}
