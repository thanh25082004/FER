import React from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";

const About = () => {
  return (
    <Container className="mt-5">
      <Card className="shadow-lg p-4">
        <Row className="align-items-center">
          <Col md={4} className="text-center">
            
          </Col>
          <Col md={8}>
            <h2 className="mb-3">About Us</h2>
            <p>
              Chào mừng bạn đến với trang web của chúng tôi! Chúng tôi mang đến
              những thông tin, tin tức và đánh giá về các món ăn hấp dẫn từ khắp
              nơi trên thế giới.
            </p>
            <p>
              Sứ mệnh của chúng tôi là giúp bạn khám phá những món ăn ngon nhất,
              từ ẩm thực truyền thống đến các xu hướng mới nhất trong ngành công
              nghiệp thực phẩm.
            </p>
            <p>
              📧 <strong>Liên hệ:</strong> quangthanh0825@gmail.com 
            </p>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default About;
