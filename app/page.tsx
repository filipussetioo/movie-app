import Image from "next/image";
import Nav from "./layout/nav/page";
import HomeLayout from "./layout/home/page";
import Movie from "../component/movie-list"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <Nav/>
      <HomeLayout/>
    </main>
  );
}
