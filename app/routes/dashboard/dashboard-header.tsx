import NavDropdown from "@/components/nav-dropdown";
import { Button } from "@/components/ui/button";
import { Link } from "@remix-run/react";
import { Bell, Triangle } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="w-full border-b border-border/40 bg-background/95">
      <div className="flex h-14 items-center justify-between">
        <Link to="/">
          <Triangle size={16} />
        </Link>
        <div className="flex gap-2 items-center">
          <Button variant="ghost" asChild>
            <Link to="/dashboard/notifications">
              <Bell size={16} />
            </Link>
          </Button>
          <NavDropdown />
        </div>
      </div>
    </header>
  );
}
