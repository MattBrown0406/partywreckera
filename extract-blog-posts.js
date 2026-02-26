#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the Blog.tsx file
const blogPath = './src/pages/Blog.tsx';
const blogContent = fs.readFileSync(blogPath, 'utf8');

// Extract the articles array
const articlesStart = blogContent.indexOf('const articles: BlogArticle[] = [');
const articlesEnd = blogContent.indexOf('];', articlesStart) + 2;
const articlesSection = blogContent.substring(articlesStart, articlesEnd);

// Extract import statements for images
const importLines = blogContent
  .split('\n')
  .filter(line => line.includes('import') && line.includes('from "@/assets/'))
  .join('\n');

// Parse articles manually since it's complex JSX
// Let's split by article boundaries
const articleBoundaries = [];
let currentPos = 0;
let openBraces = 0;
let inArticle = false;

// Find each article object
const lines = articlesSection.split('\n');
const articles = [];
let currentArticle = '';
let braceCount = 0;
let inContent = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (line.trim() === '{' && !inContent) {
    // Start of new article
    if (currentArticle.length > 0) {
      articles.push(currentArticle + '}');
    }
    currentArticle = '{\n';
    braceCount = 1;
    inContent = false;
  } else if (line.includes('content: (')) {
    inContent = true;
    currentArticle += line + '\n';
  } else if (inContent) {
    // Count braces to find end of content
    const openBraces = (line.match(/\(/g) || []).length + (line.match(/\{/g) || []).length;
    const closeBraces = (line.match(/\)/g) || []).length + (line.match(/\}/g) || []).length;
    braceCount += openBraces - closeBraces;
    
    currentArticle += line + '\n';
    
    if (braceCount <= 1 && line.includes(')')) {
      inContent = false;
    }
  } else if (currentArticle.length > 0) {
    currentArticle += line + '\n';
  }
}

// Add the last article
if (currentArticle.length > 0) {
  articles.push(currentArticle + '}');
}

console.log(`Found ${articles.length} articles to process`);

// Since the parsing is complex, let's use a different approach
// Let's use regex to find each article block
const articleRegex = /\{\s*id: "([^"]+)",\s*title: "([^"]+)",\s*date: "([^"]+)",\s*image: ([^,]+),\s*imageAlt: "([^"]+)",\s*excerpt: "([^"]+)",\s*content: \(\s*([\s\S]*?)\s*\)\s*\}/g;

const extractedArticles = [];
let match;

while ((match = articleRegex.exec(articlesSection)) !== null) {
  extractedArticles.push({
    id: match[1],
    title: match[2], 
    date: match[3],
    image: match[4].trim(),
    imageAlt: match[5],
    excerpt: match[6],
    content: match[7]
  });
}

console.log(`Regex found ${extractedArticles.length} articles`);

// Let's try a simpler approach - extract by splitting on article boundaries
// This is getting complex, so let's just manually identify the pattern and extract properly
console.log('Complex extraction needed - using manual approach');