interface Product {
  readonly id: number;
  title: string;
  description?: string;
}

const usernames: string[] = ["Joe", "John", "Josh"];
const ratings: number[] = [5, 3, 4];
const products: Product[] = [
  { id: 1, title: "PC" },
  { id: 2, title: "Laptop" },
  { id: 3, title: "Phone" },
];

console.log(usernames);
console.log(ratings);
console.log(products);
