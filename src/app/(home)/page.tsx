import Banner from "@/app/(home)/components/Banner";
import Image from "next/image";
import BookList from "./components/BookList";

export default async function Home() {
  //data fetching

  return (
    <>
      <Banner />
      <BookList />
    </>
  );
}
