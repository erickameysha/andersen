class DataHandler {
  constructor() {
    this.posts = new Map();
  }
  async fetchPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    data.forEach((element) => {
      this.posts.set(element.id, element);
    });
    return data;
  }
  getAllPosts() {
    return [...this.posts.values()];
  }
  getPosts(id) {
    if (this.posts.has(id)) {
      return this.posts.get(1);
    } else {
      return "Wrong id";
    }
  }
  listPosts() {
    return [...this.posts.values()].sort((a, b) =>
      a.title.localeCompare(b.title),
    );
  }
  clearPosts() {
    this.posts.clear();
  }
}
const posts = new DataHandler();

posts
  .fetchPosts()
  .then(() => {
    const getFistPost = posts.getPosts(1);
     console.log("Posts before clear, " + posts.getAllPosts().length)
    console.log("get first post ", getFistPost);
    const postsList = posts.listPosts();
    console.log(postsList.slice(0, 3));
    posts.clearPosts();
    console.log("Posts after clear, " + posts.getAllPosts().length);
  })
  .catch((error) => {
    console.log(error);
  });
