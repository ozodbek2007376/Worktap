import React from 'react'
import SectionCard from './SectionCard'

export default function Section() {
  return (
    <div>
    <div class="container py-5">
     
  <h5 class="my-5 fw-bold">Топ фрилансеров</h5>
  <div class="row g-4">

    <SectionCard imgnam="./img/main.png" ism="Марина Королёва" kasbi="Разработчик PHP" ishlashi="Выполнено проектов: 65" />
    <SectionCard imgnam="./img/main2.png" ism="Семён Сергеев" kasbi="Копирайтер" ishlashi="Выполнено проектов: 104" />
    <SectionCard imgnam="./img/main3.png" ism="Ангелина Сорокина" kasbi="Дизайнер сайтов" ishlashi="Выполнено проектов: 25" />
    <SectionCard imgnam="./img/main4.png" ism="Никита Зайцев" kasbi="Маркетолог" ishlashi="Выполнено проектов: 144" />
    <SectionCard imgnam="./img/main5.png" ism="Наталья Захарова" kasbi="Motion дизайнер" ishlashi="Выполнено проектов: 71" />




    <div class="col-md-4">
      <div class="card p-4 text-center h-100 bg-light border">
        <a href="#" class="text-success fw-bold text-decoration-none mt-auto">Посмотреть всех ТОП фрилансеров</a>
      </div>
    </div>
  </div>
  </div>
    </div>
  )
}
