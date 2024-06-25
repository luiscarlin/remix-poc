import { Button } from "@/components/ui/button";
import RootHeader from "@/routes/_landing._index/header";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-1 flex-col">
      <RootHeader />
      <main className="flex flex-1 container max-w-screen-2xl items-center justify-center">
        <div className="flex flex-col">
          <Button variant={"link"} asChild>
            <Link to="/dashboard/profile">Professional Briefcase</Link>
          </Button>
          <Button variant={"link"} asChild>
            <Link to="/dashboard/jobs">Your Jobs</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
