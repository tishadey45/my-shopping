import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  const { title, description, images } = product;


  console.log(images[0]);
  // const image = images?.[0];
  return ( 
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <Image src={images?.[0]} alt="" width={300} height={300} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <Link href={`/product/${product.id}`}>
          <button className="btn btn-primary">View Details</button>
        </Link>
      </div>
    </div>
  );
}


