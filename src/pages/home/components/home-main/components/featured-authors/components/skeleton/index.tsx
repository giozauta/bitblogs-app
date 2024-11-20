import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";
export function SkeletonDemo({
  data,
}: Readonly<{ data: { name: string; bio: string } }>) {
  return (
    <div className="flex  items-center space-x-4 pb-4">
      <Skeleton className=" relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full" />
      <div className="space-y-2">
        <div>
          <Link to="/author/1" className="font-semibold hover:underline">
            {data.name}
          </Link>
          <p className="text-sm text-muted-foreground">{data.bio}</p>
        </div>
      </div>
    </div>
  );
}
