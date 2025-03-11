import React from "react";
import UserProfile from "./components/UserProfile";
import UserProfile2 from "./components/UserProfile2";
import MyForm from "./components/MyForm";
import FormValidation from "./components/FormValidation";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const handleFormSubmit = (formData) => console.log("Dữ liệu đã gửi:", formData);

  return (
    <div className="App">
      <h1>Ứng Dụng React</h1>

      <UserProfile name="Nguyễn Văn A" age={25} />
      <UserProfile2 name="Nguyễn Văn B" age={30} onSubmit={handleFormSubmit} />
      <MyForm title="Đăng Ký Người Dùng" onSubmit={handleFormSubmit} />
      <FormValidation onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
