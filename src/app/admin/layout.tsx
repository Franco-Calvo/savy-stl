import AdminNav from "@/Components/Presentation/AdminNav/AdminNav";
import AdminWrapper from "@/Utils/AdminWrapper/AdminWrapper";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminNav />
      {children}
    </>
  );
}
