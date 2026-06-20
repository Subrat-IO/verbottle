export function resolveNavHref(href, pathname = "/") {
  if (!href) {
    return href;
  }

  if (href.startsWith("#")) {
    return pathname === "/" ? href : `/${href}`;
  }

  return href;
}

export function isNavLinkActive(link, pathname = "/") {
  if (pathname !== "/") {
    return false;
  }

  return Boolean(link.active || link.href === "#home");
}
