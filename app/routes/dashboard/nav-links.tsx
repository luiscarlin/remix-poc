import { Button } from "@/components/ui/button";
import { Link } from "@remix-run/react";

export default function NavLinks() {
  // const currentPath = usePathname();
  const currentPath = "";

  const isActive = (href: string) => currentPath === href;
  const links = {
    "My Profile": "/dashboard/profile",
    "Licenses & Certifications": "/dashboard/license",
    "Education & Work Experience": "/dashboard/education",
    Documentation: "/dashboard/documentation",
  };

  return (
    <nav className="w-full">
      <ul className="flex flex-row gap-8">
        {Object.entries(links).map(([key, value]) => (
          <li key={key}>
            <Button variant={isActive(value) ? "secondary" : "ghost"} asChild>
              <Link to={value}>{key}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
