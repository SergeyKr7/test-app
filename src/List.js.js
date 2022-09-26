import './List.css';
import ListItem from './ListItem.js'
const List = () => {
    return (
        <div className="listName">
            <div className='list'>Мы реализовали более 150 проектов</div>
            <div className='listRow'> 
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            </div>
           
        </div>
    )
}


export default List;
