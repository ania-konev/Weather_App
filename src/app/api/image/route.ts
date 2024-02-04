import { createApi } from "unsplash-js";
import { Random } from "unsplash-js/dist/methods/photos/types";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const apiKey = process.env.NEXT_PUBLIC_UNIPLASH_KEY as string;
  const unsplash = createApi({
    accessKey: apiKey,
    fetch: fetch,
  });
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("search");

  if (query === null) {
    return new Response(null, { status: 400 });
  }

  const result = await unsplash.photos.getRandom({ query: query, count: 1 }); //await robi value od razu thena w sensie, wycaiga odr azu

  if (result.response === undefined) {
    console.warn("Undefined response from photos api");
    return new Response(null, { status: 404 });
  }
  const resultResponse = result.response as Random[];

  if (resultResponse.length === 0) {
    return new Response(null, { status: 404 });
  }

  const url = resultResponse[0].urls.raw;

  return Response.json(url);
}
