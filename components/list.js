
import Card from "./card";

export default function List({name, dataId, position, children, handleDrop }) {

  function handleDragOver(e) {
    e.preventDefault();
  }


  return (
    <div data-id={dataId} data-position={position} onDragOver={handleDragOver} onDrop={handleDrop}  className="p-4 flex-1 bg-slate-400 rounded-md list">
      <h2 className=" text-gray-900  mb-5">{name.toUpperCase()}</h2>
      <div className="flex flex-col gap-2">
        {children}
      </div>
      
    </div>
  );
}
