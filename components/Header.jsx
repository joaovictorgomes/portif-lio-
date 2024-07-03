import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      {/* logo */}
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            João<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* descktop nav & hire me button */}
        <div className="hidden xl:flex gap-8 items-center">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav  />
        </div>
      </div>
    </header>
  );
};

export default Header;
