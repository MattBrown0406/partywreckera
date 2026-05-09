import AeoAnswerBlock from "@/components/AeoAnswerBlock";
import { articleAnswerSummaries } from "@/lib/aeoContent";

interface ArticleAnswerSummaryProps {
  slug: string;
}

const ArticleAnswerSummary = ({ slug }: ArticleAnswerSummaryProps) => {
  const content = articleAnswerSummaries[slug];

  if (!content) return null;

  return <AeoAnswerBlock content={content} className="my-8" />;
};

export default ArticleAnswerSummary;
