import { Link } from "react-router-dom";


const TopicCard = ({topic,handleDelete,updateTopicHandler}) => {

    
    

    return ( 
        <div className="item">
            <div className="content">
                <Link to={`/topic/${topic.id}`} state = {{ topic:topic}}  >
                    <div className="header">{topic.name}</div>
                    <div style={{marginRight:"10px"}} >{topic.description}</div>
                </Link>
                
            
            </div>
            <i  className="trash alternate outline icon" onClick={() => handleDelete(topic.id)}>
                
            </i>

            

            <Link to="/edit" state = {{ topic:topic}}>
                <i style={{float: "right"}} className="edit alternate outline icon" onClick={() => updateTopicHandler(topic)}></i>
            </Link>


            

        </div>  
     );
}
 
export default TopicCard;