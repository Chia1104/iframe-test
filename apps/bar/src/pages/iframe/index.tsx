import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/iframe/")({
  component: Page,
});

function Page() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center p-5 text-center">
      <h3>List</h3>
      <div className="flex flex-col gap-3">
        {[1, 2, 3, 4].map((i) => (
          <a
            key={i}
            href={`${window.location.origin}/feed/${i}`}
            target="_blank"
            rel="noreferrer">
            {i}
          </a>
        ))}
      </div>
    </div>
  );
}
