import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Blogs from "../../../home-main/components/blogs";
import { blogsData } from "../../../state";
import AuthorCard from "../../components/card";
const Main: React.FC = () => {
  const [state] = useState(blogsData);

  return (
    <div>
      <Tabs defaultValue="Articles" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger className="w-1/2" value="Articles">
            Articles
          </TabsTrigger>
          <TabsTrigger className="w-1/2" value="About">
            About
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Articles" className=" flex flex-col gap-6">
          {state.map((data, index) => {
            return (
              <Blogs
                key={index}
                title={data.title}
                identifer={data.identifierInformation}
                paragrap={data.paragrap}
              />
            );
          })}
        </TabsContent>
        <TabsContent value="About">
          <AuthorCard />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Main;
