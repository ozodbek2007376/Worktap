import React from 'react'

export default function SectionCard({imgnam, ism, kasbi, ishlashi}) {
  return (
    <div className="col-md-4">
      <div className="card p-3 text-center h-100">
        <img src={imgnam} alt="" className="freelancer-img mx-auto mb-2" />
        <div className="fw-bold">{ism}</div>
        <div className="text-info">{kasbi}</div>
        <div className="text-muted">{ishlashi}</div>
        <div className="text-warning mb-2">★★★★★</div>
        <button className="btn btn-green w-100">Написать</button>
      </div>
    </div>
  )
}
