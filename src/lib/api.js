export const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
};

export const getSingleProduct  = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
};