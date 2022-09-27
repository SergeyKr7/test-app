import { useState } from 'react';
import './List.css';
import ListItem from './ListItem.js'
import img11 from './images/qwer.png'
import img22 from './images/2.png'
import img33 from './images/3.png'
import img44 from './images/4.png'
import img55 from './images/5.png'
import img66 from './images/6.png'






const List = () => {

const [state, setState] = useState(
    [
        {name: 'Амстердам', param1: '195 m2', param2: 'Газоблок', param3: '1', img: img11},
        {name: 'Женева', param1: '100 m2', param2: 'Кирпичь', param3: '2', img: img22},
        {name: 'Эсьберг', param1: '95 m2', param2: 'Солома', param3: '3', img: img33},
        {name: 'Кентукки', param1: '45 m2', param2: 'Брус', param3: '4', img: img44},
        {name: 'Ларнака', param1: '100 m2', param2: 'Вата', param3: '5', img: img55},
        {name: 'Кельн', param1: '111 m3', param2: 'Бумага', param3: '6', img: img66}
    ]

)

    return (
        <div className="listName">
            <div className='list'>Мы реализовали более 150 проектов</div>
            <div className='listRow'> 
            {state.map(item => <ListItem name = {item.name} 
            param1 = {item.param1} 
            param2 = {item.param2}
            param3 = {item.param3}
            img = {item.img} />)}
            
            </div>
           
        </div>
    )
}


export default List;
