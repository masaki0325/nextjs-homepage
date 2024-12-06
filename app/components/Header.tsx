"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 0.5, stiffness: 100 }}
        className="bg-white fixed top-0 left-0 w-full z-50 h-16 shadow-md"
      >
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* ロゴ */}
          <Link href="/" className="text-xl font-bold text-gray-800">
            AAA Corporation
          </Link>

          {/* ハンバーガーメニューアイコン */}
          <button
            className="lg:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* デスクトップ用ナビゲーション */}
          <nav className="hidden lg:flex space-x-6">
            <Link href="/" className="text-gray-800 hover:text-gray-500">
              HOME
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-gray-500">
              ABOUT
            </Link>
            <Link href="/service" className="text-gray-800 hover:text-gray-500">
              SERVICE
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-gray-500">
              CONTACT
            </Link>
            <Link href="/privacy" className="text-gray-800 hover:text-gray-500">
              PRIVACY POLICY
            </Link>
          </nav>
        </div>

        {/* モバイル用メニュー */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-100 text-gray-800 absolute top-16 left-0 w-full z-40 shadow-md">
            <nav className="flex flex-col space-y-4 px-6 py-4">
              <Link
                href="/"
                className="block text-gray-800 hover:text-gray-500"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="block text-gray-800 hover:text-gray-500"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                href="/service"
                className="block text-gray-800 hover:text-gray-500"
                onClick={() => setIsMenuOpen(false)}
              >
                SERVICE
              </Link>
              <Link
                href="/contact"
                className="block text-gray-800 hover:text-gray-500"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
              <Link
                href="/privacy"
                className="block text-gray-800 hover:text-gray-500"
                onClick={() => setIsMenuOpen(false)}
              >
                PRIVACY POLICY
              </Link>
            </nav>
          </div>
        )}
      </motion.header>
    </div>
  );
};

export default Header;
