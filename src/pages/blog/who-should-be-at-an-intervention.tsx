import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SocialShareButtons from "@/components/SocialShareButtons";
import ArticleAnswerSummary from "@/components/ArticleAnswerSummary";
import { ArrowLeft } from "lucide-react";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import blogImage from "@/assets/blog-who-should-be-at-an-intervention.jpg";

const SLUG = "who-should-be-at-an-intervention";

const faqs = [
  {
    question: "How many people should be at an intervention?",
    answer:
      "Four to eight is the sweet spot. Fewer than four can feel too easy to dismiss; more than eight starts to feel like an ambush and becomes harder to keep on plan. Quality of influence matters far more than headcount."
  },
  {
    question: "Should someone in recovery be part of the intervention team?",
    answer:
      "Often, yes — a friend or family member with solid recovery can be one of the most powerful voices in the room. They can say 'I've been where you are' with credibility nobody else has. The key is that their own recovery is stable, not brand new."
  },
  {
    question: "Can an intervention work if a key family member refuses to participate?",
    answer:
      "Yes. Interventions succeed with the people who show up, not the people who don't. A missing person can sometimes contribute a letter, and if they won't do that, the team simply moves forward without them."
  },
  {
    question: "Should the family confront the person without a professional?",
    answer:
      "Families can and do try, but the risks are real: the conversation collapses into old arguments, the person walks out, and the family loses the element of readiness. A professional interventionist brings structure, neutrality, and a plan for every response — including 'no.'"
  },
  {
    question: "What if we leave someone out and they get hurt or angry?",
    answer:
      "It happens, and it's survivable. Explain that the decision came from professional guidance and that their support still matters — before, during, and after. Most people accept a role outside the room once they understand the goal is saving a life, not managing feelings."
  }
];

const WhoShouldBeAtAnIntervention = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Who Should Be at an Intervention? Choosing the Right People for the Room — Party Wreckers"
        description="Who should be at an intervention — and who shouldn't? A professional interventionist explains how to choose the right people for the room."
        canonical={`/blog/${SLUG}`}
        ogType="article"
        ogImage={blogImage}
        keywords="who should be at an intervention, intervention team, choosing intervention participants, professional interventionist, family intervention, Matt Brown interventionist"
        publishedTime="2026-07-09"
      />

      <ArticleJsonLd
        title="Who Should Be at an Intervention? Choosing the Right People for the Room"
        description="Who should be at an intervention — and who shouldn't? A professional interventionist explains how to choose the right people for the room."
        image={blogImage}
        datePublished="2026-07-09"
        dateModified="2026-07-09"
        slug={SLUG}
      />

      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Who Should Be at an Intervention?", url: `/blog/${SLUG}` }
        ]}
      />

      <FAQJsonLd faqs={faqs} />

      <Navbar />

      <article className="max-w-3xl mx-auto px-4 pt-24 pb-16" itemScope itemType="https://schema.org/Article">
        <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4" itemProp="headline">
            Who Should Be at an Intervention? Choosing the Right People for the Room
          </h1>
          <div className="flex items-center gap-4 text-muted-foreground mb-6">
            <span itemProp="author">Matt Brown</span>
            <time dateTime="2026-07-09" itemProp="datePublished">July 9, 2026</time>
          </div>
          <img
            src={blogImage}
            alt="A small group of young adults sitting in a semicircle around one empty chair in a softly lit living room, waiting for an intervention to begin"
            className="w-full rounded-lg mb-6"
            width={1344}
            height={768}
            itemProp="image"
          />
          <SocialShareButtons title="Who Should Be at an Intervention? Choosing the Right People for the Room" />
        </header>

        <div className="prose prose-lg max-w-none" itemProp="articleBody">
          <p className="text-xl text-muted-foreground leading-relaxed">
            A few years ago, a mother called me about her son. By the end of our first conversation, she had a guest list of fourteen people. Both grandmothers. A youth pastor. Two coworkers. A cousin nobody had seen since a wedding in 2019. And an uncle who, by her own admission, drinks more than the son we were trying to help.
          </p>

          <p>
            I understood the impulse. When you love someone who&rsquo;s dying in slow motion, you want to surround them with every person who&rsquo;s ever cared about them. But if you&rsquo;re asking who should be at an intervention, the honest answer is: fewer people than you think, and not necessarily the ones you&rsquo;d expect. I&rsquo;ve sat in hundreds of these rooms over twenty years. The right team can change everything. The wrong one can blow the whole thing up before anyone finishes their letter.
          </p>

          <ArticleAnswerSummary slug={SLUG} />

          <h2>Who should be at an intervention?</h2>

          <p>
            The short answer: four to eight people who have genuine emotional influence with your loved one, who can stay calm under pressure, and who are willing to follow a plan. That&rsquo;s it. Not everyone who loves them. Not everyone who&rsquo;s been hurt by them. The people whose voices actually land.
          </p>

          <p>
            When I help a family build an intervention team, I&rsquo;m asking one question about every name: when this person speaks, does the person we&rsquo;re helping listen? Sometimes that&rsquo;s a parent. Often it&rsquo;s a sibling, a best friend, a grandparent, or an employer. I once watched a man agree to treatment not because of anything his parents said, but because his twelve-years-sober fishing buddy looked at him and said, &ldquo;I&rsquo;ll drive you there myself.&rdquo;
          </p>

          <p>
            Influence isn&rsquo;t the same as proximity. The person who lives with the addiction often has the least leverage left, because their words have been worn smooth by years of repetition. A voice from slightly outside the daily chaos can cut through in a way the everyday voices can&rsquo;t.
          </p>

          <h2>Who should not be in the room?</h2>

          <p>
            This is where families struggle most, so let me be direct. Some people who love your family member deeply still don&rsquo;t belong at the intervention. Leaving them out isn&rsquo;t a judgment on their love. It&rsquo;s a judgment on what the room needs.
          </p>

          <ul>
            <li><strong>Anyone in active addiction themselves.</strong> The uncle who drinks more than your son cannot ask your son to get help. The person you&rsquo;re intervening on will spot the hypocrisy in half a second, and it hands them the exit they&rsquo;re looking for.</li>
            <li><strong>Anyone carrying rage they can&rsquo;t set down.</strong> There&rsquo;s a difference between hurt and hostility. Hurt, spoken honestly, opens hearts. Hostility closes them. If someone can&rsquo;t get through their letter without it turning into a prosecution, they&rsquo;re not ready for the room.</li>
            <li><strong>Anyone who can&rsquo;t follow the plan.</strong> Interventions are structured for a reason. The person who &ldquo;just wants to speak from the heart&rdquo; and go off script is often the person who derails everything at the worst possible moment.</li>
            <li><strong>Anyone your loved one can manipulate in real time.</strong> Every family has one person who folds. If Mom caves the moment her son tears up, Mom may need a specific, coached role &mdash; or a seat outside the room.</li>
          </ul>

          <h3>What about young children?</h3>

          <p>
            Usually, no &mdash; with rare exceptions. I have occasionally had an older teenager participate when their relationship with the parent was central and the teen genuinely wanted to be there, with preparation and support. But young kids should never carry the weight of an intervention. Their job is to be kids. Protecting them from that room is part of protecting the family.
          </p>

          <h3>What if the most important person can&rsquo;t be there?</h3>

          <p>
            Distance doesn&rsquo;t have to disqualify someone. If the sister in Seattle is the one voice your loved one has never been able to dismiss, we find a way to bring her in. She can join by video. She can write a letter that someone reads aloud on her behalf. I&rsquo;ve seen a two-paragraph letter from an absent brother do more work than an hour of conversation from people sitting three feet away.
          </p>

          <p>
            The reverse is also true: physical presence without emotional readiness adds nothing. I&rsquo;d rather have the right person on a screen than the wrong person in a chair.
          </p>

          <h3>Why do families pick the wrong team on their own?</h3>

          <p>
            Because families choose based on obligation, and interventions need to be chosen based on influence. &ldquo;His father has to be there&rdquo; &mdash; even if his father can&rsquo;t stay calm. &ldquo;We can&rsquo;t leave out Aunt Carol, she&rsquo;d be so hurt&rdquo; &mdash; even though Aunt Carol turns every gathering into her own story. Family systems run on old rules about who gets included, and addiction has usually been exploiting those rules for years.
          </p>

          <p>
            I get it, because I lived it from the other side. When I was the one my family needed to intervene on, I knew exactly which relatives I could charm, which ones I could outrage into leaving, and which ones I couldn&rsquo;t look in the eye. Every person struggling with addiction carries that same map. Building the team is really about choosing the people who aren&rsquo;t on the manipulable side of it.
          </p>

          <p>
            This is one of the biggest reasons to work with a professional interventionist. Not because families aren&rsquo;t smart &mdash; they&rsquo;re often the smartest people in the room about everything except this. An outside professional can say the thing nobody inside the family is allowed to say: &ldquo;I know you love her. She&rsquo;s not coming in.&rdquo;
          </p>

          <h3>How to start building your intervention team</h3>

          <p>If you&rsquo;re seriously considering an intervention, here&rsquo;s the simple version of what I walk families through:</p>

          <ul>
            <li><strong>Make the long list first.</strong> Write down everyone who cares. Don&rsquo;t filter yet.</li>
            <li><strong>Ask the influence question about each name.</strong> When they speak, does your loved one actually listen?</li>
            <li><strong>Ask the stability question.</strong> Can this person stay calm if things get ugly? Can they follow a plan they didn&rsquo;t write?</li>
            <li><strong>Cut without guilt.</strong> A smaller, steadier team beats a bigger, shakier one every single time.</li>
          </ul>

          <p>
            Then talk to a professional before you finalize anything. If you&rsquo;re not sure where to start, our guide on{" "}
            <Link to="/blog/how-to-choose-an-interventionist" className="text-primary hover:text-primary/80">how to choose an interventionist</Link>{" "}
            walks through what to look for. Team selection is one of the first things I work on with every family, and it&rsquo;s often where the intervention is quietly won or lost &mdash; days before anyone sits down in a living room.
          </p>

          <p>
            Here&rsquo;s the hopeful part. You don&rsquo;t need a perfect family to do this. You don&rsquo;t need everyone healed, everyone sober, everyone on speaking terms. You need a handful of people willing to show up, tell the truth with love, and hold the line together. Most families, even the messy ones &mdash; especially the messy ones &mdash; have that handful. Yours probably does too.
          </p>

          <h2>You Don&rsquo;t Have to Figure This Out Alone</h2>

          <p>
            If you&rsquo;re at the point of mentally drafting a guest list, you&rsquo;re closer to acting than you think. Don&rsquo;t let team questions become the reason you wait another six months. Read more about{" "}
            <Link to="/blog/what-happens-before-intervention" className="text-primary hover:text-primary/80">what really happens during a professional intervention</Link>{" "}
            so you know what you&rsquo;re walking into.
          </p>

          <p>
            Listen to <em>The Party Wreckers</em> podcast wherever you get your shows &mdash; we talk about the intervention world with the honesty it deserves. Follow along for more, and if your family is ready to{" "}
            <a href="https://freedominterventions.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">talk with our team about an intervention</a>
            , reach out through FreedomInterventions.com. The first conversation is just that: a conversation.
          </p>

          <p>&mdash; Matt Brown</p>

          <h2>Frequently Asked Questions</h2>

          <div className="space-y-6 my-8" itemScope itemType="https://schema.org/FAQPage">
            {faqs.map((f) => (
              <div key={f.question} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 itemProp="name">{f.question}</h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">{f.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-muted p-6 rounded-lg mt-8">
            <h3 className="text-lg font-semibold text-foreground mb-2">Related Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog/how-to-choose-an-interventionist" className="text-primary hover:text-primary/80">
                  How to Choose an Interventionist
                </Link>
              </li>
              <li>
                <Link to="/blog/what-happens-before-intervention" className="text-primary hover:text-primary/80">
                  The Work No One Sees: What Really Happens Before a Professional Intervention
                </Link>
              </li>
              <li>
                <Link to="/blog/do-interventions-actually-work-success-rates" className="text-primary hover:text-primary/80">
                  Do Interventions Actually Work? An Interventionist&rsquo;s Honest Answer
                </Link>
              </li>
              <li>
                <Link to="/blog/when-someone-says-no-intervention" className="text-primary hover:text-primary/80">
                  When They Say No: What Happens After an Intervention Doesn&rsquo;t Go as Planned
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

export default WhoShouldBeAtAnIntervention;
