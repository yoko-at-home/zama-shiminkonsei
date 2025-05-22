import Image from "next/image";

export default function About() {
  return (
    <div>
      <section className="py-16">
        <h2>
          About<span>座間市民混声合唱団について</span>
        </h2>

        <p className="c">
          <Image
            src="/static/about/1.jpg"
            alt="座間市民混声合唱団の写真"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </p>

        <p>
          1995年10月ハーモニーホール座間の落成を祝う「第九を歌う市民のつどい」を機に結成され、初代指揮者に伊藤俊三先生、顧問に山岸陽子先生、ピアニストに浅沼敦子先生、佐藤朋子先生のもと本格的に活動を開始しました。
          2011年に伊藤先生は急逝されましたが、現在の指揮者宍戸純先生、ピアニスト佐藤朋子先生の指導のもとで精力的に活動をしています。
          これまで、定期演奏会、座間市音楽祭、ゴールデンウェーブin横浜、湘南合唱祭等の他、公民館、北地区文化センター等地元との交流、アガペ慰問演奏会他多くの活動を行っています。今年10月には第9回定期演奏会を計画しています。
        </p>
      </section>
      <section>
        <h2>
          指揮者<span>初代指揮者</span>
        </h2>

        <div className="tp-box">
          <div className="mb-20">
            <p>
              伊藤俊三（テノール）（1995 - 2011）
              <br />
              東京芸術大学大学院修了、藤原歌劇団「魔笛」の主役でデビュー、帝劇のミュージカル「屋根の上のヴァイオリン弾き」他オペラ・リサイタル・コンサート出演多数。2011年に惜しまれつつ急逝。
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2>現在の指揮者</h2>

        <div className="tp-box">
          <div className="text">
            <h3>宍戸純（テノール）（2013〜）</h3>

            <p>
              国立音楽大学卒業後、日本合唱協会入会、中心メンバーとして活躍、多くの指揮者・作曲家と共演し、グレゴリオ聖歌から現代音楽まで様々なジャンルの作品に出会う。1994年にヴォーカル・アンサンブル「東京ヴォイシズ」結成に参加。その精緻なサウンドは高い評価を受ける。
              座間市民混声合唱団の他、混声合唱団「風雅」、伊勢原混声合唱団、東海大学グリークラブ、横浜YMCA混声合唱団はじめ多くの団体の指導にあたっている。
            </p>
          </div>

          <div className="photo">
            <div className="relative mx-auto aspect-video object-contain">
              <Image
                src="/static/image/conductor.webp"
                alt=""
                width={350}
                height={350}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>ピアニスト</h2>

        <div className="tp-box">
          <div className="photo">
            <Image
              src="/static/image/pianist.jpg"
              alt=""
              width={300}
              height={200}
            />
          </div>

          <div className="text">
            <h3>佐藤朋子（1995〜）</h3>

            <p>
              創立より団のピアニストとして活躍。武蔵野音楽大学大学院修了、木嶋瑠美子、レギナ・スメジャンカ、ラズロ・シモン氏に師事。第13回国際芸術連盟新人オーディション奨励賞受賞。座間市演奏家連盟会員。座間市民混声合唱団、女声合唱団ポレポーレのピアニスト。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
