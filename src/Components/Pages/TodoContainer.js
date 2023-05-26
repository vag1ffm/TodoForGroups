import React from 'react';

const TodoContainer = ({item}) => {

    return (
        <li className={ ''}>
            <label id={item.id} >
                <input
                    type="checkbox"
                    defaultChecked={item.completed}
                    // onChange={() => {props.doneHandler(props.item, props.mainId)}}
                />
                <span>{item.title}</span>
                <div className={'person-and-trash'}>
                    <strong>{item.person_name}</strong>

                </div>
                <i className="material-icons red-text"
                   // onClick={()=> props.delete(props.item.id, props.mainId)}
                >
                    delete
                </i>
            </label>
        </li>
    );
};

export default TodoContainer;