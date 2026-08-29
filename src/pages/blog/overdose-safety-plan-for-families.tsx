import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SocialShareButtons from "@/components/SocialShareButtons";
import ArticleAnswerSummary from "@/components/ArticleAnswerSummary";
import { ArrowLeft } from "lucide-react";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import blogImage from "@/assets/blog-overdose-safety-plan-for-families.jpg";

const SLUG = "overdose-safety-plan-for-families";
const TITLE = "Keeping Them Alive Long Enough to Get Well: The Overdose Safety Plan Every Family Needs";
const DESCRIPTION =
  "An overdose safety plan for families keeps your loved one alive while you work toward treatment. Here is exactly what to do and what to keep in the house.";
const IMAGE_ALT =
  "A mother's hands placing a naloxone nasal spray box into an open kitchen drawer in a dimly lit home at night";

const faqs = [
  {
    question: "Where can families get naloxone?",
    answer:
      "Naloxone nasal spray is sold over the counter at major U.S. pharmacies without a prescription. Many state and county health departments and harm reduction programs also give it away free. Check your state health department website, since cost and coverage vary widely.",
  },
  {
    question: "Will naloxone hurt someone who is not overdosing?",
    answer:
      "No. Naloxone only acts on opioids, so it has no effect on someone who has not taken them. That is why the guidance is to give it whenever you are unsure. The risk of giving it unnecessarily is far lower than the risk of waiting.",
  },
  {
    question: "Should I still call 911 if the naloxone works?",
    answer:
      "Yes. Naloxone wears off in about thirty to ninety minutes, often before the opioids leave the body, and the person can slip back into an overdose. They may also need oxygen or further care. Most states have Good Samaritan laws protecting people who call for help.",
  },
  {
    question: "Does an overdose safety plan mean I am giving up on recovery?",
    answer:
      "No. The safety plan and the recovery plan run at the same time. Keeping someone alive is what makes recovery possible. Every family I have worked with who got a loved one into treatment did it on a day that person was still breathing.",
  },
  {
    question: "When should we stop planning and call an interventionist?",
    answer:
      "When conversations at home have stopped producing change and everyone is repeating themselves. If you have had the same talk three times with the same result, you are not short on information. You are short on leverage. That is where a professional helps.",
  },
];

const OverdoseSafetyPlanForFamilies = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${TITLE} \u2014 Party Wreckers`}
        description={DESCRIPTION}
        canonical={`/blog/${SLUG}`}
        ogType="article"
        ogImage={blogImage}
        keywords="overdose safety plan for families, naloxone at home, narcan for families, what to do during an overdose, fentanyl test strips, keeping a loved one alive addiction"
        publishedTime="2026-08-28"
      />

      <ArticleJsonLd
        title={TITLE}
        description={DESCRIPTION}
        image={blogImage}
        datePublished="2026-08-28"
        dateModified="2026-08-28"
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
            <time dateTime="2026-08-28">August 28, 2026</time>
          </div>
        </header>

        <div className="mb-8">
          <SocialShareButtons url={`https://partywreckers.com/blog/${SLUG}`} title={TITLE} />
        </div>

        <ArticleAnswerSummary slug={SLUG} />

        <div className="prose prose-lg max-w-none text-foreground">
          <p>
            I got sober on April 6, 2003. Twenty-three years later, what still stops me cold is not how close I came to losing everything. It is how close I came to not being here at all.
          </p>

          <p>
            One night in my using days, a friend rolled me onto my side and sat with me until morning. He was not trained. He had no plan. He just did not leave. I never thanked him, because I did not remember it happening. He is the reason I got to become an interventionist and a father.
          </p>

          <p>
            That is what an overdose safety plan for families really is. Not giving up on someone. Making sure they are still breathing on the day they finally say yes. Today&rsquo;s drug supply does not give families the runway it used to, so here is the plan I ask every family to build.
          </p>

          <h2>What Is an Overdose Safety Plan for Families?</h2>

          <p>
            An overdose safety plan for families is a short, written agreement about what you keep in the house, what you do in an emergency, and who does it. It has one purpose: keeping your loved one alive long enough to get well. It takes about an hour and does not require your loved one&rsquo;s permission.
          </p>

          <p>
            Most families I meet have spent months researching treatment centers and zero minutes preparing for a Tuesday night that goes wrong. Making the plan feels like admitting the worst is possible. You already know it is.
          </p>

          <p className="font-medium">
            You cannot control whether they use. You can control whether the next twenty minutes are survivable.
          </p>

          <h2>What Should Families Keep in the House?</h2>

          <p>
            Keep naloxone, a charged phone, and a written list of what your loved one takes. Naloxone nasal spray reverses an opioid overdose, is sold over the counter at major U.S. pharmacies without a prescription, and will not harm someone who is not overdosing. That last part matters, because fear of getting it wrong is what stops people from acting.
          </p>

          <p>The short list I ask families to build:</p>

          <ul className="space-y-2">
            <li>Naloxone nasal spray, at least two doses, where anyone in the house can reach it. Not a locked drawer. Not a bedroom nobody enters.</li>
            <li>A written list of what your loved one is known to use, including prescriptions and medical conditions. Tape it inside a cabinet door. Paramedics will ask.</li>
            <li>Everyone in the house knowing where it is and how to use it, teenagers included. They are often the ones home first.</li>
            <li>Your address written somewhere visible. People forget their own address under panic. I have heard it happen on a 911 call.</li>
            <li>A standing agreement that nobody uses alone, and fentanyl test strips if they are legal in your state.</li>
          </ul>

          <h2>Does Having a Safety Plan Mean You Are Enabling?</h2>

          <p>
            No. Enabling means protecting someone from the consequences of their choices. A safety plan protects them from dying, which is not a consequence anyone learns from. Those are two different things, and the difference is not subtle.
          </p>

          <p>
            Paying a dealer is enabling. Covering a DUI so it never lands on a record is enabling. Naloxone in the kitchen drawer belongs in the same category as a fire extinguisher, and nobody thinks a fire extinguisher encourages arson. You can hold a hard boundary and still keep someone breathing. If you&rsquo;re unsure where that line sits in your house, start with{" "}
            <Link to="/blog/enabling-vs-supporting-boundaries" className="text-primary hover:underline">
              enabling versus supporting and how to set boundaries
            </Link>
            .
          </p>

          <h2>How Do You Bring This Up Without Starting a Fight?</h2>

          <p>
            Say it short, say it once, and do not attach a lecture. The version that works sounds like information, not accusation. Two sentences is usually enough.
          </p>

          <p>
            Something like: &ldquo;I bought naloxone. It is in the drawer by the sink, and I wanted you to know.&rdquo; Then stop talking. The moment you add the sermon, they stop hearing the sentence that could save them.
          </p>

          <p>
            You may get an eye roll, anger, or nothing at all. None of that means it did not land. I have sat with people six months sober who said that sentence from their mother was the first time they understood how serious it had gotten. If your loved one lives elsewhere, mail them one.
          </p>

          <h2>What Do You Actually Do in the Moment?</h2>

          <p>
            If you cannot wake them, treat it as an overdose and act. Call 911 first, give naloxone, and stay with them. Do not try to figure out what they took. That is the paramedics&rsquo; job, not yours at two in the morning.
          </p>

          <p>
            What you are looking for: no response to a loud voice or a hard rub on the breastbone, breathing that is slow or stopped, blue or gray lips and fingertips, and a gurgling or snoring sound people mistake for heavy sleep. If someone says he is sleeping it off and you cannot wake him, do not believe it. Act.
          </p>

          <ol className="space-y-3">
            <li>
              <strong>Call 911.</strong> Say the person is unresponsive and not breathing normally. Most states have Good Samaritan laws protecting people who call for help during an overdose.
            </li>
            <li>
              <strong>Give the naloxone.</strong> Nasal spray goes in one nostril, full plunger, no measuring.
            </li>
            <li>
              <strong>If they are not breathing, give rescue breaths</strong> if you know how. Oxygen is what is missing.
            </li>
            <li>
              <strong>No response in two to three minutes, give a second dose.</strong>
            </li>
            <li>
              <strong>Once they are breathing, roll them onto their side</strong> so they will not choke, and stay until help arrives.
            </li>
          </ol>

          <p>
            Here is what people are not told: naloxone wears off in thirty to ninety minutes, sometimes before the drugs do, and they can go back into an overdose after seeming fine. That is why the ambulance still matters when they wake up furious. Let them be angry and alive.
          </p>

          <p>
            Naloxone does not reverse an alcohol, benzodiazepine, or stimulant overdose. Give it anyway if you are unsure. Enough of the supply now contains fentanyl that the odds favor acting.
          </p>

          <h2>The Part Nobody Says Out Loud</h2>

          <p>
            Building this plan will feel like preparing for a funeral. That is not morbidity. That is grief showing up early, trying to get you to look away. Do it anyway, then go back to the work that changes things: getting your loved one into treatment and your family some help of its own. If they&rsquo;ve already said no,{" "}
            <Link to="/blog/when-someone-says-no-intervention" className="text-primary hover:underline">
              here&rsquo;s what to do when someone refuses help
            </Link>
            .
          </p>

          <p className="font-medium">
            The safety plan is not the strategy. It is the seatbelt you wear on the way to the strategy.
          </p>

          <p>
            My friend did not save my life because he was wise. He saved it because he stayed in the room. You can be that person, and you can do it with a plan instead of luck. Twenty-three years later, I am glad somebody did.
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
            <h3 className="text-xl font-bold mb-2">You Do Not Have to Do This Alone</h3>
            <p>
              If you are reading this at midnight with your screen dimmed so nobody hears you, I have been on both sides of that house. There is a way through it, and it starts with one hour.
            </p>
            <p className="mt-4">
              Listen to{" "}
              <Link to="/episodes" className="text-primary hover:underline">
                The Party Wreckers podcast
              </Link>{" "}
              for honest conversations about addiction, intervention, and what actually helps families. And if your family is ready to stop waiting, reach out at{" "}
              <a
                href="https://freedominterventions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                FreedomInterventions.com
              </a>
              .
            </p>
          </div>

          <div className="border-t border-border pt-8 mt-12">
            <h3 className="text-xl font-bold mb-4">Related Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog/72-hours-after-crisis-window-of-willingness" className="text-primary hover:underline">
                  The 72 Hours After the Crisis: What to Do When the Door Cracks Open
                </Link>
              </li>
              <li>
                <Link to="/blog/when-someone-says-no-intervention" className="text-primary hover:underline">
                  When Someone Says No to an Intervention
                </Link>
              </li>
              <li>
                <Link to="/blog/enabling-vs-supporting-boundaries" className="text-primary hover:underline">
                  Enabling vs. Supporting: Setting Boundaries That Hold
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

export default OverdoseSafetyPlanForFamilies;
