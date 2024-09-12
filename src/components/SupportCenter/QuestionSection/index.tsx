import { useNavigate } from 'react-router-dom';

import front from '~assets/frontArrow.svg';

import styles from './styles.module.scss';

interface Question {
  id: number;
  alt: string;
  text: string;
  url: string;
}

interface Props {
  questions: Question[];
}

function QuestionSection({ questions }: Props) {
  const navigate = useNavigate();

  const handleQuestion = (url: string) => {
    navigate(url);
  };
  return (
    <div className={styles.container}>
      {questions.map((item) => (
        <button
          key={item.id}
          onClick={() => handleQuestion(item.url)}
          className={styles.questionButton}
          type='button'
        >
          <p>{item.text}</p>
          <img src={front} alt='selecionar pregunta' />
        </button>
      ))}
    </div>
  );
}

export default QuestionSection;
