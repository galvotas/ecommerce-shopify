import { redirect } from "next/navigation";

export async function GET(request: Request) {
  console.log("sakalala");

  redirect("/");
}
