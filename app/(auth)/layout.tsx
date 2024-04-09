export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex-center min-h-screen w-full bg-yellow-200 bg-cover bg-fixed bg-center">
        {children}
      </div>
    );
  }