import { useState } from 'react';
import './FAQ.css';
import { Collapse } from 'antd';
const { Panel } = Collapse;

const FAQ = () => {
  const [activeKey, setActiveKey] = useState(['1']);

  const onCollapseChange = (key) => {
    setActiveKey(key);
  };

  return (
    <div className="faq-container">
      <div className="faq-content">
        <h1>FAQ</h1>
        <div className="faq-accordion">
          <Collapse
            activeKey={activeKey}
            onChange={onCollapseChange}
            ghost
            expandIconPosition="right"
          >
            <Panel
              header="Do I need experience in tech or design to join?"
              key="1"
              className={`custom-collapse-header ${
                activeKey.includes('1') ? 'active' : ''
              }`}
            >
              <p className="custom-collapse-content">
                No experience is necessary! We provide training and mentorship
                to help you grow
              </p>
            </Panel>
            <Panel
              header="When and where is the open day?"
              key="2"
              className={`custom-collapse-header ${
                activeKey.includes('2') ? 'active' : ''
              }`}
            >
              <p className="custom-collapse-content">
                It will take place from october 28 to october 30.The conference
                will be held at INIM,with stands available at both INIM and INGM
              </p>
            </Panel>
            <Panel
              header="Is registration required?"
              key="3"
              className={`custom-collapse-header ${
                activeKey.includes('3') ? 'active' : ''
              }`}
            >
              <p className="custom-collapse-content">
                No formal registration is needed! All guests are welcome, and
                everyone can attend the conference and explore the event freely
              </p>
            </Panel>
            <Panel
              header="Do i need to be a student at UMBB?"
              key="4"
              className={`custom-collapse-header ${
                activeKey.includes('4') ? 'active' : ''
              }`}
            >
              <p className="custom-collapse-content">
                No ,all students from accross Algeria are welcome to join!
              </p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
