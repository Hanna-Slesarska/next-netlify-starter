import fs from "fs";
import matter from "gray-matter";


const getPostMetadata = () => {
  const folder = "blog/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`blog/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    
    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
      
    };
  });

  return posts;
};

export default getPostMetadata;