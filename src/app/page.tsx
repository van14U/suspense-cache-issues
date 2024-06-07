import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-[100svh] grid place-items-center">
      <div className="grid">
        <Link href={"/fetch"} className="underline">
          {"->"} fetch + suspense
        </Link>
        <Link href={"/unstable-cache"} className="underline">
          {"->"} unstable_cache + suspense
        </Link>
      </div>
    </main>
  );
}
