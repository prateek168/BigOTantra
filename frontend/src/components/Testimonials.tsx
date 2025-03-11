import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://source.unsplash.com/random/100x100?face",
    name: "Amit Sharma",
    userName: "@amit_sharma",
    comment:
      "This tool gave me a clear understanding of my code's time complexity. It helped me optimize my algorithm efficiently!",
  },
  {
    image: "https://source.unsplash.com/random/100x100?face",
    name: "Priya Shukla",
    userName: "@priya_shukla",
    comment:
      "I love how this website provides in-depth analysis. It helped me spot bottlenecks in my code that I hadn't noticed before!",
  },
  {
    image: "https://source.unsplash.com/random/100x100?face",
    name: "Rohan Gupta",
    userName: "@rohan_gupta",
    comment:
      "A fantastic tool for programmers! It not only analyzes complexity but also suggests ways to improve efficiency.",
  },
  {
    image: "https://source.unsplash.com/random/100x100?face",
    name: "Sneha Iyer",
    userName: "@sneha_iyer",
    comment:
      "The insights from this platform helped me refine my approach and write cleaner, more optimized code!",
  },
  {
    image: "https://source.unsplash.com/random/100x100?face",
    name: "Arjun Mehta",
    userName: "@arjun_mehta",
    comment:
      "Great for learning how different approaches affect performance. A must-have tool for developers!",
  },
  {
    image: "https://source.unsplash.com/random/100x100?face",
    name: "Neha Kapoor",
    userName: "@neha_kapoor",
    comment:
      "This site gave me a deeper understanding of time complexity and helped me improve my coding practices!",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        This Website
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Get deep insights into your code's efficiency and optimize your
        algorithms like never before!
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt="" src={image} />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
