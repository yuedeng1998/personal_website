import "./About.css"
import dy2 from '../../assets/dy2.jpg';

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-info">
                <div>
                <h1 className="about-heading">About Me</h1>
                <p className="about-desc">
                My name is Yue (Valerie) Deng. I am a computer science student, 
                currently pursuing my master's degree at the University of Southern California. 
                I recently graduated from the University of British Columbia in Canada with a bachelor's degree in computer science.
                </p>

                <p className="about-desc">
                In terms of my technical skills, I have experience in web development, 
                having developed a stock searching website using Flask for the backend and Angular for the frontend. 
                I also have experience in data analytics, having worked as a summer intern at Zscaler where I designed 
                and implemented an analysis manager to automate the process of node analysis in terms of success rate and speed. 
                My programming skills include proficiency in Python, Java, and C++, as well as experience working with SQL 
                and NoSQL databases and cloud computing platforms like AWS. 
                </p>

                <p className="about-desc">
                I also have experience in strategy consulting, which has helped me develop strong interpersonal and communication 
                skills. I am able to quickly learn and understand new industries, and I am able to clearly explain 
                and present my findings to others. I am a fast learner, a team player, and have a strong drive to continuously improve my skills. 
                </p>
                </div>
                <div className="about-img">
                    <div className="about-img-wrapper">
                        <img src={dy2} alt="dengyue pic" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;