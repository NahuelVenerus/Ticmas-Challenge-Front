"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HomeTitle } from "../styles/Home.styles";

export default function Home() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const token = localStorage.getItem("token");
    if (!token) router.push("/login");
    else router.push('/home')
  }, [router]);

  if (!isClient) {
    return null;
  }

  return (
    <HomeTitle>
      <div>
        <h1>Planify</h1>
        <p>Planificando...</p>
      </div>
    </HomeTitle>
  );
}
