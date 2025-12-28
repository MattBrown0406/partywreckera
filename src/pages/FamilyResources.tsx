import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Heart, 
  BookOpen, 
  Users, 
  Phone, 
  MessageCircle, 
  Shield, 
  ExternalLink,
  Headphones,
  FileText,
  Video,
  AlertCircle,
  CheckCircle,
  Clock,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";

const FamilyResources = () => {
  return (
    <>
      <Helmet>
        <title>Family Resources | The Party Wreckers Podcast</title>
        <meta name="description" content="Resources for families dealing with addiction. Find support groups, educational materials, crisis hotlines, and guidance for helping your loved one." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-background pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30" />
          
          <div className="container px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground uppercase tracking-widest">Support for Families</span>
              </div>
              
              <h1 className="font-script text-5xl sm:text-6xl text-burgundy mb-6">
                Family Resources
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground">
                You're not alone in this journey. Find the support, education, and guidance 
                your family needs to navigate addiction together.
              </p>
            </div>
          </div>
        </section>

        {/* Crisis Resources */}
        <section className="py-16 sm:py-20">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <div className="relative bg-gradient-to-br from-red-900/20 via-rose-900/10 to-background border-2 border-red-600/30 rounded-2xl overflow-hidden p-8 sm:p-10 mb-12">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute -top-20 -right-20 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
                </div>
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-red-400" />
                    </div>
                    <h2 className="font-script text-3xl sm:text-4xl text-red-400">Crisis Resources</h2>
                  </div>
                  
                  <p className="text-muted-foreground mb-8">
                    If you or someone you love is in immediate danger, please reach out to these resources right away.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-background/50 backdrop-blur-sm border border-red-600/20 rounded-xl p-6">
                      <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-red-400" />
                        SAMHSA National Helpline
                      </h3>
                      <p className="text-2xl font-bold text-red-400 mb-2">1-800-662-4357</p>
                      <p className="text-sm text-muted-foreground">Free, confidential, 24/7 treatment referral and information service.</p>
                    </div>
                    
                    <div className="bg-background/50 backdrop-blur-sm border border-red-600/20 rounded-xl p-6">
                      <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-red-400" />
                        National Suicide Prevention Lifeline
                      </h3>
                      <p className="text-2xl font-bold text-red-400 mb-2">988</p>
                      <p className="text-sm text-muted-foreground">24/7 crisis support for anyone in emotional distress.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Groups */}
        <section className="py-16 sm:py-20 bg-secondary/30">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 border border-border mb-6">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground uppercase tracking-widest">Community Support</span>
                </div>
                <h2 className="font-script text-4xl sm:text-5xl text-burgundy mb-4">Support Groups</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Connect with others who understand what you're going through.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-background border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Users className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Al-Anon Family Groups</h3>
                  <p className="text-muted-foreground mb-6">
                    A mutual support program for people whose lives have been affected by someone else's drinking. 
                    Find strength and hope through shared experiences.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Free</span>
                    <span className="px-3 py-1 bg-secondary text-muted-foreground text-sm rounded-full">In-Person & Online</span>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://al-anon.org" target="_blank" rel="noopener noreferrer">
                      Find a Meeting <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
                
                <div className="bg-background border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Heart className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Nar-Anon Family Groups</h3>
                  <p className="text-muted-foreground mb-6">
                    A twelve-step program for families and friends of those affected by someone else's addiction 
                    to drugs or other mind-altering substances.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Free</span>
                    <span className="px-3 py-1 bg-secondary text-muted-foreground text-sm rounded-full">In-Person & Online</span>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://www.nar-anon.org" target="_blank" rel="noopener noreferrer">
                      Find a Meeting <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
                
                <div className="bg-background border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <MessageCircle className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">SMART Recovery Family & Friends</h3>
                  <p className="text-muted-foreground mb-6">
                    Science-based support for family members. Learn skills to help your loved one 
                    while taking care of your own well-being.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Free</span>
                    <span className="px-3 py-1 bg-secondary text-muted-foreground text-sm rounded-full">Online Available</span>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://www.smartrecovery.org/family" target="_blank" rel="noopener noreferrer">
                      Learn More <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
                
                <div className="bg-background border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">CRAFT Training</h3>
                  <p className="text-muted-foreground mb-6">
                    Community Reinforcement and Family Training teaches families effective strategies 
                    to help their loved ones enter treatment.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-sm rounded-full">Evidence-Based</span>
                    <span className="px-3 py-1 bg-secondary text-muted-foreground text-sm rounded-full">Programs Vary</span>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://www.centeronaddiction.org/addiction-treatment/craft" target="_blank" rel="noopener noreferrer">
                      Explore CRAFT <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Resources */}
        <section className="py-16 sm:py-20">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground uppercase tracking-widest">Learn & Understand</span>
                </div>
                <h2 className="font-script text-4xl sm:text-5xl text-burgundy mb-4">Educational Resources</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Understanding addiction is the first step toward helping your loved one.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-emerald-600/20 flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">NIDA for Families</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    National Institute on Drug Abuse resources specifically designed for families.
                  </p>
                  <a href="https://nida.nih.gov/research-topics/parents-educators" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm inline-flex items-center gap-1">
                    Visit Resource <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                
                <div className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-cyan-600/20 flex items-center justify-center mb-4">
                    <Video className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">HBO Addiction Project</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Documentary series exploring the science of addiction and paths to recovery.
                  </p>
                  <a href="https://www.hbo.com/addiction" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm inline-flex items-center gap-1">
                    Watch Now <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                
                <div className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Partnership to End Addiction</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Comprehensive guides, toolkits, and resources for families.
                  </p>
                  <a href="https://drugfree.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm inline-flex items-center gap-1">
                    Explore Resources <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                
                <div className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center mb-4">
                    <Headphones className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">The Party Wreckers Podcast</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Real conversations about addiction, recovery, and supporting loved ones.
                  </p>
                  <a href="/episodes" className="text-primary hover:underline text-sm inline-flex items-center gap-1">
                    Listen to Episodes <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                
                <div className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-rose-600/20 flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-rose-400" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Hazelden Betty Ford</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Family resources from one of the nation's leading treatment providers.
                  </p>
                  <a href="https://www.hazeldenbettyford.org/articles/family-resources" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm inline-flex items-center gap-1">
                    Read Articles <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                
                <div className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-teal-600/20 flex items-center justify-center mb-4">
                    <MessageCircle className="w-6 h-6 text-teal-400" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Our Blog</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Thoughtful articles on navigating addiction as a family.
                  </p>
                  <a href="/blog" className="text-primary hover:underline text-sm inline-flex items-center gap-1">
                    Read Our Blog <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-16 sm:py-20 bg-secondary/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 border border-border mb-6">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground uppercase tracking-widest">Guidance</span>
                </div>
                <h2 className="font-script text-4xl sm:text-5xl text-burgundy mb-4">Taking the First Steps</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Not sure where to start? Here's a roadmap for families beginning this journey.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Educate Yourself</h3>
                    <p className="text-muted-foreground">
                      Understanding addiction as a disease—not a moral failing—changes everything. 
                      Learn about the science of addiction and what recovery really looks like.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Find Your Support</h3>
                    <p className="text-muted-foreground">
                      You can't pour from an empty cup. Join a support group, find a therapist, 
                      or connect with others who understand what you're going through.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Set Healthy Boundaries</h3>
                    <p className="text-muted-foreground">
                      Learn the difference between helping and enabling. Boundaries protect both 
                      you and your loved one, even when they feel difficult to enforce.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Communicate with Compassion</h3>
                    <p className="text-muted-foreground">
                      When you're ready to have conversations about treatment, lead with love. 
                      CRAFT-based approaches have proven more effective than confrontation.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Know When to Seek Professional Help</h3>
                    <p className="text-muted-foreground">
                      Sometimes families need professional guidance. Interventionists, family therapists, 
                      and addiction specialists can provide the support you need.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Find Treatment Section */}
        <section className="py-16 sm:py-20">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <div className="relative bg-gradient-to-br from-primary/20 via-burgundy/10 to-background border-2 border-primary/30 rounded-2xl overflow-hidden p-8 sm:p-12">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-burgundy/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
                </div>
                
                <div className="relative text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-script text-4xl sm:text-5xl text-burgundy mb-4">Find Treatment Options</h2>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                    When your loved one is ready for help, finding the right treatment center is crucial. 
                    Use SAMHSA's treatment locator to find verified programs near you.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                      <a href="https://findtreatment.gov" target="_blank" rel="noopener noreferrer">
                        <MapPin className="w-4 h-4 mr-2" />
                        Find Treatment Centers
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="tel:1-800-662-4357">
                        <Phone className="w-4 h-4 mr-2" />
                        Call SAMHSA Helpline
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Remember Section */}
        <section className="py-16 sm:py-20 bg-secondary/30">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="font-script text-4xl sm:text-5xl text-burgundy mb-6">Recovery Takes Time</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Healing isn't linear—for your loved one or for your family. Be patient with the process, 
                celebrate small victories, and remember that seeking help is a sign of strength, not weakness.
              </p>
              <p className="text-foreground font-medium text-xl">
                You're not alone. We're here to help.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default FamilyResources;
