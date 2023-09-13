import React, { useCallback, useEffect,  useState } from "react";
import CardItem from "../../components/Cards/Card";
import { quizes } from "../../api/quizes/quiz";

export default function Quizes() {
  const [quizList, setQuizList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');



  const fetchQuizList = useCallback(async () => {
    setLoading(true);

    try {
      const response = await quizes.get();
      setQuizList(response);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [setQuizList, setError, setLoading]);

  useEffect(() => {
    fetchQuizList();
  }, []);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      {quizList.map((quiz) => (
        <CardItem key={quiz.id} quiz={quiz} />
      ))}
    </>
  );
}