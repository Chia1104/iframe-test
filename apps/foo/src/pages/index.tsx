import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <iframe
        src="http://localhost:3001/iframe"
        className="max-[670px] w-full"
      />
    </div>
  );
}
