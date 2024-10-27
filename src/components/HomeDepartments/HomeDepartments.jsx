import './HomeDepartments.css';
import HomeDepartmentsItem from '../HomeDepartmentsItem/HomeDepartmentsItem';

const HomeDepartments = () => {
    return (
        <div className="home-departments">
            <h2>Departments</h2>
            <div id="departments-container"> 
                <div id="first-department">
                    <HomeDepartmentsItem 
                        image="/src/assets/dev-logo.png"
                        title="Dev departement"
                        description="Build websites and applications using React, JavaScript, and other modern tools. Perfect for anyone interested in coding and web technologies."
                        link="" />
                </div>
                

                <HomeDepartmentsItem 
                    image="/src/assets/design-logo.png"
                    title="Design departement"
                    description="Craft intuitive and engaging UI/UX designs with Figma, Adobe Illustrator, and Photoshop. Join us to transform ideas into visual experiences."
                    link="" />
                
                <HomeDepartmentsItem 
                    image="/src/assets/marketing-logo.png"
                    title="Marketing departement"
                    description=" Craft intuitive and engaging UI/UX designs with Figma, Adobe Illustrator, and Photoshop. Join us to transform ideas into visual experiences."
                    link="" />

                <HomeDepartmentsItem 
                    image="/src/assets/outreach-logo.png"
                    title="Outreach & Operations"
                    description="Create videos and multimedia content using tools like Adobe Premiere and After Effects. Work on promotional content and event coverage."
                    link="" />
                
                <HomeDepartmentsItem 
                    image="/src/assets/human-logo.png"
                    title="Human Resources"
                    description="Manage recruitment, member engagement, and communication within the club, ensuring a smooth and collaborative environment."
                    link="" />
            </div>
        </div>
    )
}

export default HomeDepartments;