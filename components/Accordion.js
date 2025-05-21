
import { useState } from 'react';

export default function Accordion({ items }) {
  return (
    <div className="space-y-4">
      {items.map((it, idx) => (
        <Section key={idx} title={it.title} content={it.content} />
      ))}
    </div>
  )
}

function Section({ title, content }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-primary/20 rounded-xl overflow-hidden">
      <button
        className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-primary"
        onClick={()=>setOpen(!open)}
      >
        {title}
        <span>{open ? '−' : '+'}</span>
      </button>
      {open && <div className="px-4 py-3 text-sm bg-white">{content}</div>}
    </div>
  )
}
