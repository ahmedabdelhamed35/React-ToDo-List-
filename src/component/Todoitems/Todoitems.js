import React from 'react';
import './Todoitems.css'

const TodoItems = (props) => {
    const items = props.items;
    const deleteItem = props.deleteItem;
    let length = items.length;
    const ListItems = length ?(items.map(item => {
        return(
            <div key={item.id}>
                <span className="name">{item.name}</span>
                <span className="age">{item.age}</span>
                <span className="action icon" onClick={() => deleteItem(item.id)}>&times;</span>
            </div>
        )
    })
    ) : (
        <p>there is no items</p>
    )

    return (
        <div className="ListItems">
            <div>
                <span className="name title">name</span>
                <span className="age title">age</span>
                <span className="action title">action</span>
            </div>
            {ListItems}
        </div>
    )
}
export default TodoItems;