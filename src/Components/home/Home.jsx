import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container} from 'react-bootstrap';
import {GetTodoGroupsAxios} from "../../store/reducer/todo/axios";
import {Link} from "react-router-dom";
import styles from './Home.module.css'
const Home = () => {
    const {groups} = useSelector(state => state.todoSlice)




    return (
        <Container>
            <h1 className={'my-4'}>Home page</h1>
            <ol className="list-group list-group-numbered">
                {groups?.map((group, index) => {
                    return <Link className={styles.a} key={index} to={`/group/${group.id}/`}>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{group.group_title}</div>
                                {group.group_owner_name}
                            </div>
                            <span className="badge bg-primary rounded-pill">{group?.todos_count}</span>
                        </li>
                    </Link>
                })}
            </ol>
        </Container>
    );
};

export default Home;
