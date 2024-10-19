// import { Container } from "@/components/container";
// import { Product } from "@/components/Product";
// import { getProductRecommendations } from "@/lib/shopify";

// export const RecommendedProducts = async ({
//   productId,
// }: {
//   productId: string;
// }) => {
//   const products = await getProductRecommendations(productId);

//   console.log(products);

//   return (
//     <section>
//       <Container>
//         <h2 className="text-2xl font-bold">You may also like</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {products.map((product) => (
//             <Product key={product.id} product={product} />
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// };
