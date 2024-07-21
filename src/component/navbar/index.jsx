import Logo from "@/icons/logo";

export default function Navbar() {
  return (
    <header className="container max-w-screen-lg mx-auto">
      <nav className="h-20 w-full flex justify-center items-center">
        <Logo />
      </nav>
    </header>
  );
}
