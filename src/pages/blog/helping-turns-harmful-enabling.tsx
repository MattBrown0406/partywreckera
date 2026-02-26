import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { ArrowLeft } from "lucide-react";
import blogImageHelpingVsEnabling from "@/assets/blog-helping-vs-enabling.jpg";

const HelpingTurnsHarmfulEnabling = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="When Helping Turns Harmful: How Enabling Develops Without Intent - Party Wreckers Podcast"
        description="Most families do not set out to enable addiction. Enabling grows slowly, rooted in fear, love, and exhaustion. Understanding how it develops can help..."
        canonical="/blog/helping-turns-harmful-enabling"
        ogType="article"
        ogImage={blogImageHelpingVsEnabling}
        keywords="addiction, family support, boundaries, communication, recovery"
        publishedTime="December 21, 2025"
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
            src={blogImageHelpingVsEnabling} 
            alt="Hands reaching out symbolizing the tension between helping and enabling in addiction recovery"
            className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg mb-6"
          />
          <p className="text-muted-foreground text-sm mb-2">December 21, 2025</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
            When Helping Turns Harmful: How Enabling Develops Without Intent
          </h1>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none text-foreground/90 space-y-6">
          <div className="prose prose-lg max-w-none text-foreground/90 space-y-6">
        <p>
          Most families do not set out to enable addiction. Enabling grows slowly, rooted in fear, love, and exhaustion.
        </p>
        
        <p>
          Understanding how it develops can help families change course without shame.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Enabling Begins With Survival</h3>
        
        <p>In the face of addiction, families often adapt by:</p>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>Managing crises</li>
          <li>Preventing fallout</li>
          <li>Soothing conflict</li>
          <li>Keeping things "normal"</li>
        </ul>
        
        <p>
          These strategies help in the short term, but over time they remove natural consequences and reinforce the addiction cycle.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Common Enabling Behaviors</h3>
        
        <p>Enabling may include:</p>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>Financial support without accountability</li>
          <li>Making excuses for behavior</li>
          <li>Shielding from legal or professional consequences</li>
          <li>Avoiding difficult conversations</li>
          <li>Taking on responsibilities the addicted person avoids</li>
        </ul>
        
        <p>
          Each action may feel compassionate. Together, they create a system where addiction remains protected.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Why Enabling Is So Hard to Stop</h3>
        
        <p>Families fear that stopping help will lead to:</p>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>Harm</li>
          <li>Escalation</li>
          <li>Rejection</li>
          <li>Guilt</li>
        </ul>
        
        <p>
          These fears are real—but continuing to enable often creates deeper harm over time.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">The Difference Between Support and Protection</h3>
        
        <p>
          <strong>Support</strong> helps recovery grow.<br/>
          <strong>Protection</strong> helps addiction survive.
        </p>
        
        <p>Support looks like:</p>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>Encouraging treatment and counseling</li>
          <li>Maintaining boundaries</li>
          <li>Being honest about impact</li>
          <li>Refusing to lie or cover</li>
        </ul>
        
        <p>Protection looks like rescuing from discomfort.</p>
        
        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Replacing Enabling With Boundaries</h3>
        
        <p>
          Boundaries clarify what families will and will not participate in. They are not ultimatums unless enforced.
        </p>
        
        <p>Effective boundaries:</p>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>Are specific</li>
          <li>Focus on family behavior</li>
          <li>Are communicated calmly</li>
          <li>Are consistently upheld</li>
        </ul>
        
        <p>
          Boundaries create conditions where change becomes necessary.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Letting Reality Do Its Work</h3>
        
        <p>
          Families are often more exhausted than the addicted person. Stepping back allows reality to replace family management.
        </p>
        
        <p>
          <strong>Stopping enabling is not abandonment—it is often the most loving step available.</strong>
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

export default HelpingTurnsHarmfulEnabling;