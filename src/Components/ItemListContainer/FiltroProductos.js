const getProductsByCategory = async (categoryId, productos) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.filter((p) => p.category === categoryId));
    }, 500);
  });
};

export default getProductsByCategory;
