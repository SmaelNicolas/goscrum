import Swal from "sweetalert2";

export const swal = () =>
	Swal.fire({
		title: "Error!",
		text: "Error en las credenciales ingresadas",
		icon: "error",
		confirmButtonText: "Aceptar",
		width: "350px",
		timer: 5000,
		timerProgressBar: true,
	});

export const swalAccountCreated = (team, user, navigate) => {
	Swal.fire({
		position: "center",
		icon: "success",
		title: `Usuario ${user} creado correctamente `,
		text: `Team ID : ${team}`,
		showConfirmButton: true,
	}).then(
		navigate(`/login`, {
			replace: true,
		})
	);
};
