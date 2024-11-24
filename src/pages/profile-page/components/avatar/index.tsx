import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type AuthorAvatarProps = {
  avatar: string
}

const AuthorAvatar:React.FC<AuthorAvatarProps> = ({avatar})=> {
  return (
    <Avatar>
      <AvatarImage src={avatar} alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

export default AuthorAvatar