import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Blog | The Party Wreckers Podcast</title>
        <meta name="description" content="Articles and insights on addiction, intervention, recovery, and family support from The Party Wreckers Podcast." />
      </Helmet>
      <Navbar />
      
      <main className="container px-4 py-16">
        <h1 className="font-script text-4xl md:text-5xl text-primary mb-8 text-center">
          Blog
        </h1>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground text-lg mb-8">
            Articles and insights on addiction, intervention, and recovery coming soon.
          </p>
          
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Stay Tuned
            </h2>
            <p className="text-muted-foreground">
              We're working on bringing you valuable content about navigating addiction, 
              supporting loved ones, and the journey to recovery. Check back soon for 
              articles, resources, and stories of hope.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
