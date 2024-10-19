import imageFragment from "./image";
import seoFragment from "./seo";

// const productFragment = /* GraphQL */ `
//   fragment product on Product {
//     id
//     handle
//     availableForSale
//     title
//     description
//     descriptionHtml
//     options {
//       id
//       name
//       values
//     }
//     priceRange {
//       maxVariantPrice {
//         amount
//         currencyCode
//       }
//       minVariantPrice {
//         amount
//         currencyCode
//       }
//     }

//     variants(first: 250) {
//       edges {
//         node {
//           id
//           title
//           availableForSale
//           selectedOptions {
//             name
//             value
//           }
//           price {
//             amount
//             currencyCode
//           }
//         }
//       }
//     }
//     featuredImage {
//       ...image
//     }
//     images(first: 20) {
//       edges {
//         node {
//           ...image
//         }
//       }
//     }
//     seo {
//       ...seo
//     }
//     tags
//     updatedAt
//   }
//   ${imageFragment}
//   ${seoFragment}
// `;

const productFragment = /* GraphQL */ `
  fragment product on Product {
    id
    handle
    availableForSale
    title
    description
    descriptionHtml
    options {
      id
      name
      values
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 250) {
      edges {
        node {
          id
          title
          availableForSale
          selectedOptions {
            name
            value
          }
          price {
            amount
            currencyCode
          }
        }
      }
    }
    featuredImage {
      ...image
    }
    images(first: 20) {
      edges {
        node {
          ...image
        }
      }
    }
    seo {
      ...seo
    }
    tags
    updatedAt
    rating: metafield(namespace: "custom", key: "rating") {
      id
      key
      value
    }
    reviewCount: metafield(namespace: "custom", key: "review_count") {
      id
      key
      value
    }
    productDefinition: metafield(
      namespace: "custom"
      key: "product_definition"
    ) {
      id
      key
      value
    }
    secretGift: metafield(namespace: "custom", key: "secret_gift") {
      id
      key
      value
    }
    lowInStock: metafield(namespace: "custom", key: "low_in_stock") {
      id
      key
      value
    }
  }
  ${imageFragment}
  ${seoFragment}
`;
export default productFragment;
