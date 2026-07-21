import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SocialShareButtons from "@/components/SocialShareButtons";
import ArticleAnswerSummary from "@/components/ArticleAnswerSummary";
import { ArrowLeft } from "lucide-react";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import blogImage from "@/assets/blog-still-angry-after-sober.jpg";

const SLUG = "still-angry-after-loved-one-gets-sober";
const TITLE = "They Got Sober. So Why Are You Still Angry?";
const DESCRIPTION =
  "Your loved one got sober, but you're still angry. Interventionist Matt Brown explains why family healing after addiction runs on its own timeline.";

const faqs = [
  {
    question: "Why am I still angry after my loved one got sober?",
    answer:
      "Because during active addiction, survival mode suppressed your emotions. Sobriety removes the crisis, which finally makes it safe for stored anger and grief to surface. It's a normal stage of family healing, not a character flaw.",
  },
  {
    question: "How long does it take a family to heal after addiction?",
    answer:
      "There's no fixed timeline, but most families need months to years — often longer than the person in recovery expects. Healing moves faster when family members get their own support instead of waiting for the sober person's progress to fix everything.",
  },
  {
    question: "Should I hide my anger to protect their recovery?",
    answer:
      "No. Suppressed anger leaks out as tension, sarcasm, and distance, which strains recovery more than honest conversation does. Express it directly and calmly, ideally with support from a therapist, coach, or family program.",
  },
  {
    question: "Does the family need recovery support if the addict is already in treatment?",
    answer:
      "Yes. Addiction affects the whole family system, and the family develops its own survival patterns that don't disappear when the substance does. Al-Anon, family coaching, and therapy give the family its own path to heal.",
  },
  {
    question: "Is it wrong that I don't trust them yet, even though they're sober?",
    answer:
      "Not at all. Trust is rebuilt through consistent behavior over time — sobriety is the start of that process, not the proof of it. You're allowed to let trust take as long as it takes.",
  },
];

const StillAngryAfterSober = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${TITLE} — Party Wreckers`}
        description={DESCRIPTION}
        canonical={`/blog/${SLUG}`}
        ogType="article"
        ogImage={blogImage}
        keywords="still angry after loved one gets sober, family healing after addiction, recovery timeline, family anger, Matt Brown interventionist"
        publishedTime="2026-07-21"
      />

      <ArticleJsonLd
        title={TITLE}
        description={DESCRIPTION}
        image={blogImage}
        datePublished="2026-07-21"
        dateModified="2026-07-21"
        slug={SLUG}
      />

      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Still Angry After Loved One Gets Sober", url: `/blog/${SLUG}` },
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
            alt="A young adult daughter and her mother sitting at a kitchen table in the morning, quiet tension between them"
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
            <time dateTime="2026-07-21">July 21, 2026</time>
          </div>
        </header>

        <div className="mb-8">
          <SocialShareButtons url={`https://partywreckers.com/blog/${SLUG}`} title={TITLE} />
        </div>

        <ArticleAnswerSummary slug={SLUG} />

        <div className="prose prose-lg max-w-none text-foreground">
          <p>
            A mom called me a few months ago, and she was almost whispering, like she was confessing something. Her son had been sober for eight months. Doing everything right — meetings, sponsor, a job, showing up for Sunday dinners. And she said, "Matt, I should be grateful. So why am I so angry at him I can barely sit at the same table?"
          </p>

          <p>I told her the truth: because you're right on schedule.</p>

          <p>
            If you're still angry after your loved one gets sober, nothing is wrong with you. Families heal on their own timeline, and that timeline almost never matches the person in recovery. I've seen this in twenty years of intervention work, and I lived it from the other side. When I got sober in April of 2003, I thought my family would be relieved. They were. They were also furious, exhausted, and nowhere near ready to celebrate. It took me years to understand why.
          </p>

          <h2>Why Does the Family's Anger Show Up After Sobriety Starts?</h2>

          <p>
            Anger often surfaces after a loved one gets sober because it finally becomes safe to feel it. During active addiction, families run on adrenaline and fear — there's no room for anger when you're checking someone's breathing at 2 a.m. Once the crisis ends, the feelings that got shelved come off the shelf all at once.
          </p>

          <p>
            Think about what you did to survive the addiction years. You managed crises. You covered at work. You lied to relatives. You watched the driveway. Every ounce of emotional energy went into keeping someone alive. Anger is a luxury the crisis never allowed you.
          </p>

          <p>
            Sobriety removes the emergency. And when the emergency leaves the room, the bill arrives. All those years of missed birthdays, drained bank accounts, broken promises, and terror — your nervous system kept the receipts. That's not bitterness. That's grief finally getting its turn to speak.
          </p>

          <h2>The Recovery Timeline Isn't Shared — And That's the Hard Part</h2>

          <p>
            The person in recovery and the family are healing from the same addiction on completely different schedules. The newly sober person is often feeling better than they have in years, while the family is just beginning to feel how bad it actually was. Both things are true at once, and the mismatch causes real friction.
          </p>

          <p>
            Your loved one has meetings, a sponsor, a counselor, maybe a whole treatment team. They have a daily structure built around their healing. What do you have? Most families have nothing — no meetings, no sponsor, nobody asking how they slept.
          </p>

          <p>
            So you get scenes like this one, which I've watched play out in living rooms across the country: the sober person walks in glowing about their new life, and the spouse sitting across from them is thinking, "You seem awfully happy for someone who put us through hell." Neither of them is wrong. They're just standing at different mile markers on the same road. This is one of the quiet truths inside{" "}
            <Link to="/blog/how-recovery-changes-relationships" className="text-primary hover:underline">
              how recovery changes relationships
            </Link>
            .
          </p>

          <h3>What the Newly Sober Person Often Doesn't Understand</h3>

          <p>
            Early recovery is self-focused by design — it has to be. But that self-focus can look, from the outside, like the same self-centeredness that ran the addiction. When your loved one says "I need to put my recovery first," a part of you hears "I'm still choosing something over you."
          </p>

          <p>
            Naming that out loud, without accusation, is often the first honest conversation a family has in years.
          </p>

          <h2>Is It Okay to Be Angry at Someone in Recovery?</h2>

          <p>
            Yes. Anger at someone in recovery is normal, common, and workable — as long as it gets expressed instead of stored. The anger itself doesn't damage recovery. Pretending it isn't there is what does the damage, because buried anger doesn't disappear. It leaks.
          </p>

          <p>
            It leaks out as sarcasm at dinner. As keeping score. As checking their phone "just in case." As the flat tone of voice that says everything your words won't. Your loved one feels it, can't name it, and the house fills up with a tension nobody claims.
          </p>

          <p>
            Here's what I tell families: you don't owe anyone instant forgiveness in exchange for sobriety. Getting sober is what they should have been doing all along — it's the beginning of repair, not the completion of it. Trust is rebuilt through consistency over time, and you're allowed to let that take as long as it takes.
          </p>

          <h2>What Actually Helps Families Heal After a Loved One Gets Sober?</h2>

          <p>
            Family healing after addiction requires the same thing individual recovery does: support, honesty, and structure. Waiting to feel better rarely works. Here's what does:
          </p>

          <ul>
            <li>
              <strong>Get your own support.</strong> Al-Anon, a therapist who understands addiction, a family coaching program — anything where your healing is the agenda, not theirs. The family members who recover are the ones who treat their own healing as a real project.
            </li>
            <li>
              <strong>Say the anger out loud, on purpose.</strong> Scheduled, honest conversations beat spontaneous explosions. "I'm glad you're sober, and I'm still angry about the last five years. Both are true." That sentence has saved more marriages than any apology I've ever heard.
            </li>
            <li>
              <strong>Stop performing gratitude.</strong> You can be thankful they're alive and still hurt. Forced cheerfulness just teaches everyone in the house to lie politely again — and that's the old system with a new coat of paint.
            </li>
            <li>
              <strong>Let repair be earned, not declared.</strong> Watch actions over months, not words over dinner. Consistency is the only currency that rebuilds trust.
            </li>
          </ul>

          <p>
            And a word to anyone reading this who's in recovery: if your family is angry, don't argue them out of it. Their anger is evidence they stayed. Sit still and let them have it. I had to learn that one the hard way — my amends didn't start with what I said, they started with what I stopped defending.
          </p>

          <h3>The Family Gets to Recover Too</h3>

          <p>
            Here's the part I want you to carry with you: the anger isn't a sign the family is broken. It's a sign the family is finally thawing out. Numbness was the disease talking. Feeling — even the ugly feelings — is what healing sounds like at the start.
          </p>

          <p>
            The mom who called me whispering her confession? She joined a family program, started saying the true things out loud, and about a year later she told me Sunday dinners felt like dinners again instead of performances. Her son's sobriety didn't do that. Her own recovery did.
          </p>

          <p>You survived the crisis. Now you get to do more than survive.</p>

          <h2>Frequently Asked Questions</h2>

          <div className="space-y-6 my-8">
            {faqs.map((f) => (
              <div key={f.question}>
                <h3 className="text-lg font-semibold mb-2">{f.question}</h3>
                <p>{f.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted/50 border border-border rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-2">You Don't Have to Figure This Out Alone</h3>
            <p>
              If this sounds like your house right now, listen to <strong>The Party Wreckers</strong> podcast, where we talk about the real, unpolished side of addiction and family recovery every week. And if your family is stuck — whether your loved one is still using or newly sober and the house still doesn't feel right —{" "}
              <a href="https://freedominterventions.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                reach out through FreedomInterventions.com
              </a>
              . Helping families find their way back to each other is what I do.
            </p>
            <p className="mt-4">— Matt Brown</p>
          </div>

          <div className="border-t border-border pt-8 mt-12">
            <h3 className="text-xl font-bold mb-4">Related Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog/how-recovery-changes-relationships" className="text-primary hover:underline">
                  How Recovery Changes Relationships
                </Link>
              </li>
              <li>
                <Link to="/blog/rebuilding-trust-in-recovery-families" className="text-primary hover:underline">
                  Rebuilding Trust in Recovery for Families
                </Link>
              </li>
              <li>
                <Link to="/blog/coming-home-from-rehab-what-families-arent-prepared-for" className="text-primary hover:underline">
                  Coming Home From Rehab: What Families Aren't Prepared For
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

export default StillAngryAfterSober;
