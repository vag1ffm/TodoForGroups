import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import Authentification from "./Authentification";
import {GetTodoGroupAxios} from "../../../store/reducer/todos/axios";
import {useDispatch} from "react-redux";

const Home = () => {
    function Authentifications() {
        if (localStorage.getItem('token') === null) {
            return (
                <h5>У вас нет тудушек =( <br/> <Link to={'/login/'}>Войдите</Link> в свой аккаунт или же <Link to={'/register/'}>зарегистрируйтесь </Link> чтобы добавить ʕ•́ᴥ•̀ʔっ♡</h5>
            )

        } else {
            return (
                <div>
                    list of todos
                    {/*{Object.keys(clean).map((item, index) => (<Groups*/}
                    {/*    chosengroup={props.chosengroup}*/}
                    {/*    setChosenGroup={props.setChosenGroup}*/}
                    {/*    key={index}*/}
                    {/*    index={index+1}*/}
                    {/*    id={item}*/}
                    {/*    groupName={clean[item]}*/}
                    {/*/>))}*/}
                </div>
            )
        }
    };

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(GetTodoGroupAxios())
    },[]);

    return (
        <div>
            <h2>Todo groups</h2>
            <Authentification/>
        </div>
    );
};

export default Home;