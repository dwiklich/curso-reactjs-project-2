export async function loadPosts() {
  return await fetch('https://jsonplaceholder.typicode.com/posts').then((r) => r.json());
}
