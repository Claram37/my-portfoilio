import type { ReactNode } from "react";
import Button from "@/components/Button";

interface MessagePageProps {
  title: string;
  children?: ReactNode;
}

const MessagePage = ({ title, children }: MessagePageProps) => {
  return (
    <section className="flex flex-col items-center gap-6 px-page py-32 text-center">
      <h1 className="text-hero">{title}</h1>
      {children}
      <Button to="/">Back home</Button>
    </section>
  );
};

export default MessagePage;
