import Head from 'next/head'
//import { attributes, react as HomeContent } from '../content/home.md'
import fs from 'fs'
import Link from 'next/link';
import matter from "gray-matter"


const getPostMetadata = ()  => {

  const folder = 'blog/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));
  
  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`blog/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      thumbnail: matterResult.data.thumbnail,
      slug: fileName.replace(".md", ""),
    };
  });
  return posts;
}

export default function Home() {
 
  const postsData = getPostMetadata();
  const postsPreviews = postsData.map((post) => (
    <Link href={`/blog/${post.slug}`} key={post}>
    <div>
      <h2>{post.title}</h2>
    </div>
    </Link>
    
  ))
  return (
    <div className="container">
      <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <div>{postsPreviews}</div>
       
        {/* <article>
         <h1>{title}</h1>
            <HomeContent />
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
     */}
    </div>
  )
}
