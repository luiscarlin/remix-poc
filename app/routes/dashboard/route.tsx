import DashboardHeader from "@/routes/dashboard/dashboard-header";
import NavLinks from "@/routes/dashboard/nav-links";
import Sidebar from "@/routes/dashboard/sidebar";
import { Outlet } from "@remix-run/react";

export default function DashboardLayout() {
  return (
    <div className="flex flex-1 w-full flex-row">
      <Sidebar />
      <div className="mx-8 flex flex-col flex-1 w-full overflow-hidden">
        <DashboardHeader />
        <NavLinks />
        <main className="flex flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
