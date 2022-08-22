import Swal from "sweetalert2";

export const swal = () =>
	Swal.fire({
		title: "Hubo un error",
		text: "Los datos ingresados son incorrectos",
		icon: "error",
		confirmButtonText: "Volver a Intentar",
		width: "350px",
		timer: 5000,
		timerProgressBar: true,
		customClass: "swal--errorLogin",
		allowOutsideClick: true,
		allowEscapeKey: true,
	});

export const swalAccountCreated = (team, user, navigate) => {
	Swal.fire({
		position: "center",
		icon: "success",
		title: `Usuario ${user} creado correctamente `,
		text: `Team ID : ${team}`,
		confirmButtonText: "Continuar",
		showConfirmButton: true,
		customClass: "swal--userCreated",
		allowOutsideClick: true,
		allowEscapeKey: true,
	}).then(
		navigate(`/login`, {
			replace: true,
		})
	);
};
