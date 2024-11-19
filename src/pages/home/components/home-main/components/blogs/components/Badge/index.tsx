import { Badge } from "@/components/ui/badge";

export function BlogsBadge({ text }: Readonly<{ text: string }>) {
  return (
    <Badge variant="secondary" className="mr-2 hover:bg-gray-200">
      {text}
    </Badge>
  );
}
