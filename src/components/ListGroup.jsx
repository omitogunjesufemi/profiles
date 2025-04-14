import {Fragment, useState} from "react";

function ListGroup({ items, heading, onSelectItem }) {
    const [selectIndex, setSelectIndex] = useState(0);

    return (
        <Fragment>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No items found</p>}
            <ul className="list-group">
                {items.map((item, index) =>
                    <li className={selectIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={index}
                        onClick={() => {
                            setSelectIndex(index);
                            onSelectItem(item);
                        }
                    }> {item}
                    </li>
                )};
            </ul>
        </Fragment>
    );
}

export default ListGroup;