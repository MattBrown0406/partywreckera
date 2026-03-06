import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, BookOpen, ExternalLink, PhoneCall, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const StartHere = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Start Here — New to The Party Wreckers Podcast"
        description="If someone you love is struggling with addiction, start here. Essential resources, foundational content, and guidance for families in crisis."
        canonical="/start-here"
        keywords="addiction help, family support, where to start addiction, intervention help, addiction resources for families"
      />
      
      <Navbar />
      
      <main className="pt-20 pb-12">
        {/* Hero Section */}
        <section className="py-12 sm:py-20 bg-gradient-hero">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-script text-4xl sm:text-5xl md:text-6xl text-burgundy mb-6">
                New here?
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                If someone you love is struggling with addiction, start here.
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                You don't have to navigate this alone. These resources will help you understand 
                what you're dealing with and give you practical steps forward.
              </p>
            </div>
          </div>
        </section>

        <div className="container px-4 space-y-16">
          {/* Section 1: Read First */}
          <section>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="font-script text-3xl sm:text-4xl text-burgundy mb-4">
                  Read First
                </h2>
                <p className="text-lg text-muted-foreground">
                  These foundational articles will help you understand what you're dealing with
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-burgundy" />
                      Understanding Addiction
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Learn why addiction is a medical disease, not a moral failing, and what this means for your family.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/blog">Read Article</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-burgundy" />
                      The Rock Bottom Myth
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Why waiting for rock bottom is dangerous and what you can do instead.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/blog">Read Article</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-burgundy" />
                      Enabling vs Supporting
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Understand the crucial difference between helping and accidentally making things worse.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/blog">Read Article</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-burgundy" />
                      Communication Strategies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      How to have difficult conversations without making things worse.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/blog">Read Article</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Section 2: Listen */}
          <section className="bg-card border border-border rounded-lg p-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-script text-3xl sm:text-4xl text-burgundy mb-4">
                Listen
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Start with this recommended episode to understand the basics
              </p>
              
              <Card className="bg-background border-border max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Play className="w-5 h-5 text-burgundy" />
                    Starter Episode: "Where to Begin When Someone You Love Has an Addiction"
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    This episode covers the fundamentals every family member needs to know when 
                    addiction enters their world.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild>
                      <Link to="/episodes">
                        <Play className="w-4 h-4" />
                        Listen Now
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/episodes">View All Episodes</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 3: Try This */}
          <section>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="font-script text-3xl sm:text-4xl text-burgundy mb-4">
                  Try This
                </h2>
                <p className="text-lg text-muted-foreground">
                  Interactive tools to help you gain clarity and prepare for next steps
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle>Family Reflection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Guided questions to help you assess your family's situation and readiness for change.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/family-reflection">Start Reflection</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle>Fear Inventory</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Identify what's holding you back from taking action and work through those fears.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/fear-inventory">Start Inventory</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle>Conversation Starters</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Prepare for difficult conversations with scripts and strategies that work.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/conversation-starters">Get Scripts</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Section 4: Get Help */}
          <section className="bg-card border border-border rounded-lg p-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="font-script text-3xl sm:text-4xl text-burgundy mb-4">
                  Get Help
                </h2>
                <p className="text-lg text-muted-foreground">
                  Professional resources and direct access to Matt Brown
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <Card className="bg-background border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ExternalLink className="w-5 h-5 text-burgundy" />
                        SoberHelpline.com
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Curated directory of vetted addiction treatment providers. No referral fees, no hidden agendas.
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://soberhelpline.com" target="_blank" rel="noopener noreferrer">
                          Find Treatment
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-background border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ExternalLink className="w-5 h-5 text-burgundy" />
                        FamilyBridgeApp.com
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Support tools specifically designed for families navigating addiction.
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://familybridgeapp.com" target="_blank" rel="noopener noreferrer">
                          Get Support
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-background border-border">
                  <CardHeader>
                    <CardTitle>Connect with Matt Brown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      Professional interventionist with 20+ years of experience helping families navigate addiction crises.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-sm">
                        <PhoneCall className="w-4 h-4 text-burgundy" />
                        <span className="text-foreground">Schedule a consultation</span>
                      </div>
                      
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="w-4 h-4 text-burgundy" />
                        <span className="text-foreground">matt@partywreckers.com</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-3 mt-6">
                      <Button asChild>
                        <a href="mailto:matt@partywreckers.com?subject=Family%20Support%20Request">
                          Contact Matt
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/host">Learn More About Matt</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StartHere;