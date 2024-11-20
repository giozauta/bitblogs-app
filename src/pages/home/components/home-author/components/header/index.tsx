import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ButtonDemo } from "../button";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start mb-12 bg-card rounded-lg shadow-lg p-8">
      <Avatar className="relative flex shrink-0 overflow-hidden rounded-full w-32 h-32 mb-4 md:mb-0 md:mr-8 border-4 border-blue-500">
        <AvatarImage src="" />
        <AvatarFallback>Author</AvatarFallback>
      </Avatar>
      <div className="text-center md:text-left flex-grow">
        <h1 className="text-3xl font-bold mb-2">Jane Doe</h1>
        <p className="text-muted-foreground mb-4">
          Tech enthusiast, software engineer, and avid blogger. Passionate about
          AI, web development, and the future of technology.
        </p>
        <div className="flex justify-center md:justify-start space-x-4 mb-4">
          <ButtonDemo />
          <ButtonDemo />
          <ButtonDemo />
          <ButtonDemo />
        </div>
        <div className="flex justify-center md:justify-start space-x-4 text-sm text-muted-foreground">
          <p>1234 Followers</p>
          <p>567 Following</p>
        </div>
      </div>
    </div>
  );
};

export default Header;

/*
    <section className="flex border gap-4">
      <Avatar className="relative flex shrink-0 overflow-hidden rounded-full w-32 h-32 mb-4 md:mb-0 md:mr-8 border-4 border-blue-500">
        <AvatarImage src="" />
        <AvatarFallback>Author</AvatarFallback>
      </Avatar>
      <Card>
        <CardHeader>
          <CardTitle>Jane Doe</CardTitle>
          <CardDescription>
            Tech enthusiast, software engineer, and avid blogger. Passionate
            about AI, web development, and the future of technology.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex columns gap-5">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>twit</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>F</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>in</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>Git</AvatarFallback>
          </Avatar>
        </CardContent>

        <CardFooter>
          <p className="mr-5">1234 Followers</p>

          <p>567 Following</p>
        </CardFooter>
      </Card>
    </section>
*/
