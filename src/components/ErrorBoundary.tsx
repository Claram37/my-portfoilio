import MessagePage from "@/components/MessagePage";

type ErrorBoundaryProps = {
  error: unknown;
};

const ErrorBoundary = ({ error }: ErrorBoundaryProps) => {
  return (
    <main>
      <MessagePage title="Something went wrong">
        {import.meta.env.DEV && error instanceof Error && (
          <pre className="max-w-full overflow-x-auto text-left text-sm text-muted-foreground">
            {error.stack}
          </pre>
        )}
      </MessagePage>
    </main>
  );
};

export default ErrorBoundary;
