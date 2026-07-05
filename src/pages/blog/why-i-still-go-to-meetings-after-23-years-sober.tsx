import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SocialShareButtons from "@/components/SocialShareButtons";
import ArticleAnswerSummary from "@/components/ArticleAnswerSummary";
import { ArrowLeft } from "lucide-react";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import blogImage from "@/assets/blog-why-i-still-go-to-meetings.jpg";

const SLUG = "why-i-still-go-to-meetings-after-23-years-sober";
const TITLE = "Long-Term Sobriety: Why I Still Go to Meetings After 23 Years";
const DESCRIPTION =
  "After 23 years sober, interventionist Matt Brown explains why he still goes to meetings — and what long-term sobriety really requires to last.";

const faqs = [
  {
    question: "Do people really still go to meetings after decades of sobriety?",
    answer:
      "Yes, many do. People with long-term sobriety often keep attending meetings because recovery works as ongoing maintenance, not a completed task. They also stay to support newcomers — the same way someone once supported them.",
  },
  {
    question: "Can you stay sober without meetings?",
    answer:
      "Some people do, but everyone I've seen thrive in long-term recovery has some consistent structure — meetings, therapy, a recovery community, or strong accountability relationships. The common thread isn't the format. It's that the practice continues even when life feels fine.",
  },
  {
    question: "Is relapse common after many years of sobriety?",
    answer:
      "It's less common than early relapse, but it happens — and it usually follows a long, quiet drift away from recovery practices rather than a sudden event. That's why complacency, not craving, is the biggest threat in long-term sobriety.",
  },
  {
    question: "What are signs a loved one's recovery is becoming complacent?",
    answer:
      "Watch for dropped meetings, loss of contact with a sponsor or recovery friends, irritability about being asked recovery questions, and the phrase \u201CI don't need that stuff anymore.\u201D One of these alone isn't a crisis. A pattern is worth a calm, honest conversation.",
  },
  {
    question: "How can families support long-term recovery without policing it?",
    answer:
      "Ask curious questions instead of checking up. Support the routines that keep your loved one well, and get support for yourself too — family recovery is its own ongoing work. If you're worried, name what you see specifically and kindly, then ask for help if the conversation stalls.",
  },
];

const WhyIStillGoToMeetings = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${TITLE} — Party Wreckers`}
        description={DESCRIPTION}
        canonical={`/blog/${SLUG}`}
        ogType="article"
        ogImage={blogImage}
        keywords="long-term sobriety, why go to meetings, 23 years sober, recovery maintenance, complacency in recovery, Matt Brown interventionist"
        publishedTime="2026-07-05"
      />

      <ArticleJsonLd
        title={TITLE}
        description={DESCRIPTION}
        image={blogImage}
        datePublished="2026-07-05"
        dateModified="2026-07-05"
        slug={SLUG}
      />

      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Why I Still Go to Meetings After 23 Years", url: `/blog/${SLUG}` },
        ]}
      />

      <FAQJsonLd faqs={faqs} />

      <Navbar />

      <article className="max-w-3xl mx-auto px-4 pt-24 pb-16">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
          <Link to="/blog" className="hover:text-primary flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </nav>

        <div className="mb-8">
          <img
            src={blogImage}
            alt="An empty metal folding chair in a softly lit church basement recovery meeting room with a coffee urn on a folding table in the background"
            className="w-full rounded-lg shadow-lg"
            width={1024}
            height={1024}
          />
        </div>

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            {TITLE}
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>By Matt Brown</span>
            <span>|</span>
            <time dateTime="2026-07-05">July 5, 2026</time>
          </div>
        </header>

        <div className="mb-8">
          <SocialShareButtons url={`https://partywreckers.com/blog/${SLUG}`} title={TITLE} />
        </div>

        <ArticleAnswerSummary slug={SLUG} />

        <div className="prose prose-lg max-w-none text-foreground">
          <p>
            Last Tuesday night I sat in a church basement on a metal folding chair that might be older than my sobriety, drinking coffee that tasted like it was brewed sometime during the Clinton administration. A guy with nine days clean looked at me and asked, "If you've got 23 years, why are you still here?"
          </p>

          <p>
            Fair question. I've heard it from newcomers, from families of my clients, and once from my own teenager, who mostly wanted the car that night. Here's the honest answer: long-term sobriety is not a finish line I crossed in 2003. It's something I maintain, one unglamorous Tuesday at a time. I don't go to meetings because I'm afraid I'll drink tomorrow. I go because I remember what happened the last time I decided I had this thing figured out.
          </p>

          <h2>What Does Long-Term Sobriety Actually Require?</h2>

          <p>
            Long-term sobriety requires ongoing maintenance, not a one-time achievement. The people I know who stay sober for decades treat recovery the way athletes treat fitness: what you did last year doesn't cover today. That's the short version. The longer version took me years to accept.
          </p>

          <p>
            When I got sober on April 6, 2003, I thought sobriety worked like a debt you pay down. Put in enough meetings, enough step work, enough uncomfortable honesty, and eventually the balance hits zero and you're free to go. Nobody at the front of the room ever said that. I just quietly believed it, because I wanted it to be true.
          </p>

          <p>
            What I've learned since — in my own recovery and in twenty-plus years of intervention work — is that addiction doesn't honor seniority. It doesn't care how many anniversary chips are in your sock drawer. The thinking that nearly killed me at thirty is still available to me at fifty-three. It's just quieter now, and quieter is not the same as gone.
          </p>

          <h2>Why Go to Meetings After Years of Sobriety?</h2>

          <p>
            I keep going to meetings for two reasons: memory fades, and I owe a debt. Both of those matter more at 23 years than they did at 23 days.
          </p>

          <p>
            Memory first. Time is merciful, and that's the problem. The wreckage of my drinking and using has softened into stories I can tell with a laugh. But when the guy with nine days talks — hands shaking, voice cracking, trying to figure out how to face his wife — I'm not remembering my story anymore. I'm sitting inside it. He gives me back the truth of where I came from, in a way no journal entry or anniversary speech ever could.
          </p>

          <p>
            Second, the debt. When I stumbled into recovery, people with decades of sobriety were sitting in those chairs waiting for me. They didn't have to be there. They had jobs, families, Tuesday nights of their own. They stayed anyway, and their staying is a big part of why I'm alive. The chair I sit in now is the same chair somebody held for me. Passing that along isn't charity. It's rent.
          </p>

          <h2>The Most Dangerous Sentence in Long-Term Sobriety: "I'm Fine"</h2>

          <p>
            The most dangerous moment in long-term recovery isn't a crisis. It's comfort. Relapse after many years almost never starts with a drink; it starts with a slow drift away from the things that kept a person well, usually announced with the words "I'm fine."
          </p>

          <p>
            I've done interventions on people with ten, fifteen, even twenty years of sobriety. Every one of them had a version of the same story. Life got busy. Meetings became optional, then occasional, then a thing they used to do. The recovery muscles atrophied so gradually that nobody noticed — including them — until the day the old solution started sounding reasonable again.
          </p>

          <p>
            I've felt the early edges of that drift myself. Seasons where work was full, where I told myself that helping other families was basically the same thing as tending my own recovery. It isn't. Being around recovery professionally is not the same as practicing it personally. When I notice that gap opening, the answer is boring and reliable: get back in the chair.
          </p>

          <h2>What This Means If You Love Someone in Recovery</h2>

          <p>
            If someone you love is newly sober, here's what their long-term sobriety will actually look like from the outside: ongoing, visible action. Not promises. Not "trust me, I've got it." Action you can see — meetings, a sponsor, honest conversations, some structure that exists whether or not they feel like it that week.
          </p>

          <p>
            So pay attention to behavior, gently. If your loved one comes home from treatment and within a few months has dropped every recovery activity because they're "doing great," that's worth a calm conversation — not an accusation, just curiosity. "I noticed you stopped going to your Thursday meeting. What changed?" is a fair question from someone who loves them.
          </p>

          <p>
            And here's the hopeful part, because there genuinely is one. Maintenance is not a life sentence of drudgery. An hour or two a week is a remarkably small price for a life that works. I've spent more time than that complaining about my fantasy football team. The meetings aren't the burden. They're the thing that makes everything else — the fatherhood, the work, the ordinary Tuesday nights — possible.
          </p>

          <h2>The Chair Is the Point</h2>

          <p>
            Twenty-three years in, I'm clear about something I couldn't have understood at nine days: I don't go to meetings because my sobriety is fragile. I go because it's valuable. You maintain the things you value. You change the oil on the car you want to keep.
          </p>

          <p>
            So when that newcomer asked why I was still there, I told him the truth: "Because somebody was here when I showed up. And because I still need to hear what you just said."
          </p>

          <p>
            He looked at me like I was a little crazy. That's fine. So did I, once.
          </p>

          <h2>Frequently Asked Questions About Long-Term Sobriety</h2>

          <div className="space-y-6 my-8">
            {faqs.map((f) => (
              <div key={f.question}>
                <h3 className="text-lg font-semibold mb-2">{f.question}</h3>
                <p>{f.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted/50 border border-border rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-2">Keep Going — Here's How</h3>
            <p>
              If this landed, there's more where it came from. Listen to <strong>The Party Wreckers</strong> podcast, where I talk every week with families and people in recovery about what actually works — no lectures, no hype. Follow along for new episodes and articles.
            </p>
            <p className="mt-3">
              And if someone you love is struggling right now and you're done waiting for the right moment, reach out through{" "}
              <a href="https://freedominterventions.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                FreedomInterventions.com
              </a>
              . The first conversation is just a conversation. You don't have to have it figured out before you call.
            </p>
          </div>

          <div className="border-t border-border pt-8 mt-12">
            <h3 className="text-xl font-bold mb-4">Related Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog/what-nobody-tells-you-about-long-term-sobriety" className="text-primary hover:underline">
                  What Nobody Tells You About Long-Term Sobriety
                </Link>
              </li>
              <li>
                <Link to="/blog/second-year-of-sobriety-what-to-expect" className="text-primary hover:underline">
                  Nobody Warns You About the Second Year of Sobriety
                </Link>
              </li>
              <li>
                <Link to="/blog/busy-not-recovery" className="text-primary hover:underline">
                  Being Busy Is Not the Same as Being in Recovery
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default WhyIStillGoToMeetings;
