import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 items-center py-24 md:py-40 gap-16">
      {/* Left Section - Text */}
      <div className="text-center lg:text-left space-y-8">
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
            From Code
          </span>{" "}
          to Confidence -
        </h1>
        <h2 className="text-5xl font-bold">
          <span className="bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            Analyze, Optimize, Conquer!
          </span>
        </h2>

        <p className="text-2xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          🚀 Instant Code Complexity Analysis – Know Your Code’s Efficiency in
          Seconds!
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-6">
          <Button className="w-full md:w-auto px-8 py-4 text-xl">
            BigOTantra- Ask Ai ✨
          </Button>

          <a
            rel="noreferrer noopener"
            href="https://github.com/prateek168/BigOTantra"
            target="_blank"
            className={`w-full md:w-auto px-8 py-4 text-xl ${buttonVariants({
              variant: "outline",
            })}`}
          >
            ⭐ Star on GitHub
            <GitHubLogoIcon className="ml-3 w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Right Section - Hero Cards */}
      <div className="relative z-10 w-full max-w-[500px]">
        <HeroCards />
      </div>

      {/* Subtle Background Shadow */}
      <div className="absolute inset-0 mx-auto w-3/4 h-[600px] bg-gradient-to-b from-transparent to-gray-900 opacity-10 blur-3xl"></div>
    </section>
  );
};
