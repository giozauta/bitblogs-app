import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TagsBadge } from "./components/badge";
import { useState } from "react";

const PopularTags = () => {
  const [badge] = useState([
    "Blockchain",
    "Cryptocurrency",
    "Technology",
    "Programming",
    "Ai",
    "Machine Learning",
  ]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Popular Tags</CardTitle>
      </CardHeader>
      <CardContent>
        {badge.map((tag) => (
          <TagsBadge key={tag} text={tag} />
        ))}
      </CardContent>
    </Card>
  );
};

export default PopularTags;
