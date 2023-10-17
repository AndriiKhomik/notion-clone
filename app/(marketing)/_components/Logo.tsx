import { Poppins } from "next/font/google";
import Image from "next/image";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});
// TODO: error with adding font.className to p 28 line
const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/logo.svg"
        alt="logo"
        height="40"
        width="40"
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        alt="logo"
        height="40"
        width="40"
        className="hidden dark:block"
      />
      <p className={cn("font-semibold")}>Jotion</p>
    </div>
  );
};

export default Logo;