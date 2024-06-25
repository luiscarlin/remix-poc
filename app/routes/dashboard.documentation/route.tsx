import { Button } from "@/components/ui/button";

export default function Documentation() {
  return (
    <div className="font-sans p-4">
      <h1>documentation page</h1>
      <Button onClick={() => console.log("hey you did it")}>Click me</Button>
    </div>
  );
}
