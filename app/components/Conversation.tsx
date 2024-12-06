import Link from "next/link";

const Conversation = () => {
  return (
    <section className="bg-white text-gray-800 py-16 relative">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center">
        {/* 左側テキスト */}
        <div className="lg:w-2/3 mb-8 lg:mb-0">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            ぜひお問い合わせください
          </h2>
          <p className="text-gray-600 text-lg">
            Webサービスやアプリ開発のご相談、協業パートナーや取材などその他のお問い合わせはこちらから。
          </p>
        </div>

        {/* 右側コンタクトボタン */}
        <div className="lg:w-1/3 flex justify-center">
          <Link
            href="/contact"
            className="w-40 h-40 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:bg-gray-700 transition duration-300"
          >
            <span className="text-xl font-bold">CONTACT</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Conversation;
