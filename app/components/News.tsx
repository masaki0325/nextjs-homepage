const News = () => {
  const sampleNews = [
    {
      date: "2024-12-01",
      title: "ホームページをリニューアルしました",
    },
    {
      date: "2024-11-01",
      title: "新しいサービスを開始しました",
    },
    {
      date: "2014-11-06",
      title: "AAA株式会社を設立しました",
    },
  ];

  return (
    <section className="bg-white text-gray-800 py-16">
      <div className="container mx-auto px-6 lg:px-16">
        {/* 見出し */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">NEWS</h2>
        </div>
        {/* ニュースリスト */}
        <ul className="space-y-4">
          {sampleNews.map((item, index) => (
            <li
              key={index}
              className="flex flex-col lg:flex-row justify-between lg:items-center border-b border-gray-300 pb-2"
            >
              <span className="text-gray-500 pb-2">
                {formatDate(item.date)}
              </span>
              <span className="text-gray-800 text-base">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
};

export default News;
