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

export function toBackgroundImage(path) {
  const assetPath = toPublicAssetPath(path);

  return assetPath ? `url("${assetPath}")` : undefined;
}
