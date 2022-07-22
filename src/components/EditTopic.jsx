import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const EditTopic = (props) => {

    const location = useLocation();
    const navigate =useNavigate();

    const [name,setName] = useState();
    const [description,setDescription] = useState();

    
    
    useEffect(() => {
        console.log("location : ",location);
        setName(location.state.topic.name);
        setDescription(location.state.topic.description);
        
    },[location]);

    const update = (e) => {
        e.preventDefault();

        console.log("form submit");
        if(name === "" || description === "" ){
            alert("all fields are required");
            return;

        }
    
        props.updateTopicHandler({id:location.state.topic.id,name:name,description:description});
        navigate('/');
        

    }

    
    return (
        <div className="ui main">
            <h2>Edit Topic</h2>
            <form className="ui form" onSubmit={update}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Topic Name" value={name} onChange={ (e) => setName(e.target.value) }/>
                </div>
                <div className="field">
                    <label>Description</label>
                    <textarea name="description" placeholder="Description of Topic" value={description} onChange={ (e) => setDescription(e.target.value)} />
                </div>

                <div>
                        <button className="ui button" type="submit">Update Topic</button>
                        <Link to = "/">
                            <button className="ui button" >Back</button>
                        </Link>
                </div>
                
            </form>
        </div>
    );
    
}
 
export default EditTopic;