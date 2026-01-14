import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ArrowLeft,
  MessageCircle,
  AlertTriangle,
  Heart,
  Shield,
  Compass,
  Pause,
  Printer
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

const ConversationStarters = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <SEOHead
        title="Conversation Starters for Families | The Party Wreckers Podcast"
        description="Thoughtful conversation starters to help families talk about addiction with less defensiveness and more clarity. Printable guide for families."
        canonical="/conversation-starters"
      />
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "/" },
        { name: "Family Resources", url: "/family-resources" },
        { name: "Conversation Starters", url: "/conversation-starters" }
      ]} />
      
      <Navbar />
      
      <main className="min-h-screen bg-background pt-20 sm:pt-24 print:pt-0">
        {/* Print-only header */}
        <div className="hidden print:block print:mb-8">
          <h1 className="text-3xl font-bold text-center mb-2">Conversation Starters for Families</h1>
          <p className="text-center text-sm text-gray-600">The Party Wreckers Podcast • Family Resources</p>
        </div>

        {/* Navigation - hide on print */}
        <div className="container px-4 py-6 print:hidden">
          <Link 
            to="/family-resources" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Family Resources
          </Link>
        </div>

        {/* Hero Section - hide on print */}
        <section className="py-12 sm:py-16 bg-gradient-hero relative overflow-hidden print:hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30" />
          
          <div className="container px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground uppercase tracking-widest">Printable Guide</span>
              </div>
              
              <h1 className="font-script text-5xl sm:text-6xl text-burgundy mb-6">
                Conversation Starters for Families
              </h1>
              
              <Button 
                onClick={handlePrint}
                size="lg" 
                variant="outline"
                className="border-primary/30 hover:bg-primary/10"
              >
                <Printer className="w-4 h-4 mr-2" />
                Print This Guide
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 sm:py-16 print:py-0">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              
              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-12 print:mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed print:text-gray-700">
                  Talking about addiction within a family is rarely simple. Emotions run high, trust may be fragile, and many conversations quickly turn into arguments, shutdowns, or silence. Just as important as <em>what</em> you say is the frame of mind you bring into the conversation. Fear and anxiety, when left unchecked, quietly give the problem more power before anyone even opens their mouth.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4 print:text-gray-700">
                  These conversation starters are not designed to convince, confront, or control anyone. They are meant to help families slow things down, reduce defensiveness, and speak from a calmer, steadier place.
                </p>
                <p className="text-foreground font-medium mt-6 italic print:text-gray-900">
                  You do not need to ask every question. Choose the ones that fit where your family is right now, and return to others later as clarity grows.
                </p>
              </div>

              {/* Before You Start */}
              <div className="bg-secondary/50 border border-border rounded-2xl p-8 mb-10 print:bg-gray-100 print:border-gray-300 print:mb-6 print:break-inside-avoid">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-amber-600/20 flex items-center justify-center print:bg-amber-100">
                    <AlertTriangle className="w-5 h-5 text-amber-400 print:text-amber-600" />
                  </div>
                  <h2 className="font-script text-2xl sm:text-3xl text-burgundy print:text-gray-900">Before You Start</h2>
                </div>
                <ul className="space-y-3 text-muted-foreground print:text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 print:text-gray-600">•</span>
                    <span>Check your internal state first; if fear, panic, or urgency are driving the conversation, it will likely escalate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 print:text-gray-600">•</span>
                    <span>Regulate yourself before engaging—pause, breathe, take a walk, or write your thoughts down first</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 print:text-gray-600">•</span>
                    <span>Choose a time when no one is already emotionally activated</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 print:text-gray-600">•</span>
                    <span>Avoid conversations during or immediately after substance use</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 print:text-gray-600">•</span>
                    <span>Focus on understanding, not persuading or controlling the outcome</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 print:text-gray-600">•</span>
                    <span>End or pause the conversation if it becomes unsafe or emotionally charged</span>
                  </li>
                </ul>
                <p className="text-foreground font-semibold mt-6 italic print:text-gray-900">
                  The calmer and clearer you are, the less power the problem has in the room.
                </p>
              </div>

              {/* Question Sections */}
              <div className="space-y-10 print:space-y-6">
                
                {/* Understanding What's Really Happening */}
                <div className="print:break-inside-avoid">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center print:bg-blue-100">
                      <MessageCircle className="w-5 h-5 text-blue-400 print:text-blue-600" />
                    </div>
                    <h2 className="font-script text-2xl sm:text-3xl text-burgundy print:text-gray-900">Understanding What's Really Happening</h2>
                  </div>
                  <p className="text-muted-foreground mb-4 print:text-gray-600">
                    These questions help families move beyond surface-level arguments and defensiveness.
                  </p>
                  <ul className="space-y-3 bg-secondary/30 rounded-xl p-6 print:bg-gray-50 print:border print:border-gray-200">
                    <li className="text-foreground print:text-gray-800">"What feels hardest about this for you right now?"</li>
                    <li className="text-foreground print:text-gray-800">"What do you think we're all reacting to?"</li>
                    <li className="text-foreground print:text-gray-800">"What worries you the most that you don't usually say out loud?"</li>
                    <li className="text-foreground print:text-gray-800">"What do you feel like we're missing or not talking about?"</li>
                  </ul>
                </div>

                {/* Exploring Impact Without Blame */}
                <div className="print:break-inside-avoid">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center print:bg-purple-100">
                      <Heart className="w-5 h-5 text-purple-400 print:text-purple-600" />
                    </div>
                    <h2 className="font-script text-2xl sm:text-3xl text-burgundy print:text-gray-900">Exploring Impact Without Blame</h2>
                  </div>
                  <p className="text-muted-foreground mb-4 print:text-gray-600">
                    Use these to acknowledge consequences without turning the conversation into an attack.
                  </p>
                  <ul className="space-y-3 bg-secondary/30 rounded-xl p-6 print:bg-gray-50 print:border print:border-gray-200">
                    <li className="text-foreground print:text-gray-800">"How has this been affecting the family?"</li>
                    <li className="text-foreground print:text-gray-800">"What has changed in ways we haven't really talked about?"</li>
                    <li className="text-foreground print:text-gray-800">"What feels different now compared to before?"</li>
                    <li className="text-foreground print:text-gray-800">"What are we all doing now that we weren't doing before?"</li>
                  </ul>
                </div>

                {/* Helping vs. Enabling */}
                <div className="print:break-inside-avoid">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-orange-600/20 flex items-center justify-center print:bg-orange-100">
                      <AlertTriangle className="w-5 h-5 text-orange-400 print:text-orange-600" />
                    </div>
                    <h2 className="font-script text-2xl sm:text-3xl text-burgundy print:text-gray-900">Helping vs. Enabling</h2>
                  </div>
                  <p className="text-muted-foreground mb-4 print:text-gray-600">
                    These questions are useful when families feel stuck between rescuing and resentment.
                  </p>
                  <ul className="space-y-3 bg-secondary/30 rounded-xl p-6 print:bg-gray-50 print:border print:border-gray-200">
                    <li className="text-foreground print:text-gray-800">"What are we doing that helps in the short term but hurts in the long term?"</li>
                    <li className="text-foreground print:text-gray-800">"What would support look like if it didn't involve fixing or rescuing?"</li>
                    <li className="text-foreground print:text-gray-800">"What are we afraid would happen if we stopped stepping in?"</li>
                  </ul>
                </div>

                {/* Boundaries and Safety */}
                <div className="print:break-inside-avoid">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-600/20 flex items-center justify-center print:bg-green-100">
                      <Shield className="w-5 h-5 text-green-400 print:text-green-600" />
                    </div>
                    <h2 className="font-script text-2xl sm:text-3xl text-burgundy print:text-gray-900">Boundaries and Safety</h2>
                  </div>
                  <p className="text-muted-foreground mb-4 print:text-gray-600">
                    These questions clarify limits without threats, ultimatums, or control.
                  </p>
                  <ul className="space-y-3 bg-secondary/30 rounded-xl p-6 print:bg-gray-50 print:border print:border-gray-200">
                    <li className="text-foreground print:text-gray-800">"What do we need in order to feel safe and stable?"</li>
                    <li className="text-foreground print:text-gray-800">"What are we willing to participate in—and what are we not?"</li>
                    <li className="text-foreground print:text-gray-800">"What boundary would protect us, even if it doesn't change them?"</li>
                  </ul>
                </div>

                {/* Looking Forward */}
                <div className="print:break-inside-avoid">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-teal-600/20 flex items-center justify-center print:bg-teal-100">
                      <Compass className="w-5 h-5 text-teal-400 print:text-teal-600" />
                    </div>
                    <h2 className="font-script text-2xl sm:text-3xl text-burgundy print:text-gray-900">Looking Forward</h2>
                  </div>
                  <p className="text-muted-foreground mb-4 print:text-gray-600">
                    Use these when the family is ready to think beyond the immediate crisis.
                  </p>
                  <ul className="space-y-3 bg-secondary/30 rounded-xl p-6 print:bg-gray-50 print:border print:border-gray-200">
                    <li className="text-foreground print:text-gray-800">"What would a healthier version of this look like for us?"</li>
                    <li className="text-foreground print:text-gray-800">"What do we need help with that we can't do alone?"</li>
                    <li className="text-foreground print:text-gray-800">"What's one small change we could make that we could actually hold?"</li>
                  </ul>
                </div>

                {/* When to Pause */}
                <div className="bg-rose-900/20 border border-rose-600/30 rounded-2xl p-8 print:bg-red-50 print:border-red-200 print:break-inside-avoid">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-rose-600/20 flex items-center justify-center print:bg-red-100">
                      <Pause className="w-5 h-5 text-rose-400 print:text-red-600" />
                    </div>
                    <h2 className="font-script text-2xl sm:text-3xl text-rose-400 print:text-red-800">When to Pause the Conversation</h2>
                  </div>
                  <p className="text-muted-foreground mb-4 print:text-gray-600">
                    It's appropriate to pause or end the discussion if:
                  </p>
                  <ul className="space-y-2 text-foreground mb-6 print:text-gray-800">
                    <li className="flex items-start gap-3">
                      <span className="text-rose-400 mt-1 print:text-red-600">•</span>
                      <span>Voices escalate or threats appear</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rose-400 mt-1 print:text-red-600">•</span>
                      <span>Someone is intoxicated</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rose-400 mt-1 print:text-red-600">•</span>
                      <span>The conversation becomes emotionally or physically unsafe</span>
                    </li>
                  </ul>
                  <p className="text-foreground font-semibold italic print:text-gray-900">
                    Pausing a conversation is not quitting. It's choosing stability over damage.
                  </p>
                </div>

              </div>

              {/* Closing Reminder */}
              <div className="mt-12 pt-10 border-t border-border print:mt-8 print:pt-6 print:border-gray-300">
                <h2 className="font-script text-2xl sm:text-3xl text-burgundy mb-4 print:text-gray-900">Closing Reminder</h2>
                <p className="text-muted-foreground leading-relaxed mb-4 print:text-gray-700">
                  These conversations are about changing patterns, not forcing outcomes. You may not see immediate agreement or relief—and that's okay. Calm, honest conversations held consistently often matter more than one dramatic discussion.
                </p>
                <p className="text-foreground font-semibold text-lg italic print:text-gray-900">
                  Progress is measured in clarity and consistency, not instant results.
                </p>
              </div>

              {/* Print Button - hide on print */}
              <div className="mt-12 text-center print:hidden">
                <Button 
                  onClick={handlePrint}
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                >
                  <Printer className="w-4 h-4 mr-2" />
                  Print This Guide
                </Button>
              </div>

            </div>
          </div>
        </section>
      </main>
      
      <Footer />

      {/* Print styles */}
      <style>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          nav, footer, .print\\:hidden {
            display: none !important;
          }
          main {
            padding-top: 0 !important;
          }
          .print\\:break-inside-avoid {
            break-inside: avoid;
          }
        }
      `}</style>
    </>
  );
};

export default ConversationStarters;
