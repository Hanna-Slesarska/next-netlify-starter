import fs from "fs"
import Markdown from 'markdown-to-jsx'

const getPostContent = (slug) => {
  const folder = "content/"
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, "utf8")

  return content
}
const PostPage = (props) => {
  const slug = props.params.slug
  const content = getPostContent(slug)
  return (
    <div>
      <h1>This is post: {slug}</h1>
      <Markdown>{content}</Markdown>
    </div>
  )
}

export default PostPage
