import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SocialShareButtons from "@/components/SocialShareButtons";
import { ArrowLeft } from "lucide-react";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import blogImage from "@/assets/blog-how-to-choose-an-interventionist.jpg";

const HowToChooseAnInterventionist = () => {
  const faqs = [
    {
      question: "How much does a professional interventionist cost?",
      answer: "Professional intervention services typically range from $3,000 to $10,000 or more, depending on scope, travel, and the interventionist's experience. This usually covers family preparation sessions, the intervention itself, and coordination with a treatment center. Some interventionists charge separately for travel and out-of-pocket expenses."
    },
    {
      question: "Is there a certification or license required to be an interventionist?",
      answer: "No — there is no universal licensing requirement for interventionists in the United States. Some hold certifications through organizations like the Association of Intervention Specialists (AIS), which is a positive signal. But certification alone does not guarantee quality. Experience, references, and process transparency matter just as much."
    },
    {
      question: "What is the difference between the Johnson Model and other intervention approaches?",
      answer: "The Johnson Model is the most well-known — it involves a structured confrontation where family members read prepared impact statements. The ARISE model is more invitational, with the loved one sometimes involved from the start. Motivational and systemic approaches are less confrontational and focus on shifting family dynamics over time. A qualified interventionist will explain which approach fits your specific situation and why."
    },
    {
      question: "What happens if my loved one refuses treatment during the intervention?",
      answer: "Refusal happens — and a good interventionist plans for it. This is exactly why the family preparation work matters: each person should have a clear, pre-decided boundary they will hold if the answer is no. A refusal does not end the process. It often marks the beginning of a new kind of pressure. Ask your interventionist specifically about their protocol for refusal before you hire them."
    },
    {
      question: "Should I be concerned if an interventionist receives referral fees from treatment centers?",
      answer: "Referral relationships between interventionists and treatment programs are common and not inherently unethical — provided the placement recommendation is driven by clinical fit, not commission. The red flag is when someone pushes a single facility before asking detailed questions about your loved one's history, insurance, and clinical needs. Ask directly. A trustworthy professional will answer honestly."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How to Choose an Interventionist: What to Look For and Avoid"
        description="Not all interventionists are created equal. Matt Brown explains what to look for when hiring a professional interventionist — and the questions that tell you everything."
        ogType="article"
        ogImage={blogImage}
        keywords="how to choose an interventionist, hire an interventionist, professional interventionist, intervention questions, Matt Brown interventionist"
        publishedTime="2026-05-08"
      />

      <ArticleJsonLd
        title="How to Choose an Interventionist: What to Look For, What to Avoid, and the Questions That Tell You Everything"
        description="Not all interventionists are created equal. Matt Brown explains what to look for when hiring a professional interventionist — and the questions that tell you everything."
        image={blogImage}
        datePublished="2026-05-08"
        dateModified="2026-05-08"
        slug="how-to-choose-an-interventionist"
      />

      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "How to Choose an Interventionist", url: "/blog/how-to-choose-an-interventionist" }
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
            alt="A woman at a kitchen table with a phone and notepad, researching how to choose a professional interventionist"
            className="w-full rounded-lg shadow-lg"
            width={1280}
            height={720}
          />
        </div>

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            How to Choose an Interventionist: What to Look For, What to Avoid, and the Questions That Tell You Everything
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>By Matt Brown</span>
            <span>|</span>
            <time dateTime="2026-05-08">May 8, 2026</time>
          </div>
        </header>

        <div className="mb-8">
          <SocialShareButtons
            url="https://partywreckers.com/blog/how-to-choose-an-interventionist"
            title="How to Choose an Interventionist: What to Look For, What to Avoid, and the Questions That Tell You Everything"
          />
        </div>

        <div className="prose prose-lg max-w-none text-foreground">
          <p>
            A few years back, I got a call from a woman named Karen. Her son had been struggling with opioid addiction for six years. She had finally decided to do an intervention — and she had already hired someone to run it.
          </p>

          <p>
            The problem? She called me the day before, in tears, because the person she hired had told her to avoid all contact with her son for three weeks beforehand, and then spent most of their pre-intervention call talking about his fees and his travel schedule. She had paid a deposit. She was terrified. And she was not even sure this person had ever done an actual intervention before.
          </p>

          <p>
            Karen's situation is not unusual. The word "interventionist" is not regulated. There is no licensing board, no national certification that carries real teeth, no governing body that removes bad actors. Anyone can hang a shingle and call themselves an interventionist. That matters — a lot — when you are trusting someone with one of the most emotionally high-stakes moments your family will ever face.
          </p>

          <p>
            So let me give you the guide I wish every family had before they started making calls. Here is how to choose an interventionist — what to look for, what to run from, and the questions that cut through the noise fast.
          </p>

          <h2>What Does a Professional Interventionist Actually Do?</h2>

          <p>
            A professional interventionist guides families through a structured process designed to help a loved one accept treatment. They do not show up on the day and wing it. The intervention itself is almost always the last step — not the first.
          </p>

          <p>
            Before anyone sits down in a room together, a good interventionist spends significant time with the family: coaching individual members, helping craft impact statements, coordinating with treatment centers, and preparing for the most likely objections. The intervention day is the culmination of that preparation work.
          </p>

          <p>
            If someone is offering to "do an intervention" without substantial preparation time and real family involvement, that is a red flag. You are not hiring a speaker. You are hiring a guide for a process.
          </p>

          <h2>What to Look for When Hiring an Interventionist</h2>

          <h3>Personal Recovery Experience</h3>
          <p>
            This is not a hard requirement — some excellent interventionists do not have personal recovery. But when someone has lived it, they bring something that is hard to replicate: the credibility of having been on the other side of that table. I was the person my family needed to intervene on. That history matters when I am sitting across from someone who is absolutely certain they do not have a problem.
          </p>
          <p>
            Ask directly: Do you have personal recovery experience? How long? What does your own recovery look like today?
          </p>

          <h3>A Verifiable Track Record</h3>
          <p>
            Interventions are private by nature, so a public portfolio does not exist. What should exist are references — from treatment centers, therapists, and former clients who have given permission to be contacted. Ask for them. A professional with real experience has relationships with people who will vouch for their work.
          </p>
          <p>
            I have worked with treatment centers across the country for over 20 years. Those relationships are mutual. They refer to me because they trust my work. That network is a meaningful signal of credibility.
          </p>

          <h3>Transparency About Their Process</h3>
          <p>
            A good interventionist can walk you through exactly what happens — not just the intervention day, but the weeks leading up to it. They should be able to explain which model they use (Johnson, ARISE, systemic family, or a hybrid), why they use it, and what your role will be throughout the process.
          </p>
          <p>
            If someone is vague or deflects when you ask about their process, that is a problem. You deserve to understand what you are getting into before you sign anything.
          </p>

          <h3>Emotional Stability and Genuine Presence</h3>
          <p>
            Interventions are emotionally chaotic by nature. Your interventionist needs to be the calmest person in the room — not performing calm, but actually grounded. Pay attention to how they show up in your first conversation. Are they present? Do they listen more than they talk? Can they handle hard questions without getting defensive?
          </p>
          <p>
            If they seem rattled by a straightforward question about their fees, imagine them in a room with a person in active addiction who is furious and scared.
          </p>

          <h2>Red Flags That Should Stop You Cold</h2>
          <p>Here are the things that should make you hang up the phone — or ask for your deposit back:</p>
          <ul>
            <li><strong>They guarantee success.</strong> No one can guarantee that someone will accept treatment. Anyone who promises otherwise is either lying or working with a very different definition of success than you are.</li>
            <li><strong>They push a specific treatment center before they even know your loved one.</strong> Some interventionists receive referral fees from treatment programs. That is not inherently wrong — but if they are steering you toward one place without a clear clinical rationale, ask why. Your loved one deserves placement based on fit, not commission.</li>
            <li><strong>They minimize the family's role.</strong> The family is the intervention. An interventionist who treats the family as props in someone else's show is either inexperienced or running a different kind of operation than you need.</li>
            <li><strong>They cannot clearly explain their fees.</strong> Intervention services are expensive — often $3,000 to $10,000 or more depending on scope and travel. That is legitimate. What is not legitimate is vague or shifting answers about what is included, what happens if the person refuses, or what the travel and expense policy covers.</li>
            <li><strong>They want to move immediately without preparation time.</strong> Speed is sometimes necessary. But an interventionist who wants to skip the preparation process is cutting corners that exist to protect you and your loved one.</li>
          </ul>

          <h2>The Questions That Will Tell You Everything</h2>
          <p>
            Before you hire anyone, ask these questions. Listen not just to the content of the answers, but to how they respond:
          </p>
          <ol>
            <li>How many interventions have you conducted, and what is your approximate success rate in getting someone to accept treatment?</li>
            <li>Can you walk me through your preparation process — what happens between now and the intervention day?</li>
            <li>What intervention model do you use, and why?</li>
            <li>What happens if my loved one refuses? What is the plan from there?</li>
            <li>Do you receive referral fees from treatment centers? How do you make placement recommendations?</li>
            <li>Can you provide references from treatment professionals or from families you have worked with?</li>
          </ol>
          <p>
            A professional with real experience will answer every one of those questions clearly and without hesitation. If you feel like you are being managed rather than answered, trust that feeling.
          </p>

          <h2>One More Thing: Trust Your Gut</h2>
          <p>
            Credentials matter. Experience matters. But so does this: Do you feel genuinely heard in your conversations with this person? Do they seem to actually care about your family, or does the whole thing feel transactional?
          </p>
          <p>
            The person you hire is going to sit in the room with someone you love at one of the hardest moments of their life. You need to trust them — not because they were confident on the phone, but because they earned it through how they showed up with you before a single dollar changed hands.
          </p>
          <p>
            Karen, by the way, cancelled her original hire, got her deposit back after a few calls, and we did the intervention together the following week. Her son went to treatment that day. He is still sober.
          </p>
          <p>
            The right interventionist is out there. You just need to know what to look for.
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
            <h3 className="text-xl font-bold mb-2">Get the Help Your Family Deserves</h3>
            <p>
              If you are at the point where you are considering an intervention, you have already been carrying this longer than you should have to. Listen to <strong>The Party Wreckers podcast</strong> wherever you get your shows. And if you are ready to talk, reach out at{" "}
              <a href="https://freedominterventions.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                FreedomInterventions.com
              </a>
              . No pressure. Just a real conversation.
            </p>
          </div>

          <div className="border-t border-border pt-8 mt-12">
            <h3 className="text-xl font-bold mb-4">Related Articles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog/the-job-nobody-applies-for-interventionist" className="text-primary hover:underline">
                  The Job Nobody Applies For: What It's Really Like to Be an Interventionist
                </Link>
              </li>
              <li>
                <Link to="/blog/what-happens-before-intervention" className="text-primary hover:underline">
                  What Really Happens Before a Professional Intervention
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

export default HowToChooseAnInterventionist;
