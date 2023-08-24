import { cn } from "@/lib/utils";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const pladairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
});
const Hero = () => {
  //  MIMOSA's Journey into Reality.
  return (
    <section className="wrapper section-padding h-[calc(100vh-5rem)] ">
      <div className="w-full h-[80%] sm:h-full grid grid-rows-6 md:gap-5 items-center relative ">
        {/* FIRST ROW */}
        <div className="w-full hero-col-height grid grid-cols-[45%_auto]  md:grid-cols-[35%_auto] gap-7 lg:gap-14 ">
          <div className="w-full h-full overflow-hidden rounded-[0px_50PX_0PX_50PX]">
            <Image
              src={`https://images.pexels.com/photos/2816479/pexels-photo-2816479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              alt=""
              width={640}
              height={360}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full flex items-center">
            <h2 className="headline1 uppercase font-bold">
              M<span className="lowercase text-violet">i</span>
              {`MOSA's`}
            </h2>
          </div>
        </div>

        <hr className="border-grey " />

        {/* SECOND ROW */}
        <div className="w-full hero-col-height grid grid-cols-[35%_auto_20%] md:grid-cols-[45%_auto_23%] gap-7 lg:gap-14 ">
          <div className="w-full h-full flex items-center">
            <h2 className="headline1 uppercase font-bold ">Journey</h2>
          </div>
          <div className="w-full h-full overflow-hidden rounded-[50px_0PX_50PX_50PX]">
            <Image
              src={`https://images.pexels.com/photos/834872/pexels-photo-834872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              alt=""
              width={640}
              height={360}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full flex items-center">
            <h2 className="headline1 uppercase font-bold">
              <span
                className={cn(
                  "lowercase font-normal",
                  pladairDisplay.className
                )}
              >
                into
              </span>
            </h2>
          </div>
        </div>

        <hr className="border-grey" />

        {/* THIRD ROW */}
        <div className="w-full hero-col-height grid grid-cols-[35%_auto] md:grid-cols-[48%_auto] gap-7 lg:gap-14 ">
          <div className="w-full h-full flex items-center">
            <h2 className="headline1 uppercase font-bold">
              Reality
              <span className="text-green">.</span>
            </h2>
          </div>
          <div className="w-full h-full overflow-hidden rounded-[100px_80PX_80PX_0PX]">
            <Image
              src={`https://images.pexels.com/photos/9321070/pexels-photo-9321070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
              alt=""
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <hr className="border-grey" />

        {/* PACKAGES BUTTON */}
        <Link
          href="/#packages"
          className="bg-dark text-light w-28 md:w-32 h-28 md:h-32 rounded-full overflow-hidden flex justify-center items-center uppercase text-lg absolute left-[30%] md:left-[40%] bottom-[22%] sm:bottom-[18%] md:bottom-[22%] z-[1] group shadow-2xl shadow-dark/50 hover:shadow-violet/50 eq"
        >
          <p className="z-[3]">Packages</p>
          {/* FILLER 1*/}
          <span className="z[2] absolute top-full left-0 bottom-0 right-0 w-full h-1/2 bg-violet group-hover:top-1/2 eq "></span>

          {/* FILLER 2*/}
          <span className="z[2] absolute -top-full left-0 bottom-0 right-0 w-full h-1/2 bg-violet group-hover:top-0 eq "></span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
