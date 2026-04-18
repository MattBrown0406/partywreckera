import { useParams, Navigate } from "react-router-dom";
import type { ComponentType } from "react";
import { findArticleBySlug } from "@/data/blogData";

const blogModules = import.meta.glob("./blog/*.tsx", { eager: true }) as Record<
  string,
  { default: ComponentType }
>;

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  // Check if the article exists in our data
  const article = findArticleBySlug(slug);
  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const Component = blogModules[`./blog/${slug}.tsx`]?.default;
  if (!Component) {
    return <Navigate to="/blog" replace />;
  }

  return <Component />;
};

export default BlogPost;
