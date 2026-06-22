export function toPublicAssetPath(path) {
  if (!path || !path.startsWith("/")) {
    return path;
  }

  return `/${path
    .slice(1)
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/")}`;
}
