import { Box, Container } from "@chakra-ui/react";
import Posts from "../Posts/Posts";

const Home = () => {
  return (
    <Container maxW={"container.lg"}>
      <Box flex={2} py={10} border="2px">
        <Posts />
      </Box>
    </Container>
  );
};
/*
function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = () => {
    console.log(logo);
    const post: Post = {
      id: 1,
      caption: "test",
      imgUrl: "test img",
    };
    setPosts([...posts, post]);
  };

  const deletePost = (id: number) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  return (
    <>
      <Grid
        h="350px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
        {posts.map((post, index) => (
          <GridItem key={index} colSpan={1} bg="white">
            <div>
              <img src={post.imgUrl} alt={post.caption} />
              <p>{post.caption}</p>
              <button onClick={() => deletePost(post.id)}>Delete</button>
            </div>
          </GridItem>
        ))}
      </Grid>
    </>
  );
}*/
export default Home;
