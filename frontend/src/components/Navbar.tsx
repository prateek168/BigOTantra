import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // Import react-scroll for smooth scrolling
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { LogoIcon } from "./Icons";

interface RouteProps {
  href: string;
  label: string;
  isRoute?: boolean; // Added to distinguish between internal scroll links and page navigation
}

const routeList: RouteProps[] = [
  {
    href: "Ask",
    label: "Ask AI✨",
    isRoute: true, // This should navigate instead of scroll
  },
  {
    href: "testimonials",
    label: "Testimonials",
  },
  {
    href: "pricing",
    label: "Pricing",
  },
  {
    href: "faq",
    label: "FAQ",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate(); // Get navigate function

  return (
    <header className="sticky top-0 z-40 w-full border-b-[1px] bg-white/80 backdrop-blur-lg shadow-[0_4px_20px_rgba(5,132,83,0.3)] dark:border-b-slate-700 dark:bg-background/80">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link to="/" className="ml-2 font-bold text-xl flex">
              <LogoIcon />
              BigOTantra
            </Link>
          </NavigationMenuItem>

          {/* Mobile Menu */}
          <span className="flex md:hidden">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="flex md:hidden h-5 w-5" />
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    BigOTantra
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label, isRoute }) =>
                    isRoute ? (
                      <button
                        key={label}
                        onClick={() => {
                          navigate(`/${href}`);
                          setIsOpen(false);
                        }}
                        className={buttonVariants({ variant: "ghost" })}
                      >
                        {label}
                      </button>
                    ) : (
                      <ScrollLink
                        key={label}
                        to={href}
                        smooth={true}
                        duration={500}
                        offset={-70} // Adjust for navbar height
                        className={buttonVariants({ variant: "ghost" })}
                        onClick={() => setIsOpen(false)}
                      >
                        {label}
                      </ScrollLink>
                    )
                  )}
                  <a
                    rel="noreferrer noopener"
                    href="https://github.com/prateek168/BigOTantra"
                    target="_blank"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    <GitHubLogoIcon className="mr-2 w-5 h-5" />
                    Github
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-2">
            {routeList.map(({ href, label, isRoute }) =>
              isRoute ? (
                <button
                  key={label}
                  onClick={() => navigate(`/${href}`)}
                  className={`text-[17px] ${buttonVariants({
                    variant: "ghost",
                  })}`}
                >
                  {label}
                </button>
              ) : (
                <ScrollLink
                  key={label}
                  to={href}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className={`text-[17px] ${buttonVariants({
                    variant: "ghost",
                  })}`}
                >
                  {label}
                </ScrollLink>
              )
            )}
          </nav>

          <div className="hidden md:flex gap-2">
            <a
              rel="noreferrer noopener"
              href="https://github.com/prateek168/BigOTantra"
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <GitHubLogoIcon className="mr-2 w-5 h-5" />
              Github
            </a>
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
