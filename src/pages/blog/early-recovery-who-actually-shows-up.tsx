import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SocialShareButtons from "@/components/SocialShareButtons";
import ArticleAnswerSummary from "@/components/ArticleAnswerSummary";
import { ArrowLeft } from "lucide-react";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import blogImage from "@/assets/blog-early-recovery-who-shows-up.jpg";

const SLUG = "early-recovery-who-actually-shows-up";
const TITLE = "Early Recovery Taught Me Who Actually Shows Up";
const DESCRIPTION =
  "In early recovery, I learned who actually shows up. What 23 years of sobriety taught me about the people who stay — and how families can find them.";

const faqs = [
  {
    question: "What is early recovery?",
    answer:
      "Early recovery is the first stretch of sobriety, usually considered the first year and especially the first 90 days. It's the most fragile window, when the brain and body are still healing and the risk of relapse is highest. Consistent support and simple daily structure matter most during this time.",
  },
  {
    question: "Who should be part of a person's support system in early recovery?",
    answer:
      "The strongest early recovery support usually comes from people who understand addiction firsthand — a sponsor, a recovery community, a counselor, and peers in sobriety. Family can play a role, but they shouldn't have to carry it alone. Recovery-specific relationships take pressure off the family.",
  },
  {
    question: "Why do friends and family pull away when someone gets sober?",
    answer:
      "Often it's not rejection — it's exhaustion and self-protection. Years of broken promises teach people to guard their hope. Many step back to see if the change is real. That distance can actually give the person space to build their own reasons to stay sober.",
  },
  {
    question: "How can families help in early recovery without enabling?",
    answer:
      "Connect your loved one to treatment and recovery support, then let that support do its work. Get your own help through Al-Anon or a family coach. Avoid constant testing and rescuing, which teach people to hide. Staying in your own recovery is one of the most powerful things you can offer.",
  },
  {
    question: "What if my loved one has burned all their bridges?",
    answer:
      "Burned bridges feel final, but recovery communities are full of people who show up for newcomers precisely because someone once showed up for them. A person doesn't have to rebuild everything from scratch. Getting into treatment or a meeting often puts them in a room already full of support.",
  },
];

const EarlyRecoveryWhoShowsUp = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${TITLE} — Party Wreckers`}
        description={DESCRIPTION}
        canonical={`/blog/${SLUG}`}
        ogType="article"
        ogImage={blogImage}
        keywords="early recovery, who shows up in early recovery, first 90 days of sobriety, family support in early recovery, Matt Brown interventionist"
        publishedTime="2026-07-01"
      />

      <ArticleJsonLd
        title={TITLE}
        description={DESCRIPTION}
        image={blogImage}
        datePublished="2026-07-01"
        dateModified="2026-07-01"
        slug={SLUG}
      />

      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Early Recovery: Who Actually Shows Up", url: `/blog/${SLUG}` },
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
            alt="A man in his mid-forties sitting on a porch step at dawn holding a coffee mug and a phone, quietly taking a call in soft warm morning light"
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
            <time dateTime="2026-07-01">July 1, 2026</time>
          </div>
        </header>

        <div className="mb-8">
          <SocialShareButtons url={`https://partywreckers.com/blog/${SLUG}`} title={TITLE} />
        </div>

        <ArticleAnswerSummary slug={SLUG} />

        <div className="prose prose-lg max-w-none text-foreground">
          <p>
            The morning after I got sober, I made a list of everyone I owed an apology to. It was long. What surprised me wasn't the length of that list — it was how short the other one was. The list of people who were still answering my calls. Early recovery has a way of thinning out a room. The party ends, and you find out who was there for the party and who was there for you.
          </p>

          <p>
            I got sober on April 6, 2003. That's 23 years ago now. If you'd asked me back then what would keep me sober, I'd have said willpower, or fear, or hitting bottom hard enough. I'd have been wrong. What kept me sober in early recovery was a handful of people who kept showing up when I gave them every reason not to. This one's for them — and for any family reading this who is trying to figure out who to lean on.
          </p>

          <h2>Who actually shows up in early recovery?</h2>

          <p>
            In early recovery, the people who show up are rarely the ones you'd predict. They're not always family, not always your closest friends, and almost never the people who partied with you. They're the ones who keep it simple: they answer the phone, they tell you the truth, and they don't flinch when you're not okay.
          </p>

          <p>
            For me it was three men, all in recovery themselves. One of them called me every single morning for{" "}
            <Link to="/blog/first-year-sobriety-what-to-expect" className="text-primary hover:underline">
              the first 90 days of sobriety
            </Link>
            . Not to check up on me like a parole officer — just to ask how I slept and whether I'd eaten. It sounds small. In early recovery, small is everything. When your whole nervous system is raw and your instincts still point you toward the very thing that's killing you, a boring, consistent phone call is a lifeline.
          </p>

          <p>Here's what those people had in common:</p>

          <ul>
            <li>They were consistent, not intense. They showed up on ordinary Tuesdays, not just in crises.</li>
            <li>They told me the truth without making me feel like garbage for needing to hear it.</li>
            <li>They didn't try to fix me. They just refused to disappear.</li>
          </ul>

          <h2>Why do so many people disappear?</h2>

          <p>
            Most people disappear in early recovery not because they stopped caring, but because they're exhausted, hurt, or waiting to see if it's real this time. That's not betrayal. That's what years of active addiction do to the people around us.
          </p>

          <p>
            I have to be honest about my part in this. By the time I got sober, I had spent years teaching people not to trust me. I'd made promises I broke before the words finished leaving my mouth. So when some of them kept their distance those first months, I understood it. They weren't punishing me. They were protecting themselves from a hope that had cost them too much before.
          </p>

          <p>
            If you're a family member reading this, hear me clearly: it is not your job to be one of the people who shows up in the front row of someone's early recovery. Sometimes the most loving thing you can do is step back and let recovery-specific support carry the weight for a while. You've been carrying it alone for a long time. You're allowed to set that down.
          </p>

          <h3>What the people who stayed actually did</h3>

          <p>
            The people who stayed in my early recovery didn't do anything heroic. They did ordinary things consistently. That consistency was the whole point — addiction is chaos, and recovery is built out of boring, repeatable actions that hold under stress.
          </p>

          <p>
            One friend drove forty minutes to sit with me at a meeting I was too scared to walk into alone. Another let me call him at two in the morning and didn't lecture me — he just stayed on the line until I fell asleep. None of them told me I was doing great. They told me to keep going. There's a difference, and in early recovery that difference matters.
          </p>

          <p>
            What I've learned in 20-plus years of doing this work professionally is that these relationships aren't luck. You can go find them. Recovery communities are full of people who will show up for a newcomer precisely because someone once showed up for them. The person you're worried about doesn't have to rebuild a whole support system from the ashes of old friendships. There's a room full of people already waiting.
          </p>

          <h3>How families can help without carrying it all</h3>

          <p>
            Families help most in early recovery by connecting their loved one to recovery-specific support — then letting that support do its job. Your role isn't to be the sponsor, the therapist, and the accountability partner all at once. Your role is to stay in your own recovery and let the professionals and the community hold the rest.
          </p>

          <p>
            Practically, that looks like a few things. It looks like helping the person get to treatment or to meetings without hovering over whether they went. It looks like getting your own support — Al-Anon, a family coach, other parents who've walked this road. And it looks like resisting the urge to test them constantly, which only teaches them to hide. If you're still sorting out where your role ends,{" "}
            <Link to="/enabling-vs-support" className="text-primary hover:underline">
              how families can help without enabling
            </Link>{" "}
            is a good place to start.
          </p>

          <p>
            I say this as the person who was once on the other side of the intervention. The family members who helped me most were the ones who eventually stopped trying to save me and started taking care of themselves. That freed me to build my own reasons to stay sober instead of just performing sobriety to keep them calm.
          </p>

          <h2>The friends who stayed became the work I do now</h2>

          <p>
            Here's the part I didn't see coming. The men who showed up for me in early recovery are the reason I do this for a living. I became a drug and alcohol interventionist because I know what it's like to be the person everyone's given up on — and I know what one person refusing to disappear can do.
          </p>

          <p>
            Twenty-three years later, I still have relationships with people from those first months. We're not the same broken men we were. We built lives. That's what I want every family who calls me to understand: the person you're grieving isn't gone. They're buried under something. And the way out always seems to involve at least one person who decides to stay.
          </p>

          <h2>Frequently Asked Questions About Early Recovery</h2>

          <div className="space-y-6 my-8">
            {faqs.map((f) => (
              <div key={f.question}>
                <h3 className="text-lg font-semibold mb-2">{f.question}</h3>
                <p>{f.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted/50 border border-border rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-2">You Don't Have to Be the Only One Who Shows Up</h3>
            <p>
              If you've been carrying all of this alone, you've done more than most people could — and you were never meant to do it by yourself. Listen to <strong>The Party Wreckers</strong> podcast for real conversations about addiction, intervention, and recovery from families who've been where you are. If you're ready to{" "}
              <a href="https://freedominterventions.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                talk to a professional interventionist
              </a>
              , reach out at FreedomInterventions.com. Let's get some people in that room with you.
            </p>
          </div>

          <div className="border-t border-border pt-8 mt-12">
            <h3 className="text-xl font-bold mb-4">Related Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog/first-year-sobriety-what-to-expect" className="text-primary hover:underline">
                  What to Expect in the First Year of Sobriety
                </Link>
              </li>
              <li>
                <Link to="/blog/second-year-of-sobriety-what-to-expect" className="text-primary hover:underline">
                  Nobody Warns You About the Second Year of Sobriety
                </Link>
              </li>
              <li>
                <Link to="/blog/hope-is-a-verb-small-daily-actions-families-addiction" className="text-primary hover:underline">
                  Hope Is a Verb: Small Daily Actions for Families
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

export default EarlyRecoveryWhoShowsUp;
