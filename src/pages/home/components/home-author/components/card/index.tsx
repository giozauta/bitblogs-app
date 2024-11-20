import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AuthorBadge from "../badge";

const AuthorCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About Jane Doe</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Jane Doe is a seasoned software engineer with over a decade of
          experience in web development. She specializes in JavaScript, React,
          and Node.js, and has a keen interest in emerging technologies like AI
          and blockchain. Jane is a frequent speaker at tech conferences and
          contributes to various open-source projects.
        </p>
      </CardContent>
      <CardContent>
        <CardTitle className="mb-4">Skills</CardTitle>
        <AuthorBadge />
        <AuthorBadge />
        <AuthorBadge />
        <AuthorBadge />
        <AuthorBadge />
        <AuthorBadge />
        <AuthorBadge />
      </CardContent>
    </Card>
  );
};

export default AuthorCard;
