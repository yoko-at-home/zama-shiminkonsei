"use client";

import { motion } from "framer-motion";

type NewsItem = {
  id: number;
  date: string;
  title: string;
  content: string;
};

const newsItems: NewsItem[] = [
  {
    id: 1,
    date: "2024.03.15",
    title: "30周年記念演奏会のお知らせ",
    content:
      "2025年10月20日に海老名市文化会館にて30周年記念演奏会を開催いたします。",
  },
  {
    id: 2,
    date: "2024.03.01",
    title: "新メンバー募集",
    content:
      "座間市民合唱団では、新メンバーを募集しています。経験は問いません。",
  },
  {
    id: 3,
    date: "2024.02.15",
    title: "練習日程の変更",
    content: "6月の練習日程が変更になりました。",
  },
];

export default function News() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">NEWS</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto" />
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
