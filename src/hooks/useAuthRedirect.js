import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export const useAuthRedirect = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [router, status]);

  return session;
};
