
import { useState } from 'react';

export default function NestedAccordion({ data }) {
  return (
    <div className="space-y-4">
      {data.map((parent, idx) => (
        <Parent key={idx} item={parent} />
      ))}
    </div>
  );
}

function Parent({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-primary/30 rounded-2xl">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center px-4 py-3 font-semibold text-primary">
        {item.title}
        <span>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="bg-white px-4 pb-4">
          {item.children.map((child,i)=>(
            <Child key={i} title={child.title} content={child.content}/>
          ))}
        </div>
      )}
    </div>
  )
}

function Child({ title, content }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-primary/10 rounded-lg my-2">
      <button onClick={()=>setOpen(!open)} className="w-full flex justify-between items-center px-3 py-2 text-sm font-medium text-gray-700">
        {title}
        <span>{open ? '−' : '+'}</span>
      </button>
      {open && <div className="px-3 py-2 text-sm text-gray-600">{content}</div>}
    </div>
  )
}
