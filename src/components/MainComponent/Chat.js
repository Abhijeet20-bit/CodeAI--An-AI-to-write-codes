import React, { useEffect, useState } from 'react';
import {Link, Outlet} from 'react-router-dom';
import {Nav, NavItem} from 'reactstrap';
import Sidebar from './SideBar/SideBar';
import './Chat.css'
import sengSVG from'./../../images/send.svg';
import QueriesForm from './QueriesForm';
import Content from './Content';
import { ChatGPT,ChatResponse, ChatToDatabase, RetriveData } from '../../services/Api';
import {useNavigate} from 'react-router-dom';

const Chat = () => {
    const navigate = useNavigate();
    const [UserData, setUserData] = useState({"fullname": "","email": ""});
    const AllQueries = async ()=>{
        const res=await RetriveData();
        setUserQueries(res.AllUserQueries);
        //console.log("Queries response Iron man ",res);
    }
    useEffect(()=>{
        ChatGPT(navigate,setUserData);
        AllQueries();
        //console.log( " response from server ");
    },[]);
    const [queries, setQueries] = useState("");
    const [userQueries, setUserQueries] = useState([]);
    const handleQueriesInput = (event) => {
        //console.log("handle Queries ");
        setQueries(event.target.value)
    }
    
    const handleSubmitInput = async (e)=>{
        e.preventDefault();
        const Question = {
            "Question": queries
        }
        //console.log(queries);
        const res=await ChatResponse(Question);
        //console.log(res);
        //console.log("Submit handler ");
        //console.log(queries);
        let item = {
            "key": new Date().valueOf(),
            "Q": queries,
            "A": res.BotResponse.trim(),
        }
        const databaseres = await ChatToDatabase(item);
        //console.log("Mongo Database res ", databaseres);
        setUserQueries([...userQueries,item]);
        setQueries("");
    }
    return(
        <div className='flex flex-row'>
            <div className='flex'>
                
                <Sidebar UserData={UserData}/>
                <Outlet/>
            </div>
            <div className='flex-auto'>
                <div className='flex flex-col'>
                    <Content userQueries={userQueries}/>
                    <QueriesForm queries={queries} handleQueriesInput={handleQueriesInput} handleSubmitInput={handleSubmitInput}/>
                </div>
            </div>
        </div>
    
    );
}

export default Chat;