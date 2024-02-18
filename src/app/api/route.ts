import axios from "axios";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("search");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
  console.log(query);
  if (query === null) {
    return new Response(null, { status: 400 });
  }

  const result = await axios.get(url);

  return Response.json(result.data);
}
