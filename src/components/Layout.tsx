import { Suspense } from "react";
import Heder from "./Heder";
import Hero from "./Hero";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Heder />
      <Hero />
      <Suspense fallback={""}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
}
