import "./styles.css";

export default async function Day12() {
  return (
    <main>
      {faqs.map(({ question, answer }, index) => (
        <Faq
          key={question}
          question={question}
          answer={answer}
          open={index === 0}
        />
      ))}
    </main>
  );
}

function Faq({
  question,
  answer,
  open,
}: {
  question: string;
  answer: string;
  open: boolean;
}) {
  return (
    <details key={question} open={open}>
      <summary>{question}</summary>
      <p>{answer}</p>
    </details>
  );
}

const faqs = [
  {
    question: "발 없는 말이?",
    answer: "슬퍼...",
  },
  {
    question: "돈키호테 지은이가 누군지 아세요?",
    answer: "엮은이는 아는데요, 김경식씨.",
  },
  {
    question: "꿀처럼 단 귤을 한 글자로?",
    answer: "뀰",
  },
  {
    question: "야 덩칫값 좀 해라! 이게 뭐하는 짓이냐?",
    answer: "이게 덩칫값 하는 짓이야.",
  },
  {
    question: "임진년 삼행시! 자, 임!",
    answer: "임창정! 진도희! 연정훈!",
  },
];
