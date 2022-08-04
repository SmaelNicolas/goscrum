import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { useResize } from "../../Hooks/useResize";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { DesktopMenu } from "./DesktopMenu/DesktopMenu";
import "./header.css";

export const Header = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState(localStorage.getItem("user"));

	const { isMobile } = useResize();

	const handleLogOut = () => {
		localStorage.removeItem("logged");
		localStorage.removeItem("user");
		navigate("/login", { replace: true });
	};

	const { tasks } = useSelector((state) => {
		return state.taskReducer;
	});

	return isMobile ? (
		<MobileMenu tasks={tasks} user={user} handleLogOut={handleLogOut} />
	) : (
		<DesktopMenu tasks={tasks} user={user} handleLogOut={handleLogOut} />
	);
};
