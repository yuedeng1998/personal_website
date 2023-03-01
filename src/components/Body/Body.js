import "./Body.css"
import { FaGithub, FaLinkedin, FaRegFilePdf } from "react-icons/fa";
import dy1 from '../../assets/dy1.jpg';
import PDF from '../../data/Resume_SDE.pdf'

const Body = () => {
    return (
        <div>
        <div id="body" className="body">
            <div className="body-container">
                <div className="body-profile">
                    <img className="body-img" alt='Deng Yue Pic' src={dy1} />

                    <div className="body-content">
                        <div className="body-headline">Valerie Yue</div>
                        <div className="body-text">Software Development Engineer</div>
                    </div>

                    <div className="body-icons">
                        <a href="https://github.com/yuedeng1998" target="_blank" rel="noreferrer" className="icon-link"><i><FaGithub /></i> </a>
                        <a href="https://www.linkedin.com/in/yue-deng-a20aa0170" target="_blank" rel="noreferrer" className="icon-link"><i><FaLinkedin /></i></a>
                        <a href={PDF} target="_blank" rel="noreferrer" className="icon-link"><i><FaRegFilePdf></FaRegFilePdf></i></a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Body;