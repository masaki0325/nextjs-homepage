import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">送信が完了しました</h1>
        <p className="text-lg text-gray-600">
          お問い合わせいただきありがとうございます。
          <br />
          内容を確認の上、折り返しご連絡いたします。
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="text-blue-500 underline hover:text-blue-700 transition"
          >
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
