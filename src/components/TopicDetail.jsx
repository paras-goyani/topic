import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const ContactDetail = (props) => {
    
    const location = useLocation();
    const [name,setName] = useState();
    const [description,setDescription] = useState();

    useEffect(() => {
        setName(location.state.topic.name);
        setDescription(location.state.topic.description);
    });

    return ( 
        <div className="main">
            <div className="ui card centered">
                <div className="center">
                    <h2>{name}</h2>
                </div>
                <div className="content">
                    {description}
                </div>
            </div>
            <Link to="/">
                <div className="center-div">
                    <button className="ui button blue center">Back</button>
                </div>
            </Link>
            
        </div>
     );
}
 
export default ContactDetail;