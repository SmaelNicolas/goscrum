import { useNavigate } from "react-router-dom";

export const Header = () => {
	const navigate = useNavigate();
	const handleLogOut = () => {
		localStorage.removeItem("logged");
		navigate("/login", { replace: true });
	};

	return (
		<header>
			<span>Go Scrum</span>
			<div onClick={handleLogOut}>X</div>
		</header>
	);
};
