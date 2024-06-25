import NavDropdown from "@/components/nav-dropdown";
import { Link } from "@remix-run/react";
import { Triangle } from "lucide-react";

export default function RootHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link to="/">
          <Triangle size={16} />
        </Link>
        <NavDropdown />
      </div>
    </header>
  );
}
