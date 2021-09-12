import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Iklan from "./components/Iklan";
import Gambar from "./assets/images/Anime.jpg";
import Jadwal from "./components/Jadwal";
const data = ["Rabu","Jumat","Minggu"];
const judulData =["SAO Alicization","Fate Heaven Feel 3  ","The Conjuring 5","Another"];
const mulaiData =["  12.00 WIB  ","14.00 WIB","16.00 WIB","18.00 WIB"];
const selesaiData =["  13.30 WIB  ","15.30 WIB","17.30 WIB","19.30 WIB"];
const tiketData =["  Rp 100.000     ","Rp 120.000","Rp 110.000","Rp 100.000"];
ReactDOM.render(
    <React.StrictMode>
    <Iklan
        hariTayang= {data}
        judul="Fate Stay Night Heaven feel 3 : Spring Song"
        waktu="14.00 WIB"
        image={Gambar}
    />
    <Jadwal
        judul= {judulData}
        waktuMulai= {mulaiData}
        waktuSelesai= {selesaiData}
        hargaTiket= {tiketData}
    />
    </React.StrictMode>,
        document.getElementById("root")
);