import Card from "./components/Card";

export default function Home() {
  return (
    <main className="bg-lightPink bg-desktop bg-no-repeat bg-[length:max_300px] sm:bg-mobile sm:bg-[length:max_232px] min-h-screen h-max flex justify-center items-center overflow-scroll sm:py-6">
      <Card />
    </main>
  );
}
