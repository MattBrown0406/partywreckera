import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SocialShareButtons from "@/components/SocialShareButtons";
import ArticleAnswerSummary from "@/components/ArticleAnswerSummary";
import { ArrowLeft } from "lucide-react";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import blogImage from "@/assets/blog-phone-call-you-keep-not-making.jpg";

const SLUG = "the-phone-call-you-keep-not-making";
const TITLE = "The Phone Call You Keep Not Making";
const DESCRIPTION =
  "You keep almost making the call. Interventionist Matt Brown on how to get help for a family member with addiction — what to say, what to have ready, what happens next.";

const faqs = [
  {
    question: "How do I get help for a family member with addiction if they refuse treatment?",
    answer:
      "You start without them. Interventions exist precisely for people who are refusing. The family gets prepared first — the plan, the treatment placement, the boundaries, the exact words — and the loved one is invited into a conversation they didn't ask for. Refusal is the starting condition, not a disqualifier.",
  },
  {
    question: "What does the first call with an interventionist cost?",
    answer:
      "At Freedom Interventions, the initial consultation call is free. It's an assessment conversation, not a billable session. You'll get a straight answer about whether an intervention fits your situation and what it would involve before any money changes hands.",
  },
  {
    question: "Should I tell my loved one I'm calling for help?",
    answer:
      "Usually not before an intervention, because advance notice tends to produce disappearance or escalation. But if you're calling for family coaching or your own support, you can absolutely be open about it. \u201cI'm getting help for me\u201d is a true and powerful sentence.",
  },
  {
    question: "What if my family doesn't agree that it's this serious?",
    answer:
      "You still call. One motivated family member is enough to start. Part of the preparation work is bringing hesitant family members along, and that's much easier to do with a professional plan in hand than with a hunch and an argument.",
  },
  {
    question: "Is it too late if we've already done treatment two or three times?",
    answer:
      "No. Multiple treatment episodes are common and not a sign of a hopeless case. What matters more is whether the last placements were the right level of care, whether the aftercare plan was real, and whether the family environment changed at all. Often it's the third try that sticks because it's the first one that addressed all three.",
  },
];

const ThePhoneCallYouKeepNotMaking = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${TITLE} — Party Wreckers`}
        description={DESCRIPTION}
        canonical={`/blog/${SLUG}`}
        ogType="article"
        ogImage={blogImage}
        keywords="how to get help for a family member with addiction, calling an interventionist, first call interventionist, family addiction help, intervention consultation"
        publishedTime="2026-07-30"
      />

      <ArticleJsonLd
        title={TITLE}
        description={DESCRIPTION}
        image={blogImage}
        datePublished="2026-07-30"
        dateModified="2026-07-30"
        slug={SLUG}
      />

      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: TITLE, url: `/blog/${SLUG}` },
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
            alt="A woman in her 50s sitting in her parked car at dusk with her phone face down on the passenger seat"
            className="w-full rounded-lg shadow-lg"
            width={1024}
            height={1024}
          />
        </div>

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">{TITLE}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>By Matt Brown</span>
            <span>|</span>
            <time dateTime="2026-07-30">July 30, 2026</time>
          </div>
        </header>

        <div className="mb-8">
          <SocialShareButtons url={`https://partywreckers.com/blog/${SLUG}`} title={TITLE} />
        </div>

        <ArticleAnswerSummary slug={SLUG} />

        <div className="prose prose-lg max-w-none text-foreground">
          <p>
            There is a woman I talked to a few years back who told me she had my number saved in her phone for eleven months before she dialed it. Eleven months. She'd pull it up in the grocery store parking lot, look at it, and put the phone face down on the passenger seat. She told me she wasn't stalling. She was "waiting for the right moment."
          </p>

          <p>
            I knew exactly what she meant. I did the same thing with my own life for years — not with a phone number, with an admission. I kept waiting for a moment when asking for help would feel like something other than failure. That moment doesn't exist. I got sober in April of 2003, and what got me there wasn't clarity. It was exhaustion.
          </p>

          <p>
            So if you're reading this with a number in your phone you haven't dialed, this one's for you. If you're trying to figure out how to get help for a family member with addiction and you keep not doing the one thing that would actually start it — let's take the mystery out of that call.
          </p>

          <h2>Why Is It So Hard to Ask for Help With a Loved One's Addiction?</h2>

          <p>
            Because making the call makes it real. As long as you haven't said it out loud to a professional, there's still a version of the story where it's a rough patch, where he's just going through something, where she'll pull out of it after the holidays. The call ends that story. Underneath that is the thing nobody says at the dinner table: shame. Families believe, almost universally, that a loved one's addiction is evidence of something they got wrong. So calling for help feels like turning yourself in.
          </p>

          <p>
            I'll say this plainly, and I've said it to a few thousand families now: you did not cause this. You also cannot love someone out of it by trying harder in private. Those two facts are what make the phone call reasonable instead of shameful.
          </p>

          <h2>What Actually Happens When You Call an Interventionist?</h2>

          <p>
            Here's the part that surprises people: the first call is not a sales pitch, and it is not the intervention. It's a conversation. Usually 20 to 45 minutes. You talk, I listen and ask questions, and by the end you have a clearer picture of your situation than when you started — whether or not you ever hire anybody.
          </p>

          <p>What I'm listening for on that first call:</p>

          <ul>
            <li>What he or she is actually using, how much, and how often — as best you know it</li>
            <li>Whether there's any immediate safety risk (overdose history, driving, weapons, kids in the home, medical detox needs)</li>
            <li>Who's in the family system and who still has influence</li>
            <li>What's already been tried, and what happened</li>
            <li>What the family is currently doing that's keeping the situation stable enough for it to continue</li>
          </ul>

          <h2>What Should You Have Ready Before You Call?</h2>

          <p>
            You don't need a dossier. You need about ten minutes of honest notes. If you have these five things written down, the call goes twice as far:
          </p>

          <ol>
            <li>
              <strong>A rough timeline.</strong> When did this start getting worse? What were the last three big incidents and roughly when?
            </li>
            <li>
              <strong>The financial picture.</strong> Are you paying rent, phone, car, legal fees, insurance? Write down actual monthly numbers, not vibes.
            </li>
            <li>
              <strong>The list of people.</strong> Who could realistically be in the room — including the ones you're afraid would blow it up.
            </li>
            <li>
              <strong>The medical piece.</strong> Any prior treatment, any withdrawal history, any prescriptions, any diagnoses. Alcohol and benzo withdrawal can be medically dangerous, so this matters.
            </li>
            <li>
              <strong>Your line.</strong> What you are no longer willing to do. You don't have to be sure. You just have to know what you're circling.
            </li>
          </ol>

          <h2>What If You're Not Ready to Hire Anyone?</h2>

          <p>
            Then don't. Call anyway. There is no rule that says the first call has to end in a decision, and any professional who pressures you into one on day one is telling you something about themselves. Most families are somewhere in the middle: they know something has to change, and they don't yet know whether that's a full intervention, a coaching plan, a boundary reset, or one honest conversation done well. Those are different tools. Part of my job is telling you which one your situation calls for — including when the answer is "not yet, and here's what to do in the meantime."
          </p>

          <h2>How Do You Make the Call Without Falling Apart?</h2>

          <p>
            You probably will get emotional, and that is fine. I have never once thought less of a parent who cried on the phone with me. Here's what makes it easier:
          </p>

          <ul>
            <li>Make the call from somewhere private, not the driveway between errands. Give it 30 real minutes.</li>
            <li>Make it alone the first time if the other parent or spouse isn't on the same page. You do not need consensus to gather information.</li>
            <li>
              Write your first sentence down: "My son is 27, he's using fentanyl, we've tried treatment twice, and I don't know what to do next." That sentence is enough.
            </li>
            <li>Set a time and put it on the calendar like a doctor's appointment. "Sometime this week" has been sometime this week for a year.</li>
          </ul>

          <p>
            If the rest of your family isn't there yet, that's not a reason to wait —{" "}
            <Link to="/blog/you-dont-need-whole-family-on-board-to-start" className="text-primary hover:underline">
              you don't need the whole family on board to start
            </Link>
            .
          </p>

          <h2>The Thing About Waiting</h2>

          <p>
            Addiction doesn't hold still while you get comfortable. That's not a scare tactic; it's just the arithmetic of the disease. The version of your loved one you're deciding about today is the healthiest version you'll get to decide about.
          </p>

          <p>
            The woman with my number in her phone for eleven months? Her son has almost four years now. He's working, he's a decent uncle, he's got a life. She still tells me she thinks about those eleven months. I tell her what I'll tell you: the eleven months are over, and she made the call. That's the part that counts.
          </p>

          <h2>If You Take One Thing From This</h2>

          <p>
            Make the call. Not the perfect call, not the fully-informed call, not the call where you've finally gotten your brother-in-law to agree. The imperfect one, this week, from a quiet room.
          </p>

          <p>
            You don't have to know what to do. That's my job. You just have to be willing to say it out loud to somebody who isn't going to flinch.
          </p>

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
            <h3 className="text-xl font-bold mb-2">Keep Going</h3>
            <p>
              If this hit close to home, come listen to <strong>The Party Wreckers</strong> podcast — real conversations about intervention, addiction, and what families actually go through, with none of the polish. And when you're ready to talk about your situation specifically, reach out at{" "}
              <a
                href="https://freedominterventions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                FreedomInterventions.com
              </a>
              . The first conversation is free, and you can bring the whole mess with you. That's what I'm here for.
            </p>
          </div>

          <div className="border-t border-border pt-8 mt-12">
            <h3 className="text-xl font-bold mb-4">Related Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog/you-dont-need-whole-family-on-board-to-start" className="text-primary hover:underline">
                  You Don't Need the Whole Family on Board to Start
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/stop-waiting-for-a-sign-when-to-call-professional-interventionist"
                  className="text-primary hover:underline"
                >
                  Stop Waiting for a Sign: When to Call a Professional Interventionist
                </Link>
              </li>
              <li>
                <Link to="/blog/do-interventions-actually-work-success-rates" className="text-primary hover:underline">
                  Do Interventions Actually Work?
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

export default ThePhoneCallYouKeepNotMaking;
