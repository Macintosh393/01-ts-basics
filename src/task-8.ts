import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>("https://api.example.com/posts");
  return response.data;
}

fetchPosts().then((result) => console.log(result[0].title));
