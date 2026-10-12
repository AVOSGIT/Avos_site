/**
 * Antispam contact utilities for email obfuscation.
 * Prevents automated scraping bots from harvesting email addresses from static HTML.
 */

export const CONTACT_USER = "contact";
export const CONTACT_DOMAIN = "avosiot.com";
export const CONTACT_DISPLAY = "contact [at] avosiot [dot] com";

/** Dynamically reconstructs the email address in memory at runtime */
export function getContactEmail(): string {
  return `${CONTACT_USER}@${CONTACT_DOMAIN}`;
}

/** Generates mailto URI dynamically */
export function getMailtoUrl(subject?: string): string {
  const email = getContactEmail();
  return subject
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${email}`;
}

/** Opens the default mail client when a human user interacts */
export function openContactMail(subject?: string): void {
  if (typeof window !== "undefined") {
    window.location.href = getMailtoUrl(subject);
  }
}

