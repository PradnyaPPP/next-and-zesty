function Blog({ posts }) {
    return (
        <>
      <ul>
          <li>{posts.title}</li>
      </ul>
      <div>hello</div>
      </>
    )
  }
  
  // This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const posts = await res.json()
  console.log(posts)
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts
      },
    }
  }

  export default Blog
