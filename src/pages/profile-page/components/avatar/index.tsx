import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type AuthorAvatarProps = {
  avatar: string;
};

const AuthorAvatar: React.FC<AuthorAvatarProps> = ({ avatar }) => {
  return (
    <Avatar className=" relative flex shrink-0 overflow-hidden rounded-full w-24 h-24 mb-4 md:mb-0 md:mr-8 ">
      <AvatarImage src={avatar} alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default AuthorAvatar;
