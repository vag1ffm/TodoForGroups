import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Row, Col, Card} from 'react-bootstrap';
import {GetTodoGroupsAxios} from "../../store/reducer/todo/axios";

const Home = () => {
    const {user} = useSelector(state => state.userSlice);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetTodoGroupsAxios())
    }, [])

    // Предполагаем, что у вас есть массив групп, в которых состоит пользователь
    const groups = [
        {
            id: 1,
            name: 'Группа 1',
            creator: 'Пользователь 1',
            createdDate: '2023-05-28',
            hasNewAdditions: true
        },
        {
            id: 2,
            name: 'Группа 2',
            creator: 'Пользователь 2',
            createdDate: '2023-05-27',
            hasNewAdditions: false
        },
        // Дополнительные группы...
    ];

    return (
        <Container>
            <h1 className={'my-4'}>Home page</h1>

            <ol className="list-group list-group-numbered">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Name pf group</div>
                        Name of user who create
                    </div>
                    <span className="badge bg-primary rounded-pill">1</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Subheading</div>
                        Content for list item
                    </div>
                    <span className="badge bg-primary rounded-pill">14</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Subheading</div>
                        Content for list item
                    </div>
                    <span className="badge bg-primary rounded-pill">14</span>
                </li>
            </ol>
        </Container>
    );
};

export default Home;
