"use client";

import SubmitButton from "../components/SubmitButton";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      router.push("/thank-you");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="bg-white text-gray-800 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 lg:px-16 py-12 max-w-4xl">
        {/* 見出し */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">お問い合わせ</h1>
          <p className="text-gray-600">
            下記のフォームに必要事項をご記入いただき、お問い合わせください。
          </p>
        </div>

        {/* フォーム */}
        <form
          onSubmit={handleFormSubmit}
          className="bg-gray-100 p-8 rounded-lg shadow-md space-y-6"
        >
          {/* 名前 */}
          <div>
            <label htmlFor="name" className="block text-sm font-bold mb-2">
              お名前
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="お名前を入力してください"
              className="w-full p-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* メールアドレス */}
          <div>
            <label htmlFor="email" className="block text-sm font-bold mb-2">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="例: example@example.com"
              className="w-full p-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* 件名 */}
          <div>
            <label htmlFor="subject" className="block text-sm font-bold mb-2">
              件名
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="件名を入力してください"
              className="w-full p-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* メッセージ */}
          <div>
            <label htmlFor="message" className="block text-sm font-bold mb-2">
              メッセージ
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="お問い合わせ内容を入力してください"
              className="w-full p-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
              required
            ></textarea>
          </div>

          {/* 送信ボタン */}
          <div className="text-center">
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
