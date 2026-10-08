import Button from '@/components/Button';

type ErrorBoundaryProps = {
  error: unknown;
};

// Shown when a page crashes. Unknown URLs go to routes/not-found.tsx instead
const ErrorBoundary = ({ error }: ErrorBoundaryProps) => {
  return (
    <main className="flex flex-col items-center gap-6 px-page py-32 text-center">
      <h1 className="text-hero">Something went wrong</h1>
      {import.meta.env.DEV && error instanceof Error && (
        <pre className="max-w-full overflow-x-auto text-left text-sm text-muted-foreground">{error.stack}</pre>
      )}
      <Button to="/">Back home</Button>
    </main>
  );
};

export default ErrorBoundary;
