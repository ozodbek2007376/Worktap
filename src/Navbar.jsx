import React from 'react'

export default function Navbar() {
  return (
    <div>
      
  <div className="navbar navbar-expand-lg bg-white shadow-sm">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img src="img/logo.png" alt="" height="30" /> 
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto me-3">
          <li className="nav-item"><a className="nav-link" href="#">Биржа</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Ворки</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Конкурсы</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Создать ворк</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Создать заказ</a></li>
        </ul>
        <button className="btn btn-outline-primary me-2">Регистрация</button>
        <button className="btn btn-success">Войти</button>
      </div>
    </div>
  </div>

  <div className="hero py-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 text-center text-lg-start">
          <h1 className="fw-bold">Покупайте фриланс-услуги<span className="text-success">в два клика</span></h1>
          <p className="text-muted">Ворк — единица работы продавца, которую можно купить как товар в магазине</p>

          <div className="input-group my-4">
            <input type="text" className="form-control" placeholder="Что нужно сделать?" />
            <button className="btn btn-warning text-white">Найти</button>
          </div>

          <div className="d-flex flex-wrap gap-2 ">
            <span className=" hove badge bg-light text-dark">Тексты и переводы</span>
            <span className=" hove badge bg-light text-dark">Разработка</span>
            <span className=" hove badge bg-light text-dark">Дизайн</span>
            <span className=" hove badge bg-light text-danger">Аудио, видео монтаж</span>
            <span className=" hove badge bg-light text-dark">SEO и оптимизация</span>
            <span className=" hove badge bg-light text-dark">Бизнес и жизнь</span>
            <span className=" hove badge bg-light text-dark">Соцсети и реклама</span>
            <span className=" hove badge border text-warning">Все категории</span>
          </div>
        </div>

        <div className="col-lg-6 text-center mt-4 mt-lg-0">
          <div className="position-relative">
            <img src="./img/header-bg.png" alt="Person" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}
