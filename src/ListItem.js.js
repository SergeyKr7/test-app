import './ListItem.css';
import img1 from './images/Rectangle 193.png'
import img2 from './images/str.png'

const ListItem = () => {
    return (
        <div className="listItem">
            <img src = {img1} alt ='no img'/>
            <div className='type-project'><span>Типовой проект</span></div>
            <div className='name-project'><h3>Амстердам</h3></div>
            <div className='info'>
                <div className='param1'><img src={img2} alt ='no img'/>
                <h5 className='param1-name'>Площадь</h5> <h5 className='param1-value'>195 м2</h5>
                </div>
                <div className='param2'><img src={img2} alt ='no img'/>
                <h5 className='param1-name'>Материал стен</h5> <h5 className='param1-value'>Газоблок</h5></div>
                <div className='param3'><img src={img2} alt ='no img'/>
                <h5 className='param1-name'>Этажность</h5> <h5 className='param1-value'>3</h5></div>
            </div>
    
        </div>
    )
}


export default ListItem;
