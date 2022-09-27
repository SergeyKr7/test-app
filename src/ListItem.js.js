import './ListItem.css';

import img2 from './images/str.png'




const ListItem = (props) => {
    return (
        <div className="listItem">
            <img src = {props.img} alt ='no img'/>
            <div className='type-project'><span>Типовой проект</span></div>
            <div className='name-project'><h3>{props.name}</h3></div>
            <div className='info'>
                <div className='param1'><img src={img2} alt ='no img'/>
                <h5 className='param1-name'>Площадь</h5> <h5 className='param1-value'>{props.param1}</h5>
                </div>
                <div className='param2'><img src={img2} alt ='no img'/>
                <h5 className='param1-name'>Материал стен</h5> <h5 className='param1-value'>{props.param2}</h5></div>
                <div className='param3'><img src={img2} alt ='no img'/>
                <h5 className='param1-name'>Этажность</h5> <h5 className='param1-value'>{props.param3}</h5></div>
            </div>
    
        </div>
    )
}


export default ListItem;
