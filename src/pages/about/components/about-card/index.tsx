import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type AboutCardProps = {
  data: {
    title: string;
    description: string;
    img: string;
  };
};

export const AboutCard: React.FC<AboutCardProps> = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <div className=" mb-4">
          <img src={data.img} alt="" />
        </div>
        <CardTitle>{data.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{data.description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default AboutCard;
