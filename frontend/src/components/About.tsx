import { FiInstagram } from "react-icons/fi";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt="Pilot"
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Us
              </h2>

              <p className="text-xl text-muted-foreground mt-4">
                Two desperate third-year undergrad devs, Prateek & Tejasw,
                writing code, breaking code, fixing code, and still waiting for
                fan mail. 💌 <br /> Hoping someone falls in love with our
                creations. 😭 Ofc we believe in clean code, but our rooms? Not
                so much. <br />
                Get connected with us by scrolling down—just like reels, but
                with more purpose!
                <br />
                📩 Find our info below! 👇
                <br />
                <br />
                <div className="flex items-center gap-6 mt-2">
                  <a
                    href="https://www.instagram.com/_.prateek.verma._"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary font-md hover:underline"
                  >
                    <FiInstagram className="w-6 h-6 text-pink-500" />
                    @_.prateek.verma._
                  </a>
                  <a
                    href="https://www.instagram.com/tejasw_mishra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary font-md hover:underline"
                  >
                    <FiInstagram className="w-6 h-6 text-pink-500" />
                    @tejasw_mishra
                  </a>
                </div>
              </p>
            </div>

            {/* Isko dynamic bnana hai */}
            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
