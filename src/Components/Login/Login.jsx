import { useState } from "react";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!email || !password) {
			alert("INCOMPLETO");
		} else {
			window.location = "https://google.com.ar";
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>Iniciar Sesion</h1>
			<div>
				<label>Email</label>
				<input
					name='email'
					type='email'
					value={email}
					onChange={(e) => setEmail(e.currentTarget.value)}
				/>
			</div>
			<div>
				<label>Contraseña</label>
				<input
					type='password'
					name='password'
					value={password}
					onChange={(e) => setPassword(e.currentTarget.value)}
				/>
			</div>
			<div>
				<button type='submit'>Enviar</button>
			</div>
		</form>
	);
};
