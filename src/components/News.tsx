"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { mockNews } from "@/lib/mockNews.server";

export default function News() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">NEWS</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto" />
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mockNews.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                padding: "1.5rem",
                // backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                marginBottom: "1rem",
              }}
            >
              <div>
                <div className="text-sm text-gray-500">{item.publishedAt}</div>
                <Link
                  href={`/news/${item.slug}`}
                  className="block no-underline text-gray-900 hover:text-gray-900"
                  style={{ textDecoration: "none" }}
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.subTitle}</p>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
