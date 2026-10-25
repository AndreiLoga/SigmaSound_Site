/** Remove only the first-party analytics cookies observed on the previous site. */
export function clearLegacyAnalyticsCookies(document: Document): void {
  const hostname = document.location.hostname;
  if (hostname !== 'sigmasound.ro' && hostname !== 'www.sigmasound.ro') return;
  try {
    const existing = new Set(document.cookie.split(';').map(cookie => cookie.trim().split('=')[0]));
    for (const name of ['_ga', '_ga_ZMB567ZTWB']) {
      if (!existing.has(name)) continue;
      for (const domain of ['', hostname, 'sigmasound.ro', '.sigmasound.ro']) {
        document.cookie = `${name}=; Path=/; Max-Age=0; SameSite=Lax; Secure${domain ? `; Domain=${domain}` : ''}`;
      }
    }
  } catch {
    // Browsing must still work when cookie access is disabled by the browser.
  }
}
