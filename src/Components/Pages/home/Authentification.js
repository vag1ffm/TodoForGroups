import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {DeleteTodoGroupAxios} from "../../../store/reducer/todos/axios";

const Authentification = () => {
    const dispatch = useDispatch();
    const {MyTodoGroups} = useSelector(state => state.todoSlice)

    console.log(MyTodoGroups)


    function DeleteTodoGroup(id_group) {
        dispatch(DeleteTodoGroupAxios(id_group))
    }
    return (
        <div>
            {
                (localStorage.getItem('app_token') === null)? (
                <h5>У вас нет тудушек =( <br/>
                    <Link to={'/login/'}>Войдите</Link> в свой аккаунт или же <Link to={'/register/'}>зарегистрируйтесь </Link> чтобы добавить ʕ•́ᴥ•̀ʔっ♡</h5>
                ):  (
                    <>
                        {   MyTodoGroups &&
                            MyTodoGroups.map((group, index) => {
                                return (
                                    <div key={index}>
                                            <div className={'groupName'}>
                                                <Link  to={`/group/${group.id}`} >

                                                    <div className="title">
                                                        <strong>
                                                            {index +1}
                                                        </strong>
                                                        <pre> {group.group_title}</pre>
                                                    </div>
                                                </Link>

                                                <div className="delgroup">
                                                    <i className="material-icons red-text"
                                                       onClick={()=>{DeleteTodoGroup(group.id)}}
                                                    >
                                                        delete
                                                    </i>
                                                </div>
                                            </div>
                                    </div>

                                )
                            })
                        }
                    </>
                )
            }
        </div>
    );
};

export default Authentification;