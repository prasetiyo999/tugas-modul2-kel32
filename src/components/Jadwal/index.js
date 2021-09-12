import React from "react";
export default function Jadwal(props) {
    const { judul, waktuMulai, waktuSelesai, hargaTiket }  = props;
    return (
<div
className="flex flex-col items-center justify-center bggray-50 shadow-md"
style={{ height: "200px" }}
>
(Komponen Jadwal)
<table className="border:1"
style={{ border:1 }}
>
<tr>
		<td>  Judul   </td>
		<td>  Mulai  </td>
		<td>  Selesai  </td>
        <td>  Tiket  </td>
	</tr>
	<tr>
		<td>{judul[0]}</td>
		<td>{waktuMulai[0]}</td>
		<td>{waktuSelesai[0]}</td>
        <td>{hargaTiket[0]}</td>
	</tr><tr>
		<td>{judul[1]}</td>
		<td>{waktuMulai[1]}</td>
		<td>{waktuSelesai[1]}</td>
        <td>{hargaTiket[1]}</td>
	</tr><tr>
		<td>{judul[2]}</td>
		<td>{waktuMulai[2]}</td>
		<td>{waktuSelesai[2]}</td>
        <td>{hargaTiket[2]}</td>
	</tr><tr>
		<td>{judul[3]}</td>
		<td>{waktuMulai[3]}</td>
		<td>{waktuSelesai[3]}</td>
        <td>{hargaTiket[3]}</td>
	</tr>
	</table>
</div>
);
}
