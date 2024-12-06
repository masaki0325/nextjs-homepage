const Privacy = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen py-16">
      <div className="container mx-auto px-6 lg:px-16">
        {/* ページタイトル */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">プライバシーポリシー</h1>
          <p className="text-gray-600 text-sm">
            AAA合同会社（以下、「当社」といいます）は、以下のとおり個人情報保護方針を定め、個人情報の適切な取扱いを推進します。
          </p>
        </div>

        {/* コンテンツ */}
        <div className="space-y-6">
          {/* 各セクション */}
          <div className="bg-gray-100 shadow-md rounded-lg p-6 border border-gray-300">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              1. 個人情報の管理
            </h2>
            <p className="text-sm">
              当社は、お客様の個人情報を正確かつ最新の状態に保ち、不正アクセス、紛失、破損、改ざん、漏洩を防止するため、セキュリティ対策を講じます。
            </p>
          </div>

          <div className="bg-gray-100 shadow-md rounded-lg p-6 border border-gray-300">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              2. 個人情報の利用目的
            </h2>
            <p className="text-sm">
              お客様からお預かりした個人情報は、以下の目的で利用いたします：
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 text-sm">
              <li>お問い合わせ対応</li>
              <li>ご依頼いただいたサービスの提供</li>
              <li>サービス改善のための分析</li>
            </ul>
          </div>

          <div className="bg-gray-100 shadow-md rounded-lg p-6 border border-gray-300">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              3. 個人情報の第三者提供
            </h2>
            <p className="text-sm">
              当社は、法令に基づく場合を除き、お客様の同意なく第三者に個人情報を提供することはありません。
            </p>
          </div>

          <div className="bg-gray-100 shadow-md rounded-lg p-6 border border-gray-300">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              4. セキュリティ対策
            </h2>
            <p className="text-sm">
              当社は、個人情報の正確性および安全性を確保するため、セキュリティ対策を講じています。
            </p>
          </div>

          <div className="bg-gray-100 shadow-md rounded-lg p-6 border border-gray-300">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              5. ご本人の照会
            </h2>
            <p className="text-sm">
              お客様がご自身の個人情報の照会・修正・削除を希望される場合は、本人確認を行った上で対応いたします。
            </p>
          </div>

          <div className="bg-gray-100 shadow-md rounded-lg p-6 border border-gray-300">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              6. 法令、規範の遵守と見直し
            </h2>
            <p className="text-sm">
              当社は、保有する個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直し、改善に努めます。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
