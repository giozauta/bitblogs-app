import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SkeletonDemo } from "./components/skeleton";
import { useState } from "react";

const FeaturedAuthors: React.FC = () => {
  const [authors] = useState([
    {
      name: "Alice Johnson",
      bio: "Blockchain Enthusiast",
    },
    {
      name: "Bob Smith",
      bio: "Crypto Analyst",
    },
    {
      name: "Carol Williams",
      bio: "Tech Journalist",
    },
  ]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Featured Authors</CardTitle>
      </CardHeader>
      <CardContent>
        {authors.map((author, index) => (
          <SkeletonDemo data={author} key={index} />
        ))}
      </CardContent>
    </Card>
  );
};

export default FeaturedAuthors;
