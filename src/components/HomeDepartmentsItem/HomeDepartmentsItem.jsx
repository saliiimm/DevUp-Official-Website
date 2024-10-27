import './HomeDepartmentsItem.css';


const HomeDepartmentsItem = ({ image, title, description, link }) => {
    return (
        <div className="home-departments-item">
            <img src={image} alt="logo" />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link}>Learn more</a>
            </div>
        </div>
    );
}

export default HomeDepartmentsItem;