// Home page redirects users to the cart as the first checkout step.
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/cart");
}
