import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Helmet } from "react-helmet";
import App from "./App";

export const render = (url: string) => {
  const appHtml = renderToString(
    <App Router={({ children }) => <StaticRouter location={url}>{children}</StaticRouter>} />,
  );

  const helmet = Helmet.renderStatic();

  return {
    appHtml,
    headTags: [
      helmet.title?.toString(),
      helmet.meta?.toString(),
      helmet.link?.toString(),
      helmet.script?.toString(),
    ]
      .filter(Boolean)
      .join("\n"),
    htmlAttributes: helmet.htmlAttributes.toString(),
    bodyAttributes: helmet.bodyAttributes.toString(),
  };
};
