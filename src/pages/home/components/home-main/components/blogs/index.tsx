import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { blogsDataType } from "./blogs.type";
import { BlogsBadge } from "./components/Badge";

const Blogs: React.FC<blogsDataType> = ({ title, identifer, paragrap }) => {
  return (
    <Card>
      <CardHeader>
        <div className={"blogBoxHeaderImageBox mb-4"}>
          <img
            className="blogBoxHeaderImage rounded-lg object-cover w-full h-[200px]"
            src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=200&amp;width=400"
            alt="Cover for Blockchain"
          />
        </div>
        <CardTitle>
          <div className="blogBoxHeaderTitle tracking-tight text-2xl font-bold">
            {title}
          </div>
        </CardTitle>
        <CardDescription>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <div className="hover:underline">{identifer.author}</div>
            <span>•</span>
            <span>{identifer.date}</span>
            <span>•</span>
            <span>{identifer.time}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="blogBoxMainParagrap text-muted-foreground">{paragrap}</p>
      </CardContent>
      <CardFooter>
        <BlogsBadge text="Blockchain" />
        <BlogsBadge text="Technology" />
        <BlogsBadge text="Future" />
      </CardFooter>
    </Card>
  );
};

export default Blogs;
