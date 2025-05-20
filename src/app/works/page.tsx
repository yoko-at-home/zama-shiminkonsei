import React from "react";
import Image from "next/image";

const photos = [
  { id: 1, src: "/static/sample_photo/1.jpg" },
  { id: 2, src: "/static/sample_photo/2.jpg" },
];

export default function Works() {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        {photos.map((photo) => (
          <div
            key={photo.id}
            style={{
              aspectRatio: "1",
              overflow: "hidden",
              borderRadius: "0.5rem",
              position: "relative",
            }}
          >
            <Image
              src={photo.src}
              alt={`演奏会写真 ${photo.id}`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
      <section>
        <h2>
          Portfolio<span>練習中の曲・過去取り組んだ曲</span>
        </h2>
        <div>
          <p>【現在取り組んでいる曲】</p>
          <ul>
            <li>スクリーン・ミュージック・メドレー</li>
            <li>「北海道物語」（混声合唱のためのヒットメドレー）</li>
            <li>混声合唱組曲「落葉松」</li>
            <li>山のいぶき、時の旅人、ウィーンわが夢の街</li>
            <li>永遠の花／主はめぐみてあなたを守り（ラター）</li>他
          </ul>
        </div>

        <div>
          <p>過去10年間に取り組んだ曲を紹介します。</p>
          <p>
            【2018年第８回定期演奏会】10月21日＠ハーモニーホール座間大ホール（指揮：宍戸純、ピアノ：佐藤朋子）
          </p>
          <ul>
            <li>
              アヴェマリア＆アヴェ・ヴェルム・コルプス他：グレゴリオ聖歌／カッチーニ／グノー／モーツァルト
            </li>
            <li>混声合唱組曲「空、海、大地と木のうた」（新実徳英）</li>
            <li>混声合唱のためのヒットメドレー　「LOVE」</li>
            <li>スクリーン・ミュージック・メドレー</li>
            <li>大地讃頌、歌声はささやく</li>
          </ul>
        </div>

        <div>
          <p>【近年取り組んだ曲】</p>
          <ul>
            <li>クリスマス曲集</li>
            <li>
              峠の我が家、アニーローリー、別れ、埴生の宿、ともしび（東京混声合唱団愛唱集「ローレライ」より）
            </li>
            <li>
              ポップ・ソング：花嫁、出発の歌、雪と虹のバラード（信長貴富編）
            </li>
            <li>遠い日の歌、アムール河の波、山のいぶき、夢の世界を</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
