// import { handleAuth } from '@workos-inc/authkit-nextjs';
// import { NextRequest } from 'next/server';
//
// // Redirect the user to `/` after successful sign in
// // The redirect can be customized: `handleAuth({ returnPathname: '/foo' })`
// export const GET = async (req: NextRequest) => {
//
// 	console.log('req', {
// 		url: req.url,
// 		next_url: req.nextUrl
// 	})
//
// 	const url = new URL(req.url)
// 	url.searchParams.delete("code")
//
// 	const res = handleAuth();
//
//
//
// 	res(req).then((deets) => console.log('deets --->', deets))
//
//
// 	return res(req)
// };
import { handleAuth } from '@workos-inc/authkit-nextjs';

export const GET = handleAuth();
