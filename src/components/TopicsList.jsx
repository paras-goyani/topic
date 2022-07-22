import TopicCard from "./TopicCard";
import {Link} from 'react-router-dom';


const TopicList = ({topics,handleDelete,updateTopicHandler}) => {

    

    return ( 

        <div className="main">
            <h2>
                Topic List
                <Link to="/add">
                <button className="ui button blue right" >Add Topic</button>
                </Link>
            </h2>
                 
            <div className="ui celled list">
                {
                    topics.map(function(topic) {
                        return (
                        <TopicCard topic={topic} handleDelete={handleDelete} updateTopicHandler = {updateTopicHandler}/>
                        );
                    })
                }
            </div>

        </div>        
     );
}
 
export default TopicList;