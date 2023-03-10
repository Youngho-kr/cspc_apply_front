import React from 'react'
import '../Introduce.css';
import './Introduce_3.css';
import { Container, Row } from 'react-bootstrap';
import imgPicnic from '../../doing_page/img/picnic.png';
import imgHaek from '../../doing_page/img/haek.png';
import imgMt from '../../doing_page/img/mt.png';
import imgParty from '../../doing_page/img/party.png';

const Introduce_3 = () => {
  return (
    <div className='main'>
      <div className='picFrame'>
        <div className='picIntro'>
          <div className='picIntro1'>소수 정예 학회</div>
          <div className='picIntro2'>CSPC LAB은 소수로 이루어져, 서로 끈끈한 관계를 가지고 있습니다.</div>
        </div>
        <div className='sepLine'></div>
      </div>
    </div>
  );
}

export default Introduce_3;