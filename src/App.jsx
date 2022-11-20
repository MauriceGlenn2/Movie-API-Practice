import './components/Counter.css';

import Todo from './components/Todo.jsx';
import Title from './components/Title.jsx';
import Modal from './components/Modal.jsx';
import React, { useState } from "react"
import Counter from './components/Counter.jsx';
//everytime we press cancel button we need to notify the parent that we pressed cancel and we want to hide the modal
//everytime we press confirm button we need to notify the parent that we pressed confimed and we want to close the modal

function App() {
    const [showModal, setShowModal] = useState(false)
    function onTodoDelete() {
        setShowModal(true)
        console.log('onTodoDelete()');
    }

    function cancel(){
        setShowModal(false)
        console.log('cancel()');
    }
    
    function confirmed(){
        setShowModal(false)
        Todo(false)
        console.log('confirm()');

    }

    return (
        <div>
            <Title />
            <div>
                <input type="text" onChange={(event) => {
                    console.log(event.target.value)
                }} />
                <button>Add Todo</button>
            </div>
            <div className='todo__wrapper'>
                <Todo onTodoDelete={onTodoDelete} title='Finish Frontend Simplified' />
                <Todo onTodoDelete={onTodoDelete} title='Finish Interview Section' />
                <Todo onTodoDelete={onTodoDelete} title='Land a $100k Job' />
            </div>
            {showModal && <Modal cancel={cancel} confirmed={confirmed} title='Are you sure you want to delete?' />}
        </div>
    );
}
export default App;

