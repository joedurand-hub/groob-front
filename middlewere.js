
export const config = {
  matcher: '/posts/id'
}

export function middleware({req, res}) {
  const cookie = req.cookies.get('authToken',{ path: '/posts/id' })
  return cookie;
}