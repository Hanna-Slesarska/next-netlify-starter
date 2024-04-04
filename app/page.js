import Head from 'next/head'
//import { attributes, react as HomeContent } from '../content/home.md'
import fs from 'fs'
import Link from 'next/link';


const getPostMetadata = () => {

  const folder = 'blog/';
  const files = fs.readdirSync(folder);
  const markdownPost = files.filter((file) => file.endsWith('.md'));
  const slugs = markdownPost.map((file)=> file.replace('.md', ''));
  return slugs;
  
}

export default function Home() {
 
  const postsData = getPostMetadata();
  const postsPreviews = postsData.map((slug) => (
    <Link href={`/content/${slug}`} key={slug}>
    <div>
      <h2>{slug}</h2>
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
