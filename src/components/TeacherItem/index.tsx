import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css';

function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://i2.wp.com/maikon.biz/wp-content/uploads/2020/05/gerador-de-persona-maikonbiz.png" alt="Foto" />
        <div>
          <strong>Nome</strong>
          <span>Disciplina</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio fugiat quas vel suscipit sunt. Illum quaerat, sed molestias doloremque ipsa, sunt minima ratione accusamus dolores qui, quae magnam corrupti.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;