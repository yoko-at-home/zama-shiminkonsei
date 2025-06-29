export default function NewsDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {children}
    </div>
  );
}
