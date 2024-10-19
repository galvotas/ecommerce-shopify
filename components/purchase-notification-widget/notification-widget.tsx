import { getProducts } from "@/lib/shopify";
import ClientPurchaseNotification from "./client-notification-widget";

export default async function PurchaseNotificationWidget() {
  const products = await getProducts({});

  return <ClientPurchaseNotification products={products} />;
}
