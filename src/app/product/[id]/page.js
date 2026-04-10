import { getSingleProduct } from "@/lib/api";
import Image from "next/image";

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;
  console.log(id);

  const products = await getSingleProduct(id);
  console.log("check", products);
  const { title, description, images, price, category, brand } = products;
  console.log(products);
  return (
    <div className="card card-side bg-base-200 shadow-lg mt-10 p-4 rounded-2xl mx-auto max-w-6xl my-10">
      <div className="flex items-center justify-center">
        <Image src={images?.[0]} alt="" width={400} height={400} className=""/>
      </div>
      <div className="card-body space-y-4 ">
        <h1 className="text-3xl font-bold">{title}</h1>

        <p className="text-gray-500 ">
          Category: <span className="font-medium">{category}</span>
        </p>

        <p className="text-gray-500 mb-4">
          Brand: <span className="font-medium">{brand}</span>
        </p>
        <p className="text-gray-700 mb-6 items-start">{description}</p>

        <h2 className="text-2xl font-semibold text-green-600">${price}</h2>
        <button className="btn btn-success">Order now</button>
     
      </div>
    </div>
  );
}
