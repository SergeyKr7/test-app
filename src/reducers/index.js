// import img11 from '../images/Houses/1.png'
// import img22 from '../images/Houses/2.png'
// import img33 from '../images/Houses/3.png'
// import img44 from '../images/Houses/4.png'
// import img55 from '../images/Houses/5.png'
// import img66 from '../images/Houses/6.png'

const initialState = [
    {name: 'Амстердам', param1: '195 m2', param2: 'Газоблок', param3: '1', img: ''},
    {name: 'Женева', param1: '100 m2', param2: 'Кирпичь', param3: '2', img: ''},
    {name: 'Эсьберг', param1: '95 m2', param2: 'Солома', param3: '3', img: ''},
    {name: 'Кентукки', param1: '45 m2', param2: 'Брус', param3: '4', img: ''},
    {name: 'Ларнака', param1: '100 m2', param2: 'Вата', param3: '5', img: ''},
    {name: 'Кельн', param1: '111 m3', param2: 'Бумага', param3: '6', img: ''}
]

const reducer = (state = initialState, action) => {
        switch (action.type) {
        case 'ADD': 
        return{
            ...state
        }
        default: return state
    }
  

}


export default reducer;
