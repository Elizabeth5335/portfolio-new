import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock() {
  const codeString = `
  const skills = {
    frontend: ["HTML", "CSS", "JavaScript", "Responsive Design", "Cross-Browser Compatibility"],
    frameworks: ["React", "Angular", "YII2"],
    style: ["SASS", "Bootstrap"],
    tools: ["Figma", "Git", "IDEs"],
    programming: ["Java", "C", "PHP"],
    other: ["MySQL", "Testing", "RESTAPIs"],
    inPlans: {
      Redux: true,
      Tailwind: true,
    },
  };
  `;
  return (
    <div className="row mx-5">
      <SyntaxHighlighter
        language="javascript"
        style={materialDark}
        wrapLongLines={true}
        className="code-block"
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
