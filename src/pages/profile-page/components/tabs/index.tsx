import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AuthorDialog } from "../dealog";
import { AuthorAvatar } from "../avatar";

import React from "react";
import { useMutation } from "@tanstack/react-query";
import { logout } from "@/supabase/auth";
import { Link } from "react-router-dom";

const ProfileTabs: React.FC = () => {
  const { mutate: handleLogout } = useMutation({
    mutationKey: ["logout"],
    mutationFn: logout,
  });

  return (
    <div className="gap-10  flex mx-auto flex-col  justify-evenly h-[700px] w-[50%]">
      <div className="bg-blue-500 p-[1px] rounded-lg justify-center gap-10  flex mx-auto flex-col  w-[100%]">
        <AuthorDialog />
      </div>

      <Tabs
        defaultValue="english"
        className="gap-10 flex flex-col mx-auto  w-full"
      >
        <TabsList>
          <TabsTrigger className="w-1/2" value="english">
            English
          </TabsTrigger>
          <TabsTrigger className="w-1/2" value="georgian">
            ქართული
          </TabsTrigger>
        </TabsList>
        <TabsContent value="english">
          <div className="border flex flex-col md:flex-row items-center md:items-start mb-12 bg-card rounded-lg shadow-lg p-8">
            <div className=" p-10 flex justify-center items-center">
              <AuthorAvatar />
            </div>
            <div className="authorEnBoxContent p-10">
              <p>name : giorgi </p>
              <p>last Name : zautashvili</p>
              <p>phone number : +995 555 55 55</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="georgian">
          <div className="border flex flex-col md:flex-row items-center md:items-start mb-12 bg-card rounded-lg shadow-lg p-8">
            <div className=" p-10 flex justify-center items-center">
              <AuthorAvatar />
            </div>
            <div className="authorEnBoxContent p-10">
              <p>სახელი : გიორგი </p>
              <p>გვარი : ზაუტაშვილი</p>
              <p>ტელეფონის ნომერი : +995 555 55 55</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <Link
        to="/"
        onClick={() => handleLogout()}
        className="border-amber-500 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
      >
        Logaut
      </Link>
    </div>
  );
};

export default ProfileTabs;
