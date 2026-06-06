import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SocialShareButtons from "@/components/SocialShareButtons";
import ArticleAnswerSummary from "@/components/ArticleAnswerSummary";
import { ArrowLeft } from "lucide-react";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import blogImage from "@/assets/blog-what-families-should-know-before-calling-interventionist.jpg";

const WhatFamiliesShouldKnowBeforeCallingInterventionist = () => {
  const faqs = [
    {
      question: "What should I tell an interventionist when I first call?",
      answer:
        "Be as honest as you can about the full situation — the substance use history, any previous treatment attempts, family dynamics, and your own concerns about how things might go. The more complete the picture, the better the interventionist can help. Don't worry about presenting things perfectly. The messier version is usually more useful."
    },
    {
      question: "How long does the process take from first call to intervention day?",
      answer:
        "It varies, but in most cases a professional interventionist works with families for several days to a week before the actual intervention takes place. Urgency matters — if there's immediate danger, things move faster. But rushing the family prep often leads to a less effective intervention. Most families are ready within 3–7 days of the first call."
    },
    {
      question: "What if my loved one has been to treatment before and relapsed?",
      answer:
        "Previous treatment and relapse are common and don't make an intervention less appropriate. Someone who has been to treatment before often has some familiarity with the recovery process, which can actually work in your favor. What matters is finding the right level of care and the right program fit — which a good interventionist will help you evaluate."
    },
    {
      question: "Is a professional intervention different from what I see on TV?",
      answer:
        "Yes, significantly. Reality TV interventions are edited for drama. A real professional intervention is a carefully structured conversation, not a surprise ambush. Most models today involve some degree of transparency — the person often knows something is happening, even if they don't know the full scope. The goal is connection and honesty, not shock."
    },
    {
      question: "How much does a professional intervention cost?",
      answer:
        "Professional intervention fees vary based on location, duration, and the interventionist's experience. Costs typically range from $1,500 to $10,000 or more for the full process including family prep, the intervention itself, and transport to treatment if needed. Set against years of crisis management, legal fees, or the cost of losing someone entirely, most families find it one of the most important investments they've made."
    },
    {
      question: "What happens if my loved one says no to treatment?",
      answer:
        "A 'no' in the room is not necessarily a permanent no. Many people who initially refuse treatment agree within days or weeks — particularly when the family holds its stated consequences. The intervention plants seeds even when it doesn't produce an immediate yes. What matters is what the family does next: holding their positions, continuing to care without enabling, and staying available for when the person is ready."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="What Families Should Know Before Calling an Interventionist"
        description="Interventionist Matt Brown shares what he wishes every family knew before making that first call — and why timing, honesty, and family readiness matter just as much as the person in crisis."
        ogType="article"
        ogImage={blogImage}
        keywords="what families should know before calling an interventionist, calling an interventionist, family intervention prep, Matt Brown interventionist, professional intervention"
        publishedTime="2026-06-06"
      />

      <ArticleJsonLd
        title="What I Wish Every Family Knew Before Calling an Interventionist"
        description="Interventionist Matt Brown shares what he wishes every family knew before making that first call — and why timing, honesty, and family readiness matter just as much as the person in crisis."
        image={blogImage}
        datePublished="2026-06-06"
        dateModified="2026-06-06"
        slug="what-families-should-know-before-calling-interventionist"
      />

      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "What Families Should Know Before Calling an Interventionist", url: "/blog/what-families-should-know-before-calling-interventionist" }
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
            alt="A young adult woman sitting at a dim kitchen table at twilight, holding a phone and a notepad, considering an important call"
            className="w-full rounded-lg shadow-lg"
            width={1280}
            height={720}
          />
        </div>

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            What I Wish Every Family Knew Before Calling an Interventionist
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>By Matt Brown</span>
            <span>|</span>
            <time dateTime="2026-06-06">June 6, 2026</time>
          </div>
        </header>

        <div className="mb-8">
          <SocialShareButtons
            url="https://partywreckers.com/blog/what-families-should-know-before-calling-interventionist"
            title="What I Wish Every Family Knew Before Calling an Interventionist"
          />
        </div>

        <ArticleAnswerSummary slug="what-families-should-know-before-calling-interventionist" />

        <div className="prose prose-lg max-w-none text-foreground">
          <p>
            I got a call last year from a woman I'll call Karen. Her son had been using fentanyl for three years. She'd been watching it happen in real time — the weight loss, the disappearing money, the days he didn't come home. She found my number on a Friday night after he stole her car.
          </p>
          <p>
            She was shaking when she called. Not from fear — from relief. She thought calling me meant she was done.
          </p>
          <p>
            She was actually at the beginning.
          </p>
          <p>
            I don't say that to discourage anyone from reaching out. Calling an interventionist is often the most important call a family makes. But in 20 years of doing this work, I've noticed that the families who get the best outcomes — who move fastest, hurt least, and actually get their person into treatment — come in with a certain kind of readiness. And the families who struggle the most usually don't know what that readiness looks like.
          </p>
          <p>
            So here's what I wish I could tell every family before they dial my number. What families should know before calling an interventionist might be the most useful thing I can share.
          </p>

          <h2>An Intervention Isn't a Last Resort — It's a Structured Beginning</h2>
          <p>
            Most families wait too long. By the time they call me, they've usually been managing, negotiating, enabling, and hoping for years. They think of an intervention as something you do when everything else has failed.
          </p>
          <p>
            It's not. An intervention is a structured, professionally guided conversation designed to interrupt the cycle of addiction and move someone toward treatment. It works best when families still have leverage — a relationship, shared finances, housing, access. The longer you wait, the more of that leverage erodes.
          </p>
          <p>
            I've worked cases where the family waited so long that the person had burned every bridge, lost every job, and severed every meaningful relationship. We still do the work. But I'm telling you — those cases are harder, and the outcomes are less predictable.
          </p>
          <p>
            If you're reading this and thinking "it's not that bad yet," that's probably not a reason to wait. It might be the best reason to call now.
          </p>

          <h2>Your Honesty With Me Determines What I Can Do for Your Family</h2>
          <p>
            Families often call me with a curated version of the story. I understand why — shame is powerful, and there's a deep human impulse to present the most sympathetic version of the situation.
          </p>
          <p>
            But I need the unsanitized version. Not to judge anyone. Because the details that feel embarrassing are often the most clinically important ones.
          </p>
          <p>
            I need to know if your son has a history of violence when confronted. I need to know if your daughter has tried to quit on her own and had seizures. I need to know if Dad is secretly slipping money to the person we're trying to help. I need to know if the marriage is in trouble, if there's a custody issue, if there's a co-occurring mental health diagnosis, if someone in the family is also drinking too much and doesn't want to look at it.
          </p>
          <p>
            I can work with almost anything. What I can't work with is information I don't have.
          </p>
          <p>
            The most powerful thing a family can do before a professional intervention is to commit to being completely honest — with me and eventually with each other.
          </p>

          <h2>The Person You're Calling About Isn't the Only One Who Needs to Change</h2>
          <p>
            This is the one that lands hard. Every family who calls me is laser-focused on one person: their addicted loved one. What are we going to say to him? How do we get her to say yes? What if he refuses?
          </p>
          <p>
            And those are real questions. But in my experience, the family system almost always has dynamics that have been keeping addiction in place — sometimes for years.
          </p>
          <p>
            That doesn't mean anyone is to blame. Family members of people with addiction are doing the best they know how to do. Most of them are loving people who have been slowly trained by the disease of addiction to respond in ways that inadvertently make things worse. That's not a character flaw. That's what happens when you live inside a crisis long enough.
          </p>
          <p>
            But here's what's true: if we do an intervention, get your loved one into treatment, and nothing changes at home — no boundaries enforced, no family therapy, no examination of the patterns — the odds of a successful long-term outcome drop significantly.
          </p>
          <p>
            The best interventions I've done involved families who walked in ready to say: "We know we're part of this system, and we're willing to look at our part." Those families get their person into treatment AND they actually heal.
          </p>
          <p>
            I'm not asking anyone to be perfect. I'm just saying: show up willing.
          </p>

          <h2>What Happens in the Days Before the Intervention Matters More Than the Day Itself</h2>
          <p>
            Most people picture an intervention as the dramatic confrontation moment — the room, the letters, the tears, the decision. That moment is real. But the work that determines whether it goes well happens in the days before.
          </p>
          <p>
            When I work with a family, we do a lot of prep. We meet — usually for several hours — before anyone is in a room together. We talk about the goal (treatment, not punishment). We talk about what each person will say and how. We talk about{" "}
            <Link to="/blog/what-happens-before-intervention" className="text-primary hover:underline">
              what really happens before a professional intervention
            </Link>
            , including what we do if the person says no — and we establish what the actual consequences will be, not the ones we'll threaten and then not follow through on.
          </p>
          <p>
            That last part is where families often get uncomfortable. Consequences are not ultimatums designed to punish. They are honest statements of what family members will and will not continue to do. "I will not keep paying your rent while you're actively using" is a consequence. "I won't speak to you again if you don't get help" is usually not something people can actually hold, and it damages trust.
          </p>
          <p>
            The prep meeting is where we figure out the difference. If you're considering calling an interventionist, know that the intervention itself is maybe 20% of the work. The other 80% is what the family does in the days before and the months after.
          </p>

          <h2>A 'Successful' Intervention Doesn't Always Mean Yes in the Room</h2>
          <p>
            Let me reframe something that families sometimes get wrong about what success looks like.
          </p>
          <p>
            The goal of an intervention is not to strong-arm someone into a car and drive them to rehab. The goal is to interrupt the isolation of addiction, tell someone the truth about what you're seeing, hold up a mirror, and offer a clear path forward with genuine support behind it.
          </p>
          <p>
            Sometimes the person says yes immediately. I've had people in the car within an hour.
          </p>
          <p>
            Sometimes they say no in the room, go home, sit with it for 48 hours, and call me themselves.
          </p>
          <p>
            Sometimes they say no, the family holds their consequences, and three months later something shifts.
          </p>
          <p>
            What doesn't work is doing the intervention and then going back to business as usual when the person refuses. The intervention has to mean something. The family's words have to have weight behind them. That's not cruelty — that's love with a spine.
          </p>
          <p>
            If you're thinking about calling me, I want you to walk in knowing that whatever happens in the room, your family will not be the same afterward. That's a good thing — even when it's hard.
          </p>

          <h2>How to Find the Right Interventionist — and What Questions to Ask</h2>
          <p>
            Not everyone who calls themselves an interventionist has meaningful training or experience. This is an unregulated field. Here's what I'd tell any family shopping for help:
          </p>
          <ul>
            <li>Ask how many interventions they've done. Years in recovery alone don't make someone a qualified interventionist.</li>
            <li>Ask what model they use. The Johnson Model, ARISE, CRAFT, and others have different approaches. A good interventionist can explain the differences and tell you which fits your situation.</li>
            <li>Ask what happens if it doesn't work. Their answer will tell you a lot about how they think about this work.</li>
            <li>Ask about their relationship with treatment centers. An interventionist who only places at one facility may be working on commission. A good interventionist matches the person to the right level of care and the right program.</li>
            <li>Trust your gut. You're inviting this person into a private family crisis. You should feel like you can be honest with them.</li>
          </ul>
          <p>
            For a deeper checklist, read{" "}
            <Link to="/blog/how-to-choose-an-interventionist" className="text-primary hover:underline">
              how to choose an interventionist
            </Link>
            . I've built my practice on referral relationships with treatment programs across the country — and on my own lived experience as someone who once needed exactly this kind of help. If you want to know what to expect from me specifically, reach out at{" "}
            <a href="https://freedominterventions.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              FreedomInterventions.com
            </a>
            .
          </p>

          <h2>The Call You're Afraid to Make Is the One Worth Making</h2>
          <p>
            I know what it feels like to be on the other end of this conversation — not as the interventionist, but as the person in active addiction whose family was trying to figure out how to reach me.
          </p>
          <p>
            My family did reach me. And I'm sitting here 23 years later, still sober, still doing this work. Every case I take on is a way of paying that forward.
          </p>
          <p>
            If you're wondering whether it's time to call — it probably is. The question isn't whether your loved one is bad enough. The question is whether your family is ready to do something different.
          </p>
          <p>
            That's the work. And it starts before I even pick up the phone.
          </p>

          <h2>Frequently Asked Questions</h2>
          <div className="space-y-6 my-8">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted/50 border border-border rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold mb-2">Listen, Connect, and Reach Out</h3>
            <p>
              If this resonated with you, <strong>The Party Wreckers podcast</strong> goes deep on all of it — the intervention world, family patterns, recovery, and what actually helps. Search Party Wreckers wherever you listen to podcasts. If your family is in crisis right now and you're ready to talk, visit{" "}
              <a href="https://freedominterventions.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                FreedomInterventions.com
              </a>
              . That's where I do this work one family at a time.
            </p>
          </div>

          <div className="border-t border-border pt-8 mt-12">
            <h3 className="text-xl font-bold mb-4">Related Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog/what-happens-before-intervention" className="text-primary hover:underline">
                  What Really Happens Before a Professional Intervention
                </Link>
              </li>
              <li>
                <Link to="/blog/how-to-choose-an-interventionist" className="text-primary hover:underline">
                  How to Choose an Interventionist
                </Link>
              </li>
              <li>
                <Link to="/blog/intervention-myths-families" className="text-primary hover:underline">
                  Intervention Myths Families Need to Know
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

export default WhatFamiliesShouldKnowBeforeCallingInterventionist;
