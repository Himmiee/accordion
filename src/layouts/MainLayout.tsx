import ThemeToggle from "../components/ThemeToggle";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-white dark:bg-[#1C1C1C] text-black dark:text-white font-dm-sans">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <main className="max-w-7xl mx-auto py-6 px-[35px]">{children}</main>
    </div>
  );
}
