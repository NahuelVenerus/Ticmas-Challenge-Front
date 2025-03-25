"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HomeTitle } from "../styles/Home.styles";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!sessionStorage.getItem('token')) {
      router.push('/login');
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return (
      <HomeTitle>
        <div>
          <h1>Planify</h1>
          <p>Verificando...</p>
        </div>
      </HomeTitle>
    );
  }

  return null;
}
