import Link from "next/link";
import ThemeToggleButton from "../ThemeToggleButton";

const Header = () => {
  return (
    <header
      className="bg-background/80 fixed inset-x-0 top-0 z-50 border-b shadow backdrop-blur"
      aria-label="app-header">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href={"/"}>
          <h1
            className="text-2xl font-semibold"
            aria-label="App Name">
            BROOTHX
          </h1>
        </Link>

        <nav className="flex items-center gap-4">
          <Link href={"/"}>Home</Link>

          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
