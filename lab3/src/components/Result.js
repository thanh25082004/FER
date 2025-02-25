import React from "react";

function Result({ score, total, restartQuiz }) {
  return (
    <div className="result-card">
      <h2>Kết quả</h2>
      <p>Bạn đã trả lời đúng {score} trên {total} câu hỏi!</p>
      <button onClick={restartQuiz}>Chơi lại</button>
    </div>
  );
}

export default Result;
