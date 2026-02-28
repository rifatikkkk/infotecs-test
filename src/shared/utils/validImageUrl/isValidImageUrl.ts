export const isValidImageUrl = (url: string): boolean => {
  if (!url) return false;

  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
  const hasImageExtension = imageExtensions.some((ext) =>
    url.toLowerCase().endsWith(ext),
  );

  const isValidProtocol =
    url.startsWith("http://") || url.startsWith("https://");

  return isValidProtocol && hasImageExtension;
};
