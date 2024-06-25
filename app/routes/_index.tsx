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
    <div className="font-sans p-4">
      <Link to="/dashboard/profile">Go to profile</Link>
      <Link to="/dashboard/documentation">Go to documentation</Link>
    </div>
  );
}
