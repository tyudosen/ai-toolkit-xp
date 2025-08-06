import { authkit } from '@workos-inc/authkit-nextjs';
import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(request: NextRequest) {
  // Perform logic before or after AuthKit

  // Auth object contains the session, response headers and an auhorization
  // URL in the case that the session isn't valid. This method will automatically
  // handle setting the cookie and refreshing the session
  const { session, headers, authorizationUrl } = await authkit(request, {
    debug: true,
  });

  // Control of what to do when there's no session on a protected route
  // is left to the developer
  if (request.url.includes('/account') && !session.user && authorizationUrl) {
    console.log('No session on protected path');
    return NextResponse.redirect(authorizationUrl);
  }

  // Headers from the authkit response need to be included in every non-redirect
  // response to ensure that `withAuth` works as expected
  return NextResponse.next({
    headers: headers,
  });
}

// Match against pages that require authentication
// Leave this out if you want authentication on every page in your application
export const config = { matcher: ['/', '/account'] };

