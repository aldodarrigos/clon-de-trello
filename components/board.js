import List from "../components/list"
import Card from "../components/card";
import { useState, useEffect } from 'react'

const todoList = [
  {
    id:'task-1',
    text: "Hacer la tarea de inglés"
  }
],
inProgressList = [
  {
    id:'task-2',
    text: "Aprende programación"
  }
],
doneList = [
  {
    id:'task-3',
    text: "Ver televisión"
  }
];

export default function Board() {

const [listOfLists, setListOfLists] = useState({
  todoList,
  inProgressList,
  doneList
});
const [draggedList, setDraggedList] = useState(null);
const [draggedCard, setDraggedCard] = useState(null);
const [removeCard, setRemoveCard] = useState(null);

function handleDrop(e){
  //Agregamos el item, a la lista seleccionada
  const path = e.nativeEvent.path;
  let  targetDrop;
  path.forEach(el => {
    let classes = '';
    if('classList' in el) classes = el.classList.value;
    if(classes.includes('list')) targetDrop = el.getAttribute('data-id');
  });
  
  let itemListRemove, positionListRemove;
  for (const prop in listOfLists){
    listOfLists[prop].forEach( (el, index) => {
      if(el.id == removeCard){
        itemListRemove = prop;
        positionListRemove = index;
        return false;
      } 
    })   
  }
  
  const listOfListClone = structuredClone( listOfLists );
    listOfListClone[itemListRemove].splice(positionListRemove,1);
    listOfListClone[targetDrop].push(draggedCard);
    setListOfLists(listOfListClone);

}

  
  return (
    <div className="p-4">  
      <h1 className="text-3xl font-bold underline">
        Development
      </h1>

      <main className="flex justify-between gap-4">
        <List name='Todo' dataId='todoList' handleDrop={handleDrop}>
          {
            listOfLists.todoList.map((item, index) => {
                return <Card setDraggedCard={setDraggedCard} setRemoveCard={setRemoveCard} {...item} key={item.id} />
            })
          }
        </List>

        <List name='In Progress' dataId='inProgressList' handleDrop={handleDrop} >
          {
            listOfLists.inProgressList.map((item, index) => {
                return <Card setDraggedCard={setDraggedCard} setRemoveCard={setRemoveCard} {...item} key={item.id} />
            })
          }
        </List>

        <List name='done' dataId='doneList' handleDrop={handleDrop} >
          {
            listOfLists.doneList.map((item, index) => {
                return <Card setDraggedCard={setDraggedCard} setRemoveCard={setRemoveCard} {...item} key={item.id} />
            })
          }
        </List>
        
      </main>
      
    </div>
  )
}
