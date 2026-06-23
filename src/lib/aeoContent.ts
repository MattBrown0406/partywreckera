import { funnelLinks } from "@/lib/funnelLinks";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface RelatedLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface AnswerBlockContent {
  eyebrow: string;
  title: string;
  answer: string;
  bullets: string[];
  nextSteps: string[];
  links: RelatedLink[];
}

export const sourcePages = [
  {
    title: "Family Addiction Help",
    path: "/family-addiction-help",
    description: "A source-of-truth guide for families who need a clear first step when addiction is disrupting home life.",
  },
  {
    title: "Intervention Readiness",
    path: "/intervention-readiness",
    description: "How to know when a family should stop waiting and get intervention guidance.",
  },
  {
    title: "Enabling vs Support",
    path: "/enabling-vs-support",
    description: "A practical explanation of the difference between help that supports recovery and help that keeps addiction protected.",
  },
  {
    title: "Recovery Resources",
    path: "/recovery-resources",
    description: "A curated path through family support, intervention, treatment, and recovery education.",
  },
  {
    title: "Sponsor Information",
    path: "/sponsor-info",
    description: "A clear sponsor overview for ethical brands that want to reach the Party Wreckers audience.",
  },
  {
    title: "Glossary",
    path: "/glossary",
    description: "Plain-language definitions for addiction, intervention, family recovery, and treatment terms.",
  },
];

export const primaryAeoAnswers: Record<string, AnswerBlockContent> = {
  familyAddictionHelp: {
    eyebrow: "Quick answer",
    title: "What should a family do first when addiction is affecting the home?",
    answer:
      "Start by getting the family out of reaction mode. Focus on safety, stop making crisis promises, write down what is actually happening, and choose one structured next step instead of trying to solve the whole problem tonight.",
    bullets: [
      "Do not argue while everyone is flooded.",
      "Separate immediate safety issues from long-term recovery decisions.",
      "Stop protecting the addiction from consequences you cannot keep absorbing.",
      "Get support for the family, even if your loved one is not ready yet.",
    ],
    nextSteps: [
      "Join the free Family Squares support meeting.",
      "Book a direct session if the family cannot wait until the next meeting.",
      "Use the intervention readiness check if safety, money, legal issues, or repeated refusals are present.",
    ],
    links: [
      { label: "Join Family Squares", href: funnelLinks.familySquares, external: true },
      { label: "Get Answers Now", href: funnelLinks.freedomContact, external: true },
      { label: "Check Intervention Readiness", href: funnelLinks.freedomReadiness, external: true },
    ],
  },
  interventionReadiness: {
    eyebrow: "Intervention readiness",
    title: "How do you know if it is time to consider an intervention?",
    answer:
      "It may be time to consider an intervention when the same conversations keep failing, the family is divided, safety or money is deteriorating, treatment is repeatedly refused, or loved ones are changing their lives to protect the addiction from consequences.",
    bullets: [
      "The family is making fear-based decisions.",
      "Boundaries are announced, then walked back.",
      "The loved one keeps promising change without follow-through.",
      "Risk is increasing while the family keeps waiting for a better moment.",
    ],
    nextSteps: [
      "Gather a plain timeline of recent incidents.",
      "Get the family aligned before confronting the loved one.",
      "Talk with a professional before making a dramatic move.",
    ],
    links: [
      { label: "Read the readiness guide", href: "/intervention-readiness" },
      { label: "Check Intervention Readiness", href: funnelLinks.freedomReadiness, external: true },
      { label: "Get Answers Now", href: funnelLinks.freedomContact, external: true },
    ],
  },
  enablingVsSupport: {
    eyebrow: "Plain-language definition",
    title: "What is the difference between enabling and supporting?",
    answer:
      "Support helps someone move toward responsibility, treatment, honesty, and recovery. Enabling reduces short-term discomfort while allowing the harmful pattern to continue. The difference is not how loving the action feels. The difference is what the action protects.",
    bullets: [
      "Support has limits, clarity, and accountability.",
      "Enabling hides consequences from the person creating them.",
      "Support can feel uncomfortable and still be loving.",
      "Enabling often feels kind in the moment and costly later.",
    ],
    nextSteps: [
      "Name the behavior you are no longer willing to participate in.",
      "Decide what you will do, not what you will force them to do.",
      "Get support before announcing a boundary you cannot hold.",
    ],
    links: [
      { label: "Read Enabling vs Support", href: "/enabling-vs-support" },
      { label: "Use Family Resources", href: "/family-resources" },
      { label: "Join Family Squares", href: funnelLinks.familySquares, external: true },
    ],
  },
  sponsorInfo: {
    eyebrow: "Sponsor fit",
    title: "Who should advertise with Party Wreckers?",
    answer:
      "Party Wreckers is a strong fit for ethical brands that serve families, recovery communities, treatment professionals, mental health audiences, wellness buyers, and people making serious next-step decisions around addiction and family stability.",
    bullets: [
      "The audience is high-intent, not casual entertainment traffic.",
      "Sponsor inventory can include podcast, website, newsletter, and article placements.",
      "Placements are measured with sponsor impressions, clicks, inquiries, and package interest.",
      "The site is designed to protect trust by screening sponsor fit.",
    ],
    nextSteps: [
      "Review sponsor options and audience context.",
      "Choose the inventory type that best fits the offer.",
      "Submit a sponsor inquiry for availability.",
    ],
    links: [
      { label: "Sponsor Information", href: "/sponsor-info" },
      { label: "Advertise", href: "/advertise" },
      { label: "Sponsor Packages", href: "/advertise/packages" },
    ],
  },
};

export const coreFaqs: Record<string, FaqItem[]> = {
  familyAddictionHelp: [
    {
      question: "What should I do if my loved one refuses help?",
      answer:
        "Do not try to win the refusal argument in the moment. Step back, get the family aligned, decide what support you will and will not continue providing, and get guidance before the next conversation.",
    },
    {
      question: "Should we wait for rock bottom?",
      answer:
        "Waiting for rock bottom is risky because families often absorb consequences while the addiction escalates. A better goal is to get clear early, set limits, and move toward a structured plan.",
    },
    {
      question: "Does asking for help mean we are committing to an intervention?",
      answer:
        "No. Asking for help means getting clear. Some families need education and support first. Others need coaching or intervention guidance. The first step is clarity, not commitment.",
    },
    {
      question: "Where should families start if they are overwhelmed?",
      answer:
        "Start with one stabilizing action: join Family Squares, read the source guide, or book a session if the situation cannot wait. Avoid making big threats while emotions are high.",
    },
  ],
  interventionReadiness: [
    {
      question: "What are signs an intervention may be appropriate?",
      answer:
        "Repeated failed conversations, escalating risk, family division, financial consequences, legal or medical issues, and treatment refusal are common signs it is time to get professional guidance.",
    },
    {
      question: "Can an intervention work if the person is angry?",
      answer:
        "Anger is common. The real issue is whether the family is prepared, aligned, and ready to hold clear boundaries. That preparation matters more than trying to find a perfectly calm day.",
    },
    {
      question: "What should happen before an intervention?",
      answer:
        "The family should prepare together, clarify treatment options, agree on boundaries, write down concerns, and decide what happens if the answer is yes or no.",
    },
    {
      question: "Should we confront someone without professional help?",
      answer:
        "Some conversations can happen without a professional, but high-risk situations should not be improvised. If safety, overdose risk, violence, or serious family division is present, get guidance first.",
    },
  ],
  enablingVsSupport: [
    {
      question: "Is paying bills always enabling?",
      answer:
        "Not always. Paying bills becomes enabling when it protects the person from repeated consequences while the harmful behavior continues and no recovery responsibility is attached.",
    },
    {
      question: "Are boundaries punishment?",
      answer:
        "No. Boundaries describe what you will do to protect your own safety, sanity, and values. They are not threats designed to control another person.",
    },
    {
      question: "Can support make someone uncomfortable?",
      answer:
        "Yes. Real support can feel uncomfortable because it stops absorbing consequences. Discomfort does not automatically mean you are being cruel.",
    },
    {
      question: "How do families stop enabling?",
      answer:
        "Start by naming the pattern, choosing one boundary the family can actually hold, getting support, and staying consistent when the old pattern pushes back.",
    },
  ],
  sponsorInfo: [
    {
      question: "What kinds of sponsors fit Party Wreckers?",
      answer:
        "Strong fits include treatment-adjacent services, family support resources, recovery-friendly brands, mental health providers, wellness products, books, events, and ethical local or national services.",
    },
    {
      question: "Can sponsors advertise on both the podcast and the website?",
      answer:
        "Yes. Sponsor packages can combine host-read podcast placements, website inventory, newsletter mentions, sponsor directory exposure, and article-aligned placements.",
    },
    {
      question: "How is sponsor performance measured?",
      answer:
        "The site tracks sponsor impressions, sponsor clicks, inquiry starts, package interest, sponsor pages, and placement-level activity so sponsor conversations can be supported with real data.",
    },
    {
      question: "Does every advertiser get accepted?",
      answer:
        "No. Sponsor fit matters because the audience includes families in vulnerable decision moments. Offers should be ethical, relevant, and useful.",
    },
  ],
};

export const glossaryTerms = [
  {
    term: "Addiction",
    definition:
      "A chronic pattern of substance use or compulsive behavior that continues despite harm and often changes judgment, priorities, and family dynamics.",
  },
  {
    term: "Aftercare",
    definition:
      "The ongoing support plan after treatment, often including therapy, recovery meetings, coaching, sober living, medication support, or family work.",
  },
  {
    term: "Boundaries",
    definition:
      "Clear limits that define what you will and will not participate in. Boundaries focus on your actions, not controlling another person.",
  },
  {
    term: "Co-occurring disorder",
    definition:
      "When substance use concerns happen alongside mental health conditions such as depression, anxiety, trauma, or bipolar disorder.",
  },
  {
    term: "Detox",
    definition:
      "A medically supervised process for safely managing withdrawal from alcohol, opioids, benzodiazepines, or other substances when withdrawal risk is present.",
  },
  {
    term: "Enabling",
    definition:
      "Helping that reduces short-term discomfort while allowing addiction-related harm, avoidance, or irresponsibility to continue.",
  },
  {
    term: "Family recovery",
    definition:
      "The process of helping family members heal from the stress, fear, resentment, and patterns that develop around addiction.",
  },
  {
    term: "Harm reduction",
    definition:
      "Strategies that reduce immediate danger even when a person is not ready or able to stop using completely.",
  },
  {
    term: "Intervention",
    definition:
      "A structured process that helps a family present concern, treatment options, and boundaries in a planned and coordinated way.",
  },
  {
    term: "IOP",
    definition:
      "Intensive outpatient treatment, a level of care with several therapy sessions per week while the person lives outside a residential program.",
  },
  {
    term: "Medical detox",
    definition:
      "Withdrawal management supervised by medical professionals, especially important when alcohol, benzodiazepines, opioids, or medical complications are involved.",
  },
  {
    term: "Recovery coaching",
    definition:
      "Practical support that helps a person build recovery habits, accountability, structure, and next-step follow-through.",
  },
  {
    term: "Relapse",
    definition:
      "A return to substance use or addictive behavior after a period of change. Relapse is serious information, not proof that recovery is impossible.",
  },
  {
    term: "Rock bottom",
    definition:
      "A phrase families use for a crisis point, but waiting for rock bottom can increase harm. Families can act before disaster forces the issue.",
  },
  {
    term: "Sober living",
    definition:
      "A structured recovery residence that provides accountability, peer support, and drug- or alcohol-free housing.",
  },
  {
    term: "Treatment readiness",
    definition:
      "A person's willingness and ability to engage with help. Families can still prepare and change their own response even before readiness appears.",
  },
];

export const articleAnswerSummaries: Record<string, AnswerBlockContent> = {
  "adult-child-addiction-parents": {
    eyebrow: "Article answer",
    title: "What can parents do when their adult child is the one with the addiction?",
    answer:
      "Parents can't force an adult child sober, but they control four things that change the entire situation: their money, their home, their words, and their consistency. Stop funding the lifestyle around active addiction, set conditions you can hold, keep the message short and loving, and don't set any boundary alone.",
    bullets: [
      "Helplessness quietly becomes obligation — and obligation becomes the family budget.",
      "If your support makes the consequences softer, it is probably enabling.",
      "Fund treatment, assessment, and recovery housing — never cash during active use.",
    ],
    nextSteps: [
      "Take an honest inventory of every recurring expense tied to your adult child.",
      "Agree on house rules and consequences with your spouse before the next crisis.",
      "If the same talk has happened five times with no change, call a professional interventionist.",
    ],
    links: [
      { label: "Are You Helping or Enabling?", href: "/blog/enabling-addiction-families" },
      { label: "What Really Happens Before a Professional Intervention", href: "/blog/what-happens-before-intervention" },
      { label: "When to Stop Waiting and Consider an Intervention", href: "/blog/when-to-consider-intervention" },
    ],
  },
  "how-interventionists-choose-treatment-center": {
    eyebrow: "Article answer",
    title: "How do interventionists choose a treatment center?",
    answer:
      "Interventionists choose a treatment center based on clinical fit, not marketing — matching level of care, co-occurring issues, and the person's history to a program where the staff has experience with that combination and where the interventionist has a trusted working relationship with admissions.",
    bullets: [
      "Decisions start before intervention day, with calls to centers about your loved one's specifics.",
      "Relationships with admissions teams matter more than glossy websites or amenities.",
      "Insurance and cost are addressed up front so families aren't blindsided after a 'yes.'",
    ],
    nextSteps: [
      "Ask any interventionist which centers they refer to and why — and whether they take referral fees.",
      "Share the full medical, mental health, and substance history so placement can be matched accurately.",
      "Expect a primary and a backup option, and stay flexible on which door your loved one walks through.",
    ],
    links: [
      { label: "What Really Happens Before a Professional Intervention", href: "/blog/what-happens-before-intervention" },
      { label: "How to Choose an Interventionist", href: "/blog/how-to-choose-an-interventionist" },
      { label: "Addiction Treatment Options Guide", href: "/blog/addiction-treatment-options-guide" },
    ],
  },
  "what-families-should-know-before-calling-interventionist": {
    eyebrow: "Article answer",
    title: "What should families know before calling an interventionist?",
    answer:
      "Calling an interventionist is the beginning, not the end. The families who get the best outcomes come in early, tell the whole truth, and accept that the family system — not just the person using — has to change. The intervention day itself is maybe 20% of the work; the prep before and the follow-through after are the rest.",
    bullets: [
      "Don't wait for rock bottom — leverage erodes the longer you wait.",
      "Be unsanitized about history, dynamics, mental health, and money.",
      "Expect to look at your own role in the system, not just the loved one's behavior.",
    ],
    nextSteps: [
      "Write down the full, honest picture before you make the call.",
      "Plan consequences you can actually hold — not ultimatums you can't.",
      "Ask the interventionist about model, experience, and what happens if your loved one says no.",
    ],
    links: [
      { label: "What Really Happens Before a Professional Intervention", href: "/blog/what-happens-before-intervention" },
      { label: "How to Choose an Interventionist", href: "/blog/how-to-choose-an-interventionist" },
      { label: "Intervention Myths Families Need to Know", href: "/blog/intervention-myths-families" },
    ],
  },
  "first-year-sobriety-what-to-expect": {
    eyebrow: "Article answer",
    title: "What should you expect in the first year of sobriety?",
    answer:
      "The first year of sobriety is rarely the smooth relief families imagine. It's a period of brain healing, identity reconstruction, and emotional volatility. Sobriety removes the substance; recovery rebuilds the person — and those happen on different timelines.",
    bullets: [
      "Months 1–3: cognitive fog, mood swings, and Post-Acute Withdrawal Syndrome.",
      "Months 4–6: emptiness and 'dry drunk' irritability as substances stop filling space.",
      "Months 6–12: slow stabilization, identity forming, glimpses of purpose.",
    ],
    nextSteps: [
      "Families: get your own support (Al-Anon, therapy) — don't make recovery the only topic.",
      "Rebuild trust through small, consistent interactions, not grand reconciliations.",
      "Expect nonlinear progress; mood shifts are healing, not relapse.",
    ],
    links: [
      { label: "How Recovery Changes Every Relationship", href: "/blog/how-recovery-changes-relationships" },
      { label: "Dry Drunk Syndrome in the Family", href: "/blog/dry-drunk-syndrome-family" },
      { label: "What Nobody Tells You About Long-Term Sobriety", href: "/blog/what-nobody-tells-you-about-long-term-sobriety" },
    ],
  },
  "how-recovery-changes-relationships": {
    eyebrow: "Article answer",
    title: "How does recovery change relationships?",
    answer:
      "Recovery reshapes how a person shows up — their honesty, emotional availability, and priorities. Every relationship adjusts to that shift. Some get dramatically better; some that were held together by dysfunction don't survive. Marriages, friendships, and family bonds all go through a period of adjustment that takes time, support, and honesty.",
    bullets: [
      "Marriages often get harder before they get better as the old system destabilizes.",
      "Friendships built only on shared using rarely survive sobriety.",
      "Families may feel anger surface once the immediate crisis lifts.",
    ],
    nextSteps: [
      "Let trust rebuild gradually based on consistent behavior over time.",
      "Get your own support — Al-Anon, family therapy, or individual counseling.",
      "Consider couples or family therapy during early recovery, not just for the person in recovery.",
    ],
    links: [
      { label: "Rebuilding Trust in Recovery Families", href: "/blog/rebuilding-trust-in-recovery-families" },
      { label: "What Nobody Tells You About Long-Term Sobriety", href: "/blog/what-nobody-tells-you-about-long-term-sobriety" },
    ],
  },
  "good-days-trap-intermittent-reinforcement": {
    eyebrow: "Article answer",
    title: "What is intermittent reinforcement in addiction families?",
    answer:
      "Intermittent reinforcement is the cycle of crisis and brief good periods that keeps families emotionally bonded to and stuck in a loved one's addiction. Because positive moments arrive unpredictably, they become more psychologically powerful than consistent rewards — making it very hard for families to act decisively.",
    bullets: [
      "Unpredictable rewards drive stronger attachment than consistent ones.",
      "The good days provide 'evidence' that postpones the hard decision.",
      "It's neuroscience and love — not weakness or naïveté.",
    ],
    nextSteps: [
      "Track behavior over 30 to 90 days, not single moments.",
      "Separate the person you love from the chronic addiction pattern.",
      "Make decisions based on the trend, not today's mood.",
    ],
    links: [
      { label: "Enabling in Addiction Families", href: "/blog/enabling-addiction-families" },
      { label: "When to Consider Intervention", href: "/blog/when-to-consider-intervention" },
    ],
  },
  "ambiguous-loss-addiction-family-grief": {
    eyebrow: "Article answer",
    title: "What is ambiguous loss in addiction families?",
    answer:
      "Ambiguous loss is grief that occurs when a loved one is physically present but psychologically absent due to addiction. Families mourn the person they knew without any clear ending or social ritual to mark the loss — making it uniquely difficult to process.",
    bullets: [
      "Coined by Dr. Pauline Boss to describe grief without closure.",
      "Shows up as resentment, false hope, and uncounted secondary losses.",
      "Becomes 'frozen grief' when it goes unnamed for years.",
    ],
    nextSteps: [
      "Name what you're feeling as grief — not just worry or exhaustion.",
      "Find a counselor or peer group familiar with addiction and family systems.",
      "Separate hope from denial; acknowledge secondary losses too.",
    ],
    links: [
      { label: "What Happens Before an Intervention", href: "/blog/what-happens-before-intervention" },
      { label: "Family Addiction Help", href: "/family-addiction-help" },
    ],
  },
  "grandparent-addiction-family": {
    eyebrow: "Article answer",
    title: "What should families do when a grandparent or elderly parent has an addiction?",
    answer:
      "Older adult addiction is widely underdiagnosed and families often stay silent out of grief, role-reversal discomfort, or the false belief that it's too late. Recovery is possible at any age — the first step is naming it honestly within the family.",
    bullets: [
      "Alcohol misuse affects an estimated 1 in 10 to 1 in 5 adults over 65.",
      "Signs include isolation, defensive anger, missed medications, and falls.",
      "Quality of time is not cancelled by age — older adults respond well to treatment.",
    ],
    nextSteps: [
      "Get the family on the same page before approaching the person.",
      "Consider a professional intervention with a neutral third party.",
      "Look for treatment programs designed for older adults.",
    ],
    links: [
      { label: "The Family Secret", href: "/blog/family-secret-addiction-silence" },
      { label: "When to Consider Intervention", href: "/blog/when-to-consider-intervention" },
    ],
  },
  "family-secret-addiction-silence": {
    eyebrow: "Article answer",
    title: "Why do families keep addiction a secret?",
    answer:
      "Families keep addiction secret because shame is louder than fear. The silence often starts as protection — for the person struggling and the family's reputation — and hardens into an operating system where honest conversation feels impossible.",
    bullets: [
      "Love, fear, shame, and hope all reinforce the silence.",
      "The secret costs connection, time, and the chance to get help sooner.",
      "Children absorb the unspoken rules: don't talk, don't trust, don't feel.",
    ],
    nextSteps: [
      "Tell the truth to one safe person — a therapist, sponsor, or professional.",
      "You don't need a plan, just stop carrying it alone.",
      "Get family support before the next crisis.",
    ],
    links: [
      { label: "Adult Children of Addicts", href: "/blog/adult-children-of-addicts-patterns" },
      { label: "Family Addiction Help", href: "/family-addiction-help" },
    ],
  },
  "adult-children-of-addicts-patterns": {
    eyebrow: "Article answer",
    title: "What patterns follow adult children of addicts into adulthood?",
    answer:
      "Adult children of addicts often carry hypervigilance, conflict avoidance, people-pleasing, and difficulty trusting into adulthood — adaptive responses to an unpredictable home that quietly shape relationships, work, and parenting.",
    bullets: [
      "Family roles like Hero, Caretaker, Lost Child, and Mascot persist long after childhood.",
      "Chaos can feel like home, drawing people toward unavailable or unpredictable partners.",
      "These patterns are trained responses, not character flaws — and they can be unlearned.",
    ],
    nextSteps: [
      "Consider trauma-informed therapy (IFS, EMDR, somatic, attachment-focused).",
      "Try ACA/ACOA or Al-Anon for peer support.",
      "Be honest with yourself about what your childhood actually was.",
    ],
    links: [{ label: "Read about Family Roles", href: "/blog/family-roles" }],
  },
  "parentified-child-addiction-family": {
    eyebrow: "Article answer",
    title: "What is a parentified child in an addicted family?",
    answer:
      "A parentified child takes on adult emotional or practical responsibilities — managing the household, caring for siblings, or regulating a parent's emotions — because active addiction has left a gap that nobody else is filling.",
    bullets: [
      "Instrumental parentification looks like cooking, cleaning, and caring for siblings.",
      "Emotional parentification looks like managing a parent's moods and being their confidant.",
      "Quiet and capable is not the same as okay.",
    ],
    nextSteps: [
      "Name what the young person in your family is actually carrying.",
      "Get support for the whole family system, not just the addict.",
      "Talk to a professional before the pattern hardens further.",
    ],
    links: [{ label: "Read about Family Roles", href: "/blog/family-roles" }],
  },
  "conflict-avoidance-enabling-addiction-family": {
    eyebrow: "Article answer",
    title: "How does conflict avoidance enable addiction?",
    answer:
      "Conflict avoidance enables addiction when the family keeps choosing short-term quiet over honest limits, clear consequences, and uncomfortable truth.",
    bullets: [
      "Avoiding conflict often teaches the addiction that pressure works.",
      "Peacekeeping can become a way to protect the pattern.",
      "The family needs calm honesty, not another emotional explosion.",
    ],
    nextSteps: ["Name the avoided conversation.", "Choose one limit you can hold.", "Get support before the next crisis."],
    links: [{ label: "Read Enabling vs Support", href: "/enabling-vs-support" }],
  },
  "how-to-choose-an-interventionist": {
    eyebrow: "Article answer",
    title: "What should families look for in an interventionist?",
    answer:
      "Look for preparation, transparency, experience, emotional steadiness, clear fees, and willingness to answer hard questions about process, treatment referrals, and refusal planning.",
    bullets: [
      "Avoid anyone who guarantees success.",
      "Ask how the family will be prepared before intervention day.",
      "Make sure treatment recommendations are based on fit, not pressure.",
    ],
    nextSteps: ["Ask process questions.", "Check references.", "Use the readiness guide before hiring."],
    links: [{ label: "Check Intervention Readiness", href: "/intervention-readiness" }],
  },
  "the-job-nobody-applies-for-interventionist": {
    eyebrow: "Article answer",
    title: "What does an interventionist actually do?",
    answer:
      "An interventionist helps families move from panic and scattered reactions into a prepared plan that addresses treatment options, family alignment, and boundaries.",
    bullets: [
      "The work starts before the intervention room.",
      "Family preparation is the foundation.",
      "The goal is clarity and action, not performance.",
    ],
    nextSteps: ["Learn what readiness looks like.", "Get the family aligned.", "Talk to a professional before crisis peaks."],
    links: [{ label: "Intervention Readiness", href: "/intervention-readiness" }],
  },
  "the-day-i-stopped-performing-sobriety": {
    eyebrow: "Article answer",
    title: "What does it mean to stop performing sobriety?",
    answer:
      "It means moving beyond looking sober from the outside and building an honest recovery life with accountability, humility, connection, and behavior change.",
    bullets: [
      "External compliance is not the same as recovery.",
      "Long-term sobriety requires emotional honesty.",
      "Families can support recovery without managing it.",
    ],
    nextSteps: ["Look for behavior change.", "Support structure, not appearances.", "Use family recovery resources."],
    links: [{ label: "Recovery Resources", href: "/recovery-resources" }],
  },
  "what-nobody-tells-you-about-long-term-sobriety": {
    eyebrow: "Article answer",
    title: "What changes in long-term sobriety?",
    answer:
      "Long-term sobriety becomes less about avoiding the old life and more about building a truthful, connected, useful life that can handle discomfort without escape.",
    bullets: [
      "Sobriety is not just time.",
      "Recovery matures through responsibility.",
      "Families rebuild trust through consistency, not speeches.",
    ],
    nextSteps: ["Look for sustained actions.", "Give trust time.", "Keep support in place after early recovery."],
    links: [{ label: "Recovery Resources", href: "/recovery-resources" }],
  },
  "you-already-know-the-problem-isnt-information": {
    eyebrow: "Article answer",
    title: "Why do families stay stuck even when they know something is wrong?",
    answer:
      "Families often do not lack information. They lack a clear next step they can take while afraid, guilty, exhausted, or worried about making the problem worse.",
    bullets: [
      "Knowing is not the same as acting.",
      "Fear often disguises itself as patience.",
      "A structured next step breaks the loop.",
    ],
    nextSteps: ["Write down the pattern.", "Choose one action today.", "Ask for outside guidance."],
    links: [{ label: "Family Addiction Help", href: "/family-addiction-help" }],
  },
  "the-permission-youve-been-waiting-for-doesnt-exist": {
    eyebrow: "Article answer",
    title: "Should families wait for permission to act?",
    answer:
      "No. Families rarely get a perfect invitation to change the pattern. They can ask for help, set limits, and get aligned before the loved one agrees.",
    bullets: [
      "Waiting for permission keeps the old pattern in charge.",
      "Family change can begin before treatment readiness.",
      "Action should be planned, not impulsive.",
    ],
    nextSteps: ["Stop waiting for the perfect moment.", "Get family support.", "Check whether intervention guidance is needed."],
    links: [{ label: "Check Intervention Readiness", href: "/intervention-readiness" }],
  },
  "how-to-talk-to-someone-about-their-addiction": {
    eyebrow: "Article answer",
    title: "How should you talk to someone about their addiction?",
    answer:
      "Talk when you are calm, use specific examples, avoid moral lectures, state what you are worried about, and focus on the next responsible step instead of winning the argument.",
    bullets: [
      "Use observations, not accusations.",
      "Stay specific and brief.",
      "Do not negotiate while emotions are high.",
    ],
    nextSteps: ["Prepare before the talk.", "Choose timing carefully.", "Know your boundary before you begin."],
    links: [{ label: "Conversation Starters", href: "/conversation-starters" }],
  },
  "rebuilding-trust-in-recovery-families": {
    eyebrow: "Article answer",
    title: "How do families rebuild trust in recovery?",
    answer:
      "Trust rebuilds through repeated consistent behavior over time. Families do not have to pretend everything is fixed just because someone gets sober.",
    bullets: [
      "Sobriety begins the trust process.",
      "Consistency matters more than reassurance.",
      "Families need recovery too.",
    ],
    nextSteps: ["Set realistic expectations.", "Watch behavior over time.", "Use family support instead of monitoring everything alone."],
    links: [{ label: "Recovery Resources", href: "/recovery-resources" }],
  },
  "caretaker-trap-losing-yourself-addiction-family": {
    eyebrow: "Article answer",
    title: "What is the caretaker trap in addiction families?",
    answer:
      "The caretaker trap happens when someone loses their own health, identity, finances, or peace while trying to manage another person's addiction.",
    bullets: [
      "Caretaking can feel noble while becoming destructive.",
      "You cannot recover for someone else.",
      "Family support helps restore clarity and limits.",
    ],
    nextSteps: ["Name what you have been carrying.", "Choose one limit.", "Get support for yourself."],
    links: [{ label: "Family Addiction Help", href: "/family-addiction-help" }],
  },
  "how-addiction-affects-siblings": {
    eyebrow: "Article answer",
    title: "How does addiction affect siblings in a family?",
    answer:
      "Addiction affects siblings by pulling family attention, money, and emotional energy toward the addicted person — leaving brothers and sisters to feel invisible, responsible, or guilty by comparison, often becoming the 'easy one' and paying for it in silence.",
    bullets: [
      "Siblings commonly fall into three roles: the Overachiever, the Caretaker, or the Lost One.",
      "Quiet kids are not necessarily okay kids — 'doing fine' and 'actually fine' are different.",
      "The effects often follow siblings into adult relationships, work, and how they ask for help.",
    ],
    nextSteps: [
      "Name what's happening with the non-addicted kids directly.",
      "Carve out time and attention that has nothing to do with the addicted sibling.",
      "Get them their own outside support — a counselor, group, or trusted adult.",
    ],
    links: [
      { label: "The Forgotten Ones: Sibling Addiction Impact", href: "/blog/sibling-addiction-affects-family" },
      { label: "Family Roles in Addiction", href: "/blog/family-roles" },
    ],
  },
  "how-addiction-changes-family-holidays": {
    eyebrow: "Article answer",
    title: "How does addiction change family holidays?",
    answer:
      "Addiction changes holidays by replacing presence with performance — the person is physically there but emotionally managing their use, image, or anxiety, while everyone else senses something is off but can't quite name it.",
    bullets: [
      "Families quietly adjust traditions, conversations, and timing to protect themselves.",
      "Someone usually becomes the 'translator' managing the room's mood all day.",
      "Kids notice far more than adults realize, including the hours of the day to avoid.",
    ],
    nextSteps: [
      "Have one honest conversation with one person — not at the table, not during the event.",
      "Decide your own plan in advance for when things get uncomfortable.",
      "Talk to someone outside the family — a coach, support group, or interventionist.",
    ],
    links: [
      { label: "Why Families Live in Constant Alert", href: "/blog/family-constant-alert" },
      { label: "Family Roles in Addiction", href: "/blog/family-roles" },
    ],
  },
  "rescuer-trap-enabling-addiction-families": {
    eyebrow: "Article answer",
    title: "What is the rescuer trap in addiction families?",
    answer:
      "The rescuer trap is when a family member's identity becomes organized around saving someone with addiction. It looks like love — and it is — but by intercepting consequences (paying bills, covering stories, fixing crises), the family removes the very information that might motivate the person to change.",
    bullets: [
      "Rescuing stops being a behavior and becomes a role — much harder to give up.",
      "Consequences are often the only thing powerful enough to disrupt addiction's pain-avoidance loop.",
      "The rescuer often loses their own friendships, sleep, finances, and identity in the process.",
    ],
    nextSteps: [
      "Pick one specific behavior to stop — not all of them at once.",
      "Say it once, calmly: 'I won't do X anymore. I love you. I hope you'll get help.'",
      "Get your own support — Al-Anon, a therapist, or a family coach — before announcing a limit.",
    ],
    links: [
      { label: "What Enabling Really Looks Like", href: "/blog/enabling-addiction-families" },
      { label: "Enabling vs. Supporting: Detachment with Love", href: "/blog/enabling-vs-supporting-boundaries" },
      { label: "When to Consider an Intervention", href: "/blog/when-to-consider-intervention" },
    ],
  },
  "negotiating-with-addiction-family-patterns": {
    eyebrow: "Article answer",
    title: "Why do families end up negotiating with addiction?",
    answer:
      "Families negotiate with addiction because bargaining feels like control. Setting conditions, raising thresholds, and offering 'one more chance' creates the illusion of agency — but addiction doesn't honor terms, and every redrawn line teaches the addicted person that the limit isn't real.",
    bullets: [
      "Negotiation is a grief response — it extends hope when the evidence doesn't support it.",
      "Serial 'last chances' train the addicted person that your lines are moveable.",
      "A response says 'this is happening, here's what we're doing' — not 'if X, then Y.'",
    ],
    nextSteps: [
      "Get honest about what's actually true right now, not the best-case version.",
      "Decide what you're doing today — stop waiting for things to get worse.",
      "Get support outside the family: Al-Anon, a therapist, or a professional interventionist.",
    ],
    links: [
      { label: "The Rescuer Trap", href: "/blog/rescuer-trap-enabling-addiction-families" },
      { label: "Enabling vs. Supporting: Detachment with Love", href: "/blog/enabling-vs-supporting-boundaries" },
      { label: "When to Consider an Intervention", href: "/blog/when-to-consider-intervention" },
    ],
  },
  "triangulation-in-families-with-addiction": {
    eyebrow: "Article answer",
    title: "What is triangulation in families with addiction?",
    answer:
      "Triangulation is when two family members communicate about a third person — usually the person with addiction — instead of directly with them. It feels safer than confrontation, but it removes the direct, unfiltered feedback that might actually move things, and it keeps the family stuck in roles like messenger, buffer, and protected one.",
    bullets: [
      "Triangulation softens or distorts hard truths by the time they reach the addicted person.",
      "Roles like 'messenger' and 'buffer' calcify and start governing unrelated family issues too.",
      "Everyone loses trust — the addicted person feels managed, the messenger feels used, the avoider never finds out what direct honesty could do.",
    ],
    nextSteps: [
      "Say the hard thing to the person it's about, not the person it's easiest to tell.",
      "Stop relaying messages between other adults in your family — name it out loud, once.",
      "If you need a third party, make it a structured one: a family meeting, counselor, or interventionist.",
    ],
    links: [
      { label: "The Rescuer Trap", href: "/blog/rescuer-trap-enabling-addiction-families" },
      { label: "Why Families Negotiate With Addiction", href: "/blog/negotiating-with-addiction-family-patterns" },
      { label: "When to Consider an Intervention", href: "/blog/when-to-consider-intervention" },
    ],
  },
  "living-amends-what-recovery-asks-after-sorry": {
    eyebrow: "Article answer",
    title: "What is a living amends in recovery?",
    answer:
      "A living amends is the ongoing, behavioral proof that you've changed — not a one-time apology. It's what you do consistently, over months and years, that the people you hurt can actually observe and rely on. Words make the apology; pattern makes the amends.",
    bullets: [
      "An apology is an event. A living amends is a pattern that has to keep going indefinitely.",
      "Trust rebuilds on boring Tuesdays, not on big repair conversations.",
      "Family members are allowed to wait for proof before re-extending trust — that's accuracy, not punishment.",
    ],
    nextSteps: [
      "Stop measuring progress by how forgiven you feel; measure it by whether your actions match your words.",
      "Pick the small, unwitnessed follow-throughs and do them anyway.",
      "If you're the family member, watch the pattern under inconvenience — that's where the truth lives.",
    ],
    links: [
      { label: "Making Amends in Recovery", href: "/blog/making-amends-recovery" },
      { label: "Rebuilding Trust in Recovery: Families", href: "/blog/rebuilding-trust-in-recovery-families" },
      { label: "Why Apologies Don't Equal Change", href: "/blog/apologies-dont-equal-change" },
    ],
  },
  "coming-home-from-rehab-what-families-arent-prepared-for": {
    eyebrow: "Article answer",
    title: "What should families expect when someone comes home from rehab?",
    answer:
      "Coming home from rehab is the start of recovery, not the finish line. The first 90 days at home are fragile — expect mood swings, awkwardness in the house, and triggers everywhere. Families support recovery best by holding structure and boundaries while letting the person own their program.",
    bullets: [
      "Treatment stabilizes someone; it does not fix them. Home is where the tools either get practiced or dropped.",
      "Structure beats motivation: meetings, routine, sober support, and steady days carry the early weeks.",
      "It is normal to feel relieved and resentful at once — trust returns through evidence over time, not on a 30-day certificate.",
    ],
    nextSteps: [
      "Keep the first 90 days small and steady — no big family reckoning yet.",
      "Hold the boundaries you set during the crisis; support the person, not the addiction.",
      "Make a written relapse plan as a family before it is needed, so panic does not run the response.",
    ],
    links: [
      { label: "Rebuilding Trust in Recovery: Families", href: "/blog/rebuilding-trust-in-recovery-families" },
      { label: "Enabling vs Supporting: Where the Line Is", href: "/blog/enabling-vs-supporting-boundaries" },
      { label: "Living Amends in Recovery", href: "/blog/living-amends-what-recovery-asks-after-sorry" },
    ],
  },
};
