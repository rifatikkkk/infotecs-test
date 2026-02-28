export const isValidImageUrl = (url: string): boolean => {
  if (!url) return false;

  const isValidProtocol =
    url.startsWith("http://") || url.startsWith("https://");
  if (!isValidProtocol) return false;

  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
  const hasImageExtension = imageExtensions.some((ext) =>
    url.toLowerCase().endsWith(ext),
  );

  const imageDomains = [
    "github.com",
    "avatars.githubusercontent.com",
    "googleusercontent.com",
  ];

  const isFromImageDomain = imageDomains.some((domain) =>
    url.toLowerCase().includes(domain),
  );

  return hasImageExtension || isFromImageDomain;
};
