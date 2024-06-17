import {
  createFileRoute,
  ErrorComponentProps,
  ErrorComponent,
} from "@tanstack/react-router";

export const Route = createFileRoute("/feed/$id/")({
  loader: ({ params: { id } }) => id,
  errorComponent: PostErrorComponent,
  notFoundComponent: () => {
    return <p>Post not found</p>;
  },
  component: Page,
});

export function PostErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />;
}

function Page() {
  const data = Route.useLoaderData();
  return (
    <div className="h-screen w-full items-center justify-center">
      <h3>Post {data}</h3>
    </div>
  );
}
