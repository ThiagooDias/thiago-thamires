import React from "react";
import Particles from "react-tsparticles";

const EmojiRain = () => {
  return (
    <div>
      <Particles
        options={{
          background: {
            color: "#0d1b2a",
          },
          particles: {
            number: {
              value: 50, // Quantidade de emojis
            },
            shape: {
              type: "char",
              character: ["❤️", "🎉", "🌟", "😂", "🌈"], // Emojis personalizados
            },
            size: {
              value: 20, // Tamanho dos emojis
              random: true,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "bottom", // Emojis caindo para baixo
              outModes: {
                default: "out",
              },
            },
            opacity: {
              value: 1,
            },
          },
        }}
      />
    </div>
  );
};

export default EmojiRain;
