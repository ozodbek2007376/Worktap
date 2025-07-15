import React from 'react'

export default function HeaderCard({imgname, sarlavha}) {
  return (
    <div className="col-md-4">
      <div className="card p-3 h-100">
        <div className="d-flex align-items-center mb-2">
          <img src={imgname} alt="" className="freelancer-img me-2" />
          <strong>{sarlavha}</strong>
        </div>
        <p className="mb-3 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, commodi voluptatum? Est alias libero velit praesentium quis dolor modi doloremque sequi facilis dolores, adipisci laboriosam.</p>
        <a href="#" className="btn btn-outline-success w-100">Посмотреть</a>
      </div>
    </div>
  )
}
