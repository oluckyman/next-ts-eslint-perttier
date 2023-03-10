/* eslint-disable import/prefer-default-export */
import { /* NextRequest, */ NextResponse } from 'next/server'

// Example of a middleware that redirects the root path to the /candles path
export async function middleware(/* req: NextRequest */): Promise<NextResponse> {
  //   const { pathname, origin } = req.nextUrl
  //   if (pathname === `/`) {
  //     return NextResponse.redirect(`${origin}/candles`)
  //   }
  return NextResponse.next()
}
