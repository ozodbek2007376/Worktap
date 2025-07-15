import React from 'react'
import HeaderCard from './HeaderCard'

export default function Header() {
  return (
    <div>
      
<div className="container py-5">
  
  <h5 className="mb-4 fw-bold">Актуальные ворки</h5>
  <div className="row g-4">
    <HeaderCard imgname="./img/section.png" sarlavha="Сделать дизайн интернет-магазина" />
    <HeaderCard imgname="./img/section2.png" sarlavha="Верстка landing page" />
    <HeaderCard imgname="./img/section3.png" sarlavha="Сделать дизайн сайта-каталога" />
    <HeaderCard imgname="./img/section4.png" sarlavha="Продвижение Instagram" />
    <HeaderCard imgname="./img/section5.png" sarlavha="Срочно! Нужен веб дизайнер!" />
    
    <div className="col-md-4">
      <div className="card p-4 text-center h-100 bg-light border">
        <a href="#" className="text-success fw-bold text-decoration-none mt-auto">Смотреть все ворки</a>
      </div>
    </div>
  </div>

  
</div>
    </div>
  )
}
