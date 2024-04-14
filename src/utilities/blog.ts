import fs from "fs";
import path from "path";

type T_BlogMetadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

const parseFrontmatter = (fileContent: string) => {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata: Partial<T_BlogMetadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    const value = valueArr
      .join(": ")
      .trim()
      .replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof T_BlogMetadata] = value;
  });

  return { metadata: metadata as T_BlogMetadata, content };
};

const getMDXFiles = (dir: string) => {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
};

const readMDXFile = (filePath: string) => {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
};

const extractTweetIds = (content: string) => {
  const tweetMatches = content.match(/<StaticTweet\sid="[0-9]+"\s\/>/g);
  return tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)![0]) || [];
};

const getMDXData = (dir: string) => {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    const tweetIds = extractTweetIds(content);
    return {
      metadata,
      slug,
      tweetIds,
      content,
    };
  });
};

export type T_MDXData = ReturnType<typeof getMDXData>[0];

export const getBlogPosts = () => {
  const contentDir = path.join(process.cwd(), "src", "content");
  return getMDXData(contentDir);
};
