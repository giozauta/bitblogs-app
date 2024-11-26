import { Badge } from "@/components/ui/badge";

export function TagsBadge({ text }: Readonly<{ text: string }>) {
  return (
    <Badge className="mr-2 mb-2  bg-blue-600 hover:bg-blue-700">{text}</Badge>
  );
}
