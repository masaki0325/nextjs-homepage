import ServiceCard from "../components/ServiceCard";
import TechCard from "../components/TechCard";
import { services, technologies } from "../data/services";
import Link from "next/link";

const Service = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* ヒーローセクション */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">私たちのサービス</h1>
          <p className="text-lg text-gray-600 px-8">
            最新技術を活用したサービスで
            <br />
            お客様のビジネスに革新をもたらします
          </p>
        </div>
      </section>

      {/* サービス一覧セクション */}
      <section className="container mx-auto py-12 px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              priority={service.priority}
            />
          ))}
        </div>
      </section>

      {/* 技術スタック */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold">Technology Stacks</h1>
            <p className="text-gray-600 mt-4">対応可能な技術一覧</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <TechCard
                key={index}
                name={tech.name}
                description={tech.description}
                image={tech.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-white text-gray-800 py-12 px-6 lg:px-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 lg:px-10">
            私たちと一緒にプロジェクトを始めましょう！
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            あなたのアイデアを実現するための第一歩をサポートします。
          </p>
          <Link
            href="/contact"
            className="bg-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-700 transition"
          >
            お問い合わせはこちら
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Service;
