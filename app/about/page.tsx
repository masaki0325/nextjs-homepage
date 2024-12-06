import Link from "next/link";

const About = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex items-center justify-center">
      {/* コンテンツ全体 */}
      <div className="container mx-auto px-6 lg:px-16 py-12">
        {/* 見出し */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">COMPANY</h1>
        </div>

        {/* 会社概要リスト（全体を1つの枠で囲む） */}
        <div className="bg-gray-100 rounded-lg border border-gray-300 p-8 space-y-8 max-w-4xl mx-auto">
          {/* 各項目 */}
          <div className="flex flex-col lg:flex-row lg:items-center border-b border-gray-300 pb-4">
            <h2 className="text-xl font-bold lg:w-1/3">会社名</h2>
            <p className="lg:w-2/3">
              AAA株式会社
              <br />
              (AAA Corporation)
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center border-b border-gray-300 pb-4">
            <h2 className="text-xl font-bold lg:w-1/3">設立</h2>
            <p className="lg:w-2/3">2014年10月</p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center border-b border-gray-300 pb-4">
            <h2 className="text-xl font-bold lg:w-1/3">所在地</h2>
            <p className="lg:w-2/3">
              〒150-0031
              <br />
              東京都渋谷区桜丘町1番1号
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center border-b border-gray-300 pb-4">
            <h2 className="text-xl font-bold lg:w-1/3">代表取締役</h2>
            <p className="lg:w-2/3">佐藤 太郎</p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center border-b border-gray-300 pb-4">
            <h2 className="text-xl font-bold lg:w-1/3">主な取引銀行</h2>
            <p className="lg:w-2/3">
              住信SBIネット銀行
              <br />
              三菱東京UFJ銀行
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center">
            <h2 className="text-xl font-bold lg:w-1/3">事業内容</h2>
            <p className="lg:w-2/3">
              スマホ向けアプリケーション開発
              <br />
              ソフトウェア開発に関するコンサルティング
            </p>
          </div>
        </div>

        {/* リンクボタン */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="px-6 py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
