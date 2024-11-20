import { Skeleton } from "@/components/ui/skeleton";
import { AboutCard } from "../about-card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutList: React.FC = () => {
  const [data] = useState([
    {
      title: "Rich Content",
      description:
        "Access a wide range of articles, tutorials, and insights on the latest tech trends and best practices.",
      img: "./book.jpg",
    },
    {
      title: "Vibrant Community",
      description:
        "Connect with like-minded individuals, share your knowledge, and grow your professional network.",
      img: "./manIcon.jpg",
    },
    {
      title: "Cutting-edge Topics",
      description:
        "Stay ahead of the curve with content covering emerging technologies and innovative solutions.",
      img: "./shezam.jpg",
    },
  ]);
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">About bitBlogs</h1>
        <p className="text-xl text-muted-foreground">
          Empowering tech enthusiasts to share knowledge and inspire innovation.
        </p>
      </section>

      <section className="grid  h-[433px] md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p className="text-muted-foreground">
            At bitBlogs, we believe in the power of shared knowledge. Our
            mission is to create a platform where tech enthusiasts, developers,
            and innovators can come together to share ideas, learn from each
            other, and push the boundaries of what's possible in the world of
            technology.
          </p>
        </div>
        <div className="relative h-64 md:h-full">
          <Skeleton className="relative h-64 md:h-full rounded-xl" />
        </div>
      </section>
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <AboutCard data={item} key={index} />
          ))}
        </div>
      </section>
      <section className="bg-gray-300 p-8 rounded-lg ">
        <h1 className="text-3xl font-semibold mb-4">Our Story</h1>
        <p className="text-muted-foreground mb-4">
          Founded in 2023, bitBlogs started as a small project by a group of
          passionate developers who wanted to create a space for sharing their
          experiences and learning from others. What began as a simple blog
          quickly grew into a thriving community of tech enthusiasts from all
          around the world.
        </p>
        <p className="text-muted-foreground">
          Today, bitBlogs is proud to be a leading platform for
          technology-focused content, fostering innovation and collaboration in
          the ever-evolving world of tech.
        </p>
      </section>
      <section className="text-center">
        <h1 className="text-3xl font-semibold mb-4">Join Us on Our Journey</h1>
        <p className="text-muted-foreground mb-6">
          Whether you're a seasoned developer, a curious beginner, or somewhere
          in between, there's a place for you at bitBlogs. Let's shape the
          future of technology together.
        </p>
        <Button className="p-5 px-8 bg-blue-600" asChild>
          <Link to="/register">Get Started Today</Link>
        </Button>{" "}
      </section>
    </div>
  );
};

export default AboutList;
