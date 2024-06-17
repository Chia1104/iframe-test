import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => {
    return <p>This is the notFoundComponent configured on root route</p>;
  },
});

function RootComponent() {
  return (
    <main className="prose dark:prose-invert mx-auto flex flex-col">
      <Outlet />
    </main>
  );
}
