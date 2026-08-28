import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SocialShareButtons from "@/components/SocialShareButtons";
import ArticleAnswerSummary from "@/components/ArticleAnswerSummary";
import { ArrowLeft } from "lucide-react";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import blogImage from "@/assets/blog-72-hours-after-crisis.jpg";

const SLUG = "72-hours-after-crisis-window-of-willingness";
const TITLE = "The 72 Hours After the Crisis: What to Do When the Door Cracks Open";
const DESCRIPTION =
  "After an overdose, arrest, or ER visit there's a short window when your loved one may say yes to help. Here's what to do in the first 72 hours.";
const IMAGE_ALT =
  "A mother and father sitting apart in an empty hospital corridor at four in the morning under fluorescent lights, holding cups of coffee";

const faqs = [
  {
    question: "How long does the window of willingness last after an overdose?",
    answer:
      "Usually 24 to 72 hours, sometimes less. Fear fades quickly once someone starts feeling physically better. If your plan is already built, you can often move within hours instead of days, and that alone changes your odds considerably.",
  },
  {
    question: "Should I wait until they're sober to bring up treatment?",
    answer:
      "Wait until they're medically stable and coherent \u2014 not until they're perfectly clear-headed. Waiting for ideal conversational conditions usually means waiting past the window. A shaky, scared yes is still a yes.",
  },
  {
    question: "What if they say yes and then change their mind on the way?",
    answer:
      "It happens, and it isn't a failure. Stay calm, keep driving, keep the conversation small. Most people ride out that reversal in a few minutes. If they genuinely refuse, you haven't lost anything \u2014 you've learned exactly what to prepare differently next time.",
  },
  {
    question: "Do I need a professional interventionist, or can we handle this ourselves?",
    answer:
      "Some families handle it themselves, especially when the person is already asking for help. Bring in a professional when there's family conflict, a history of failed attempts, legal complications, or more moving parts than you can manage under stress. A good interventionist carries the logistics so you can just be family.",
  },
  {
    question: "Is it manipulative to use a crisis to get someone into treatment?",
    answer:
      "No. Manipulation is getting someone to act against their own interest. This is offering a door at the one moment they can see it. You're not exploiting the crisis \u2014 you're refusing to waste it.",
  },
  {
    question: "What if they're in jail and I can't reach them?",
    answer:
      "Use the time. Talk to their attorney about treatment as part of a disposition, line up a facility that accepts direct release transfers, and get the plan in writing. Courts tend to respond better to families who show up with a concrete plan than to families asking for leniency.",
  },
];

const SeventyTwoHoursAfterCrisis = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${TITLE} \u2014 Party Wreckers`}
        description={DESCRIPTION}
        canonical={`/blog/${SLUG}`}
        ogType="article"
        ogImage={blogImage}
        keywords="what to do after a loved one's overdose, window of willingness, intervention after overdose, first 72 hours, getting someone into treatment, family crisis plan"
        publishedTime="2026-08-27"
      />

      <ArticleJsonLd
        title={TITLE}
        description={DESCRIPTION}
        image={blogImage}
        datePublished="2026-08-27"
        dateModified="2026-08-27"
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
          <img src={blogImage} alt={IMAGE_ALT} className="w-full rounded-lg shadow-lg" width={1920} height={1088} />
        </div>

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">{TITLE}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>By Matt Brown</span>
            <span>|</span>
            <time dateTime="2026-08-27">August 27, 2026</time>
          </div>
        </header>

        <div className="mb-8">
          <SocialShareButtons url={`https://partywreckers.com/blog/${SLUG}`} title={TITLE} />
        </div>

        <ArticleAnswerSummary slug={SLUG} />

        <div className="prose prose-lg max-w-none text-foreground">
          <p>
            I have been in a lot of hospital hallways at four in the morning. Fluorescent lights, vending machine coffee, a family sitting three feet apart from each other and not talking. The question always comes out the same way, in almost the same words: &ldquo;So what do we do now?&rdquo;
          </p>

          <p>
            I know that hallway from both sides. Twenty-three years ago I was the one on the other side of the door, and there was a stretch of about two days where I would have agreed to almost anything. I wasn&rsquo;t enlightened. I wasn&rsquo;t ready to change my life. I was scared, tired, and out of moves. That&rsquo;s not a spiritual awakening. That&rsquo;s a crack in the door.
          </p>

          <p>
            If you&rsquo;re trying to figure out what to do after a loved one&rsquo;s overdose, arrest, DUI, or emergency room visit, here&rsquo;s the honest answer: you have a short window, and it&rsquo;s closing faster than you think. That&rsquo;s not a reason to panic. It&rsquo;s a reason to be ready.
          </p>

          <h2>What is the &ldquo;window of willingness&rdquo; after an overdose or arrest?</h2>

          <p>
            The window of willingness is the brief period &mdash; usually 24 to 72 hours after a crisis &mdash; when someone with an addiction is scared enough to accept help they&rsquo;d normally refuse. It&rsquo;s driven by fear and exhaustion, not insight. That&rsquo;s fine. Willingness doesn&rsquo;t have to be pure to be useful.
          </p>

          <p>
            Families get tripped up here because they&rsquo;re waiting for the wrong thing. They want their loved one to want it. They want a real apology, real remorse, real understanding of what they&rsquo;ve put everyone through. That version usually shows up in month six of recovery, not in the hospital parking lot.
          </p>

          <p>
            I said yes for bad reasons. I stayed for good ones. Most people I&rsquo;ve helped into treatment could tell you the same thing.
          </p>

          <h2>What should families do in the first 24 hours?</h2>

          <p>
            In the first 24 hours, your job is not to teach a lesson, process your feelings, or get an apology. Your job is to remove every obstacle between this person and a bed. Speed matters more than eloquence.
          </p>

          <ol className="space-y-3">
            <li>
              <strong>Call a professional before you call a family meeting.</strong> An interventionist or an admissions team can tell you in ten minutes what options actually exist for your situation, your insurance, and your state. Here&rsquo;s{" "}
              <Link to="/blog/what-to-expect-when-you-call-an-interventionist" className="text-primary hover:underline">
                what to expect when you call an interventionist
              </Link>
              .
            </li>
            <li>
              <strong>Find out what the bed situation is today.</strong> Not next week. Ask about immediate admission, detox availability, and whether they&rsquo;ll take a direct transfer from the hospital or jail.
            </li>
            <li>
              <strong>Handle the logistics your loved one will use as an excuse.</strong> The dog. The job. The car in the impound lot. The phone. Write them down and start solving them now.
            </li>
            <li>
              <strong>Decide who talks.</strong> One calm person, not a committee. The person with the least history of arguing with them is usually the right choice.
            </li>
            <li>
              <strong>Get the money question answered.</strong> Know what insurance covers, what the deposit is, and what you can realistically do &mdash; before you&rsquo;re standing there guessing.
            </li>
          </ol>

          <p>
            Every one of those steps is something you can do while your loved one is still asleep, still in a holding cell, still on a monitor. You&rsquo;re not waiting on them. You&rsquo;re building the ramp.
          </p>

          <h2>What do you actually say when the door is open?</h2>

          <p>
            Keep it short, warm, and specific. Long speeches give people time to argue. The most effective thing I&rsquo;ve ever heard a mother say in that hallway was eleven words: &ldquo;I love you. There&rsquo;s a bed. I&rsquo;ll drive you right now.&rdquo;
          </p>

          <p>Things that help:</p>

          <ul className="space-y-2">
            <li>&ldquo;I&rsquo;m not mad. I&rsquo;m scared. And I&rsquo;ve already made the arrangements.&rdquo;</li>
            <li>&ldquo;You don&rsquo;t have to want this. You just have to get in the car.&rdquo;</li>
            <li>&ldquo;You can be angry at me the whole way there. That&rsquo;s allowed.&rdquo;</li>
          </ul>

          <p>Things that close the door:</p>

          <ul className="space-y-2">
            <li>Reciting the history. &ldquo;This is the fourth time&hellip;&rdquo; is true and useless right now.</li>
            <li>Asking them to explain what happened. They don&rsquo;t know, and the question triggers defense.</li>
            <li>Negotiating a smaller version. &ldquo;Maybe just outpatient&rdquo; almost always becomes nothing.</li>
          </ul>

          <p>You&rsquo;re not persuading them. You&rsquo;re making yes the easiest available option.</p>

          <h2>Why does the window close so fast?</h2>

          <p>
            The window closes because shame comes back online. In the first hours after a crisis, fear is bigger than shame. Give it a few days and that reverses &mdash; and shame is the most reliable relapse fuel there is.
          </p>

          <p>
            Here&rsquo;s what it looked like from inside, because I lived it. Day one, I was scared. Day two, I was embarrassed. By day four I had a story that made it somebody else&rsquo;s fault, and the fear had been filed under &ldquo;bad night, won&rsquo;t happen again.&rdquo; The body recovers, the memory softens, the excuse arrives right on schedule.
          </p>

          <p>
            The family goes through its own version. Relief sets in. Everybody is exhausted. Nobody wants to be the one who wrecks the fragile peace by bringing up treatment again. So you wait for a better moment, and the better moment quietly becomes next month.
          </p>

          <p className="font-medium">
            This is the part I want you to hear clearly: the calm after a crisis isn&rsquo;t progress. It&rsquo;s the pause before the next one.
          </p>

          <h2>What if you already missed the window?</h2>

          <p>
            Then you missed one window, not the only one. Addiction manufactures crises reliably. There will be another opening, and next time you can be ready in a way you weren&rsquo;t this time. Between now and then, there&rsquo;s real work that belongs to you:
          </p>

          <ul className="space-y-2">
            <li>Build the plan and keep it current &mdash; the facility, the contact, the coverage, the transportation.</li>
            <li>
              Change what you&rsquo;re doing so the next crisis lands on them instead of on you. Rescuing delays the window; it doesn&rsquo;t close it forever, but it does push it further out. This is one more reason to{" "}
              <Link to="/blog/stop-waiting-for-rock-bottom" className="text-primary hover:underline">
                stop waiting for rock bottom
              </Link>
              .
            </li>
            <li>Get your own support in place. Al-Anon, a therapist, a family coaching call. You can&rsquo;t be the calm person in the hallway if you&rsquo;re running on fumes.</li>
          </ul>

          <p>
            Families sometimes hear that as bad news. I don&rsquo;t mean it that way. It means preparation is never wasted. Every family I&rsquo;ve watched use a window well had spent time getting ready before the window ever showed up.
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
            <h3 className="text-xl font-bold mb-2">Before You Close This Tab</h3>
            <p>
              Somebody in your family is going to have a bad night eventually. That&rsquo;s not pessimism &mdash; it&rsquo;s the pattern you&rsquo;ve already been watching for years. The difference between the families who get someone into treatment and the families who don&rsquo;t usually isn&rsquo;t love, intelligence, or luck. It&rsquo;s whether the phone number was already in somebody&rsquo;s pocket.
            </p>
            <p className="mt-4">
              Go build the ramp. For more of these conversations, listen to{" "}
              <Link to="/episodes" className="text-primary hover:underline">
                The Party Wreckers podcast
              </Link>
              . And if you&rsquo;re inside the 72 hours right now, stop reading &mdash; reach out at{" "}
              <a
                href="https://freedominterventions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                FreedomInterventions.com
              </a>{" "}
              and we&rsquo;ll help you figure out the next step today.
            </p>
          </div>

          <div className="border-t border-border pt-8 mt-12">
            <h3 className="text-xl font-bold mb-4">Related Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog/what-to-expect-when-you-call-an-interventionist" className="text-primary hover:underline">
                  What to Expect When You Call an Interventionist for the First Time
                </Link>
              </li>
              <li>
                <Link to="/blog/stop-waiting-for-rock-bottom" className="text-primary hover:underline">
                  Stop Waiting for Rock Bottom
                </Link>
              </li>
              <li>
                <Link to="/blog/who-should-be-at-an-intervention" className="text-primary hover:underline">
                  Who Should Be at an Intervention?
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

export default SeventyTwoHoursAfterCrisis;
