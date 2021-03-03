import React from 'react';
import { Row, Col } from 'antd';
import { useHistory } from "react-router-dom";


const Home = () => {
  let history = useHistory();

  const onRedirect = (url) => {
    history.push(url)
  }

  return (
    <>
      <Row style={{ marginTop: 20 }}>
        <Col span={2}></Col>
        <Col span={8} onClick={() => onRedirect('/project-manager')}><div style={{fontSize:"16px",fontWeight:600,cursor:"pointer"}}>Project Manager</div></Col>
        <Col span={7} onClick={() => onRedirect('/form-manager')}><div style={{fontSize:"16px",fontWeight:600,cursor:"pointer"}}>Form Manager</div></Col>
        <Col span={7} onClick={() => onRedirect('/questions-manager')}><div style={{fontSize:"16px",fontWeight:600,cursor:"pointer"}}>Questionss Manager</div> </Col>
      </Row>
    </>
  );
};

export default Home;