import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SocialShareButtons from "@/components/SocialShareButtons";
import ArticleAnswerSummary from "@/components/ArticleAnswerSummary";
import { ArrowLeft } from "lucide-react";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import blogImage from "@/assets/blog-my-rock-bottom-quiet-tuesday.jpg";

const SLUG = "my-rock-bottom-was-a-quiet-tuesday-morning";
const TITLE = "My Rock Bottom Wasn't a Crash. It Was a Quiet Tuesday Morning.";
const DESCRIPTION =
  "My rock bottom in addiction wasn't dramatic. It was a quiet Tuesday morning. Here's what hitting bottom actually felt like and why it changed everything.";

const faqs = [
  {
    question: "Does someone have to hit rock bottom before they can get sober?",
    answer:
      "No. The idea that a person must lose everything before recovery is possible is one of the most dangerous myths in addiction. Many people get sober before a catastrophe because someone told the truth and stopped protecting them from consequences. Waiting for a dramatic bottom can cost a life.",
  },
  {
    question: "What does rock bottom feel like for the addict?",
    answer:
      "For many of us it's less like a crash and more like a collapse of the story we've been telling ourselves. It's the moment the excuses stop working and the gap between who we say we are and how we live becomes impossible to ignore. It's often quiet, not dramatic.",
  },
  {
    question: "How can families raise the bottom without being cruel?",
    answer:
      "You raise the bottom by telling the truth plainly and stepping out of the rescue role, not by manufacturing pain. That means letting natural consequences stand, stating your boundaries clearly, and getting your own support. It's an act of love, not punishment.",
  },
  {
    question: "What should I say to a loved one who's in denial?",
    answer:
      "Keep it short and honest. Something like, \u201CI love you, I'm worried, and I'm not going to help this continue,\u201D lands harder than a long lecture. You don't have to convince them of everything. You just have to stop agreeing with the story that everything is fine.",
  },
  {
    question: "Is it too late if my loved one has relapsed before?",
    answer:
      "No. Relapse is common and does not mean recovery has failed. Many people, myself included, needed more than one honest reckoning before it stuck. What matters is that the door to help stays open and the family stops enabling the pattern.",
  },
];

const MyRockBottomQuietTuesday = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${TITLE} — Party Wreckers`}
        description={DESCRIPTION}
        canonical={`/blog/${SLUG}`}
        ogType="article"
        ogImage={blogImage}
        keywords="what hitting rock bottom in addiction really felt like, rock bottom addiction, quiet rock bottom, Matt Brown recovery story, raising the bottom, family intervention"
        publishedTime="2026-07-02"
      />

      <ArticleJsonLd
        title={TITLE}
        description={DESCRIPTION}
        image={blogImage}
        datePublished="2026-07-02"
        dateModified="2026-07-02"
        slug={SLUG}
      />

      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "My Rock Bottom Was a Quiet Tuesday Morning", url: `/blog/${SLUG}` },
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
            alt="A young adult man standing in a quiet kitchen at dawn holding a coffee mug, soft morning light through the blinds, thoughtful and honest expression"
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
            <time dateTime="2026-07-02">July 2, 2026</time>
          </div>
        </header>

        <div className="mb-8">
          <SocialShareButtons url={`https://partywreckers.com/blog/${SLUG}`} title={TITLE} />
        </div>

        <ArticleAnswerSummary slug={SLUG} />

        <div className="prose prose-lg max-w-none text-foreground">
          <p>
            People expect a rock bottom story to have sirens in it. A wrecked car, a jail cell, a hospital bracelet. Mine didn't. What hitting rock bottom in addiction really felt like, for me, was a Tuesday morning in the spring of 2003, standing in my own kitchen, unable to remember whether I'd already had a drink or was just about to. That's it. No crash. No headline. Just a man who had run out of himself.
          </p>

          <p>
            I'm Matt Brown. I've been sober since April 6, 2003, and I've spent more than twenty years walking families through interventions. I tell people my story not because it's special, but because it's ordinary — and the ordinary version is the one most people miss. If you're waiting for your loved one to have a dramatic bottom before you act, this article is for you.
          </p>

          <h2>What does hitting rock bottom in addiction really feel like?</h2>

          <p>
            Rock bottom isn't usually an event. It's the moment the story you've been telling yourself finally stops working. For me it wasn't losing something big. It was the quiet realization that I had already lost the thing that mattered — my own honesty — and had been pretending otherwise for years.
          </p>

          <p>
            That morning nothing external changed. I still had a roof, a family, a reflection in the mirror. What changed was that I couldn't lie to that reflection anymore. The gap between who I said I was and what I actually did had gotten too wide to step over.
          </p>

          <p>
            If you're a family member reading this, hear me clearly: bottom is not a place your loved one falls to. It's a place they wake up in. And you can't schedule someone else's waking up. You can only stop building the floor that keeps them from ever reaching the ground.
          </p>

          <h2>Why I kept waiting for a bottom that never came</h2>

          <p>
            For years I told myself I'd quit when things got bad enough. The truth is, things kept getting bad, and I kept moving the line. That's the trap of addiction — the bottom is a moving target, and the person chasing it is the one setting it.
          </p>

          <p>I had a hundred versions of "not that bad." I'd think:</p>

          <ul>
            <li>I still show up to work, so it's not that bad.</li>
            <li>I've never gotten a DUI, so it's not that bad.</li>
            <li>Other people drink more than me, so it's not that bad.</li>
          </ul>

          <p>
            Every one of those was true. And every one of them was a way of staying decided about the one thing I couldn't afford to keep deciding. The short-term payoff was that I got to keep drinking. The long-term cost was that I lost years I can't get back.
          </p>

          <h3>What actually changed on that Tuesday morning?</h3>

          <p>
            Nothing outside of me changed. Something inside me finally did. I stopped waiting to feel like quitting and made a decision without the feeling attached. That distinction saved my life.
          </p>

          <p>
            I used to believe I needed to want sobriety before I could choose it. That's backwards. The wanting came later. What I had that morning wasn't motivation — it was exhaustion honest enough to become a decision. I picked up the phone and told one person the truth. Not a speech. One sentence: "I think I have a problem and I don't know how to stop."
          </p>

          <p>
            That sentence was the most powerful thing I said in a decade, and it cost me nothing but pride. Here's what I've learned in the twenty-three years since: the reason people don't say it isn't that they don't know it's true. It's that saying it out loud makes it real, and real is terrifying. But real is also the only place recovery can start.
          </p>

          <h2>The myth that keeps families frozen</h2>

          <p>
            Families come to me convinced they have to wait for a catastrophe before anyone will listen. They're waiting for the arrest, the overdose, the moment so undeniable that even the addict can't argue with it. I understand it. I lived on the other side of it.
          </p>

          <p>
            But waiting for a dramatic bottom is a gamble with your loved one's life as the stake. Some bottoms are final. The kinder move isn't to wait for the floor to appear — it's to{" "}
            <Link to="/blog/stop-waiting-for-rock-bottom" className="text-primary hover:underline">
              stop waiting for rock bottom
            </Link>{" "}
            and stop being the floor. When families quietly stop cushioning every consequence, the ground gets closer. Not through cruelty. Through honesty.
          </p>

          <h2>What raising the bottom actually looks like</h2>

          <p>
            You don't have to orchestrate a disaster. You raise the bottom by telling the truth and stopping the rescue. Concretely, that can look like:
          </p>

          <ol>
            <li>Saying the real thing once, plainly, without a lecture: "I love you, and I'm scared, and I'm not going to help you keep this going."</li>
            <li>Letting a natural consequence stand instead of stepping in to soften it.</li>
            <li>Getting your own support — coaching, Al-Anon, a professional — so you're not carrying it alone.</li>
          </ol>

          <p>
            None of that is about punishment. It's about removing the false floor so reality can do the work you've been trying to do for them.
          </p>

          <h2>If you're still waiting, this is your Tuesday morning</h2>

          <p>
            My bottom was quiet. It didn't announce itself. It just arrived on a normal day, in a normal kitchen, and asked me one honest question I'd been dodging for years. Your loved one's bottom might be quiet too — and it might come sooner if the people around them stop making the drinking or the using comfortable.
          </p>

          <p>
            I'm not going to tell you it's easy or that it works on your timeline. It rarely does. But I will tell you this: the family that gets honest and gets help changes the odds. I've watched it happen thousands of times. I've lived it from the inside. Hope isn't a feeling you wait for. It's a next step you take. Take one today.
          </p>

          <h2>Frequently Asked Questions About Hitting Rock Bottom</h2>

          <div className="space-y-6 my-8">
            {faqs.map((f) => (
              <div key={f.question}>
                <h3 className="text-lg font-semibold mb-2">{f.question}</h3>
                <p>{f.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted/50 border border-border rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-2">You Don't Have to Wait for a Crash</h3>
            <p>
              If you're watching someone you love disappear into addiction, you don't have to wait for a dramatic bottom to act. For more real talk on recovery and intervention, listen to <strong>The Party Wreckers</strong> podcast and follow along for weekly conversations for families of people who struggle with addiction. And if you're ready for help now, reach out through{" "}
              <a href="https://freedominterventions.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                talk to a professional interventionist
              </a>
              . A quiet Tuesday morning changed my life. This could be the day something changes for your family.
            </p>
          </div>

          <div className="border-t border-border pt-8 mt-12">
            <h3 className="text-xl font-bold mb-4">Related Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog/stop-waiting-for-rock-bottom" className="text-primary hover:underline">
                  Stop Waiting for Rock Bottom
                </Link>
              </li>
              <li>
                <Link to="/blog/rock-bottom-myth-addiction" className="text-primary hover:underline">
                  The Rock Bottom Myth in Addiction Recovery
                </Link>
              </li>
              <li>
                <Link to="/blog/stop-waiting-for-a-sign-when-to-call-professional-interventionist" className="text-primary hover:underline">
                  Stop Waiting for a Sign: When to Call a Professional Interventionist
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

export default MyRockBottomQuietTuesday;
