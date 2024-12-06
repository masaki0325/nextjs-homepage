# 概要
このプロジェクトは、nextjsで作られた企業ホームページのサンプルです。

## 公開リンク
[こちらからアクセスできます](https://nextjs-homepage-chi.vercel.app/)

## 使用技術

### フロントエンド
- **Next.js 15.0.3**: Reactベースのフレームワークで、SSR（サーバーサイドレンダリング）や静的生成を活用。
- **React 18.2.0**: UI構築のためのライブラリ。
- **React Hook Form 7.53.0**: フォームバリデーションの実装。
- **Tailwind CSS 3.4.1**: ユーティリティファーストのCSSフレームワークで迅速なスタイリング。
- **Framer Motion 11.13.1**: アニメーションの実装。

### その他
- **Vercel**: デプロイとホスティング。

## 特徴
- **レスポンシブデザイン**: モバイルデバイスからデスクトップまでの幅広い画面サイズに対応。
- **パフォーマンス最適化**: Next.jsの静的生成とサーバーサイドレンダリングを活用。
- **アニメーション**: ユーザー体験を向上させるためにFramer Motionを活用。

## プロジェクト構造
```
├── app
│   ├── components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutUs.tsx
│   │   ├── News.tsx
│   │   └── ContactForm.tsx
│   ├── page.tsx
│   ├── layout.tsx
│   └── api
│       └── contact.ts
├── public
│   ├── images
│   │   ├── service1.jpg
│   │   ├── service2.jpg
│   │   └── service3.jpg
├── styles
│   └── globals.css
├── package.json
├── tsconfig.json
└── README.md
```

