import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import { EffectCards } from "swiper/modules";
import "swiper/css/pagination";

import "./App.css";
import Countdown from "./components/Countdown";
import foto1 from "./assets/img/foto-1.jpg";
import foto2 from "./assets/img/foto-2.jpg";
import foto3 from "./assets/img/foto-3.jpg";
import audio from "./assets/audio.mp3";
import EmojiRain from "./components/EmojiRain";

function App() {
  const slides = [
    { id: 1, content: foto1 },
    { id: 2, content: foto2 },
    { id: 3, content: foto3 },
  ];

  const startDate = "2023-11-25T00:00:00";

  const audioRef = useRef(null);

  const [musicStarted, setMusicStarted] = useState(false);

  const handleStartMusic = () => {
    if (!musicStarted) {
      audioRef.current
        .play()
        .then(() => {
          console.log("Música iniciada!");
          setMusicStarted(true);
        })
        .catch((error) => {
          console.error("Erro ao tentar reproduzir a música:", error);
        });
    }
  };

  return (
    <div className="App">
      <main>
        <header>
          <div className="slide">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              pagination={{ clickable: true }}
              modules={[EffectCards, Pagination]}
              onSlideChange={() => {
                if (musicStarted) return;
                handleStartMusic();
              }}
              onTouchStart={handleStartMusic}
              className="mySwiper w-80 my-5 rounded-2xl shadow-lg shadow-slate-700"
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="flex items-center justify-center w-full h-[450px] ">
                    <img src={slide.content}></img>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <h1 className="font-parisienne text-center text-[2.75rem] font-bold text-red-500 my-10">
            Thiago & Thamires
          </h1>
          <p className="my-8 mx-6 text-justify text-3xl font-parisienne">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
            malesuada. Sed tempus, nisi nec auctor fermentum, eros mauris
            viverra lectus, a congue neque erat a nisl.
          </p>
        </header>

        <section>
          <Countdown startDate={startDate} />
        </section>
        <div className="flex justify-center mb-10">
          <audio controls ref={audioRef} loop>
            <source src={audio} type="audio/mpeg" />
          </audio>
        </div>
      </main>
    </div>
  );
}

export default App;
