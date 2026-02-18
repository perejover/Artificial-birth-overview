import CodeBlock from "./CodeBlock";

interface ResponseBlockProps {
  status: string;
  statusText: string;
  description: string;
  body: string;
}

export default function ResponseBlock({ status, statusText, description, body }: ResponseBlockProps) {
  const isSuccess = status.startsWith("2");
  return (
    <div className="my-6">
      <div className="flex items-center gap-2 mb-2">
        <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${isSuccess ? "bg-[hsl(var(--endpoint-get))]/15 text-[hsl(var(--endpoint-get))]" : "bg-destructive/15 text-destructive"}`}>
          {status}
        </span>
        <span className="text-sm font-mono text-foreground">{statusText}</span>
      </div>
      <p className="text-sm text-muted-foreground mb-2 prose-body">{description}</p>
      <CodeBlock title="Response body" language="json">{body}</CodeBlock>
    </div>
  );
}
