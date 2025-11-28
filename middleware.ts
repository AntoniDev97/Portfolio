// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Get the response object to modify headers
  const response = NextResponse.next();

  // --- Recommended Basic Security Headers ---

  /**
   * X-Frame-Options: DENY
   * Prevents your site from being rendered inside an <iframe>, <frame>, <embed> or <object>.
   * This helps prevent "clickjacking" attacks.
   */
  response.headers.set("X-Frame-Options", "DENY");

  /**
   * X-Content-Type-Options: nosniff
   * Prevents the browser from trying to guess the content type of a response
   * away from the declared Content-Type header. Reduces risk of content-sniffing attacks.
   */
  response.headers.set("X-Content-Type-Options", "nosniff");

  /**
   * Referrer-Policy: strict-origin-when-cross-origin
   * Controls how much referrer information (the URL visited before) is sent.
   * This setting sends the full URL only on same-origin requests, sends only the origin
   * on cross-origin requests, and sends no referrer when navigating from HTTPS to HTTP.
   * A good balance for privacy.
   */
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  /**
   * Permissions-Policy (formerly Feature-Policy)
   * Allows you to control which browser features (camera, microphone, geolocation etc.)
   * are available to your site and any embedded iframes. Disabling unused features enhances privacy and security.
   * Customize this if your site *needs* any of these features.
   */
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=(), usb=(), bluetooth=(), accelerometer=(), gyroscope=()"
  );

  /**
   * X-XSS-Protection: 0
   * Disables the browser's built-in reflective XSS auditor, which is often inconsistent
   * and can sometimes introduce vulnerabilities itself. Modern protection relies on
   * frameworks like Next.js mitigating XSS and potentially a strong CSP (which we are omitting here for simplicity).
   */
  response.headers.set("X-XSS-Protection", "0");

  return response;
}

// Apply middleware globally to all routes
export const config = {
  matcher: "/:path*",
};