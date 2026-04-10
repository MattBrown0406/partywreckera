import { useParams, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { findArticleBySlug } from "@/data/blogData";

// Dynamically import all blog post components
const components = {
  "alcohol-addiction-recovery": lazy(() => import("./blog/alcohol-addiction-recovery")),
  "signs-loved-one-needs-help-with-alcohol": lazy(() => import("./blog/signs-loved-one-needs-help-with-alcohol")),
  "recovery-roadmap": lazy(() => import("./blog/recovery-roadmap")),
  "bad-night-myth": lazy(() => import("./blog/bad-night-myth")),
  "living-in-the-storm": lazy(() => import("./blog/living-in-the-storm")),
  "addiction-family-exhaustion": lazy(() => import("./blog/addiction-family-exhaustion")),
  "addiction-ambiguity-clarity": lazy(() => import("./blog/addiction-ambiguity-clarity")),
  "addiction-control-illusion": lazy(() => import("./blog/addiction-control-illusion")),
  "addiction-loopholes": lazy(() => import("./blog/addiction-loopholes")),
  "addiction-personality-changes-loved-one": lazy(() => import("./blog/addiction-personality-changes-loved-one")),
  "addiction-personality-changes": lazy(() => import("./blog/addiction-personality-changes")),
  "addiction-promises-cycle": lazy(() => import("./blog/addiction-promises-cycle")),
  "addiction-stops-being-funny": lazy(() => import("./blog/addiction-stops-being-funny")),
  "advice-doesnt-help": lazy(() => import("./blog/advice-doesnt-help")),
  "advice-fails-spectacularly": lazy(() => import("./blog/advice-fails-spectacularly")),
  "advice-sounds-wise-fails": lazy(() => import("./blog/advice-sounds-wise-fails")),
  "apologies-dont-equal-change": lazy(() => import("./blog/apologies-dont-equal-change")),
  "blame-shifting-addiction": lazy(() => import("./blog/blame-shifting-addiction")),
  "brain-reward-pathways": lazy(() => import("./blog/brain-reward-pathways")),
  "busy-not-recovery": lazy(() => import("./blog/busy-not-recovery")),
  "communication-addiction-families": lazy(() => import("./blog/communication-addiction-families")),
  "comparison-trap-addiction": lazy(() => import("./blog/comparison-trap-addiction")),
  "comparison-trap-minimizing-addiction": lazy(() => import("./blog/comparison-trap-minimizing-addiction")),
  "depression-and-addiction": lazy(() => import("./blog/depression-and-addiction")),
  "dry-drunk-syndrome-family": lazy(() => import("./blog/dry-drunk-syndrome-family")),
  "effort-vs-change-addiction": lazy(() => import("./blog/effort-vs-change-addiction")),
  "enabling-fear-household": lazy(() => import("./blog/enabling-fear-household")),
  "enabling-survival": lazy(() => import("./blog/enabling-survival")),
  "enabling-vs-supporting-boundaries": lazy(() => import("./blog/enabling-vs-supporting-boundaries")),
  "everyone-drinks-like-this": lazy(() => import("./blog/everyone-drinks-like-this")),
  "exercise-nutrition-recovery": lazy(() => import("./blog/exercise-nutrition-recovery")),
  "false-stability-rebound": lazy(() => import("./blog/false-stability-rebound")),
  "family-constant-alert": lazy(() => import("./blog/family-constant-alert")),
  "family-questions-addiction": lazy(() => import("./blog/family-questions-addiction")),
  "family-roles": lazy(() => import("./blog/family-roles")),
  "family-support-enabling": lazy(() => import("./blog/family-support-enabling")),
  "fear-avoidance-paralysis": lazy(() => import("./blog/fear-avoidance-paralysis")),
  "functional-addiction-hiding": lazy(() => import("./blog/functional-addiction-hiding")),
  "functioning-addiction-myths": lazy(() => import("./blog/functioning-addiction-myths")),
  "gambling-addiction-hidden-damage": lazy(() => import("./blog/gambling-addiction-hidden-damage")),
  "guilt-vs-responsibility": lazy(() => import("./blog/guilt-vs-responsibility")),
  "helping-hurts-enabling": lazy(() => import("./blog/helping-hurts-enabling")),
  "helping-turns-harmful-enabling": lazy(() => import("./blog/helping-turns-harmful-enabling")),
  "helping-vs-enabling": lazy(() => import("./blog/helping-vs-enabling")),
  "high-functioning-cocaine-use": lazy(() => import("./blog/high-functioning-cocaine-use")),
  "humor-hides-addiction": lazy(() => import("./blog/humor-hides-addiction")),
  "insight-vs-recovery-addiction": lazy(() => import("./blog/insight-vs-recovery-addiction")),
  "jokes-about-drinking": lazy(() => import("./blog/jokes-about-drinking")),
  "just-a-phase-addiction-myths": lazy(() => import("./blog/just-a-phase-addiction-myths")),
  "just-let-go-advice": lazy(() => import("./blog/just-let-go-advice")),
  "knowledge-vs-behavior-addiction": lazy(() => import("./blog/knowledge-vs-behavior-addiction")),
  "medical-detox-critical-first-step": lazy(() => import("./blog/medical-detox-critical-first-step")),
  "medical-detox-matters": lazy(() => import("./blog/medical-detox-matters")),
  "minimizing-addiction-families": lazy(() => import("./blog/minimizing-addiction-families")),
  "minimizing-addiction": lazy(() => import("./blog/minimizing-addiction")),
  "moderation-addiction-loophole": lazy(() => import("./blog/moderation-addiction-loophole")),
  "negotiating-with-addiction": lazy(() => import("./blog/negotiating-with-addiction")),
  "patience-alone-fails": lazy(() => import("./blog/patience-alone-fails")),
  "right-moment-conversation": lazy(() => import("./blog/right-moment-conversation")),
  "rock-bottom-addiction-myth": lazy(() => import("./blog/rock-bottom-addiction-myth")),
  "rock-bottom-myth-addiction": lazy(() => import("./blog/rock-bottom-myth-addiction")),
  "sliding-baseline-addiction": lazy(() => import("./blog/sliding-baseline-addiction")),
  "stop-enabling-meaning": lazy(() => import("./blog/stop-enabling-meaning")),
  "stress-addiction-excuse": lazy(() => import("./blog/stress-addiction-excuse")),
  "supporting-vs-carrying": lazy(() => import("./blog/supporting-vs-carrying")),
  "this-time-feels-different": lazy(() => import("./blog/this-time-feels-different")),
  "understanding-addiction-education": lazy(() => import("./blog/understanding-addiction-education")),
  "wine-oclock-humor-addiction": lazy(() => import("./blog/wine-oclock-humor-addiction")),
  "what-to-say-at-an-intervention": lazy(() => import("./blog/what-to-say-at-an-intervention")),
  "what-addiction-looks-like-from-inside": lazy(() => import("./blog/what-addiction-looks-like-from-inside")),
  "trauma-and-addiction-families": lazy(() => import("./blog/trauma-and-addiction-families")),
  "anxiety-addiction-loop-families": lazy(() => import("./blog/anxiety-addiction-loop-families")),
  "shame-and-addiction": lazy(() => import("./blog/shame-and-addiction")),
  "self-medication-trap": lazy(() => import("./blog/self-medication-trap")),
  "enabling-addiction-families": lazy(() => import("./blog/enabling-addiction-families")),
  "tough-love-addiction-families": lazy(() => import("./blog/tough-love-addiction-families")),
  "when-to-consider-intervention": lazy(() => import("./blog/when-to-consider-intervention")),
  "making-amends-in-recovery": lazy(() => import("./blog/making-amends-in-recovery")),
  "stop-waiting-for-rock-bottom": lazy(() => import("./blog/stop-waiting-for-rock-bottom")),
  "families-can-do-right-now": lazy(() => import("./blog/families-can-do-right-now")),
  "addiction-treatment-options-guide": lazy(() => import("./blog/addiction-treatment-options-guide")),
  "you-said-yes-intervention": lazy(() => import("./blog/you-said-yes-intervention")),
  "intervention-myths-families": lazy(() => import("./blog/intervention-myths-families")),
  "when-someone-says-no-intervention": lazy(() => import("./blog/when-someone-says-no-intervention")),
  "what-happens-before-intervention": lazy(() => import("./blog/what-happens-before-intervention")),
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  // Check if the article exists in our data
  const article = findArticleBySlug(slug);
  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  // Check if we have a component for this slug
  const Component = components[slug as keyof typeof components];
  if (!Component) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading article...</p>
        </div>
      </div>
    }>
      <Component />
    </Suspense>
  );
};

export default BlogPost;