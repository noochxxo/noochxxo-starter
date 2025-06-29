import GuestNavbar from "@/components/shared/guest/header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cosmic-950 via-nebula-950 to-stardust-950">
      <GuestNavbar />
      {children}
    </div>
  )
}