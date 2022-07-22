import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddTopic = (props) => {

    const [name,setName] = useState();
    const [description,setDescription] = useState();
 
    
    const navigate =useNavigate();
    
    const add = (e) => {
        e.preventDefault();

        console.log("form submit");
        if(name === "" || description === "" ){
            alert("all fields are required");
            return;

        }
        // console.log(this.state.description);

        
        props.addTopicHandler({"name" : name,"description":description});
        
        navigate('/');
          
    }

    
        return (
            <div className="ui main">
                <h2>Add Topic</h2>
                <form className="ui form" onSubmit={add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Topic Name" value={name} onChange={ (e) => setName(e.target.value)}/>
                    </div>
                    <div className="field">
                        <label>Description</label>
                        <textarea name="description"  placeholder="Description of Topic" value={description} onChange={ (e) => setDescription(e.target.value)} />
                    </div>

                    <div>
                        <button className="ui button" type="submit">Add Topic</button>
                        <Link to = "/">
                            <button className="ui button" >Back</button>
                        </Link>
                        
                    </div>
                    
                </form>
            </div>
        );
    
}
 
export default AddTopic;