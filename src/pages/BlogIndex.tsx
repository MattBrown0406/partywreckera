import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import blogImageExerciseNutrition from "@/assets/blog-exercise-nutrition-recovery.jpg";\nimport blogImageEnabling from "@/assets/blog-family-support-enabling.jpg";\nimport blogImageConversation from "@/assets/blog-right-moment-conversation.jpg";\nimport blogImageBrainReward from "@/assets/blog-brain-reward-pathways.jpg";\nimport blogImageEducation from "@/assets/blog-understanding-addiction-education.jpg";\nimport blogImageHelpingVsEnabling from "@/assets/blog-helping-vs-enabling.jpg";\nimport blogImageFamilySupport from "@/assets/blog-family-support-recovery.jpg";\nimport blogImageMedicalDetox from "@/assets/blog-medical-detox.jpg";\nimport blogImageDepressionAddiction from "@/assets/blog-depression-addiction.jpg";\nimport blogImageMedicalDetoxImportance from "@/assets/blog-medical-detox-importance.jpg";\nimport blogImageEnablingVsSupporting from "@/assets/blog-enabling-vs-supporting.jpg";\nimport blogImagePersonalityChanges from "@/assets/blog-addiction-personality-changes.jpg";\nimport blogImageDryDrunk from "@/assets/blog-dry-drunk-syndrome.jpg";\nimport blogImageRockBottom from "@/assets/blog-rock-bottom-myth.jpg";\nimport blogImageWineOclock from "@/assets/blog-wine-oclock-humor.jpg";\nimport blogImageEveryoneDrinks from "@/assets/blog-everyone-drinks-like-this.jpg";\nimport blogImageJokesAboutDrinking from "@/assets/blog-jokes-about-drinking.jpg";\nimport blogImageHumorHidesAddiction from "@/assets/blog-humor-hides-addiction.jpg";\nimport blogImageFamilyConstantAlert from "@/assets/blog-family-constant-alert.jpg";\nimport blogImageAddictionStopsBeingFunny from "@/assets/blog-addiction-stops-being-funny.jpg";\nimport blogImageEnablingSurvival from "@/assets/blog-enabling-survival.jpg";\nimport blogImageAdviceDoesntHelp from "@/assets/blog-advice-doesnt-help.jpg";\nimport blogImageSupportingVsCarrying from "@/assets/blog-supporting-vs-carrying.jpg";\nimport blogImageFamilyRoles from "@/assets/blog-family-roles.jpg";\nimport blogImageAdviceFailsSpectacularly from "@/assets/blog-advice-fails-spectacularly.jpg";\nimport blogImageEnablingFearHousehold from "@/assets/blog-enabling-fear-household.jpg";\nimport blogImageJustLetGoAdvice from "@/assets/blog-just-let-go-advice.jpg";\nimport blogImageAdviceSoundsWiseFails from "@/assets/blog-advice-sounds-wise-fails.jpg";\nimport blogImageStopEnablingMeaning from "@/assets/blog-stop-enabling-meaning.jpg";\nimport blogImagePatienceAloneFails from "@/assets/blog-patience-alone-fails.jpg";\nimport blogImageGuiltVsResponsibility from "@/assets/blog-guilt-vs-responsibility.jpg";\nimport blogImageNegotiatingWithAddiction from "@/assets/blog-negotiating-with-addiction.jpg";\nimport blogImageMinimizingAddiction from "@/assets/blog-minimizing-addiction.jpg";\nimport blogImageFamilyQuestionsAddiction from "@/assets/blog-family-questions-addiction.jpg";\nimport blogImageGamblingAddiction from "@/assets/blog-gambling-addiction.jpg";\nimport blogImageComparisonTrapAddiction from "@/assets/blog-comparison-trap-addiction.jpg";\nimport blogImageJustAPhaseMyths from "@/assets/blog-just-a-phase-myths.jpg";\nimport blogImageFunctionalAddictionHiding from "@/assets/blog-functional-addiction-hiding.jpg";\nimport blogImageModerationLoophole from "@/assets/blog-moderation-loophole.jpg";\nimport blogImageInsightVsRecovery from "@/assets/blog-insight-vs-recovery.jpg";\nimport blogImageSlidingBaseline from "@/assets/blog-sliding-baseline-addiction.jpg";\nimport blogImageAmbiguityClarity from "@/assets/blog-addiction-ambiguity-clarity.jpg";\nimport blogImageAddictionLoopholes from "@/assets/blog-addiction-loopholes.jpg";\nimport blogImageAddictionControlIllusion from "@/assets/blog-addiction-control-illusion.jpg";\nimport blogImageFearAvoidanceParalysis from "@/assets/blog-fear-avoidance-paralysis.jpg";\nimport blogImageKnowledgeVsBehavior from "@/assets/blog-knowledge-vs-behavior-addiction.jpg";\nimport blogImageApologiesDontEqualChange from "@/assets/blog-apologies-dont-equal-change.jpg";\nimport blogImageFalseStabilityRebound from "@/assets/blog-false-stability-rebound.jpg";\nimport blogImageEffortVsChange from "@/assets/blog-effort-vs-change-addiction.jpg";\nimport blogImageCommunicationAddiction from "@/assets/blog-communication-addiction-families.jpg";\nimport blogImageHighFunctioningCocaine from "@/assets/blog-high-functioning-cocaine.jpg";\nimport blogImageThisTimeFeelsDifferent from "@/assets/blog-this-time-feels-different.jpg";\nimport blogImageBusyNotRecovery from "@/assets/blog-busy-not-recovery.jpg";\nimport blogImageStressAddictionExcuse from "@/assets/blog-stress-addiction-excuse.jpg";\nimport blogImagePromisesCycle from "@/assets/blog-addiction-promises-cycle.jpg";\nimport blogImageBlameShifting from "@/assets/blog-blame-shifting-addiction.jpg";

interface BlogArticle {
  id: string;
  title: string;
  date: string;
  image: string;
  imageAlt: string;
  excerpt: string;
}

const articles: BlogArticle[] = [

];

const BlogIndex = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Blog - Party Wreckers Podcast"
        description="Expert insights on addiction, family support, boundaries, and recovery. Practical advice for families navigating substance use challenges with compassion and clarity."
        canonical="/blog"
        keywords="addiction blog, family support, enabling vs helping, boundaries, recovery resources, intervention"
      />
      
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "https://partywreckers.com" },
          { name: "Blog", item: "https://partywreckers.com/blog" }
        ]}
      />
      
      <Navbar />
      
      <main className="container px-4 pt-24 sm:pt-32 pb-12 sm:pb-16">
        <h1 className="font-script text-3xl sm:text-4xl md:text-5xl text-primary mb-8 sm:mb-12 text-center">
          Blog
        </h1>
        
        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {articles.map((article) => (
            <Link 
              key={article.id}
              to={`/blog/${article.id}`}
              className="group"
            >
              <Card className="cursor-pointer group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4 sm:p-5">
                  <p className="text-muted-foreground text-xs mb-1 sm:mb-2">{article.date}</p>
                  <h2 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2 sm:line-clamp-3">
                    {article.excerpt}
                  </p>
                  <span className="inline-block mt-3 sm:mt-4 text-primary text-sm font-medium group-hover:underline">
                    Read more →
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogIndex;