import './HomeDepartmentsItem.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const HomeDepartmentsItem = ({ image, title, description, link }) => {
    return (
        <div className="home-departments-item">
            <img src={image} alt="logo" />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to={link}>Learn more</Link>
            </div>
        </div>
    );
}

export default HomeDepartmentsItem;