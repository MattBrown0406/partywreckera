import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { ArrowLeft } from "lucide-react";
import blogImageDepressionAddiction from "@/assets/blog-depression-addiction.jpg";

const DepressionAndAddiction = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Depression and Addiction—How Each Fuels the Other - Party Wreckers Podcast"
        description="Depression and addiction frequently coexist, creating a cycle that is difficult to break. Families often struggle to understand which came first—and..."
        canonical="/blog/depression-and-addiction"
        ogType="article"
        ogImage={blogImageDepressionAddiction}
        keywords="addiction, family support, boundaries, communication, recovery"
        publishedTime="December 15, 2025"
      />
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back to Blog Link */}
        <Link 
          to="/blog" 
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <img 
            src={blogImageDepressionAddiction} 
            alt="Silhouette of person sitting by rainy window, reflecting isolation and contemplation"
            className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg mb-6"
          />
          <p className="text-muted-foreground text-sm mb-2">December 15, 2025</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Depression and Addiction—How Each Fuels the Other
          </h1>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none text-foreground/90 space-y-6">
          <div className="prose prose-lg max-w-none text-foreground/90 space-y-6">
        <p>
          Depression and addiction frequently coexist, creating a cycle that is difficult to break. Families often struggle to understand which came first—and how to address both.
        </p>
        
        <p>
          In practice, the order matters less than recognizing that untreated depression significantly undermines recovery.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">How Depression Increases Addiction Risk</h3>
        
        <p>
          Depression can bring:
        </p>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>Hopelessness</li>
          <li>Emotional numbness</li>
          <li>Fatigue</li>
          <li>Low motivation</li>
          <li>Suicidal thinking</li>
        </ul>
        
        <p>
          Substances may initially feel like relief, offering temporary escape or emotional blunting. Over time, however, substance use worsens depressive symptoms.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">How Addiction Deepens Depression</h3>
        
        <p>
          Chronic substance use disrupts brain chemistry, sleep, relationships, and self-esteem. Shame and regret accumulate. The result is often deeper, more persistent depression.
        </p>
        
        <p>
          When depression is dismissed as "just part of addiction," individuals are left without tools to manage their internal distress.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Why Treating Addiction Alone Is Not Enough</h3>
        
        <p>
          If depression remains untreated, sobriety can feel empty, overwhelming, or pointless. This dramatically increases relapse risk.
        </p>
        
        <p>
          Effective recovery requires:
        </p>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>Proper mental health assessment</li>
          <li>Therapy that addresses mood and thinking patterns</li>
          <li>Ongoing emotional support</li>
          <li>Clear relapse-prevention planning</li>
        </ul>
        
        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">What Families Should Watch For</h3>
        
        <p>
          Warning signs that depression is driving addiction include:
        </p>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>Persistent hopelessness after stopping substances</li>
          <li>Social withdrawal</li>
          <li>Lack of pleasure or motivation</li>
          <li>Statements of worthlessness</li>
        </ul>
        
        <p>
          When depression is addressed alongside addiction, recovery becomes more stable and sustainable.
        </p>
      </div>
        </article>

        {/* Back to Blog Link (bottom) */}
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
};

export default DepressionAndAddiction;