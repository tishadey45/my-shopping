// import { getSingleProduct } from "@/lib/api";
// import Image from "next/image";

// export default async function ProductDetailsPage({ params }) {
//   // const products = await getSingleProduct({params.id});

//   return (
//      <div className="p-10">
//       {/* <Image src={product.image} className="w-64" /> */}
//       <h1 className="text-2xl font-bold">title</h1>
//       <p>hello</p>

//       <button className="btn btn-success mt-4">
//         Buy Now
//       </button>
//     </div>
//   );
// }

export default function DetailsProductPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-6">This is Details Product Page</h1>
    </div>
  );
}