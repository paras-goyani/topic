
import './App.css';
import { useEffect, useState } from "react";
import TopicList from "./TopicsList";   

import api from '../api/topics'
import AddTopic from "./AddTopic";
import Header from "./header";
import { v4 as uuidv4 } from 'uuid';
import {BrowserRouter as Router,Routes , Route} from 'react-router-dom';
import EditTopic from "./EditTopic";
import TopicDetail from './TopicDetail';


function App() {


  const [topics,setTopics] = useState([]);

    useEffect(() => {
        console.log(topics);
        getTopics();
        
    },[]);

    
    const getTopics = () => {
        api.get("topics").then(res => setTopics(res.data));
        
    }

    const handleDelete = async (id) => {
        await api.delete(`/topics/${id}`);

        const newTopic = topics.filter(t =>  t.id !== id);
        setTopics(newTopic);
        
    }

    const addTopicHandler = (topic) =>{
        console.log(topic)

        const newTopic = {id : uuidv4(),...topic}

        api.post("/topics",newTopic).then(res => setTopics([...topics,newTopic]));
      }

    const updateTopicHandler = (topic) => {
        console.log(topic);
        api.put(`topics/${topic.id}`,topic).then(res => 
            setTopics(topics.map(topic => {return topic.id === res.data.id ? {...res.data} : topic} )));
    }
  

  return (
    <div   className="ui container">

      <Header></Header>

      <Router>
        <Routes>
            <Route 
                path="/"  
                exact 
                element = {<TopicList topics={topics} handleDelete = {handleDelete} updateTopicHandler={updateTopicHandler}/>}></Route>
            <Route path="/add"  element = {<AddTopic addTopicHandler = {addTopicHandler} />}  ></Route>

            <Route path="/edit" element={<EditTopic updateTopicHandler={updateTopicHandler}/>}  ></Route>

            <Route path="/topic/:id" element={<TopicDetail/>}  ></Route>
            
            
            
        </Routes>
        
      </Router>
         
    </div>
  );
}

export default App;
  