import AdminNavbar from "@/components/shared/admin/header";

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cosmic-950 via-nebula-950 to-stardust-950">
      <AdminNavbar />
      {children}
    </div>
  )
}