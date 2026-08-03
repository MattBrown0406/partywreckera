import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SocialShareButtons from "@/components/SocialShareButtons";
import ArticleAnswerSummary from "@/components/ArticleAnswerSummary";
import { ArrowLeft } from "lucide-react";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import blogImage from "@/assets/blog-nobody-warned-me-about-the-boredom.jpg";

const SLUG = "nobody-warned-me-about-the-boredom";
const TITLE = "Nobody Warned Me About the Boredom";
const DESCRIPTION =
  "Nobody warns you about boredom in early sobriety. Matt Brown on why the quiet almost took him out at four months sober, and what actually worked.";

const faqs = [
  {
    question: "Is boredom in early sobriety normal?",
    answer:
      "Yes. It's one of the most common and least discussed experiences in the first year. When addiction stops, it takes an enormous amount of activity, drama, and built-in structure with it. The emptiness that follows feels alarming, but it's a normal part of the brain and the calendar adjusting to life without a substance.",
  },
  {
    question: "Can boredom cause a relapse?",
    answer:
      "It's a significant contributing factor. Boredom rarely causes a relapse by itself, but it creates the conditions — unstructured time, isolation, and a mind hunting for stimulation. Most people who relapse in the first year can point to a stretch of empty, unaccounted-for hours somewhere in the story.",
  },
  {
    question: "How long does restlessness in early recovery last?",
    answer:
      "It varies, but the sharpest stretch usually falls somewhere between month two and month eight, after the initial relief wears off and before a new routine has taken hold. It tends to ease as work, relationships, and daily structure fill back in. It doesn't vanish entirely — it just stops feeling like an emergency.",
  },
  {
    question: "What should I do if my loved one seems bored and irritable in early recovery?",
    answer:
      "Name it gently and stay specific. Ask what their evenings and weekends look like, and offer ordinary company rather than solutions. If the restlessness runs for weeks, comes with isolation, or they start pulling away from meetings and support, treat that as a signal to get professional guidance.",
  },
  {
    question: "Does staying busy fix boredom in sobriety?",
    answer:
      "Only partially. Structure protects the dangerous hours, which matters enormously in the first year. But long-term recovery also requires building a tolerance for quiet, because a life built entirely on constant motion is just a different way of avoiding stillness.",
  },
];

const NobodyWarnedMeAboutTheBoredom = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${TITLE} — Party Wreckers`}
        description={DESCRIPTION}
        canonical={`/blog/${SLUG}`}
        ogType="article"
        ogImage={blogImage}
        keywords="boredom in early sobriety, restlessness in early recovery, boredom relapse risk, early recovery structure, first year of sobriety"
        publishedTime="2026-08-03"
      />

      <ArticleJsonLd
        title={TITLE}
        description={DESCRIPTION}
        image={blogImage}
        datePublished="2026-08-03"
        dateModified="2026-08-03"
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
            alt="A man in his early 30s sitting alone on the edge of a made bed in a quiet room during the early evening"
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
            <time dateTime="2026-08-03">August 3, 2026</time>
          </div>
        </header>

        <div className="mb-8">
          <SocialShareButtons url={`https://partywreckers.com/blog/${SLUG}`} title={TITLE} />
        </div>

        <ArticleAnswerSummary slug={SLUG} />

        <div className="prose prose-lg max-w-none text-foreground">
          <p>
            About four months into sobriety, I sat on the edge of my bed on a Saturday night at 7:40 and realized I had absolutely nothing to do. No plans. No one waiting on me. No crisis to manage. Just a quiet room and a long evening in front of me.
          </p>

          <p>I want to tell you I felt grateful. I felt like I was losing my mind.</p>

          <p>
            Everybody warned me about cravings. Everybody warned me about the people I'd have to stop calling. Nobody warned me about boredom in early sobriety — the flat, itchy, hours-long nothing that shows up once the chaos stops. That boredom is a bigger relapse risk than most families ever realize. Twenty-three years later, I still think it's the most underestimated part of getting sober.
          </p>

          <h2>Why Is Boredom in Early Sobriety So Dangerous?</h2>

          <p>
            Boredom in early sobriety is dangerous because it's the first time in years the person has nothing to react to. Addiction is a full-time job — getting, using, hiding, recovering, explaining. Take that away and you don't get peace. You get a hole where a schedule used to be.
          </p>

          <p>
            I didn't understand that at four months. I thought something was wrong with me. I'd done the hard part. I'd stopped. Shouldn't I feel better?
          </p>

          <p>
            Here's what was actually happening. My brain had spent years running at an artificial volume. Everything was a crisis or a high. Sober life, by comparison, sounded like a dial tone. A normal Tuesday felt unbearable — not because Tuesday was bad, but because I had no tolerance for ordinary.
          </p>

          <p>
            That's the trap. The pull isn't always toward the drink. Sometimes it's just toward something — anything — that makes the volume go back up.
          </p>

          <h2>What Boredom Actually Looks Like From the Outside</h2>

          <p>
            Families usually miss this one, because it doesn't look like a warning sign. It looks like moodiness. It looks like ingratitude.
          </p>

          <p>
            Your person got sober. They're eating, sleeping, showing up. And then they're pacing the house at 9 p.m., snapping at somebody over nothing, or suddenly deciding they need to sell the truck and move to Montana.
          </p>

          <p>Some of the things I did in my first year that were really just boredom wearing a costume:</p>

          <ul>
            <li>Picked fights I didn't care about winning</li>
            <li>Started projects at 11 p.m. and abandoned them by morning</li>
            <li>Reconnected with people I had no business reconnecting with</li>
            <li>Overcommitted to things so my calendar would look full</li>
            <li>Made big, dramatic decisions about my life on a random Thursday</li>
          </ul>

          <p>
            None of that reads as "at risk" to a family that's just relieved the using stopped. But restlessness is data. When somebody in early recovery gets irritable and aimless, that's not ingratitude. That's a nervous system that hasn't figured out what to do with quiet yet.
          </p>

          <h2>What Actually Helped Me Sit Still</h2>

          <p>
            What helped wasn't willpower. It was structure and other people, in that order. I had to build a life that had somewhere to be, and I had to stop trying to white-knuckle my way through empty evenings alone.
          </p>

          <h3>Put something in the calendar before the boredom shows up</h3>

          <p>
            I learned my dangerous window: roughly 6 p.m. to 10 p.m., and most of Sunday. So I stopped leaving those hours open. A meeting, the gym, a phone call with somebody who knew where I actually was — it didn't have to be meaningful. It had to be scheduled.
          </p>

          <p>
            The point isn't to stay busy forever. It's that decisions made in advance hold better than decisions made at 7:40 on a Saturday night.
          </p>

          <h3>Learn to tolerate ordinary on purpose</h3>

          <p>
            This one took years, and I fought it. But somewhere in there I started noticing that a decent cup of coffee, a slow morning, and a fish that didn't bite were not a failure of a day. They were just a day.
          </p>

          <p>
            Early sobriety asks you to build a tolerance for normal. That's a skill, not a personality trait. You practice it the way you practice anything else — badly at first, then a little less badly.
          </p>

          <h3>Tell somebody you're bored before you tell yourself a story about it</h3>

          <p>
            Boredom lies. It doesn't say "I'm restless." It says "this isn't working," or "you're wasting your life," or "one wouldn't be the end of the world."
          </p>

          <p>
            The fastest way I know to shrink that is to say it out loud to another person in recovery within about ten minutes of noticing it. Not a therapy session. A sentence. "I'm restless and I don't like it." It's remarkable how much smaller a feeling gets once somebody else has heard it.
          </p>

          <h2>What Can Families Do About Boredom in Early Sobriety?</h2>

          <p>
            If someone you love is newly sober and seems restless, flat, or irritable, don't take it personally and don't try to fix it. Ask about it directly, and help them fill the hours without managing their entire schedule for them.
          </p>

          <p>A few things that actually help:</p>

          <ul>
            <li>Ask "what does tonight look like?" instead of "are you okay?" — it's more specific and harder to deflect</li>
            <li>Invite them to ordinary things. A walk. An errand. Dinner with no agenda.</li>
            <li>Don't treat every quiet mood as a crisis — that pressure makes people hide</li>
            <li>Do notice patterns. Three restless weeks is different from one restless night.</li>
            <li>Get your own life going again. Your recovery from their addiction matters too.</li>
          </ul>

          <p>
            You can't entertain someone into sobriety. But you can be part of a life that's worth staying sober for, and that's not nothing. If the restlessness turns into something worse, know{" "}
            <Link to="/blog/what-to-do-after-a-relapse-first-24-hours" className="text-primary hover:underline">
              what to do after a relapse in the first 24 hours
            </Link>
            .
          </p>

          <h2>Twenty-Three Years Later</h2>

          <p>I still get restless. I don't panic about it anymore.</p>

          <p>
            What changed is that I no longer read boredom as evidence that something's wrong. Most of my life now is quiet: the gym in the morning, work I care about, my kids in the next room, a fly rod in the truck for when I can get away. It's the first life I've had that I didn't need to escape.
          </p>

          <p>
            That Saturday night at four months, I thought the quiet was the punishment. Turns out it was the whole point. I just didn't have the ears for it yet.
          </p>

          <p>
            If you're in that stretch right now — sober, restless, wondering if this is really it — stay a little longer. It gets louder in the right ways.
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
            <h3 className="text-xl font-bold mb-2">Listen, Follow, and Get Help</h3>
            <p>
              New episodes of <strong>The Party Wreckers</strong> drop weekly — real conversations about intervention, addiction, and what recovery actually looks like for families. Subscribe wherever you listen and follow along. And if you're trying to figure out whether it's time to bring in help for someone you love, reach out at{" "}
              <a
                href="https://freedominterventions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                FreedomInterventions.com
              </a>
              . One honest conversation is usually enough to know what the next step is.
            </p>
          </div>

          <div className="border-t border-border pt-8 mt-12">
            <h3 className="text-xl font-bold mb-4">Related Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog/i-didnt-want-to-get-sober" className="text-primary hover:underline">
                  I Didn't Want to Get Sober. I Got Sober Anyway.
                </Link>
              </li>
              <li>
                <Link to="/blog/what-to-do-after-a-relapse-first-24-hours" className="text-primary hover:underline">
                  What To Do After a Relapse: The First 24 Hours
                </Link>
              </li>
              <li>
                <Link to="/blog/the-phone-call-you-keep-not-making" className="text-primary hover:underline">
                  The Phone Call You Keep Not Making
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

export default NobodyWarnedMeAboutTheBoredom;
