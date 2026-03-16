// Blog post data for routing and index page
import blogImageExerciseNutrition from "@/assets/blog-exercise-nutrition-recovery.jpg";
import blogImageEnabling from "@/assets/blog-family-support-enabling.jpg";
import blogImageConversation from "@/assets/blog-right-moment-conversation.jpg";
import blogImageBrainReward from "@/assets/blog-brain-reward-pathways.jpg";
import blogImageEducation from "@/assets/blog-understanding-addiction-education.jpg";
import blogImageHelpingVsEnabling from "@/assets/blog-helping-vs-enabling.jpg";
import blogImageFamilySupport from "@/assets/blog-family-support-recovery.jpg";
import blogImageMedicalDetox from "@/assets/blog-medical-detox.jpg";
import blogImageDepressionAddiction from "@/assets/blog-depression-addiction.jpg";
import blogImageMedicalDetoxImportance from "@/assets/blog-medical-detox-importance.jpg";
import blogImageEnablingVsSupporting from "@/assets/blog-enabling-vs-supporting.jpg";
import blogImagePersonalityChanges from "@/assets/blog-addiction-personality-changes.jpg";
import blogImageDryDrunk from "@/assets/blog-dry-drunk-syndrome.jpg";
import blogImageRockBottom from "@/assets/blog-rock-bottom-myth.jpg";
import blogImageWineOclock from "@/assets/blog-wine-oclock-humor.jpg";
import blogImageEveryoneDrinks from "@/assets/blog-everyone-drinks-like-this.jpg";
import blogImageJokesAboutDrinking from "@/assets/blog-jokes-about-drinking.jpg";
import blogImageHumorHidesAddiction from "@/assets/blog-humor-hides-addiction.jpg";
import blogImageFamilyConstantAlert from "@/assets/blog-family-constant-alert.jpg";
import blogImageAddictionStopsBeingFunny from "@/assets/blog-addiction-stops-being-funny.jpg";
import blogImageEnablingSurvival from "@/assets/blog-enabling-survival.jpg";
import blogImageAdviceDoesntHelp from "@/assets/blog-advice-doesnt-help.jpg";
import blogImageSupportingVsCarrying from "@/assets/blog-supporting-vs-carrying.jpg";
import blogImageFamilyRoles from "@/assets/blog-family-roles.jpg";
import blogImageAdviceFailsSpectacularly from "@/assets/blog-advice-fails-spectacularly.jpg";
import blogImageEnablingFearHousehold from "@/assets/blog-enabling-fear-household.jpg";
import blogImageJustLetGoAdvice from "@/assets/blog-just-let-go-advice.jpg";
import blogImageAdviceSoundsWiseFails from "@/assets/blog-advice-sounds-wise-fails.jpg";
import blogImageStopEnablingMeaning from "@/assets/blog-stop-enabling-meaning.jpg";
import blogImagePatienceAloneFails from "@/assets/blog-patience-alone-fails.jpg";
import blogImageGuiltVsResponsibility from "@/assets/blog-guilt-vs-responsibility.jpg";
import blogImageNegotiatingWithAddiction from "@/assets/blog-negotiating-with-addiction.jpg";
import blogImageMinimizingAddiction from "@/assets/blog-minimizing-addiction.jpg";
import blogImageFamilyQuestionsAddiction from "@/assets/blog-family-questions-addiction.jpg";
import blogImageGamblingAddiction from "@/assets/blog-gambling-addiction.jpg";
import blogImageComparisonTrapAddiction from "@/assets/blog-comparison-trap-addiction.jpg";
import blogImageJustAPhaseMyths from "@/assets/blog-just-a-phase-myths.jpg";
import blogImageFunctionalAddictionHiding from "@/assets/blog-functional-addiction-hiding.jpg";
import blogImageModerationLoophole from "@/assets/blog-moderation-loophole.jpg";
import blogImageInsightVsRecovery from "@/assets/blog-insight-vs-recovery.jpg";
import blogImageSlidingBaseline from "@/assets/blog-sliding-baseline-addiction.jpg";
import blogImageAmbiguityClarity from "@/assets/blog-addiction-ambiguity-clarity.jpg";
import blogImageAddictionLoopholes from "@/assets/blog-addiction-loopholes.jpg";
import blogImageAddictionControlIllusion from "@/assets/blog-addiction-control-illusion.jpg";
import blogImageFearAvoidanceParalysis from "@/assets/blog-fear-avoidance-paralysis.jpg";
import blogImageKnowledgeVsBehavior from "@/assets/blog-knowledge-vs-behavior-addiction.jpg";
import blogImageApologiesDontEqualChange from "@/assets/blog-apologies-dont-equal-change.jpg";
import blogImageFalseStabilityRebound from "@/assets/blog-false-stability-rebound.jpg";
import blogImageEffortVsChange from "@/assets/blog-effort-vs-change-addiction.jpg";
import blogImageCommunicationAddiction from "@/assets/blog-communication-addiction-families.jpg";
import blogImageHighFunctioningCocaine from "@/assets/blog-high-functioning-cocaine.jpg";
import blogImageThisTimeFeelsDifferent from "@/assets/blog-this-time-feels-different.jpg";
import blogImageBusyNotRecovery from "@/assets/blog-busy-not-recovery.jpg";
import blogImageStressAddictionExcuse from "@/assets/blog-stress-addiction-excuse.jpg";
import blogImagePromisesCycle from "@/assets/blog-addiction-promises-cycle.jpg";
import blogImageBlameShifting from "@/assets/blog-blame-shifting-addiction.jpg";
import blogImageAddictionFamilyExhaustion from "@/assets/blog-addiction-family-exhaustion.jpg";
import blogImageLivingInTheStorm from "@/assets/blog-living-in-the-storm.jpg";
import blogImageBadNightMyth from "@/assets/blog-bad-night-myth.jpg";
import blogImageRecoveryRoadmap from "@/assets/blog-recovery-roadmap.jpg";
import blogImageAlcoholAddictionRecovery from "@/assets/blog-alcohol-addiction-recovery.jpg";
import blogImageInterventionWhatToSay from "@/assets/blog-intervention-what-to-say.jpg";
import blogImageSignsLovedOneNeedsHelp from "@/assets/blog-signs-loved-one-needs-help.jpg";
import blogImageAddictionFromInside from "@/assets/blog-addiction-from-inside.jpg";
import blogImageTraumaAddiction from "@/assets/blog-trauma-addiction-families.jpg";
import blogImageAnxietyAddictionLoop from "@/assets/blog-anxiety-addiction-loop.jpg";
import blogImageShameAddiction from "@/assets/blog-shame-addiction.jpg";
import blogImageSelfMedicationTrap from "@/assets/blog-self-medication-trap.jpg";
import blogImageEnablingAddictionFamilies from "@/assets/blog-enabling-addiction-families.jpg";

export interface BlogArticle {
  id: string;
  title: string;
  date: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  category?: string;
}

export const blogArticles: BlogArticle[] = [
  {
    id: "enabling-addiction-families",
    title: "Are You Helping or Enabling? How Families Accidentally Fuel Addiction",
    date: "March 16, 2026",
    image: blogImageEnablingAddictionFamilies,
    imageAlt: "Hands passing money through a chain-link fence, representing the painful dynamic of enabling addiction in families",
    excerpt: "Think you're helping your addicted loved one? Learn how enabling addiction actually fuels it — and what families can do differently, from someone who's been on both sides.",
    category: "Family Education"
  },
  {
    id: "self-medication-trap",
    title: "When Drinking Wasn't the Real Problem: The Self-Medication Trap Families Miss",
    date: "March 15, 2026",
    image: blogImageSelfMedicationTrap,
    imageAlt: "A young man at a dimly lit kitchen table holding a glass of whiskey surrounded by prescription pill bottles, representing the self-medication trap",
    excerpt: "Self-medication happens when someone uses substances to manage untreated anxiety, depression, PTSD, or trauma. Learn why families miss this pattern and how dual diagnosis treatment changes everything.",
    category: "Family Education"
  },
  {
    id: "shame-and-addiction",
    title: "Why Shame Doesn't Sober Up an Addict — It Just Drives the Using Underground",
    date: "March 13, 2026",
    image: blogImageShameAddiction,
    imageAlt: "A young man sitting alone on the edge of a bed with head bowed, representing the weight of shame in addiction",
    excerpt: "Shame is one of the most powerful emotional drivers of continued substance use — and yet it's one of the first tools families reach for. Learn why shaming backfires and what actually works instead.",
    category: "Family Education"
  },
  {
    id: "anxiety-addiction-loop-families",
    title: "The Anxiety-Addiction Loop: Why Your Loved One Can't Just \"Calm Down and Stop\"",
    date: "March 12, 2026",
    image: blogImageAnxietyAddictionLoop,
    imageAlt: "A silhouetted figure sitting alone on a couch in dim warm light, representing the cycle of anxiety and addiction",
    excerpt: "Anxiety and addiction feed each other in a vicious cycle. Learn how the anxiety-addiction loop works, why 'just stop' misses the point, and what families can actually do.",
    category: "Family Education"
  },
  {
    id: "trauma-and-addiction-families",
    title: "The Trauma Connection: Why Your Loved One's Addiction Isn't the Whole Story",
    date: "March 11, 2026",
    image: blogImageTraumaAddiction,
    imageAlt: "Young adult holding a cracked mirror in a dimly lit room, symbolizing unresolved trauma beneath addiction",
    excerpt: "Most addiction isn't just about substances—it's about unhealed pain. Learn how trauma drives addiction and what families need to know to actually help their loved one.",
    category: "Understanding Addiction"
  },
  {
    id: "what-addiction-looks-like-from-inside",
    title: "What Addiction Really Looks Like From the Inside",
    date: "March 10, 2026",
    image: blogImageAddictionFromInside,
    imageAlt: "Young man sitting alone in a dimly lit room reflecting on addiction and moments of clarity",
    excerpt: "A first-person account of addiction's internal experience: the rationalizations, shame spirals, failed attempts to quit, and moments of clarity that eventually lead to recovery.",
    category: "Personal Stories"
  },
  {
    id: "signs-loved-one-needs-help-with-alcohol",
    title: "11 Signs Your Loved One Needs Help With Drinking (And What To Do Next)",
    date: "March 9, 2026",
    image: blogImageSignsLovedOneNeedsHelp,
    imageAlt: "Concerned family member worrying about a loved one's drinking late at night",
    excerpt: "Is your family member's drinking starting to feel less funny and more scary? Here are the real signs someone needs help — explained with honesty, a little humor, and zero judgment.",
    category: "Family & Addiction"
  },
  {
    id: "what-to-say-at-an-intervention",
    title: "What to Say at an Intervention: Scripts & Steps That Actually Work",
    date: "March 8, 2026",
    image: blogImageInterventionWhatToSay,
    imageAlt: "Family gathered in a warm living room preparing for an addiction intervention conversation with notes on a table",
    excerpt: "A professional interventionist explains exactly what to say at an intervention — including word-for-word script examples, what NOT to say, and step-by-step preparation tips for families.",
    category: "Intervention"
  },
  {
    id: "alcohol-addiction-recovery",
    title: "Alcohol Addiction Recovery: Signs, Stages & How to Get Help",
    date: "March 6, 2026",
    image: blogImageAlcoholAddictionRecovery,
    imageAlt: "Person walking along a sunlit winding path at dawn symbolizing the journey of alcohol addiction recovery",
    excerpt: "Alcohol use disorder affects more than 29 million Americans. Recovery is possible at any stage — with the right support, treatment, and understanding of what to expect along the way."
  },
  {
    id: "recovery-roadmap",
    title: "Why I Built the Recovery Roadmap",
    date: "March 5, 2026",
    image: blogImageRecoveryRoadmap,
    imageAlt: "Hand-drawn recovery roadmap on wooden desk with coffee cup and phone showing family photo representing a structured guide for families navigating addiction",
    excerpt: "Matt Brown explains why he created the Recovery Roadmap on SoberHelpline.com — a free, stage-based action plan for families navigating addiction. No marketing. No generic advice. Just 20 years of real intervention experience."
  },
  {
    id: "bad-night-myth",
    title: "The \"It Was Just a Bad Night\" Myth",
    date: "March 4, 2026",
    image: blogImageBadNightMyth,
    imageAlt: "Young adult male sitting alone at dimly lit kitchen table late at night with empty glass while woman watches from doorway representing addiction denial patterns",
    excerpt: "Why 'it was just a bad night' is one of the most dangerous phrases in addiction. Learn how families get trapped evaluating isolated events instead of recognizing escalating patterns of substance use."
  },
  {
    id: "living-in-the-storm",
    title: "Living in the Storm: What Families Experience When a Loved One Is in Active Addiction",
    date: "February 27, 2026",
    image: blogImageLivingInTheStorm,
    imageAlt: "Middle-aged woman sitting alone in dimly lit kitchen at night holding phone with untouched coffee mug showing chronic emotional weight of loving someone in active addiction",
    excerpt: "The call comes at 2 a.m. again. Active addiction grinds families down through enabling, hypervigilance, compassion fatigue, and repeated relapse cycles. This is what it truly looks like from inside a family."
  },
  {
    id: "addiction-family-exhaustion",
    title: "Why You're Exhausted — And It's Not Just the Drinking",
    date: "February 13, 2026",
    image: blogImageAddictionFamilyExhaustion,
    imageAlt: "Exhausted middle-aged woman sitting at kitchen table early morning with cold coffee, eyes unfocused, showing chronic emotional depletion from living with addiction",
    excerpt: "You tell yourself it's the late nights. The arguments. The chaos. But the exhaustion runs deeper than that. Loving someone with addiction creates a kind of fatigue that sleep doesn't fix. It's mental. Emotional. Physiological. You are not just tired from their drinking. You're tired from living in constant anticipation. Understanding addiction-related family exhaustion is the first step toward reclaiming your energy."
  },
  {
    id: "blame-shifting-addiction",
    title: "Why Every Conversation About Drinking Somehow Turns Into Your Fault",
    date: "February 12, 2026",
    image: blogImageBlameShifting,
    imageAlt: "Young adult male sitting at kitchen table with arms crossed looking defensive while middle-aged mother gestures calmly trying to talk, warm muted tones with emotional tension",
    excerpt: "You try to talk about the drinking. You stay calm. You stick to facts. And somehow, twenty minutes later, you're defending yourself. Now it's about your tone. Your stress. Your expectations. Your past mistakes. This pattern is common in addiction systems. Conversations about substance use often get flipped, redirected, or reversed. Understanding blame shifting and emotional deflection helps families stay grounded instead of getting pulled into endless arguments."
  },
  {
    id: "addiction-promises-cycle",
    title: "Why \"They Promise It Won't Happen Again\" Keeps Working on Families",
    date: "February 11, 2026",
    image: blogImagePromisesCycle,
    imageAlt: "Young adult male sitting on couch with hands clasped together looking sincere while older mother watches cautiously, crumpled note saying I promise on coffee table between them",
    excerpt: "If you've lived through addiction long enough, you've heard it more than once: \"I swear this is the last time.\" The apology feels sincere. The eye contact feels real. The remorse feels deep. Families want to believe it—because hope is powerful. But in addiction systems, promises often repeat without structural change. Understanding why the apology–forgiveness cycle keeps working on families helps break the pattern without hardening your heart."
  },
  {
    id: "stress-addiction-excuse",
    title: "Why \"I Only Drink Because I'm Stressed\" Isn't the Full Story",
    date: "February 10, 2026",
    image: blogImageStressAddictionExcuse,
    imageAlt: "Professional woman in business attire sitting at desk with wine glass and laptop open, evening lighting suggests after-work drinking routine",
    excerpt: "\"I'm not drinking because I'm addicted. I'm drinking because I'm stressed.\" This explanation sounds reasonable. Life is stressful. People deserve to unwind. But when stress becomes the primary justification for regular substance use, families need to understand what's happening. Stress can trigger drinking, but it's rarely the complete explanation. Understanding the difference between stress-related drinking and stress-justified drinking helps families respond appropriately."
  },
  {
    id: "busy-not-recovery",
    title: "Why Being Busy Isn't the Same as Being in Recovery",
    date: "February 9, 2026",
    image: blogImageBusyNotRecovery,
    imageAlt: "Person surrounded by work papers and to-do lists looking productive but overwhelmed, suggesting busy-ness masking underlying issues",
    excerpt: "\"I'm doing great. Look how busy I am.\" They point to work projects, social commitments, family obligations. The schedule is packed. The productivity looks impressive. But families sometimes confuse activity with recovery. Being busy can mask underlying struggles. It can delay necessary internal work. Understanding the difference between productive distraction and sustainable recovery helps families recognize when professional support is still needed."
  },
  {
    id: "this-time-feels-different",
    title: "When \"This Time Feels Different\" Actually Means Something",
    date: "February 8, 2026",
    image: blogImageThisTimeFeelsDifferent,
    imageAlt: "Person sitting thoughtfully by window with recovery books and phone showing AA meeting app, suggesting genuine change attempt",
    excerpt: "Families have heard it before: \"This time is different.\" Previous attempts at sobriety failed. Promises were broken. Trust was damaged. But sometimes, this time actually is different. Families need to know how to distinguish between emotional promises and structural change. Real change includes concrete actions, professional support, and sustained behavioral shifts. Understanding the markers of genuine change helps families respond appropriately to recovery attempts."
  },
  {
    id: "high-functioning-cocaine-use",
    title: "The Hidden Danger of High-Functioning Cocaine Use",
    date: "February 7, 2026",
    image: blogImageHighFunctioningCocaine,
    imageAlt: "Professional businessman in suit checking phone with powder traces visible on dark surface, suggesting functional addiction",
    excerpt: "\"I'm not like other drug users. I have a job, pay my bills, and function normally.\" High-functioning cocaine use can be particularly deceptive. The person maintains professional success while engaging in regular substance use. Performance may actually improve initially. But functioning doesn't eliminate addiction risk. Understanding high-functioning substance use helps families recognize warning signs and understand when professional intervention is necessary."
  },
  {
    id: "communication-addiction-families",
    title: "How to Talk About Addiction When Every Word Feels Wrong",
    date: "February 6, 2026",
    image: blogImageCommunicationAddiction,
    imageAlt: "Family sitting around dinner table with one empty chair, expressions showing concern and careful conversation",
    excerpt: "Talking about addiction feels impossible. Say too much, and you're attacking. Say too little, and you're enabling. Use the wrong tone, and the conversation ends. Use the right tone, and still nothing changes. Families struggle with communication because addiction systems resist direct conversation. Understanding how to approach these discussions—and when to step back—helps families navigate this challenging dynamic."
  },
  {
    id: "effort-vs-change-addiction",
    title: "Why Trying Hard Isn't the Same as Getting Better",
    date: "February 5, 2026",
    image: blogImageEffortVsChange,
    imageAlt: "Person looking exhausted while organizing pills and self-help books on table, suggesting effortful but ineffective attempts",
    excerpt: "\"But they're really trying.\" Families see the effort. The self-help books. The attempts to cut back. The promises to do better. Effort feels meaningful because it suggests hope. But in addiction, effort without structure often leads to repeated cycles. Understanding the difference between trying and changing helps families maintain support without enabling ineffective patterns."
  },
  {
    id: "false-stability-rebound",
    title: "When Things Get Worse Right After They Get Better",
    date: "February 4, 2026",
    image: blogImageFalseStabilityRebound,
    imageAlt: "Graph showing improvement followed by sharp decline, representing the rebound effect in recovery attempts",
    excerpt: "They were doing well. Really well. For weeks, maybe months. Then suddenly, everything collapsed. The drinking came back worse than before. The behavior became more destructive. Families are confused and heartbroken. This pattern—temporary stability followed by escalation—is common in early recovery attempts. Understanding rebound effects helps families prepare for setbacks and maintain appropriate expectations."
  },
  {
    id: "apologies-dont-equal-change",
    title: "Why Heartfelt Apologies Don't Automatically Create Change",
    date: "February 3, 2026",
    image: blogImageApologiesDontEqualChange,
    imageAlt: "Person with head in hands looking remorseful while family member listens with mixed emotions of hope and skepticism",
    excerpt: "The apology feels real. Deep remorse. Genuine tears. Sincere promises. But apologies in addiction systems can become substitutes for structural change. Families want to believe that feeling sorry equals getting better. Understanding why emotional remorse doesn't automatically create behavioral change helps families maintain compassionate boundaries while requiring concrete action."
  },
  {
    id: "knowledge-vs-behavior-addiction",
    title: "Why Understanding Your Problem Isn't the Same as Solving It",
    date: "February 2, 2026",
    image: blogImageKnowledgeVsBehavior,
    imageAlt: "Person reading addiction recovery books with highlighter while empty bottles remain on nearby table, showing knowledge without action",
    excerpt: "\"I know I have a problem.\" They can articulate the issue perfectly. They understand the consequences. They recognize the pattern. They read books about recovery. But knowledge doesn't equal behavior change. Insight doesn't automatically create sobriety. Families often confuse understanding with recovery. Recognizing this gap helps families support actual change rather than intellectual awareness."
  },
  {
    id: "fear-avoidance-paralysis",
    title: "When Fear of Making Things Worse Prevents Making Things Better",
    date: "February 1, 2026",
    image: blogImageFearAvoidanceParalysis,
    imageAlt: "Person sitting paralyzed between two doors marked 'action' and 'inaction', looking overwhelmed by choices",
    excerpt: "\"What if I make it worse?\" This fear paralyzes families. Setting boundaries might trigger more drinking. Confronting the issue might create conflict. Seeking professional help might damage relationships. But avoiding action also creates consequences. Understanding how fear keeps families stuck helps identify when professional guidance is necessary to break through paralysis."
  },
  {
    id: "addiction-control-illusion",
    title: "The Dangerous Myth of Controlled Drinking in Recovery",
    date: "January 31, 2026",
    image: blogImageAddictionControlIllusion,
    imageAlt: "Person carefully measuring alcohol into small glass with timer and notebook nearby, suggesting attempts at controlled consumption",
    excerpt: "\"I can handle just one drink now.\" They've been sober for months. They feel confident. They believe they've learned control. But controlled drinking after addiction is often an illusion. The brain's reward pathways remain altered. Understanding why moderation attempts frequently fail helps families recognize relapse warning signs and maintain realistic expectations."
  },
  {
    id: "addiction-loopholes",
    title: "How Addiction Finds Loopholes in Every Agreement",
    date: "January 30, 2026",
    image: blogImageAddictionLoopholes,
    imageAlt: "Contract with sections crossed out and annotations in margins, suggesting attempts to find ways around agreements",
    excerpt: "You agree on boundaries. Clear rules. Specific consequences. But somehow, the addiction finds ways around every agreement. Technical interpretations. Semantic arguments. Exceptions for special circumstances. Understanding how addiction systems exploit loopholes helps families create clearer, more effective boundaries that resist manipulation."
  },
  {
    id: "addiction-ambiguity-clarity",
    title: "Why Addiction Thrives in Gray Areas and Families Need Black and White",
    date: "January 29, 2026",
    image: blogImageAmbiguityClarity,
    imageAlt: "Split image showing foggy gray confusion on one side and clear black and white clarity on the other",
    excerpt: "Addiction loves ambiguity. \"Maybe,\" \"sometimes,\" \"it depends\"—these create space for negotiation and rationalization. Families often try to be understanding by allowing gray areas. But clarity creates safety. Understanding when to eliminate ambiguity helps families establish clear expectations and consequences that support recovery rather than enable continued use."
  },
  {
    id: "sliding-baseline-addiction",
    title: "How Families Slowly Accept the Unacceptable",
    date: "January 28, 2026",
    image: blogImageSlidingBaseline,
    imageAlt: "Thermometer showing gradually increasing temperature levels, representing slowly escalating tolerance for problematic behavior",
    excerpt: "It starts small. Missing dinner occasionally. Coming home late sometimes. Drinking a little more than usual. But gradually, \"occasional\" becomes regular. \"Sometimes\" becomes often. \"A little more\" becomes a lot more. Families adapt to incremental changes without noticing the overall shift. Understanding this sliding baseline helps families recognize when normal has become harmful."
  },
  {
    id: "insight-vs-recovery-addiction",
    title: "Why Self-Awareness Isn't the Same as Self-Change",
    date: "January 27, 2026",
    image: blogImageInsightVsRecovery,
    imageAlt: "Mirror reflection showing person looking thoughtful and self-aware while still holding drink in background",
    excerpt: "\"I'm very aware of my drinking patterns.\" They can describe their triggers perfectly. They understand their emotional patterns. They recognize their behaviors. This insight feels encouraging to families. But self-awareness without behavioral change is common in addiction. Understanding the difference between insight and recovery helps families maintain realistic expectations and appropriate support."
  },
  {
    id: "moderation-addiction-loophole",
    title: "Why \"I'm Cutting Back\" Often Becomes \"I'm Still Drinking\"",
    date: "January 26, 2026",
    image: blogImageModerationLoophole,
    imageAlt: "Calendar with some days marked with drinks crossed out but many more days still marked with multiple drinks",
    excerpt: "\"I don't need to quit completely. I just need to drink less.\" Moderation sounds reasonable. It feels less extreme than total abstinence. But for many people with substance use disorders, moderation becomes a loophole that maintains access while appearing to address the problem. Understanding why moderation often fails helps families set appropriate expectations and boundaries."
  },
  {
    id: "functional-addiction-hiding",
    title: "How High-Functioning Addiction Hides Behind Success",
    date: "January 25, 2026",
    image: blogImageFunctionalAddictionHiding,
    imageAlt: "Professional awards and diplomas on wall with hidden alcohol bottles behind books on shelf",
    excerpt: "\"Look at everything I've accomplished.\" Career success, financial stability, maintained relationships—these achievements can mask underlying addiction. High-functioning addiction is particularly dangerous because external success becomes evidence against the problem. Understanding how addiction can coexist with achievement helps families recognize warning signs that others might miss."
  },
  {
    id: "just-a-phase-addiction-myths",
    title: "Why \"They'll Grow Out of It\" Can Be Dangerous Thinking",
    date: "January 24, 2026",
    image: blogImageJustAPhaseMyths,
    imageAlt: "Young adult drinking heavily at party while older relatives watch dismissively in background",
    excerpt: "\"It's just a phase. They'll outgrow it.\" This thinking is common with younger people, especially in college or early career years. Heavy drinking can seem normal in certain environments. But addiction doesn't always resolve with age. Understanding when substance use patterns require intervention—regardless of age—helps families respond appropriately rather than waiting for natural resolution."
  },
  {
    id: "comparison-trap-minimizing-addiction",
    title: "How \"At Least I'm Not Like...\" Minimizes Real Problems",
    date: "January 23, 2026",
    image: blogImageComparisonTrapAddiction,
    imageAlt: "Person looking at worse examples of addiction while ignoring their own reflection, suggesting downward comparison",
    excerpt: "\"At least I'm not drinking in the morning.\" \"At least I still have my job.\" \"At least I'm not homeless.\" These comparisons to worse situations can minimize legitimate concerns. Addiction uses downward comparisons to avoid confronting current problems. Understanding this pattern helps families maintain perspective on actual behavior rather than relative behavior."
  },
  {
    id: "gambling-addiction-hidden-damage",
    title: "The Financial and Emotional Devastation Families Don't See Coming",
    date: "January 22, 2026",
    image: blogImageGamblingAddiction,
    imageAlt: "Multiple screens showing online gambling sites with empty wallet and overdue bills scattered on desk",
    excerpt: "Gambling addiction can be nearly invisible until the damage is catastrophic. No physical symptoms. No obvious impairment. Just increasing financial secrecy and emotional distance. By the time families recognize the problem, significant damage may have occurred. Understanding gambling addiction helps families recognize warning signs and understand the unique challenges of this behavioral addiction."
  },
  {
    id: "family-questions-addiction",
    title: "The Most Important Questions Families Should Be Asking",
    date: "January 21, 2026",
    image: blogImageFamilyQuestionsAddiction,
    imageAlt: "Family members looking thoughtful with question marks floating around their heads, suggesting contemplation",
    excerpt: "Families spend time wondering: \"Why won't they stop?\" \"Don't they care about us?\" \"What did we do wrong?\" But these questions often lead to guilt and confusion. More productive questions focus on practical next steps and family responses. Understanding which questions help versus which questions hurt redirects energy toward useful action."
  },
  {
    id: "minimizing-addiction",
    title: "How \"It's Not That Bad\" Prevents Getting Help",
    date: "January 20, 2026",
    image: blogImageMinimizingAddiction,
    imageAlt: "Iceberg diagram showing small visible problems above water with massive hidden issues below surface",
    excerpt: "\"Things aren't that bad yet.\" This minimization can come from families or from the person struggling. Comparing current problems to imagined worse scenarios creates false reassurance. But waiting for \"bad enough\" often means waiting for preventable damage. Understanding how minimization delays intervention helps families recognize when professional help is appropriate."
  },
  {
    id: "negotiating-with-addiction",
    title: "Why Bargaining with Addiction Never Works Long-Term",
    date: "January 19, 2026",
    image: blogImageNegotiatingWithAddiction,
    imageAlt: "Two people at table shaking hands while addiction demon lurks behind one person, suggesting false negotiations",
    excerpt: "\"If you promise to only drink on weekends...\" \"What if we limit it to two drinks...\" \"Can we agree on no drinking before 5pm...\" These negotiations feel reasonable. They represent compromise. But addiction doesn't honor agreements the way people do. Understanding why bargaining typically fails helps families move toward clearer boundaries and expectations."
  },
  {
    id: "guilt-vs-responsibility",
    title: "The Difference Between Guilt and Responsibility in Family Addiction",
    date: "January 18, 2026",
    image: blogImageGuiltVsResponsibility,
    imageAlt: "Scale with 'guilt' and 'responsibility' on opposite sides, showing the balance families need to find",
    excerpt: "\"If only I had done something different.\" Families carry enormous guilt about addiction. They replay decisions, wonder about missed opportunities, blame themselves for outcomes. But guilt about causation is different from responsibility for response. Understanding this distinction helps families process emotions while taking appropriate action moving forward."
  },
  {
    id: "patience-alone-fails",
    title: "Why Patience Without Boundaries Enables Continued Use",
    date: "January 17, 2026",
    image: blogImagePatienceAloneFails,
    imageAlt: "Clock showing long passage of time while situation remains unchanged in background",
    excerpt: "\"We need to be patient with them.\" Patience feels compassionate. It acknowledges that change takes time. Recovery is a process. But patience without structure can become enabling. Indefinite patience without consequences may actually prevent necessary change. Understanding when patience helps versus when it hurts guides families toward more effective support."
  },
  {
    id: "stop-enabling-meaning",
    title: "What \"Stop Enabling\" Actually Means in Practice",
    date: "January 16, 2026",
    image: blogImageStopEnablingMeaning,
    imageAlt: "Person removing supportive props from someone else while maintaining emotional connection, showing healthy boundary setting",
    excerpt: "\"You need to stop enabling them.\" This advice sounds clear until you try to implement it. What exactly is enabling? What's supporting versus carrying? How do you help without helping the addiction? Understanding the practical difference between enabling and supporting helps families maintain relationships while encouraging recovery."
  },
  {
    id: "advice-sounds-wise-fails",
    title: "Why Advice That Sounds Wise Often Fails Families",
    date: "January 15, 2026",
    image: blogImageAdviceSoundsWiseFails,
    imageAlt: "Person sharing advice that looks profound but recipient looking confused and frustrated in response",
    excerpt: "\"Just love them through it.\" \"Give it time.\" \"They have to want to change.\" This advice sounds wise and compassionate. It feels meaningful. But families need practical guidance, not philosophical concepts. Understanding why generic advice often fails helps families seek more specific, actionable support for their particular situation."
  },
  {
    id: "just-let-go-advice",
    title: "The Problem with \"Just Let Go and Let God\"",
    date: "January 14, 2026",
    image: blogImageJustLetGoAdvice,
    imageAlt: "Person looking up at sky with hands raised in surrender while chaos continues around them",
    excerpt: "\"You can't control their drinking. Just let go and let God.\" This spiritual advice can be meaningful for some families. But \"letting go\" without clear boundaries can become passive enabling. Understanding the difference between spiritual surrender and practical boundaries helps families maintain faith while taking appropriate action."
  },
  {
    id: "enabling-fear-household",
    title: "When Fear of Conflict Keeps the Whole House Walking on Eggshells",
    date: "January 13, 2026",
    image: blogImageEnablingFearHousehold,
    imageAlt: "Family members tiptoeing around house while broken eggshells scattered on floor around one person",
    excerpt: "The whole house adjusts to avoid triggering their anger. Conversations become careful. Plans change last-minute. Everyone walks on eggshells to prevent conflict. This adaptation feels like peace-keeping, but it's actually enabling emotional volatility. Understanding how fear shapes family dynamics helps identify when professional intervention is needed."
  },
  {
    id: "advice-fails-spectacularly",
    title: "When Well-Meaning Advice Makes Everything Worse",
    date: "January 12, 2026",
    image: blogImageAdviceFailsSpectacularly,
    imageAlt: "Advice columnist or therapist looking confident while family situation explodes chaotically in background",
    excerpt: "\"Have you tried just talking to them?\" \"Maybe you're being too harsh.\" \"They probably just need more support.\" Well-meaning friends, relatives, and even professionals can offer advice that backfires spectacularly in addiction situations. Understanding why standard relationship advice often fails in addiction helps families seek specialized guidance."
  },
  {
    id: "family-roles",
    title: "How Everyone in the Family Gets Assigned a Role They Never Asked For",
    date: "January 11, 2026",
    image: blogImageFamilyRoles,
    imageAlt: "Family members wearing different masks representing their assigned roles: enabler, hero, scapegoat, mascot",
    excerpt: "Addiction systems create roles for everyone: the enabler, the hero, the scapegoat, the mascot. These roles develop unconsciously as families adapt to addiction's chaos. Everyone gets assigned a part they never auditioned for. Understanding these roles helps families recognize how addiction shapes relationships and behavior patterns beyond the person who drinks or uses."
  },
  {
    id: "supporting-vs-carrying",
    title: "The Fine Line Between Supporting Someone and Carrying Them",
    date: "January 10, 2026",
    image: blogImageSupportingVsCarrying,
    imageAlt: "Two people where one is genuinely helping the other walk versus one person completely carrying another",
    excerpt: "\"I'm just being supportive.\" Support feels loving and necessary. But there's a difference between supporting someone's efforts and carrying their responsibilities. Support encourages growth. Carrying prevents it. Understanding this distinction helps families maintain appropriate boundaries while still showing love and concern."
  },
  {
    id: "advice-doesnt-help",
    title: "Why \"Have You Tried Just Talking to Them?\" Doesn't Work",
    date: "January 9, 2026",
    image: blogImageAdviceDoesntHelp,
    imageAlt: "Two people attempting to have conversation while addiction creates static interference between them",
    excerpt: "\"Have you tried just talking to them about it?\" This suggestion assumes the problem is lack of communication. That families just need to find the right words. But addiction creates communication barriers that conversation alone cannot overcome. Understanding why talking isn't always the solution helps families recognize when other interventions are necessary."
  },
  {
    id: "enabling-survival",
    title: "How Enabling Often Starts as Survival, Not Love",
    date: "January 8, 2026",
    image: blogImageEnablingSurvival,
    imageAlt: "Person shielding others from chaos while looking exhausted and overwhelmed, suggesting protective enabling",
    excerpt: "Families don't wake up one day and decide to enable addiction. It starts as protection. Covering for someone to prevent consequences. Making excuses to avoid conflict. Providing help to prevent crisis. This behavior begins as survival strategy, not conscious choice. Understanding enabling's origins helps families recognize patterns without self-blame."
  },
  {
    id: "addiction-stops-being-funny",
    title: "The Moment When Drinking Jokes Stop Being Funny",
    date: "January 7, 2026",
    image: blogImageAddictionStopsBeingFunny,
    imageAlt: "Person forcing laughter at drinking joke while others look concerned, showing shift from humor to worry",
    excerpt: "There's a moment when drinking stories shift from funny to concerning. When \"I was so drunk\" stops getting laughs and starts getting worried looks. Families notice this transition before the person drinking does. Understanding this shift helps families trust their instincts about escalating problems."
  },
  {
    id: "family-constant-alert",
    title: "Why Families Live in Constant State of Alert",
    date: "January 6, 2026",
    image: blogImageFamilyConstantAlert,
    imageAlt: "Family members with heightened alert expressions constantly scanning for signs of problems or crisis",
    excerpt: "Living with addiction means constant vigilance. Scanning for signs of intoxication. Monitoring mood changes. Preparing for crises. This hypervigilance becomes exhausting. Families exist in survival mode without realizing it. Understanding this stress response helps families recognize the need for their own support and recovery."
  },
  {
    id: "humor-hides-addiction",
    title: "How Self-Deprecating Humor About Drinking Masks Real Problems",
    date: "January 5, 2026",
    image: blogImageHumorHidesAddiction,
    imageAlt: "Person making jokes about drinking while serious concerns are literally masked behind comedy mask",
    excerpt: "\"I'm such an alcoholic, haha.\" \"I need a drink after this day.\" \"Wine o'clock somewhere!\" Humor about drinking can normalize concerning patterns. Self-deprecating jokes deflect serious conversations. Understanding how humor masks addiction helps families recognize when someone is hiding behind comedy rather than addressing real problems."
  },
  {
    id: "jokes-about-drinking",
    title: "When \"Mommy Juice\" and Wine Jokes Stop Being Harmless",
    date: "January 4, 2026",
    image: blogImageJokesAboutDrinking,
    imageAlt: "Wine glass with 'mommy juice' text overlay while concerned children play in blurred background",
    excerpt: "\"Mommy needs her wine.\" \"It's wine o'clock somewhere.\" These jokes are everywhere—on shirts, social media, coffee mugs. They normalize daily drinking and make it harder to recognize when consumption becomes problematic. Understanding how cultural humor affects perception helps families identify concerning patterns earlier."
  },
  {
    id: "everyone-drinks-like-this",
    title: "The Dangerous Comfort of \"Everyone Drinks Like This\"",
    date: "January 3, 2026",
    image: blogImageEveryoneDrinks,
    imageAlt: "Group of people all drinking heavily while one person points to them as justification for their own drinking",
    excerpt: "\"All my friends drink like this.\" \"This is normal for our social circle.\" \"Everyone needs to unwind after work.\" When heavy drinking is normalized within social groups, it becomes harder to recognize individual problems. Understanding how social drinking culture can mask addiction helps families maintain perspective on concerning patterns."
  },
  {
    id: "wine-oclock-humor-addiction",
    title: "How \"Wine O'Clock\" Culture Normalizes Daily Drinking",
    date: "January 2, 2026",
    image: blogImageWineOclock,
    imageAlt: "Clock showing 5 PM with wine glass replacing numbers, surrounded by social media posts about wine o'clock",
    excerpt: "\"It's 5 o'clock somewhere.\" \"Mommy needs her wine.\" \"Wine helps me relax.\" Social media is filled with wine culture that makes daily drinking seem normal, even necessary. This cultural acceptance can mask developing problems and make families hesitate to express concerns. Understanding how cultural normalization affects addiction recognition helps families trust their instincts."
  },
  {
    id: "rock-bottom-myth-addiction",
    title: "The Myth That People Must Hit Rock Bottom Before Getting Help",
    date: "January 1, 2026",
    image: blogImageRockBottom,
    imageAlt: "Person standing at cliff edge labeled 'rock bottom' while ladder showing intervention opportunities extends downward",
    excerpt: "\"They have to hit rock bottom first.\" This belief keeps families waiting for some mythical moment when their loved one will suddenly want help. But rock bottom is subjective and dangerous. People can get help at any stage of addiction. Understanding why waiting for rock bottom can be harmful helps families take action earlier."
  },
  {
    id: "dry-drunk-syndrome-family",
    title: "What Families Need to Know About Dry Drunk Syndrome",
    date: "December 31, 2025",
    image: blogImageDryDrunk,
    imageAlt: "Person not drinking alcohol but displaying same irritable, withdrawn behaviors as when drinking",
    excerpt: "They stopped drinking, but the behavior patterns remain. Irritability, emotional distance, blame, and negativity continue without alcohol. This \"dry drunk\" syndrome confuses families who expected sobriety to solve relationship problems. Understanding that stopping drinking is just the first step helps families maintain realistic expectations and appropriate boundaries during early recovery."
  },
  {
    id: "addiction-personality-changes-loved-one",
    title: "Understanding the Personality Changes That Come with Addiction",
    date: "December 30, 2025",
    image: blogImagePersonalityChanges,
    imageAlt: "Split image showing same person before addiction (warm, engaged) and during addiction (distant, angry)",
    excerpt: "\"This isn't the person I married.\" \"My child has become someone I don't recognize.\" Addiction changes personality in profound ways. The warm, caring person becomes distant and defensive. Understanding these changes as symptoms rather than permanent character flaws helps families maintain hope while protecting themselves from harmful behavior."
  },
  {
    id: "enabling-vs-supporting-boundaries",
    title: "The Difference Between Enabling and Supporting: A Family Guide",
    date: "December 29, 2025",
    image: blogImageEnablingVsSupporting,
    imageAlt: "Two paths diverging, one showing enabling (person being carried) and other showing support (person being helped to walk)",
    excerpt: "\"Am I helping or am I enabling?\" This question torments families dealing with addiction. The line between support and enabling can seem invisible, but it's crucial for recovery. Support encourages growth and accountability. Enabling removes consequences and prevents learning. Understanding this difference helps families love effectively without contributing to the problem."
  },
  {
    id: "medical-detox-critical-first-step",
    title: "Why Medical Detox Is Often the Critical First Step",
    date: "December 28, 2025",
    image: blogImageMedicalDetoxImportance,
    imageAlt: "Medical professional monitoring patient during detox process with vital signs chart showing stabilization",
    excerpt: "\"They can just quit cold turkey.\" This assumption is dangerous with many substances. Alcohol and benzodiazepine withdrawal can be life-threatening. Even seemingly safer substances can cause medical complications during withdrawal. Understanding when medical supervision is necessary helps families prioritize safety and increase success rates for recovery attempts."
  },
  {
    id: "depression-and-addiction",
    title: "When Getting Out of Bed Feels Like Climbing Everest: Depression, Addiction, and What Families Need to Know",
    date: "March 14, 2026",
    image: blogImageDepressionAddiction,
    imageAlt: "Young adult sitting on the edge of an unmade bed in dim morning light, conveying the weight of depression and addiction",
    excerpt: "Depression and addiction are one of the most common — and most misunderstood — combinations families face. If someone you love is both depressed and using substances, you are not imagining that they seem 'worse than the average addict.' It's a double diagnosis, and it changes almost everything about how recovery has to work."
  },
  {
    id: "medical-detox-matters",
    title: "Why Medical Detox Matters More Than Willpower",
    date: "December 26, 2025",
    image: blogImageMedicalDetox,
    imageAlt: "Medical facility with professional staff and monitoring equipment showing safe detox environment",
    excerpt: "\"If they really wanted to quit, they could just stop.\" This belief ignores the physical realities of addiction. Some substances create dangerous withdrawal symptoms that require medical management. Understanding the medical component of early recovery helps families support safe, effective treatment rather than expecting willpower alone to be sufficient."
  },
  {
    id: "family-support-enabling",
    title: "When Family Support Accidentally Becomes Enabling",
    date: "December 25, 2025",
    image: blogImageEnabling,
    imageAlt: "Family member giving money to someone while addiction lurks behind, showing unintended enabling",
    excerpt: "\"We're just trying to help.\" Family support comes from love, but it can inadvertently enable continued addiction. Paying bills, making excuses, or providing housing without accountability can remove the natural consequences that motivate change. Understanding how love can enable helps families support recovery without supporting the addiction."
  },
  {
    id: "helping-vs-enabling",
    title: "The Fine Line: Helping vs. Enabling in Addiction",
    date: "December 24, 2025",
    image: blogImageHelpingVsEnabling,
    imageAlt: "Scales of justice weighing helping hand against enabling hand, showing the balance families must find",
    excerpt: "\"I don't know if I'm helping or making it worse.\" This confusion paralyzes many families. The desire to help is natural and loving. But help can become enabling when it shields someone from consequences or removes their responsibility. Understanding this distinction is crucial for families who want to support recovery without prolonging addiction."
  },
  {
    id: "understanding-addiction-education",
    title: "Why Understanding Addiction Is the First Step for Families",
    date: "December 23, 2025",
    image: blogImageEducation,
    imageAlt: "Open book with brain diagram showing addiction pathways and family members learning together",
    excerpt: "\"Why can't they just stop?\" This question reflects a fundamental misunderstanding of addiction as a brain disease. Education about addiction helps families shift from moral judgments to medical understanding. This knowledge reduces blame, increases compassion, and leads to more effective responses. Understanding addiction as a disease changes everything about how families approach treatment and recovery."
  },
  {
    id: "brain-reward-pathways",
    title: "How Addiction Changes the Brain's Reward System",
    date: "December 22, 2025",
    image: blogImageBrainReward,
    imageAlt: "Brain diagram highlighting reward pathways with addiction substances creating stronger signals than natural rewards",
    excerpt: "\"They choose drugs over everything that matters.\" This seems incomprehensible until you understand how addiction rewires the brain. Substances hijack the reward system, making drugs feel more important than food, family, or survival. Understanding these neurological changes helps families recognize addiction as a medical condition requiring treatment, not a moral failing requiring judgment."
  },
  {
    id: "right-moment-conversation",
    title: "Is There Ever a Right Moment to Talk About Addiction?",
    date: "December 21, 2025",
    image: blogImageConversation,
    imageAlt: "Clock and calendar showing various times with family members waiting for the 'right moment' to talk",
    excerpt: "\"I'll talk to them when they're sober.\" \"I'll wait until after the holidays.\" \"Maybe when they're in a good mood.\" Families often wait for the perfect moment to address addiction, but that moment rarely comes. Understanding when and how to have these difficult conversations helps families move from waiting to acting."
  },
  {
    id: "exercise-nutrition-recovery",
    title: "The Role of Exercise and Nutrition in Sustainable Recovery",
    date: "December 20, 2025",
    image: blogImageExerciseNutrition,
    imageAlt: "Person exercising and healthy foods arranged together, showing holistic approach to recovery",
    excerpt: "\"I'm eating better and working out—that should be enough.\" Physical health improvements are important in recovery, but they're not sufficient alone. Exercise and nutrition support recovery but can't replace addiction treatment. Understanding the role of lifestyle changes helps families maintain perspective on what constitutes comprehensive recovery planning."
  }
];

// Function to find article by slug
export const findArticleBySlug = (slug: string): BlogArticle | undefined => {
  return blogArticles.find(article => article.id === slug);
};

// Function to get article index for navigation
export const getArticleIndex = (slug: string): number => {
  return blogArticles.findIndex(article => article.id === slug);
};