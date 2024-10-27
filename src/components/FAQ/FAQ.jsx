    import React, { useState } from 'react';
    import './FAQ.css'; 
    import { Collapse } from 'antd';
    import { FaArrowCircleRight } from "react-icons/fa";
    import { FaArrowCircleDown } from "react-icons/fa";
    const { Panel } = Collapse;

    const FAQ = () => {
    const [activeKey, setActiveKey] = useState(['1']);

    const onCollapseChange = (key) => {
        setActiveKey(key); 
    };

    return (
        <div className='faq-container'>
        <div className='faq-content'>
            <h1>FAQ</h1>
            <div className='faq-accordion'>
            <Collapse
                activeKey={activeKey}
                onChange={onCollapseChange}
                ghost
                expandIconPosition="right"
            >
                <Panel 
                header="Do I need experience in tech or design to join?" 
                key="1" 
                className={`custom-collapse-header ${activeKey.includes("1") ? "active" : ""}`}
                >
                <p className="custom-collapse-content">
                No experience is necessary! We provide training and mentorship to help you grow
                 </p>
                </Panel>
                <Panel 
                header="What is your favorite template from BRIX Templates??" 
                key="2" 
                className={`custom-collapse-header ${activeKey.includes("2") ? "active" : ""}`}
                >
                <p className="custom-collapse-content">
                No experience is necessary! We provide training and mentorship to help you grow
                </p>
                </Panel>
                <Panel 
                header="What is your favorite template from BRIX Templates??" 
                key="3" 
                className={`custom-collapse-header ${activeKey.includes("3") ? "active" : ""}`}
                >
                <p className="custom-collapse-content">
                No experience is necessary! We provide training and mentorship to help you grow
                </p>
                </Panel>
                <Panel 
                header="What is your favorite template from BRIX Templates??" 
                key="4" 
                className={`custom-collapse-header ${activeKey.includes("4") ? "active" : ""}`}
                >
                <p className="custom-collapse-content">
                No experience is necessary! We provide training and mentorship to help you grow
                </p>
                </Panel>
            </Collapse>
            </div>
        </div>
        </div>
    );
    };

    export default FAQ;
