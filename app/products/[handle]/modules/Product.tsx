import { Container } from "@/components/container";
import { FiveStars } from "@/components/rating";
import { useProduct } from "@/hooks/useProduct";
import { Product } from "@/lib/shopify/types";

import { AddToCart } from "@/modules/cart/add-to-cart";
import Image from "next/image";
import { GoBack } from "../components/GoBack";

export const ProductModule = async ({ product }: { product: Product }) => {
  const {
    image,
    title,
    reviews,
    isLowInStock,
    isBestValue,
    isBestSeller,
    isNew,
    description,
    maxPrice,
    minPrice,
  } = useProduct(product);

  return (
    <section>
      <Container>
        <GoBack />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="p-8 bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative w-full h-96">
                <Image
                  src={image}
                  alt="product image"
                  sizes="50vw"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-neutral-500 text-sm mt-4">
              <b>234</b> people viewing this item <b>now</b>.
            </p>
          </div>

          <div>
            <h1 className="mb-2">{title}</h1>
            <p className="text-neutral-500 text-sm">
              Small description about the item.
            </p>
            <div className="border-b-[1px] border-black w-1/2 my-4" />
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <FiveStars />
                <p className="text-sm text-neutral-500">({reviews} reviews)</p>
              </div>

              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full ${
                    isLowInStock
                      ? "bg-orange-500 animate-pulse"
                      : "bg-green-500"
                  }`}
                >
                  {" "}
                </div>
                <p className="text-neutral-500 text-sm">
                  {isLowInStock ? "LOW IN STOCK" : "IN STOCK"}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <p className="text-4xl font-bold">${minPrice}</p>

              <div>
                <p className="text-xl text-green-500 font-bold">
                  FREE SHIPPING
                </p>
                <p className="text-xl text-orange-500 font-bold">
                  + SECRET GIFT
                </p>
              </div>
            </div>

            <div className="bg-neutral-100 rounded-lg p-8 mb-4">
              <h3 className=" mb-4">Description</h3>
              <p className="text-neutral-500 text-sm mb-4">{description} </p>

              <div className="border-b-[1px] border-neutral-200 my-4" />

              <h3 className="mb-4">Benefits</h3>
              <ul className="list-disc px-4 space-y-2">
                <li>
                  <p className="text-neutral-500 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li>
                  <p className="text-neutral-500  text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li>
                  <p className="text-neutral-500 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
              </ul>

              {isBestValue && (
                <>
                  <div className="mt-4" />
                  <span className="bg-purple-500 text-white  px-4 py-2 rounded-full text-sm font-bold">
                    BEST VALUE
                  </span>
                </>
              )}
              {isBestSeller && (
                <>
                  <div className="mt-4" />
                  <span className="bg-orange-500 text-white  px-4 py-2 rounded-full text-sm font-bold">
                    BEST SELLER
                  </span>
                </>
              )}
              {isNew && (
                <>
                  <div className="mt-4" />
                  <span className="bg-green-500 text-white  px-4 py-2 rounded-full text-sm font-bold">
                    NEW ARRIVAL
                  </span>
                </>
              )}
            </div>
            <AddToCart product={product} />
          </div>
        </div>
      </Container>
    </section>
  );
};
