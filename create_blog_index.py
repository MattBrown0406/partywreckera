#!/usr/bin/env python3

import re
import os

def get_articles_metadata():
    """Extract just the metadata (no content) from all articles"""
    blog_file = '/Users/matthewbrown/.openclaw/workspace-dev/partywreckers/src/pages/Blog.tsx'
    
    with open(blog_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract image imports
    image_imports = []
    lines = content.split('\n')
    for line in lines:
        if 'import' in line and 'from "@/assets/blog-' in line:
            image_imports.append(line.strip())
    
    # Find article IDs in order
    id_pattern = r'id:\s*"([^"]+)"'
    article_ids = re.findall(id_pattern, content)
    
    # Extract metadata for each article
    articles = []
    for article_id in article_ids:
        # Find the article block
        pattern = f'{{\\s*id:\\s*"{re.escape(article_id)}"'
        match = re.search(pattern, content)
        
        if not match:
            continue
        
        start_pos = match.start()
        
        # Find the end by counting braces
        brace_count = 0
        pos = start_pos
        
        while pos < len(content):
            char = content[pos]
            
            if char == '{':
                brace_count += 1
            elif char == '}':
                brace_count -= 1
                if brace_count == 0:
                    end_pos = pos + 1
                    if end_pos < len(content) and content[end_pos] == ',':
                        end_pos += 1
                    break
            
            pos += 1
        
        article_text = content[start_pos:end_pos]
        
        # Parse metadata
        data = {}
        data['id'] = article_id
        
        # Extract title
        title_match = re.search(r'title:\\s*"((?:[^"\\\\]|\\\\.)*)"', article_text)
        if title_match:
            data['title'] = title_match.group(1).replace('\\\\"', '"')
        
        # Extract date
        date_match = re.search(r'date:\\s*"([^"]+)"', article_text)
        if date_match:
            data['date'] = date_match.group(1)
        
        # Extract image variable
        image_match = re.search(r'image:\\s*([^,\\s]+)', article_text)
        if image_match:
            data['image_var'] = image_match.group(1).strip()
        
        # Extract imageAlt
        image_alt_match = re.search(r'imageAlt:\\s*"((?:[^"\\\\]|\\\\.|[\\n\\r])*?)"', article_text, re.DOTALL)
        if image_alt_match:
            data['image_alt'] = image_alt_match.group(1).replace('\\\\"', '"').replace('\\\\n', ' ').strip()
        
        # Extract excerpt
        excerpt_match = re.search(r'excerpt:\\s*"((?:[^"\\\\]|\\\\.|[\\n\\r])*?)"', article_text, re.DOTALL)
        if excerpt_match:
            data['excerpt'] = excerpt_match.group(1).replace('\\\\"', '"').replace('\\\\n', ' ').strip()
        
        if all(key in data for key in ['title', 'date', 'image_var', 'image_alt', 'excerpt']):
            articles.append(data)
    
    return articles, image_imports

def create_blog_index():
    """Create the new blog index page"""
    articles, image_imports = get_articles_metadata()
    
    print(f"Creating blog index with {len(articles)} articles")
    
    # Generate the imports section
    imports_section = "\\n".join(image_imports)
    
    # Generate the articles array
    articles_data = []
    for article in articles:
        article_obj = f'''  {{
    id: "{article['id']}",
    title: "{article['title']}",
    date: "{article['date']}",
    image: {article['image_var']},
    imageAlt: "{article['image_alt']}",
    excerpt: "{article['excerpt']}"
  }}'''
        articles_data.append(article_obj)
    
    articles_array = ",\\n".join(articles_data)
    
    # Create the component
    component_content = f'''import {{ Link }} from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import {{ Card, CardContent }} from "@/components/ui/card";
import {{ BreadcrumbJsonLd, FAQJsonLd }} from "@/components/JsonLd";
{imports_section}

interface BlogArticle {{
  id: string;
  title: string;
  date: string;
  image: string;
  imageAlt: string;
  excerpt: string;
}}

const articles: BlogArticle[] = [
{articles_array}
];

const BlogIndex = () => {{
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Blog - Party Wreckers Podcast"
        description="Expert insights on addiction, family support, boundaries, and recovery. Practical advice for families navigating substance use challenges with compassion and clarity."
        canonical="/blog"
        keywords="addiction blog, family support, enabling vs helping, boundaries, recovery resources, intervention"
      />
      
      <BreadcrumbJsonLd
        items={{[
          {{ name: "Home", item: "https://partywreckers.com" }},
          {{ name: "Blog", item: "https://partywreckers.com/blog" }}
        ]}}
      />
      
      <Navbar />
      
      <main className="container px-4 pt-24 sm:pt-32 pb-12 sm:pb-16">
        <h1 className="font-script text-3xl sm:text-4xl md:text-5xl text-primary mb-8 sm:mb-12 text-center">
          Blog
        </h1>
        
        {{/* Article Cards Grid */}}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {{articles.map((article) => (
            <Link 
              key={{article.id}}
              to={{`/blog/${{article.id}}`}}
              className="group"
            >
              <Card className="cursor-pointer group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={{article.image}} 
                    alt={{article.imageAlt}}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4 sm:p-5">
                  <p className="text-muted-foreground text-xs mb-1 sm:mb-2">{{article.date}}</p>
                  <h2 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {{article.title}}
                  </h2>
                  <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2 sm:line-clamp-3">
                    {{article.excerpt}}
                  </p>
                  <span className="inline-block mt-3 sm:mt-4 text-primary text-sm font-medium group-hover:underline">
                    Read more →
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}};

export default BlogIndex;'''
    
    return component_content

def main():
    content = create_blog_index()
    
    # Write the new blog index file
    output_file = '/Users/matthewbrown/.openclaw/workspace-dev/partywreckers/src/pages/BlogIndex.tsx'
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Created {output_file}")
    print("\\nNow you can:")
    print("1. Update App.tsx to import BlogIndex instead of Blog for the /blog route")
    print("2. Add all the individual blog post routes")
    print("3. Remove the old Blog.tsx file")

if __name__ == "__main__":
    main()