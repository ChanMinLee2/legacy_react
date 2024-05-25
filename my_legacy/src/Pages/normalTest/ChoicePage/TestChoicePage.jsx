import React, { useState } from "react";
import * as S from "./TestChoicePage.style";

const TestChoicePage = () => {
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState("10문제");

  const handleLevelToggle = (level) => {
    setSelectedLevels((prevSelectedLevels) =>
      prevSelectedLevels.includes(level)
        ? prevSelectedLevels.filter((item) => item !== level)
        : [...prevSelectedLevels, level]
    );
  };

  const handleQuestionsChange = (questions) => {
    setSelectedQuestions(questions);
  };

  return (
    <S.Container>
      <S.Header>시험 난이도</S.Header>
      <S.LevelSelection>
        {[
          "전체 난이도",
          "입문반(550+), 기본반(650+)",
          "중급반(750+)",
          "정규반(850+)",
          "실전반(900+)",
        ].map((level) => (
          <S.LevelButton
            key={level}
            selected={selectedLevels.includes(level)}
            onClick={() => handleLevelToggle(level)}
          >
            {level}
          </S.LevelButton>
        ))}
      </S.LevelSelection>
      <S.QuestionsHeader>문제 수</S.QuestionsHeader>
      <S.QuestionsSelection>
        {["10문제", "20문제", "30문제", "40문제"].map((question) => (
          <S.QuestionsContainer>
            <S.QuestionRadio
              key={question}
              type="radio"
              name="questions"
              value={question}
              checked={selectedQuestions === question}
              onChange={() => handleQuestionsChange(question)}
            />
            <S.QuestionLabel>{question}</S.QuestionLabel>
          </S.QuestionsContainer>
        ))}
      </S.QuestionsSelection>
      <S.ButtonContainer>
        <S.HomeButton href="/menu">홈으로</S.HomeButton>
        <S.StartButton href="/test">테스트 시작</S.StartButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default TestChoicePage;