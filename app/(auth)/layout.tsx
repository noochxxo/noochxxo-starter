

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-center">
       
        <p className="text-muted-foreground mb-4">Starter Project</p>
        <p className="text-muted-foreground mb-8">
          A Starter project by noochxxo from Trotchie Digital Solutions
        </p>
      </div>
      {children}
    </div>
  );
}