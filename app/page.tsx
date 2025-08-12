import type { Metadata } from "next"
import { cookies } from 'next/headers'
import HomePageClient from "./home-page-client"
import { getSignUpUrl, withAuth } from "@workos-inc/authkit-nextjs";
import Link from "next/link";
import { env } from "@/env";

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
  //
  // const cookie_store = await cookies()
  // const wos_session = cookie_store.get(env.WORKS_OS_COOKIE_NAME)
  // const testRes = await fetch('http://localhost:3007/research?query=tips for improving my italian listening skills', {
  //   credentials: 'include',
  //   headers: {
  //     'Cookie': wos_session?.value || ''
  //   }
  // })
  //
  // const testData = await testRes.json();
  //
  // console.log('check -->', {
  //   testRes,
  //   testData
  // })


  return <HomePageClient />
}

