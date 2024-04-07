import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";
import Head from 'next/head'

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div>
<Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>

    </div>
    
  );
};

export default HomePage;
      
       