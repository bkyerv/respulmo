import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPosts(fields = []) {
  const slugs = fs.readdirSync(postsDirectory);
  const allPosts = slugs
    .map((s) => getPostBySlug(s, fields))
    .sort((p1, p2) => (p1.date > p2.date ? -1 : 1));

  return allPosts;
}

export function getPostBySlug(slug, fields = []) {
  const fullPath = path.join(postsDirectory, `${slug}`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const items = {};

  fields.forEach((f) => {
    if (f === "slug") {
      items[f] = slug;
    }
    if (f === "content") {
      items[f] = content;
    }
    if (data[f]) {
      items[f] = data[f];
    }
  });

  return items;
}

export function getPostContent() {
  console.log("yo");
}
