"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <main>
      <h2 className="">Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
      <p className="">
        Or go back to <Link href="/">Home</Link>{" "}
      </p>
    </main>
  );
}
