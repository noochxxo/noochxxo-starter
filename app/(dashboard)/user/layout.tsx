import UserNavbar from "@/components/shared/user/header";

export default function UserDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-cosmic-950 via-nebula-950 to-stardust-950">
      <UserNavbar />
      {children}
    </div>
  )
}