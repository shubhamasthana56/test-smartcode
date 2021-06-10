import HolderHeader from '../holder-header/holder-header';
import Card from '../card/card';
import './card-holder.css';
const CardHolder = (props)=> {
    //multiple data handling

    // const renderCards = ()=> {
    //     props.cards.map((card)=> {
    //         return (
    //             <div>
    //                 <Card cardData={card.data}></Card>
    //             </div>
    //         )
    //     })

    // }
    return (
        <div className="holder-container">
            <div className="header">
                <div className="header-item">
                <HolderHeader></HolderHeader>
                </div>
            
            </div>
            <div className="holder-item">
             <Card></Card>
            </div>
            
        </div>
    )
}
export default CardHolder;