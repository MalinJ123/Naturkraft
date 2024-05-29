import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export const useRedirect = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/admin/dashboard");
    }
  }, [router, status]);

  return session;
};
