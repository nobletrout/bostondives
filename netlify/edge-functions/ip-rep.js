import { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  const BLOCKED_COUNTRY_CODE = "GB";
  const countryCode = context.geo?.country?.code || "US";
  const countryName = context.geo?.country?.name || "United States of America";

  if (countryCode === BLOCKED_COUNTRY_CODE) {
    return new Response(`We're sorry, you can't access our content from ${countryName}!`, {
      headers: { "content-type": "text/html" },
      status: 451,
    });
  }

  return new Response(`Hello there! You can freely access our content from ${countryName}!`, {
    headers: { "content-type": "text/html" },
  });
};