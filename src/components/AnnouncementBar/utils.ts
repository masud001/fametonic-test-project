import { decode } from "html-entities";

/**
 * Utility function to strip HTML tags from a string.
 * Decodes HTML entities and removes tags.
 */
export const stripHtml = (html: string): string => {
  const decodedHtml = decode(html); // Decode HTML entities (e.g., &lt;, &gt;)
  return decodedHtml.replace(/<\/?[^>]+(>|$)/g, ""); // Remove HTML tags
};