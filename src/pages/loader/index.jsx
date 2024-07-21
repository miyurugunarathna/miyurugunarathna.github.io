import Logo from "@/icons/logo";

export default function Loader() {
  return (
    <div className="flex flex-col justify-center items-center h-screen relative">
      <Logo size={48} />
      <hr className="border-black/5 border-t w-full absolute" />
      <span className="absolute bottom-8">
        <p className="font-medium text-black/20">
          Experience still being developed
        </p>
      </span>
    </div>
  );
}
