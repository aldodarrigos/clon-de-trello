import List from "../components/list"
import Card from "../components/card";
import data from '../helpers/data';
import { useState, useEffect } from 'react';
// import { data } from "autoprefixer";

export default function Board() {

const [listOfLists, setListOfLists] = useState(data);
const [draggedList, setDraggedList] = useState(null);
const [draggedCard, setDraggedCard] = useState(null);
const [positionList, setPositionList] = useState(null);
const [positionCard, setPositionCard] = useState(null);

console.log(listOfLists)

function handleDrop(e){
  //Agregamos el item a la lista arrastrada
  const path = e.nativeEvent.path;
  let  targetDrop;
  path.forEach(el => {
    let classes = '';
    if('classList' in el) classes = el.classList.value;
    if(classes.includes('list')) targetDrop = el.getAttribute('data-position');
  });

  const listOfListClone = structuredClone( listOfLists );
    listOfListClone[positionList].cards.splice(positionCard,1);
    listOfListClone[targetDrop].cards.push(draggedCard);
    setListOfLists(listOfListClone);
}

  
  return (
    <div className="p-4">  
      <h1 className="text-3xl font-bold underline">
        Development
      </h1>
      <br/>

      <main className="flex justify-between gap-4">
      {listOfLists.map( (item,index ) => {
        return <List name={item.name}
                     dataId={item.id}
                     position={index}
                     handleDrop={handleDrop}> 
        {
          item.cards.map( (card,indexCard) => {
            return <Card positionList={index}
                         positionCard={indexCard}
                         setPositionList={setPositionList}
                         setPositionCard={setPositionCard}
                         setDraggedCard={setDraggedCard}
                         {...card}
                         key={card.id} />
          })
        }
        </List>
        }) 
      }
      </main>
      
    </div>
  )
}
