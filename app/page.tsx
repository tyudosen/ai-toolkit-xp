import type { Metadata } from "next"
import HomePageClient from "./home-page-client"
import { getSignUpUrl, withAuth } from "@workos-inc/authkit-nextjs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Toolkit - The Ultimate AI Tools Suite",
  description:
    "Unlock the power of artificial intelligence with our comprehensive suite of tools. From text generation to image creation, supercharge your productivity.",
}

export default async function HomePage() {
  // const { user, accessToken } = await withAuth();
  //
  // console.log('access_token', accessToken)
  //
  // const signUpUrl = await getSignUpUrl();
  //
  // if (!user) {
  //   return (
  //     <>
  //       <a href="/login">Sign in</a>
  //       <Link href={signUpUrl}>Sign up</Link>
  //     </>
  //   );
  // }

  return <HomePageClient />
}

