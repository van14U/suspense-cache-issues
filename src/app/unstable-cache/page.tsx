import { unstable_cache } from "next/cache";
import { Suspense } from "react";

export const runtime = "edge";

const withUnstableCache = unstable_cache(
  async () => {
    return await fetch("http://worldtimeapi.org/api/timezone/America/Chicago", {
      next: {
        revalidate: 0,
      },
    }).then((response) => response.json());
  },
  ["time-utc-datetime"],
  {
    tags: ["time-utc-datetime"],
    revalidate: 10,
  },
);

async function SuspenseComponent() {
  const time = await withUnstableCache();
  return <div>{JSON.stringify(time.utc_datetime, null, 2)}</div>;
}

export default function UnstableCache() {
  return (
    <main className="h-[100svh] grid place-items-center">
      <div>
        <h1>unstable_cache + Suspense</h1>
        <Suspense fallback="...loading">
          <SuspenseComponent />
        </Suspense>
      </div>
    </main>
  );
}
