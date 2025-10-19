export type ShareFallbackParams = {
  url?: string;
  title: string;
  text?: string;
};

export async function shareFallback({
  url,
  title,
  text,
}: ShareFallbackParams): Promise<string> {
  if (!url) {
    return "Open this app inside Farcaster to share.";
  }

  if (typeof navigator !== "undefined" && "share" in navigator) {
    try {
      await navigator.share({ title, text, url });
      return "Share dialog opened.";
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return "Share cancelled.";
      }
      // Fall back to clipboard on other errors.
    }
  }

  if (
    typeof navigator !== "undefined" &&
    navigator.clipboard &&
    typeof navigator.clipboard.writeText === "function"
  ) {
    try {
      await navigator.clipboard.writeText(url);
      return "Link copied to clipboard.";
    } catch {
      // Ignore clipboard failures and fall through.
    }
  }

  return "Sharing is unavailable. Copy the URL manually.";
}
