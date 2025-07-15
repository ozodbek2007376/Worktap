import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className="yellow-section py-5">
  <div className="container">
    <h4 className="fw-bold text-white mb-4">Как WorkTap помогает бизнесу?</h4>

    <div className="row">
      <div className="col-lg-6">
        <div className="d-flex flex-column gap-3">
          <div className="benefit-box">
            <img src="./img/karta.png" className="icon-img" alt="" />
            <div>Оплачивайте с р/с или карты компании</div>
          </div>
          <div className="benefit-box">
            <img src="./img/karta2.png" className="icon-img" alt="" />
            <div>Экономьте до 87% бюджета на фрилансе</div>
          </div>
          <div className="benefit-box">
            <img src="./img/karta3.png" className="icon-img" alt="" />;
            <div>Экономьте до 75% времени на решении фриланс задач</div>
          </div>
        </div>
        <p className="mt-4 text-white fw-semibold">WorkTap — быстро, просто и безопасно!</p>
        <button className="start-btn mt-2">Начать!</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
