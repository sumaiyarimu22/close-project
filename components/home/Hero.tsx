import { cn } from "@/lib/utils";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const pladairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
});
const Hero = () => {
  //  MIMOSA's Journey into Reality.
  return (
    <section className="wrapper section-padding h-[calc(100vh-5rem)]">
      <div className="w-full h-full grid grid-rows-6 gap-2 md:gap-5 items-center ">
        {/* FIRST ROW */}
        <div className="w-full hero-col-height grid grid-cols-[45%_auto]  md:grid-cols-[35%_auto] gap-7 lg:gap-14">
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

        <hr className="border-grey" />

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
        <div className="w-full hero-col-height grid grid-cols-[35%_auto] md:grid-cols-[48%_auto] gap-7 lg:gap-14">
          <div className="w-full h-full flex items-center">
            <h2 className="headline1 uppercase font-bold">
              Reality
              <span className="text-orange">.</span>
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
      </div>
    </section>
  );
};

export default Hero;
