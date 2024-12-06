"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-white text-gray-800 h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        {/* テキストセクション */}
        <div className="space-y-6 lg:max-w-lg mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-mg lg:text-xl text-gray-500">
              最新技術であなたのアイデアを現実にします。
            </div>
          </motion.p>
        </div>

        {/* ボタンセクション */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex justify-center flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mt-6">
            <Link
              href="/service"
              className="px-6 py-3 border border-gray-800 text-gray-800 font-bold rounded-lg hover:bg-gray-800 hover:text-white transition"
            >
              私たちのサービス
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition"
            >
              お問い合わせ
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
