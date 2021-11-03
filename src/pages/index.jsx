import React from 'react';
import Showcase from '../sections/Showcase';
import Information from '../sections/Information';
import Benefits from '../sections/Benefits';
import Coach from '../sections/Coach';
import Questions from '../sections/Questions';
import TargetBanner from '../components/TargetBanner';

const MainPage = () => (
  <main>
    <Showcase />
    <Information />
    <Benefits />
    <Coach />
    <Questions />
    <TargetBanner
      text="Что смотришь? Записывайся на первую тренировку, она бесплатная."
      buttonText="Как записаться?"
    />
  </main>
);

export default MainPage;
