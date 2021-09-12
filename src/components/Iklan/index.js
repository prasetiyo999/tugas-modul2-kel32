import React from "react";
export default function Iklan(props) {
const { judul, hariTayang, waktu, image }  = props;
return (
<div className="bg-white shadow text-center items-center objects-center justify-center">
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2x1 font-extrabold 
        text-gray-1000 ">
        Jadwal Tayang Bioskop Indah Rasa
        (Komponen Iklan)
            <div className="w-full h-80 item-center bg-gray200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden grouphover:opacity-75 lg:aspect-none ">
            <img
            src={image}
            alt="Gambar"
            className="w-full h-full object-center object-cover lg:wfull lg:h-full"
            />
            </div>
            <div className="mt-4 flex justify-center text-center">
        <div>
    <h3
>
<span aria-hidden="true" className="absolute inset-0 " />
{judul}
</h3>
        <p className="mt-1 text-sm text-gray500">
        Hari Tayang : {hariTayang.join(",")}</p>

        <p className=" mt-1 text-sm text-center text-gray500">
        Waktu : {waktu}
        </p>
        </div>
    </div>
</h2>
         </div>
        </div>
    );
}