export function validateDomain(domain: string): void {
  // RFC 1123 allows DNS labels to start with a digit. Reject an IPv4-style
  // final label so the input is still a hostname. SEP-0002 allows a port.
  if (
    /(?:^|\.)(?:\d+|0x[\da-f]*)(?::\d+)?$/i.test(domain) ||
    !/^(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)*[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?::\d+)?$/.test(
      domain,
    )
  ) {
    throw new Error(
      "The provided domain is invalid. Ensure that the domain adheres to RFC 1123",
    );
  }
}

/**
 * Checks a `FEDERATION_SERVER` URL that comes from a `stellar.toml` file. It
 * rejects a scheme other than `http:` and `https:`, and a user name or
 * password. It does not check the host: the toml author picks the name, and
 * any name can resolve to a private address, so the app must filter hosts.
 */
export function validateFederationServer(url: URL): void {
  let reason: string | undefined;
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    reason = `Unsupported protocol ${url.protocol}`;
  } else if (url.username || url.password) {
    reason = "The URL must not contain a user name or password.";
  }
  if (reason) {
    throw new Error(
      `Invalid FEDERATION_SERVER: ${JSON.stringify(url.href)}. ${reason}`,
    );
  }
}
