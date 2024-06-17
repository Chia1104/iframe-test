import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="flex h-screen w-full items-center justify-center p-5 text-center">
      <h3>
        Go to <Link to="/iframe">`/iframe`</Link> see the result
      </h3>
    </div>
  );
}
