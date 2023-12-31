import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import Countdown from "react-countdown";
import { useState } from "react";
import ParticleBg from "./ParticleBg";

export function App() {
  const [ready, setReady] = useState(false);
  const [textMessage, setTextMessage] = useState(["Selamat Tahun baru 2024"]);
  const particleInitialization = async (engine) => {
    loadFireworksPreset(engine);
  };
  const timeLine = () => {
    const waktutahunBaru = new Date("January 1, 2024 00:00:00").getTime();
    const waktuSekarang = new Date().getTime();
    const selisih = waktutahunBaru - waktuSekarang;
    return selisih;
  };
  const complete = () => {
    setReady(true);
    setTextMessage(["SELAMAT TAHUN BARU 2024"]);
  };
  setTimeout(() => {
    complete();
  }, 5000);
  return (
    <div className="relative">
      {" "}
      {ready ? (
        <Particles
          init={particleInitialization}
          options={{ preset: "fireworks" }}
        />
      ) : (
        <ParticleBg />
      )}
      <div className="flex flex-col gap-5 w-full min-h-screen justify-center items-center text-white text-4xl">
        <span
          className={`${
            ready ? "text-xl" : "text-xl"
          } w-full h-10 items-center flex justify-center  font-extrabold z-50`}
        >
          {ready ? (
            // <Typewriter words={textMessage} loop={false} />
            <h1 className="neon text-center mb-5">Selamat Tahun Baru 2024</h1>
          ) : (
            <Typewriter
              words={[
                "Hitung Mundur",
                "Menuju Tahun 2024",
                "Dan Lihat Kembang Apinya",
              ]}
              loop={false}
            />
          )}
        </span>
        <span className="text-4xl text-white font-bold z-50">
          <Countdown date={Date.now() + timeLine()} onComplete={complete} />
        </span>
        <p className="text-slate-300 text-[10px] z-50 absolute bottom-5">
          Create by Mukti
        </p>
      </div>
    </div>
  );
}
