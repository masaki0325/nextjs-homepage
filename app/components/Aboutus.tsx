import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="bg-white text-gray-800 py-16">
      <div className="container mx-auto px-6 lg:px-16">
        {/* 見出し */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">ABOUT US</h2>
        </div>

        {/* 説明テキスト */}
        <div className="space-y-6 text-gray-600 lg:text-center">
          <p>
            AAAでは新規サービスの受託開発、既存サービスの追加開発や保守運用、
            自社サービスの企画開発を行っております。
          </p>
          <p>
            様々なニーズに合わせて、それぞれの事業フェーズ・課題に応じた支援が可能です。
          </p>
          <p>私たちと一緒に世界をハックするサービスを生み出しましょう。</p>
        </div>

        {/* リンクボタン */}
        <div className="mt-12 flex justify-center items-center">
          <Link
            href="/about"
            className="flex items-center text-gray-800 hover:text-orange-500 transition duration-300"
          >
            <div className="w-6 h-6 border-2 border-orange-500 rounded-full flex items-center justify-center mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
            AAAについて
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
