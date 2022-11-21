import Image from 'next/image';

export default function Card({text, id, setDraggedCard, setPositionList, positionList, setPositionCard, positionCard}) {

  function handleClick(){
    console.log(id)
  }

  function handleDragStart(e){
    console.log(e)
    setDraggedCard({
      text: text,
      id: id
    });
    
    setPositionCard(positionCard)
    setPositionList(positionList)

  }

  return (
    <div draggable onDragStart={handleDragStart} className="bg-slate-100 text-slate-900 rounded-md p-3 flex flex-col gap-4 hover:cursor-move">
        <div className=" flex justify-between">
            <p className="font-small">{text}</p>
            <Image src="/static/images/icons/edit.png" width={16} height={16} alt="ee" />
        </div>
        <div className=" flex justify-between">
            <Image src="/static/images/icons/user.png" width={16} height={16} alt="ee" />
            <Image src="/static/images/icons/plus.png" width={16} height={16} alt="ee" />
        </div>
    </div>
  )
}
