'use client';

import { useEffect, useState } from "react";

import Achievement from "./components/Achievement";
import Choose from "./components/Choose";
import Programs from "./components/Programs";
import Home from "./components/Home";
import SchoolLoader from "./components/ui/Loader";
import Loading from "./loading";

export default function PageClient() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // loader duration

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <SchoolLoader />
      <Home />
      <Achievement />
      <Programs />
      <Choose />
      {/* <Facilities /> */}
    </>
  );
}
