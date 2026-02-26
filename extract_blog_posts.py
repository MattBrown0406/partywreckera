#!/usr/bin/env python3

import re
import os
import sys
from pathlib import Path

def extract_articles_from_blog(blog_file_path):
    """Extract all blog articles from Blog.tsx"""
    with open(blog_file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Find the articles array section
    articles_start = content.find('const articles: BlogArticle[] = [')
    articles_end = content.find('];', articles_start)
    articles_section = content[articles_start:articles_end]
    
    # Extract import statements for blog images
    import_lines = []
    lines = content.split('\n')
    for line in lines:
        if 'import' in line and 'from "@/assets/blog-' in line:
            import_lines.append(line.strip())
    
    # Create mapping of image variables to import paths
    image_map = {}
    for line in import_lines:
        if 'import' in line and 'from' in line:
            # Parse: import blogImageBlameShifting from "@/assets/blog-blame-shifting-addiction.jpg";
            match = re.search(r'import (\w+) from "([^"]+)"', line)
            if match:
                var_name, path = match.groups()
                image_map[var_name] = path
    
    print(f"Found {len(image_map)} image imports")
    
    # Parse articles manually by finding article boundaries
    articles = []
    
    # Split on article object boundaries - look for opening braces followed by id:
    # This is a complex parse, let's use a different approach
    
    # Find each article by looking for the pattern: {\n    id: "..."
    pattern = r'\{\s*id:\s*"([^"]+)",\s*title:\s*"([^"]*(?:"[^"]*"[^"]*)*)",\s*date:\s*"([^"]+)",\s*image:\s*([^,]+),\s*imageAlt:\s*"([^"]*(?:"[^"]*"[^"]*)*)",\s*excerpt:\s*"([^"]*(?:"[^"]*"[^"]*)*)"'
    
    # Instead, let's find each article block by looking for the opening/closing braces
    article_blocks = []
    lines = articles_section.split('\n')
    
    current_article = []
    brace_count = 0
    in_article = False
    in_content = False
    paren_count = 0
    
    for i, line in enumerate(lines):
        if re.match(r'\s*\{$', line) and not in_article and 'articles' not in line:
            # Start of new article
            in_article = True
            brace_count = 1
            current_article = [line]
        elif in_article:
            current_article.append(line)
            
            # Track content section specially
            if 'content: (' in line:
                in_content = True
                paren_count = line.count('(') - line.count(')')
            elif in_content:
                paren_count += line.count('(') - line.count(')')
                if paren_count <= 0 and '),' in line:
                    in_content = False
            
            # Track braces for article boundary
            if not in_content:
                brace_count += line.count('{') - line.count('}')
                
            if brace_count == 0 and line.strip().endswith('},'):
                # End of article
                article_blocks.append('\n'.join(current_article))
                current_article = []
                in_article = False
                in_content = False
                paren_count = 0
    
    # Parse each article block to extract metadata
    for block in article_blocks:
        try:
            # Extract id
            id_match = re.search(r'id:\s*"([^"]+)"', block)
            if not id_match:
                continue
            article_id = id_match.group(1)
            
            # Extract title (handle quotes in title)
            title_match = re.search(r'title:\s*"([^"]*(?:\\.[^"]*)*)"', block)
            if not title_match:
                continue
            title = title_match.group(1).replace('\\"', '"')
            
            # Extract date
            date_match = re.search(r'date:\s*"([^"]+)"', block)
            if not date_match:
                continue
            date = date_match.group(1)
            
            # Extract image variable
            image_match = re.search(r'image:\s*([^,\s]+)', block)
            if not image_match:
                continue
            image_var = image_match.group(1).strip()
            
            # Extract imageAlt
            image_alt_match = re.search(r'imageAlt:\s*"([^"]*(?:\\.[^"]*)*)"', block, re.DOTALL)
            if not image_alt_match:
                continue
            image_alt = image_alt_match.group(1).replace('\\"', '"')
            
            # Extract excerpt
            excerpt_match = re.search(r'excerpt:\s*"([^"]*(?:\\.[^"]*)*)"', block, re.DOTALL)
            if not excerpt_match:
                continue
            excerpt = excerpt_match.group(1).replace('\\"', '"')
            
            # Extract content (everything between content: ( and ),)
            content_match = re.search(r'content:\s*\(\s*(.*?)\s*\),?\s*$', block, re.DOTALL)
            if not content_match:
                continue
            content = content_match.group(1)
            
            # Get image import path
            image_import = image_map.get(image_var, f'@/assets/blog-{article_id}.jpg')
            
            articles.append({
                'id': article_id,
                'title': title,
                'date': date,
                'image_var': image_var,
                'image_import': image_import,
                'image_alt': image_alt,
                'excerpt': excerpt,
                'content': content
            })
            
            print(f"Extracted: {article_id}")
            
        except Exception as e:
            print(f"Error parsing article block: {e}")
            print(f"Block preview: {block[:200]}...")
            continue
    
    return articles

def slugify(text):
    """Convert title to kebab-case slug"""
    # Remove quotes and special chars, convert to lowercase, replace spaces with hyphens
    slug = re.sub(r'[^\w\s-]', '', text.lower())
    slug = re.sub(r'[-\s]+', '-', slug)
    return slug.strip('-')

def create_component_name(slug):
    """Convert slug to PascalCase component name"""
    parts = slug.split('-')
    return ''.join(word.capitalize() for word in parts)

def create_blog_post_file(article, output_dir):
    """Create individual blog post component file"""
    slug = article['id']  # Already in correct format
    component_name = create_component_name(slug)
    
    # Create the component file content
    content = f'''import {{ Link }} from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import {{ ArrowLeft }} from "lucide-react";
import {article['image_var']} from "{article['image_import']}";

const {component_name} = () => {{
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="{article['title']} - Party Wreckers Podcast"
        description="{article['excerpt'][:150]}..."
        canonical="/blog/{slug}"
        ogType="article"
        ogImage={{{article['image_var']}}}
        keywords="addiction, family support, boundaries, communication, recovery"
        publishedTime="{article['date']}"
      />
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {{/* Back to Blog Link */}}
        <Link 
          to="/blog" 
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {{/* Article Header */}}
        <header className="mb-8">
          <img 
            src={{{article['image_var']}}} 
            alt="{article['image_alt']}"
            className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg mb-6"
          />
          <p className="text-muted-foreground text-sm mb-2">{article['date']}</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
            {article['title']}
          </h1>
        </header>

        {{/* Article Content */}}
        <article className="prose prose-lg max-w-none text-foreground/90 space-y-6">
          {article['content']}
        </article>

        {{/* Back to Blog Link (bottom) */}}
        <div className="mt-12 pt-8 border-t">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}};

export default {component_name};'''

    # Write the file
    file_path = os.path.join(output_dir, f"{slug}.tsx")
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Created: {file_path}")
    return component_name, slug

def main():
    blog_file = '/Users/matthewbrown/.openclaw/workspace-dev/partywreckers/src/pages/Blog.tsx'
    output_dir = '/Users/matthewbrown/.openclaw/workspace-dev/partywreckers/src/pages/blog'
    
    # Create output directory
    os.makedirs(output_dir, exist_ok=True)
    
    print("Extracting articles from Blog.tsx...")
    articles = extract_articles_from_blog(blog_file)
    
    print(f"\\nFound {len(articles)} articles to process")
    
    # Create individual files
    components = []
    for article in articles:
        try:
            component_name, slug = create_blog_post_file(article, output_dir)
            components.append((component_name, slug, article['title']))
        except Exception as e:
            print(f"Error creating file for {article['id']}: {e}")
    
    print(f"\\nSuccessfully created {len(components)} blog post files")
    
    # Print summary for routing updates
    print("\\nComponent imports needed for routing:")
    for component_name, slug, title in sorted(components, key=lambda x: x[1]):
        print(f'import {component_name} from "./pages/blog/{slug}";')
    
    print("\\nRoutes to add:")
    for component_name, slug, title in sorted(components, key=lambda x: x[1]):
        print(f'<Route path="/blog/{slug}" element={{<{component_name} />}} />')

if __name__ == "__main__":
    main()