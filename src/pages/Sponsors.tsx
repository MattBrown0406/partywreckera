import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, ExternalLink, Phone, Users, BookOpen, Shield, CheckCircle, MessageCircle, Headphones, Clock, Video, HeartHandshake, Target, Calendar, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import soberHelplineLogo from "@/assets/sober-helpline-logo.png";
import iocLogo from "@/assets/ioc-logo.jpg";
import betterhelpLogo from "@/assets/betterhelp-logo.png";

const Sponsors = () => {
  return (
    <>
      <Helmet>
        <title>Support Our Sponsors | The Party Wreckers Podcast</title>
        <meta name="description" content="Support the sponsors who make The Party Wreckers Podcast possible. These partners help us continue providing resources for families dealing with addiction." />
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
                <span className="text-sm text-muted-foreground uppercase tracking-widest">Our Partners</span>
              </div>
              
              <h1 className="font-script text-5xl sm:text-6xl text-burgundy mb-6">
                Support Our Sponsors
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground mb-6">
                These amazing partners help make The Party Wreckers Podcast possible. 
                By supporting them, you're helping us continue our mission to help families.
              </p>
              
              <p className="text-muted-foreground mb-4">
                Do you want to support the podcast directly? Your contribution of $1, $5, or $10 can help us keep getting the message out!
              </p>
              <Button variant="outline" className="bg-background/10 border-border/50 hover:bg-background/20" asChild>
                <a
                  href="https://www.buzzsprout.com/1941777/support"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Support the Podcast
                  <Heart className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Sponsors Content */}
        <section className="py-16 sm:py-24">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              {/* Sober Helpline - Dynamic Featured Sponsor Card */}
              <div className="relative bg-gradient-to-br from-emerald-900/20 via-teal-900/10 to-background border-2 border-emerald-600/30 rounded-2xl overflow-hidden group">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute -top-20 -right-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
                </div>
                
                {/* Featured Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-600 text-emerald-50 text-xs font-semibold uppercase tracking-wider shadow-lg">
                    <Shield className="w-3.5 h-3.5" />
                    Featured Partner
                  </span>
                </div>
                
                <div className="relative p-8 sm:p-12">
                  {/* Header Section */}
                  <div className="flex flex-col lg:flex-row items-center gap-8 mb-10">
                    <div className="flex-shrink-0">
                      <a
                        href="https://soberhelpline.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block transform transition-transform duration-300 hover:scale-105"
                      >
                        <div className="bg-white rounded-xl p-4 shadow-xl">
                          <img 
                            src={soberHelplineLogo} 
                            alt="Sober Helpline - Addiction Education Resources" 
                            className="w-72 h-auto"
                          />
                        </div>
                      </a>
                    </div>
                    
                    <div className="flex-1 text-center lg:text-left">
                      <h2 className="font-script text-4xl sm:text-5xl text-emerald-400 mb-4">
                        Sober Helpline
                      </h2>
                      <p className="text-xl text-foreground/90 font-medium mb-2">
                        Addiction Education Resources for Families
                      </p>
                      <p className="text-muted-foreground text-lg">
                        Empowering families with the knowledge and tools they need to navigate addiction and find ethical, proven treatment resources.
                      </p>
                    </div>
                  </div>
                  
                  {/* Features Grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    <div className="bg-background/50 backdrop-blur-sm border border-emerald-600/20 rounded-xl p-6 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10">
                      <div className="w-12 h-12 rounded-full bg-emerald-600/20 flex items-center justify-center mb-4">
                        <Users className="w-6 h-6 text-emerald-400" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Family Discussion Forum</h3>
                      <p className="text-sm text-muted-foreground">Connect with other families navigating addiction. Share experiences and find support in a safe community.</p>
                    </div>
                    
                    <div className="bg-background/50 backdrop-blur-sm border border-emerald-600/20 rounded-xl p-6 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10">
                      <div className="w-12 h-12 rounded-full bg-teal-600/20 flex items-center justify-center mb-4">
                        <BookOpen className="w-6 h-6 text-teal-400" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">DSM-5 Based Assessments</h3>
                      <p className="text-sm text-muted-foreground">Clinical screening tools to understand if your loved one's substance use meets diagnostic criteria.</p>
                    </div>
                    
                    <div className="bg-background/50 backdrop-blur-sm border border-emerald-600/20 rounded-xl p-6 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10">
                      <div className="w-12 h-12 rounded-full bg-cyan-600/20 flex items-center justify-center mb-4">
                        <Headphones className="w-6 h-6 text-cyan-400" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Guided Meditations</h3>
                      <p className="text-sm text-muted-foreground">Calming resources to help family members find steadiness while navigating difficult times.</p>
                    </div>
                    
                    <div className="bg-background/50 backdrop-blur-sm border border-emerald-600/20 rounded-xl p-6 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10">
                      <div className="w-12 h-12 rounded-full bg-emerald-600/20 flex items-center justify-center mb-4">
                        <CheckCircle className="w-6 h-6 text-emerald-400" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Enabling Self-Assessment</h3>
                      <p className="text-sm text-muted-foreground">Understand how love, fear, and good intentions can sometimes reinforce addiction patterns.</p>
                    </div>
                    
                    <div className="bg-background/50 backdrop-blur-sm border border-emerald-600/20 rounded-xl p-6 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10">
                      <div className="w-12 h-12 rounded-full bg-teal-600/20 flex items-center justify-center mb-4">
                        <Shield className="w-6 h-6 text-teal-400" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Vetted Providers</h3>
                      <p className="text-sm text-muted-foreground">Find ethical, responsible treatment providers with proven track records of success.</p>
                    </div>
                    
                    <div className="bg-background/50 backdrop-blur-sm border border-emerald-600/20 rounded-xl p-6 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10">
                      <div className="w-12 h-12 rounded-full bg-cyan-600/20 flex items-center justify-center mb-4">
                        <MessageCircle className="w-6 h-6 text-cyan-400" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">60+ Premium Resources</h3>
                      <p className="text-sm text-muted-foreground">Exercises, videos, and guides designed specifically for families dealing with addiction.</p>
                    </div>
                  </div>
                  
                  {/* CTA Section */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-emerald-600/20">
                    <Button 
                      size="lg" 
                      className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:shadow-emerald-500/40"
                      asChild
                    >
                      <a
                        href="https://soberhelpline.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit SoberHelpline.com
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                    
                    <a
                      href="tel:5412415886"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-emerald-600/30 text-emerald-400 hover:bg-emerald-600/10 transition-colors font-medium"
                    >
                      <Phone className="w-4 h-4" />
                      (541) 241-5886
                    </a>
                  </div>
                </div>
              </div>

              {/* Intervention on Call - Dynamic Sponsor Card */}
              <div className="mt-12 relative bg-gradient-to-br from-cyan-900/20 via-sky-900/10 to-background border-2 border-cyan-600/30 rounded-2xl overflow-hidden group">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
                </div>
                
                {/* On-Demand Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-600 text-cyan-50 text-xs font-semibold uppercase tracking-wider shadow-lg">
                    <Zap className="w-3.5 h-3.5" />
                    On-Demand Support
                  </span>
                </div>
                
                <div className="relative p-8 sm:p-12">
                  {/* Header Section */}
                  <div className="flex flex-col lg:flex-row items-center gap-8 mb-10">
                    <div className="flex-shrink-0">
                      <a
                        href="https://interventiononcall.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block transform transition-transform duration-300 hover:scale-105"
                      >
                        <div className="bg-white rounded-xl p-4 shadow-xl">
                          <img 
                            src={iocLogo} 
                            alt="Intervention on Call - Helping You Help Your Loved One" 
                            className="w-72 h-auto"
                          />
                        </div>
                      </a>
                    </div>
                    
                    <div className="flex-1 text-center lg:text-left">
                      <h2 className="font-script text-4xl sm:text-5xl text-cyan-400 mb-4">
                        Intervention on Call
                      </h2>
                      <p className="text-xl text-foreground/90 font-medium mb-2">
                        Helping You Help Your Loved One
                      </p>
                      <p className="text-muted-foreground text-lg">
                        A new way to do interventions. Real-time solutions from trained interventionists to ease your anxiety and inspire your loved one to seek treatment.
                      </p>
                    </div>
                  </div>
                  
                  {/* Pricing Highlight */}
                  <div className="bg-gradient-to-r from-cyan-600/20 to-sky-600/20 border border-cyan-500/30 rounded-xl p-6 mb-10 text-center">
                    <p className="text-lg text-foreground/90 mb-2">
                      <span className="text-cyan-400 font-bold text-3xl">$150</span>
                      <span className="text-muted-foreground"> per hour</span>
                    </p>
                    <p className="text-muted-foreground">On-demand access to professional interventionists. No waiting, no long-term commitments.</p>
                  </div>
                  
                  {/* Features Grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    <div className="bg-background/50 backdrop-blur-sm border border-cyan-600/20 rounded-xl p-6 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10">
                      <div className="w-12 h-12 rounded-full bg-cyan-600/20 flex items-center justify-center mb-4">
                        <HeartHandshake className="w-6 h-6 text-cyan-400" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Family & Recovery Coaching</h3>
                      <p className="text-sm text-muted-foreground">Personalized guidance to help your entire family navigate the journey toward recovery together.</p>
                    </div>
                    
                    <div className="bg-background/50 backdrop-blur-sm border border-cyan-600/20 rounded-xl p-6 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10">
                      <div className="w-12 h-12 rounded-full bg-sky-600/20 flex items-center justify-center mb-4">
                        <Target className="w-6 h-6 text-sky-400" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Intervention Planning</h3>
                      <p className="text-sm text-muted-foreground">Expert support for planning and executing effective interventions with compassion and strategy.</p>
                    </div>
                    
                    <div className="bg-background/50 backdrop-blur-sm border border-cyan-600/20 rounded-xl p-6 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10">
                      <div className="w-12 h-12 rounded-full bg-teal-600/20 flex items-center justify-center mb-4">
                        <BookOpen className="w-6 h-6 text-teal-400" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Treatment Recommendations</h3>
                      <p className="text-sm text-muted-foreground">Guidance on finding the right treatment options tailored to your loved one's specific needs.</p>
                    </div>
                    
                    <div className="bg-background/50 backdrop-blur-sm border border-cyan-600/20 rounded-xl p-6 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10">
                      <div className="w-12 h-12 rounded-full bg-cyan-600/20 flex items-center justify-center mb-4">
                        <Clock className="w-6 h-6 text-cyan-400" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Immediate Sessions</h3>
                      <p className="text-sm text-muted-foreground">Hour-long sessions providing strategies and solutions to get you and your loved one unstuck.</p>
                    </div>
                    
                    <div className="bg-background/50 backdrop-blur-sm border border-cyan-600/20 rounded-xl p-6 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10">
                      <div className="w-12 h-12 rounded-full bg-sky-600/20 flex items-center justify-center mb-4">
                        <Video className="w-6 h-6 text-sky-400" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Remote Consultations</h3>
                      <p className="text-sm text-muted-foreground">Get help from anywhere with online video sessions. No need to wait for in-person availability.</p>
                    </div>
                    
                    <div className="bg-background/50 backdrop-blur-sm border border-cyan-600/20 rounded-xl p-6 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10">
                      <div className="w-12 h-12 rounded-full bg-teal-600/20 flex items-center justify-center mb-4">
                        <Calendar className="w-6 h-6 text-teal-400" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Free Zoom Meetings</h3>
                      <p className="text-sm text-muted-foreground">Join Family & Friends Zoom support meetings to connect with others on similar journeys.</p>
                    </div>
                  </div>
                  
                  {/* CTA Section */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-cyan-600/20">
                    <Button 
                      size="lg" 
                      className="bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg shadow-cyan-600/25 transition-all duration-300 hover:shadow-cyan-500/40"
                      asChild
                    >
                      <a
                        href="https://interventiononcall.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Make an Appointment
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline"
                      size="lg" 
                      className="border-cyan-600/30 text-cyan-400 hover:bg-cyan-600/10"
                      asChild
                    >
                      <a
                        href="https://interventiononcall.com/live-family-friends-zoom/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Video className="w-4 h-4 mr-2" />
                        Join Free Zoom Meeting
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* BetterHelp Sponsor Card */}
              <div className="mt-8 bg-card border border-border rounded-xl p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <a
                    href="https://www.betterhelp.com/partywreckers"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img 
                      src={betterhelpLogo} 
                      alt="BetterHelp" 
                      className="w-64 h-auto hover:opacity-80 transition-opacity"
                    />
                  </a>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="font-script text-3xl text-burgundy mb-3">
                    BetterHelp
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Professional therapy, made accessible. BetterHelp connects you with licensed therapists 
                    from the comfort of your home—on your schedule.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Whether you're dealing with anxiety, depression, relationship issues, or the stress 
                    of supporting a loved one through addiction, having a professional to talk to can make 
                    all the difference.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Use our link to get started and get 10% off your first month.
                  </p>
                  <a
                    href="https://www.betterhelp.com/partywreckers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                  >
                    Get Started with BetterHelp
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Become a Sponsor CTA */}
              <div className="mt-12 bg-secondary/30 border border-border rounded-xl p-8 text-center">
                <h3 className="font-script text-2xl text-burgundy mb-3">
                  Interested in Sponsoring?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                  Partner with us to reach families who need help navigating addiction and recovery.
                </p>
                <Button variant="hero" asChild>
                  <a href="mailto:matt@partywreckers.com">
                    Become a Sponsor
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-muted-foreground mb-4">
                    Do you want to support the podcast directly? Your contribution of $1, $5, or $10 can help us keep getting the message out!
                  </p>
                  <Button variant="outline" asChild>
                    <a
                      href="https://www.buzzsprout.com/1941777/support"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Support the Podcast
                      <Heart className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Sponsors;