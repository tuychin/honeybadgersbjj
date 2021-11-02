import sauna from '../../images/sauna.jpg';
import pool from '../../images/pool.jpg';
import gym from '../../images/gym.jpg';
import tournament from '../../images/tournament.jpg';
import metro from '../../images/metro.jpg';
import camps from '../../images/camps.jpg';

export default [
  {
    img: metro,
    title: 'Рядом с метро',
    description: `
      Зал находится в 7 минутах ходьбы от метро Автозаводская.
    `,
    tags: [],
  },
  {
    img: tournament,
    title: 'Соревнования',
    description: `
      Наша команда входит в Федерацию Джиу-Джитсу России,
      что дает возможность спортсменам выступать на соревнованиях
      и продвигаться по лестнице спортивных званий.
    `,
    tags: [],
  },
  {
    img: camps,
    title: 'Сборы',
    description: `
      Регулярные поездки и спортивные кемпы по BJJ.
      Для опытных и начинающих спортсменов.
    `,
    tags: [],
  },
  {
    img: sauna,
    title: 'Сауна',
    description: `
      В фитнес-клубе оборудована комфортная СПА-зона,
      где функционирует финская, турецкая и соляная сауна.
    `,
    tags: ['входит в абонемент'],
  },
  {
    img: pool,
    title: 'Бассейн',
    description: `
      В фитнес-клубе функционируют два плавательных бассейна:
      35х8 м и relax-бассейн с теплой водой и SPA-зоной на 10х8 м.
    `,
    tags: ['входит в абонемент'],
  },
  {
    img: gym,
    title: 'Тренажёрный зал',
    description: `
      Зал CROSSFIT и зона Cycle, блочные и рычажные тренажеры.
    `,
    tags: ['входит в абонемент'],
  },
];
