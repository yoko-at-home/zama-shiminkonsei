"use client";

import Link from "next/link";

const locations = [
  {
    id: 1,
    name: "座間市公民館",
    address: "〒252-0029 座間市入谷西2-53-34",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d6497.615667887153!2d139.393288!3d35.4842981!3m2!1i1024!2i768!4f13.1!2m1!1zZ29vZ2xlbWFwIOOAkjI1Mi0wMDI5IOW6p-mWk-W4guWFpeiwt-ilvzIgNTMgMzQ!5e0!3m2!1sja!2sjp!4v1747730185458!5m2!1sja!2sjp",
    schedule: "",
  },
  {
    id: 2,
    name: "ハーモス座間（３F集会室）",
    address: "〒252-0001 座間市相模が丘5-30-4",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.9494405909745!2d139.4094002757936!3d35.48079474095852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ff7131eddfd7%3A0xd66d3dcf98ee90e2!2z44Om44O844Kz44O844OXIOODj-ODvOODouOCueW6p-mWkw!5e0!3m2!1sja!2sjp!4v1763645311249!5m2!1sja!2sjp",
    schedule:
      "目立たずわかりにくいですが、エレベーターで3Fに上がってください。",
  },
  {
    id: 3,
    name: "北地区文化センター",
    address: "〒252-0001 座間市相模が丘5-30-4",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.8047271535324!2d139.42204437579463!3d35.509106439410225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ff1f096af4eb%3A0xc55b29aa6711f5f0!2z5bqn6ZaT5biC56uL5YyX5Zyw5Yy65paH5YyW44K744Oz44K_44O8!5e0!3m2!1sja!2sjp!4v1763645480925!5m2!1sja!2sjp",
    schedule: "2025年12月より改修工事を終えて再開予定",
  },
  {
    id: 4,
    name: "立野台コミュニティセンター",
    address: "〒252-0023 座間市立野台3-14-12",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.0201014938566!2d139.40998531148048!3d35.47904647253911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ff7a740faff9%3A0xea5d4a0a27329ef1!2z44CSMjUyLTAwMjMg56We5aWI5bed55yM5bqn6ZaT5biC56uL6YeO5Y-w77yT5LiB55uu77yR77yU4oiS77yR77ySIOW6p-mWk-W4gueri-eri-mHjuWPsOOCs-ODn-ODpeODi-ODhuOCo-ODvOOCu-ODs-OCv-ODvA!5e0!3m2!1sja!2sjp!4v1747730270966!5m2!1sja!2sjp",
    schedule:
      "北地区文化センター改修工事中活動しておりました。2025年11月以降改修工事中",
  },
];

export default function Access() {
  return (
    <div>
      <section>
        <h2>
          Access<span>活動拠点</span>
        </h2>

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
              練習時間
            </h3>
            <p style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
              毎月2回 13:00～15:30
            </p>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
              お知らせ
            </h3>
            <p
              style={{
                fontSize: "1.2rem",
                marginBottom: "0.5rem",
                textAlign: "left",
              }}
            >
              座間市民混声合唱団は、座間市内の各公共施設で練習を行っています。北地区文化センター、立野台コミュニティセンターは改修工事のため、現在は座間公民館、ハーモス座間3F集会室で練習を行っています。詳細は
              <Link
                href="/schedule"
                style={{ color: "#9e8c07", textDecoration: "underline" }}
              >
                スケジュール
              </Link>
              をご確認ください。
            </p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
              練習会場
            </h3>

            {locations.map((location) => (
              <div key={location.id} style={{ marginBottom: "3rem" }}>
                <div style={{ marginBottom: "1rem" }}>
                  <h4 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>
                    {location.name}
                  </h4>
                  <p style={{ fontSize: "1.2rem", marginBottom: "0.2rem" }}>
                    {location.schedule}
                  </p>
                  <p style={{ fontSize: "1.1rem", color: "#666" }}>
                    {location.address}
                  </p>
                </div>

                <div
                  style={{
                    width: "100%",
                    height: "400px",
                    marginBottom: "1rem",
                    borderRadius: "0.5rem",
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    src={location.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${location.name}の地図`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
