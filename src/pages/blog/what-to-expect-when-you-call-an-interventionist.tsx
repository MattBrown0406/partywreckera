import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SocialShareButtons from "@/components/SocialShareButtons";
import ArticleAnswerSummary from "@/components/ArticleAnswerSummary";
import { ArrowLeft } from "lucide-react";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import blogImage from "@/assets/blog-what-to-expect-when-you-call-an-interventionist.jpg";

const SLUG = "what-to-expect-when-you-call-an-interventionist";
const TITLE = "What to Expect When You Call an Interventionist for the First Time";
const DESCRIPTION =
  "Nervous about calling an interventionist? Here's what actually happens on that first call — what I'll ask, what you should ask, and what comes next.";

const faqs = [
  {
    question: "Is the first call with an interventionist confidential?",
    answer:
      "Yes. What you share stays between you and the interventionist. Your loved one is not notified that you called, and nothing happens without the family deciding to move forward.",
  },
  {
    question: "How much does the first call cost?",
    answer:
      "Most professional interventionists, including me, offer the initial consultation free. You should never pay just to find out whether an intervention makes sense for your situation.",
  },
  {
    question: "Do I need my whole family on board before I call?",
    answer:
      "No. Most first calls come from one person — often the one everyone else thinks is overreacting. Getting the rest of the family aligned is part of what an interventionist helps with, not a prerequisite.",
  },
  {
    question: "Will the interventionist pressure me to hire them?",
    answer:
      "A good one won't. The first call is about assessment and fit, and sometimes the honest recommendation is coaching or boundaries rather than a full intervention. Pressure tactics are a red flag.",
  },
  {
    question: "What information should I have ready when I call?",
    answer:
      "Nothing formal. A basic picture of what's happening, what you've tried, and who's involved is plenty. The messy, unrehearsed version of the story is exactly what the interventionist needs to hear.",
  },
];

const WhatToExpectWhenYouCallAnInterventionist = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${TITLE} — Party Wreckers`}
        description={DESCRIPTION}
        canonical={`/blog/${SLUG}`}
        ogType="article"
        ogImage={blogImage}
        keywords="what to expect when you call an interventionist, first call interventionist, hiring an interventionist, intervention consultation"
        publishedTime="2026-08-10"
      />

      <ArticleJsonLd
        title={TITLE}
        description={DESCRIPTION}
        image={blogImage}
        datePublished="2026-08-10"
        dateModified="2026-08-10"
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
            alt="A woman sitting alone in her parked car at dusk, holding a phone to her ear"
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
            <time dateTime="2026-08-10">August 10, 2026</time>
          </div>
        </header>

        <div className="mb-8">
          <SocialShareButtons url={`https://partywreckers.com/blog/${SLUG}`} title={TITLE} />
        </div>

        <ArticleAnswerSummary slug={SLUG} />

        <div className="prose prose-lg max-w-none text-foreground">
          <p>
            Most of the calls I get start the same way. There's a pause after I answer, and then something like, "I don't even know if I'm calling the right place." Sometimes the person is in their car in a parking lot because it's the only private spot they have. Sometimes they're whispering because their son is asleep down the hall.
          </p>

          <p>
            I remember one mom who told me she'd had my number saved in her phone for four months before she dialed it. Four months. When I asked what finally made her call, she said, "I ran out of reasons not to."
          </p>

          <p>
            If you're wondering what to expect when you call an interventionist, this article is that first call, laid out in advance. I've been on the receiving end of thousands of these conversations over 20-plus years, and before that I was the guy my own family needed to make a call about. So I know both sides of this phone line. Let me take the mystery out of it.
          </p>

          <h2>What Actually Happens When You Call an Interventionist?</h2>

          <p>
            Here's the short answer: you talk, I listen, and together we figure out whether an intervention is even the right move. That's it. The first call with an interventionist is a conversation, not a commitment. Nobody shows up at your loved one's door because you dialed a phone number.
          </p>

          <p>
            There's no script you need to prepare. You don't need to have the dates right or the story organized. Most families apologize at some point for "rambling," and I always tell them the same thing: the rambling version is the honest version. That's the one I want.
          </p>

          <p>
            A typical first call runs 30 to 60 minutes. It's free at most practices, including mine. And here's something families are often surprised by: sometimes my honest advice is that you don't need a professional intervention yet — you need a different conversation, a boundary, or family coaching first. A good interventionist will tell you that.
          </p>

          <h2>What Will the Interventionist Ask You?</h2>

          <p>
            The questions on a first call are practical, not clinical. I'm trying to understand the shape of the problem and the shape of your family, because interventions are really about family systems, not just the person using. Expect questions like these:
          </p>

          <ul>
            <li>
              <strong>What's happening right now?</strong> What substances are involved, how long has this been going on, and what does a typical week look like?
            </li>
            <li>
              <strong>What have you already tried?</strong> Rehab before? Ultimatums? Promises? This isn't a test — it tells me what your loved one has already learned to navigate around.
            </li>
            <li>
              <strong>Who's in the family, and where does everyone stand?</strong> Who's exhausted, who's still rescuing, who's stopped talking to whom?
            </li>
            <li>
              <strong>Are there safety concerns?</strong> Overdoses, drunk driving, weapons in the home, threats of suicide. I ask directly because the answers change the plan.
            </li>
            <li>
              <strong>What are the practical realities?</strong> Insurance, finances, work situations, kids in the home. Real plans have to survive contact with real life.
            </li>
          </ul>

          <p>
            Notice what's not on that list: judgment. You will not shock me. Whatever has happened in your house, I promise I've heard it — and lived a version of it myself.
          </p>

          <h2>What Should You Ask an Interventionist?</h2>

          <p>
            You're interviewing me too, and you should. Any interventionist worth hiring will welcome hard questions. Here's what I'd ask if I were in your seat:
          </p>

          <ul>
            <li>
              <strong>What's your training and experience?</strong> Look for credentials, years in the field, and comfort talking about both.
            </li>
            <li>
              <strong>What model of intervention do you use, and why?</strong> You want a clear answer, not jargon. Invitational, family systems, Johnson model — the point is that they can explain their approach and when it fits.
            </li>
            <li>
              <strong>What happens if my loved one says no?</strong> This is the big one. If the answer is a shrug, keep looking. A real plan includes what the family does next, whatever the answer is.
            </li>
            <li>
              <strong>What does this cost, and what's included?</strong> Get clarity on fees, travel, and how long they stay involved afterward.
            </li>
            <li>
              <strong>How do you choose a treatment center — and do you take money from them?</strong> You want someone whose recommendations are based on fit, not finder's fees.
            </li>
          </ul>

          <p>
            If an interventionist rushes you, guarantees an outcome, or pressures you to sign today, that's your answer. Calm confidence doesn't need pressure tactics. For more on vetting, read{" "}
            <Link to="/blog/how-to-choose-an-interventionist" className="text-primary hover:underline">
              how to choose an interventionist
            </Link>
            .
          </p>

          <h2>What Happens After the First Call?</h2>

          <p>
            If we agree an intervention makes sense, the next step is planning — not an ambush. I gather the family, usually within days, and we prepare together: who participates, what gets said, what treatment option is already arranged, and what boundaries the family is ready to actually keep. That's{" "}
            <Link to="/blog/what-tv-gets-wrong-about-interventions" className="text-primary hover:underline">
              what really happens during a professional intervention
            </Link>
            .
          </p>

          <p>
            If we agree it's not time yet, you leave the call with something concrete anyway: language to use at home, a boundary to set, resources for the family, and a clear sense of what would signal it's time to move. Either way, you're no longer guessing alone at midnight.
          </p>

          <p>
            One thing I tell every family: the first call changes something even when nothing else changes yet. You've moved the problem out of the dark, where addiction does its best work, and into daylight, where plans get made.
          </p>

          <h2>What If You're Not Ready to Call Yet?</h2>

          <p>
            Then you're in good company — almost nobody calls the first day they think about it. That mom with my number saved for four months? Her story is the norm, not the exception.
          </p>

          <p>
            But I'll be straight with you, because that's the job: waiting has a cost, and the cost compounds. Families usually wait for certainty, and certainty never comes. What comes instead is another incident, another scare, another holiday everyone survives instead of enjoys.
          </p>

          <p>
            You don't have to be ready to hire anyone. You just have to be ready to talk for half an hour. That's a much smaller door to walk through — and it's the only one you need today.
          </p>

          <h2>The Call Is Smaller Than the Problem</h2>

          <p>
            Here's what I know after two decades of answering this phone: the call is always smaller than the fear of the call. Families build it up into a verdict on their loved one, on their parenting, on their marriage. It isn't. It's a conversation with someone who's seen the road ahead and can hand you a map.
          </p>

          <p>You've been carrying this alone long enough. You don't have to carry the next part alone too.</p>

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
            <h3 className="text-xl font-bold mb-2">Ready When You Are</h3>
            <p>
              If this is your season to make that call, I'd be honored to take it.{" "}
              <a
                href="https://freedominterventions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Reach out for a free consultation
              </a>{" "}
              and we'll talk — no pressure, no commitment, just a clear-eyed conversation about what's possible. And if you're still in the gathering-courage phase, that's okay too. Listen to{" "}
              <Link to="/episodes" className="text-primary hover:underline">
                The Party Wreckers podcast
              </Link>
              , learn the terrain, and call when you're ready. I'll be here.
            </p>
          </div>

          <div className="border-t border-border pt-8 mt-12">
            <h3 className="text-xl font-bold mb-4">Related Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog/how-to-choose-an-interventionist" className="text-primary hover:underline">
                  How to Choose an Interventionist
                </Link>
              </li>
              <li>
                <Link to="/blog/intervention-without-a-professional" className="text-primary hover:underline">
                  Can You Do an Intervention Without a Professional?
                </Link>
              </li>
              <li>
                <Link to="/blog/what-tv-gets-wrong-about-interventions" className="text-primary hover:underline">
                  What Really Happens at an Intervention?
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

export default WhatToExpectWhenYouCallAnInterventionist;
