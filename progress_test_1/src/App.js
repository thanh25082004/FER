import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentCard from "./components/StudentCard";

const students = [
  {
    name: "Sơn Tùng",
    studentId: "DE180883",
    location: "Đà Nẵng",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY2Yjty1guNFjwM5TXtBvf3JEysxYoS00P4A&s",
  },
  {
    name: "Thiều Bảo Trâm",
    studentId: "DE12345",
    location: "Quảng Nam",
    image: "https://nguoiduatin.mediacdn.vn/thumb_w/642/84137818385850368/2024/12/1/468806029-1105383087624622-6095363978350698754-n-1733022492911254192410-243-0-1097-1366-crop-17330225089411085986228.jpg",
  },
  {
    name: "Hải Tú",
    studentId: "DE160547",
    location: "Quảng Nam",
    image: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/1/21/873052/134184641_1568014228.jpg",
  },
  {
    name: "MONO",
    studentId: "DE170049",
    location: "Đà Nẵng",
    image: "https://vcdn1-giaitri.vnecdn.net/2023/01/04/mono-2-1672831360-2966-1672832004.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=IwzfJrCRPol6khtxasxR1Q",
  },
];

function App() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          {students.map((student, index) => (
            <Col key={index} md={6} lg={4} xl={3}>
              <StudentCard {...student} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
