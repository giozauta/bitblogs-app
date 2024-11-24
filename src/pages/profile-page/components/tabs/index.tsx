import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EditProfile from "../edit-profile";
import AuthorAvatar from "../avatar";

import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { logout } from "@/supabase/auth";
import { Link } from "react-router-dom";
import { getProfileInfo } from "@/supabase/account";
import { userAtom } from "@/store/auth";
import { useAtom } from "jotai";

const ProfileTabs: React.FC = () => {
  const { mutate: handleLogout } = useMutation({
    mutationKey: ["logout"],
    mutationFn: logout,
  });
  //
  const user = useAtom(userAtom);
  const userId = user[0]?.user.id ?? "";
  //
  const {
    data: profile,
    isError,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["profile-info"],
    queryFn: () => getProfileInfo(userId),
    enabled: !!userId,
  });

  const avatar = profile?.avatar_url ?? "";

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading profile info.</p>;
  if (!userId) return <p>User not authenticated.</p>;
  else {
    return (
      <div className="gap-10  flex mx-auto flex-col  justify-evenly h-[700px] w-[50%]">
        <div className="bg-blue-500 p-[1px] rounded-lg justify-center gap-10  flex mx-auto flex-col  w-[100%]">
          <EditProfile refetch={refetch} />
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
    <div className="p-8 md:p-10 flex justify-center items-center mb-6 md:mb-0">
      <AuthorAvatar avatar={avatar} />
    </div>
    <div className=" authorEnBoxContent flex-1 md:p-8 lg:p-12 w-full">
      <p className="text-lg font-semibold text-gray-600">Name: {profile?.full_name_en}</p>
      <p className="text-lg font-semibold text-gray-600">Last Name: {profile?.last_name_en}</p>
      <p className="text-lg font-semibold text-gray-600">Phone number: {profile?.phoneNumber}</p>
    </div>
  </div>
</TabsContent>
<TabsContent value="georgian">
  <div className="border flex flex-col md:flex-row items-center md:items-start mb-12 bg-card rounded-lg shadow-lg p-8">
    <div className="p-8 md:p-10 flex justify-center items-center mb-6 md:mb-0">
      <AuthorAvatar avatar={avatar} />
    </div>
    <div className="authorEnBoxContent flex-1 md:p-8 lg:p-12 w-full">
      <p className="text-lg font-semibold text-gray-600">სახელი: {profile?.full_name_ka}</p>
      <p className="text-lg font-semibold text-gray-600">გვარი: {profile?.last_name_ka}</p>
      <p className="text-lg font-semibold text-gray-600">ტელეფონის ნომერი: {profile?.phoneNumber}</p>
    </div>
  </div>
</TabsContent>

        </Tabs>

        <Link
          to="/"
          onClick={() => handleLogout()}
          className=" inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 border-red-600"
        >
          Logout
        </Link>
      </div>
    );
  }
};

export default ProfileTabs;
