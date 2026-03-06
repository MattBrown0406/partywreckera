import Navbar from "@/components/Navbar";
import Footer, { SocialLinks } from "@/components/Footer";
import { Mic, Heart, Users, Clock } from "lucide-react";
import mattHeadshot from "@/assets/matt-headshot.jpg";
import SEOHead from "@/components/SEOHead";
import { PersonJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

// AEO-optimized FAQs about Matt Brown
const hostFAQs = [
  {
    question: "Who is Matt Brown from The Party Wreckers Podcast?",
    answer: "Matt Brown is a professional interventionist with over 20 years of experience helping families navigate addiction crises. He hosts The Party Wreckers Podcast, where he provides practical guidance on intervention, enabling vs. supporting, setting boundaries, and family recovery."
  },
  {
    question: "What is Matt Brown's experience with addiction intervention?",
    answer: "Matt Brown has more than 20 years of frontline experience working with addiction, recovery, and families. He has guided hundreds of families through substance use disorder crises, combining clinical expertise with compassion and real-world practicality."
  },
  {
    question: "How can I book Matt Brown for an intervention consultation?",
    answer: "You can book a coaching session with Matt Brown by contacting him directly at matt@partywreckers.com for media inquiries, speaking engagements, or consultation requests."
  },
  {
    question: "What is Matt Brown's approach to addiction treatment?",
    answer: "Matt approaches addiction as a medical disease that demands accountability, structure, and compassion. He recognizes that lasting recovery often includes a spiritual component defined by meaning, connection, and responsibility rather than rigid ideology."
  }
];

const Host = () => {
  return (
    <>
      <SEOHead
        title="About Matt Brown — Host of The Party Wreckers Podcast"
        description="Matt Brown is a professional interventionist with 20+ years experience and 22 years of personal recovery. He created The Party Wreckers to help families."
        canonical="/host"
        keywords="Matt Brown interventionist, addiction intervention specialist, family recovery expert, The Party Wreckers host, professional interventionist"
      />
      <PersonJsonLd />
      
      <FAQJsonLd faqs={hostFAQs} />
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "/" },
        { name: "Meet the Host", url: "/host" }
      ]} />
      
      <Navbar />
      
      <main className="min-h-screen bg-background pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30" />
          
          <div className="container px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
                <Mic className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground uppercase tracking-widest">Your Host</span>
              </div>
              
              <h1 className="font-script text-5xl sm:text-6xl text-burgundy mb-6">
                Meet Matt
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground">
                An experienced interventionist dedicated to helping families find hope and healing.
              </p>
            </div>
          </div>
        </section>

        {/* Host Bio Section */}
        <section className="py-16 sm:py-24">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-xl p-6 sm:p-8 lg:p-12">
                <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center md:items-start">
                  <div className="flex-shrink-0 mt-0 sm:mt-4 md:mt-12">
                    <img 
                      src={mattHeadshot} 
                      alt="Matt - Host of The Party Wreckers Podcast" 
                      className="w-40 sm:w-48 md:w-64 rounded-xl object-cover shadow-lg"
                    />
                    <div className="mt-4 flex justify-center">
                      <SocialLinks size="small" />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="font-script text-2xl sm:text-3xl text-burgundy mb-4 sm:mb-6">
                      20+ Years of Experience
                    </h2>
                
                <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-muted-foreground">
                  <p>
                    Matt is a professional interventionist with more than twenty years of frontline experience 
                    working with addiction, recovery, and the families caught in between. Having guided hundreds 
                    of families through the chaos, fear, and uncertainty that surround substance use disorder, 
                    he understands both the clinical realities of addiction and the emotional toll it takes on 
                    the people who love someone struggling.
                  </p>
                  
                  <p>
                    On The Party Wreckers Podcast, Matt pulls back the curtain on addiction and intervention—cutting 
                    through stigma, misinformation, and false hope. He translates complex subjects like enabling, 
                    boundaries, relapse, treatment selection, and recovery planning into clear, practical conversations 
                    families can actually use. Each episode blends real-world intervention experience, hard-earned 
                    insight, and honest storytelling to help listeners move from paralysis to purposeful action.
                  </p>
                  
                  <p>
                    Matt approaches addiction as a medical disease that demands accountability, structure, and 
                    compassion—and recognizes that lasting recovery often includes a spiritual component defined 
                    by meaning, connection, and responsibility rather than rigid ideology. His work helps families 
                    learn the difference between helping and enabling, how to set boundaries they can hold, and 
                    how to build sustainable, family-centered recovery plans that support long-term change.
                  </p>
                  
                  <p className="text-foreground font-medium">
                    The Party Wreckers Podcast exists for families who are done pretending, done waiting, and 
                    ready to understand what actually works.
                  </p>
                    
                  </div>
                </div>
              </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div className="font-script text-2xl text-burgundy">20+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div className="font-script text-2xl text-burgundy">1000s</div>
                    <div className="text-sm text-muted-foreground">Families Helped</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div className="font-script text-2xl text-burgundy">100%</div>
                    <div className="text-sm text-muted-foreground">Dedication</div>
                  </div>
                </div>
              </div>

              {/* Philosophy */}
              <div className="mt-8 bg-secondary/30 border border-border rounded-xl p-8 text-center">
                <h3 className="font-script text-2xl text-burgundy mb-4">
                  Philosophy
                </h3>
                <blockquote className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
                  "Addiction is a family disease, and recovery must be a family solution. 
                  My goal is to equip families with the knowledge and tools they need to 
                  stop the chaos and start the healing process."
                </blockquote>
                <p className="mt-4 text-foreground font-medium">— Matt</p>
              </div>

              {/* Contact CTA */}
              <div className="mt-8 bg-card border border-border rounded-xl p-8 text-center">
                <h3 className="font-script text-2xl text-burgundy mb-3">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground mb-6">
                  Have questions or want to share your story? Matt would love to hear from you.
                </p>
                <a
                  href="mailto:matt@partywreckers.com"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  matt@partywreckers.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Host;
