import { MetaTags } from '@redwoodjs/web'
import BlogPostsCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Friday" description="Home page" />

      <h1>Friday</h1>
      <p>Woot!</p>
      <BlogPostsCell />
    </>
  )
}

export default HomePage
