import { Suspense } from "react";

export const runtime = "edge";

async function SuspenseComponent() {
  const time = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Chicago",
    {
      next: {
        revalidate: 10,
        tags: ["time-utc-datetime-fetch"],
      },
    },
  ).then((response) => response.json());
  return <div>{JSON.stringify(time.utc_datetime, null, 2)}</div>;
}

export default function Fetch() {
  return (
    <main className="h-[100svh] grid place-items-center">
      <div>
        <h1>Fetch + Suspense</h1>
        <Suspense fallback="...loading">
          <SuspenseComponent />
        </Suspense>
      </div>
    </main>
  );
}
