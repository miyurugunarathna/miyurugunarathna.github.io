import Footer from "@/component/footer";
import Landing from "@/component/landing";
import Navbar from "@/component/navbar";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 h-[100dvh] w-full justify-center items-center">
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
}
