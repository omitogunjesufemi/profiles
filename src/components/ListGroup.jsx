import {Fragment, useState} from "react";

function ListGroup({ items, heading, onSelectItem }) {
    const [selectIndex, setSelectIndex] = useState(0);

    return (
        <Fragment>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No items found</p>}
            <ul className="list-group">
                {items.map((item, idx) =>
                    <li className={selectIndex === idx ? 'list-group-item active' : 'list-group-item'}
                        key={item.id}
                        onClick={() => {
                            setSelectIndex(idx);
                            onSelectItem(item);
                        }
                    }> {item.name}
                    </li>
                )}
            </ul>
        </Fragment>
    );
}

export default ListGroup;