#!/usr/bin/env python3

import re
import os

def extract_article_ids():
    """Just extract the IDs first to get them all"""
    blog_file = '/Users/matthewbrown/.openclaw/workspace-dev/partywreckers/src/pages/Blog.tsx'
    
    with open(blog_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all article IDs
    id_pattern = r'id:\s*"([^"]+)"'
    ids = re.findall(id_pattern, content)
    
    print(f"Found {len(ids)} article IDs:")
    for i, article_id in enumerate(ids, 1):
        print(f"{i:2d}. {article_id}")
    
    return ids

def extract_specific_article(content, article_id):
    """Extract a specific article by ID"""
    # Find the article start
    pattern = f'{{\\s*id:\\s*"{re.escape(article_id)}"'
    match = re.search(pattern, content)
    
    if not match:
        return None
    
    start_pos = match.start()
    
    # Find the end by counting braces from the article start
    brace_count = 0
    pos = start_pos
    in_content_jsx = False
    
    while pos < len(content):
        char = content[pos]
        
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            if brace_count == 0:
                # Found the end of this article
                end_pos = pos + 1
                # Look for the closing comma
                while end_pos < len(content) and content[end_pos] in ' \n\t':
                    end_pos += 1
                if end_pos < len(content) and content[end_pos] == ',':
                    end_pos += 1
                return content[start_pos:end_pos]
        
        pos += 1
    
    return None

def parse_article_data(article_text):
    """Parse article metadata from the text"""
    data = {}
    
    # Extract ID
    id_match = re.search(r'id:\s*"([^"]+)"', article_text)
    data['id'] = id_match.group(1) if id_match else ''
    
    # Extract title - handle escaped quotes
    title_match = re.search(r'title:\s*"((?:[^"\\]|\\.)*)(?<!\\)"', article_text)
    data['title'] = title_match.group(1).replace('\\"', '"') if title_match else ''
    
    # Extract date
    date_match = re.search(r'date:\s*"([^"]+)"', article_text)
    data['date'] = date_match.group(1) if date_match else ''
    
    # Extract image variable
    image_match = re.search(r'image:\s*([^,\s]+)', article_text)
    data['image_var'] = image_match.group(1).strip() if image_match else ''
    
    # Extract imageAlt - handle multiline and escaped quotes
    image_alt_match = re.search(r'imageAlt:\s*"((?:[^"\\]|\\.|[\n\r])*?)(?<!\\)"', article_text, re.DOTALL)
    data['image_alt'] = image_alt_match.group(1).replace('\\"', '"').replace('\\n', ' ').strip() if image_alt_match else ''
    
    # Extract excerpt - handle multiline and escaped quotes
    excerpt_match = re.search(r'excerpt:\s*"((?:[^"\\]|\\.|[\n\r])*?)(?<!\\)"', article_text, re.DOTALL)
    data['excerpt'] = excerpt_match.group(1).replace('\\"', '"').replace('\\n', ' ').strip() if excerpt_match else ''
    
    # Extract content JSX
    content_match = re.search(r'content:\s*\(\s*(.*?)\s*\),?\s*}', article_text, re.DOTALL)
    data['content'] = content_match.group(1).strip() if content_match else ''
    
    return data

def get_image_imports():
    """Get mapping of image variables to import paths"""
    blog_file = '/Users/matthewbrown/.openclaw/workspace-dev/partywreckers/src/pages/Blog.tsx'
    
    with open(blog_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    image_map = {}
    lines = content.split('\n')
    
    for line in lines:
        if 'import' in line and 'from "@/assets/blog-' in line:
            match = re.search(r'import\s+(\w+)\s+from\s+"([^"]+)"', line.strip())
            if match:
                var_name, path = match.groups()
                image_map[var_name] = path
    
    return image_map

def create_component_name(slug):
    """Convert slug to PascalCase component name"""
    parts = slug.split('-')
    return ''.join(word.capitalize() for word in parts)

def create_blog_post_component(article_data, image_map):
    """Create the React component file content"""
    slug = article_data['id']
    component_name = create_component_name(slug)
    image_var = article_data['image_var']
    image_import = image_map.get(image_var, f'@/assets/blog-{slug}.jpg')
    
    # Clean up description for SEO (remove quotes, limit length)
    description = article_data['excerpt'].replace('"', "'")
    if len(description) > 150:
        description = description[:150].rsplit(' ', 1)[0] + '...'
    
    template = f'''import {{ Link }} from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import {{ ArrowLeft }} from "lucide-react";
import {image_var} from "{image_import}";

const {component_name} = () => {{
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="{article_data['title']} - Party Wreckers Podcast"
        description="{description}"
        canonical="/blog/{slug}"
        ogType="article"
        ogImage={{{image_var}}}
        keywords="addiction, family support, boundaries, communication, recovery"
        publishedTime="{article_data['date']}"
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
            src={{{image_var}}} 
            alt="{article_data['image_alt']}"
            className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg mb-6"
          />
          <p className="text-muted-foreground text-sm mb-2">{article_data['date']}</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
            {article_data['title']}
          </h1>
        </header>

        {{/* Article Content */}}
        <article className="prose prose-lg max-w-none text-foreground/90 space-y-6">
          {article_data['content']}
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
    
    return template

def main():
    blog_file = '/Users/matthewbrown/.openclaw/workspace-dev/partywreckers/src/pages/Blog.tsx'
    output_dir = '/Users/matthewbrown/.openclaw/workspace-dev/partywreckers/src/pages/blog'
    
    # Create output directory
    os.makedirs(output_dir, exist_ok=True)
    
    # Read the blog file
    with open(blog_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Get article IDs and image mapping
    article_ids = extract_article_ids()
    image_map = get_image_imports()
    
    print(f"\\nFound {len(image_map)} image imports")
    
    # Process each article
    created_files = []
    
    for article_id in article_ids:
        try:
            # Extract the article text
            article_text = extract_specific_article(content, article_id)
            if not article_text:
                print(f"Could not extract article: {article_id}")
                continue
            
            # Parse the article data
            article_data = parse_article_data(article_text)
            if not article_data['title']:
                print(f"Could not parse article data: {article_id}")
                continue
            
            # Create the component file
            component_content = create_blog_post_component(article_data, image_map)
            
            # Write to file
            filename = f"{article_id}.tsx"
            filepath = os.path.join(output_dir, filename)
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(component_content)
            
            component_name = create_component_name(article_id)
            created_files.append((component_name, article_id, article_data['title']))
            
            print(f"Created: {filename}")
            
        except Exception as e:
            print(f"Error processing {article_id}: {e}")
            import traceback
            traceback.print_exc()
    
    print(f"\\nSuccessfully created {len(created_files)} blog post files")
    
    # Output routing info
    print("\\n" + "="*50)
    print("ROUTING INFORMATION")
    print("="*50)
    
    print("\\nImports to add to App.tsx:")
    for component_name, slug, title in sorted(created_files):
        print(f'import {component_name} from "./pages/blog/{slug}";')
    
    print("\\nRoutes to add to App.tsx:")
    for component_name, slug, title in sorted(created_files):
        print(f'<Route path="/blog/{slug}" element={{<{component_name} />}} />')

if __name__ == "__main__":
    main()