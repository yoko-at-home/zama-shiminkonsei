"use client";

const locations = [
  {
    id: 1,
    name: "座間市公民館",
    address: "〒252-0029 座間市入谷西2-53-34",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d6497.615667887153!2d139.393288!3d35.4842981!3m2!1i1024!2i768!4f13.1!2m1!1zZ29vZ2xlbWFwIOOAkjI1Mi0wMDI5IOW6p-mWk-W4guWFpeiwt-ilvzIgNTMgMzQ!5e0!3m2!1sja!2sjp!4v1747730185458!5m2!1sja!2sjp",
    schedule: "第2日曜",
  },
  {
    id: 2,
    name: "立野台コミュニティセンター",
    address: "〒252-0023 座間市立野台3-14-12",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.0201014938566!2d139.40998531148048!3d35.47904647253911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ff7a740faff9%3A0xea5d4a0a27329ef1!2z44CSMjUyLTAwMjMg56We5aWI5bed55yM5bqn6ZaT5biC56uL6YeO5Y-w77yT5LiB55uu77yR77yU4oiS77yR77ySIOW6p-mWk-W4gueri-eri-mHjuWPsOOCs-ODn-ODpeODi-ODhuOCo-ODvOOCu-ODs-OCv-ODvA!5e0!3m2!1sja!2sjp!4v1747730270966!5m2!1sja!2sjp",
    schedule: "第4日曜",
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
                  <p style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
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

            <div style={{ marginTop: "2rem" }}>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                お知らせ
              </h3>
              <p style={{ color: "#666" }}>
                座間市北地区文化センターは現在改装中のため、立野台コミュニティセンターで練習を行っています。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
