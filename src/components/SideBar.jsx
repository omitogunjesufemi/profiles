import ListGroup from "./ListGroup.jsx";

function SideBar ({ items }) {
    return(
        <div>
            <ListGroup
                items={items}
                heading={'Genres'}
                onSelectItem={() => {}}>
            </ListGroup>
        </div>
    );
}

export default SideBar;