interface Product {
  readonly id: number;
  title: string;
  description?: string;
}

const product: Product = {
  id: 1,
  title: "Phone",
  description: "IPhone 18 pro",
};

console.log(product);
