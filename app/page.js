"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/signin"); // Redirect to sign-in page
  }, [router]);

  return null; // No content needed for the redirect page
};

export default HomePage;
