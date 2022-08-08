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

export const swalAccountCreated = (team, navigate) => {
	Swal.fire({
		title: `Team ID: ${team}`,
		confirmButtonText: "Continuar",
	}).then((result) => {
		if (result.isConfirmed) {
			navigate(`/login`, {
				replace: true,
			});
		}
	});
};
