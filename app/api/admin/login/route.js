export async function POST(request) {
  try {
    const { username, password } = await request.json();
    const adminUsername = process.env.ADMIN_USERNAME;
    const adminAltUsername = process.env.ADMIN_ALT_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminUsername || !adminPassword) {
      return Response.json(
        { success: false, message: "Admin login is not configured." },
        { status: 500 },
      );
    }

    const normalizedUsername = String(username || "").trim();
    const normalizedPassword = String(password || "");
    const validUsernames = [adminUsername, adminAltUsername]
      .filter(Boolean)
      .map((value) => String(value).trim());

    if (
      validUsernames.includes(normalizedUsername) &&
      normalizedPassword === adminPassword
    ) {
      return Response.json({ success: true });
    }

    return Response.json(
      { success: false, message: "Invalid login details. Please try again." },
      { status: 401 },
    );
  } catch {
    return Response.json(
      { success: false, message: "Unable to process admin login." },
      { status: 500 },
    );
  }
}
