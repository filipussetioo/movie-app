import Image from "next/image";
import Nav from "./layout/nav/page";
import HomeLayout from "./layout/home/page";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Nav/>
      <HomeLayout/>
    </main>
  );
}
