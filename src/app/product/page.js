import ProductCard from "@/components/productCard";
import { getProducts } from "@/lib/api";

export default async function ProductPage() {
  const response = await getProducts();
  // console.log(response);
  const products = response.products; 
  // console.log(products); 
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {products.slice(0, 9).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}



 
