"use client";

import { MotionValue, motion, useTransform } from "framer-motion";

export default function Overlay({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Section 2: 25% to 50%
  const opacity2 = useTransform(
    scrollYProgress,
    [0.25, 0.3, 0.45, 0.5],
    [0, 1, 1, 0]
  );
  const y2 = useTransform(scrollYProgress, [0.25, 0.5], [100, -100]);

  // Section 3: 55% to 80%
  const opacity3 = useTransform(
    scrollYProgress,
    [0.55, 0.6, 0.75, 0.8],
    [0, 1, 1, 0]
  );
  const y3 = useTransform(scrollYProgress, [0.55, 0.8], [100, -100]);

  return (
    <div className="absolute inset-0 pointer-events-none p-8 flex flex-col justify-center">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl uppercase">
          ASSASSINS ARMY
        </h1>
        <div className="mt-8 flex items-center gap-4 md:gap-8 opacity-90">
           <div className="h-[2px] w-16 md:w-32 bg-gradient-to-r from-transparent to-red-600 rounded-full"></div>
           <p className="text-lg md:text-2xl text-gray-200 font-light tracking-[0.3em] uppercase">
             Founder <span className="font-bold text-red-500 drop-shadow-md">Nayan Shelke</span>
           </p>
           <div className="h-[2px] w-16 md:w-32 bg-gradient-to-l from-transparent to-red-600 rounded-full"></div>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center pl-8 md:pl-16"
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-xl max-w-lg leading-tight">
          Gamer. <br />
          Creator. <br />
          <span className="text-red-500">Entertainer.</span>
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center pr-8 md:pr-16 text-right"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-xl max-w-lg leading-tight uppercase">
          Welcome <br />
          <span className="text-gray-400">to our army</span>
        </h2>
      </motion.div>
    </div>
  );
}
