import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useResize } from "../../Hooks/useResize";
import { DesktopMenu } from "./DesktopMenu/DesktopMenu";
import { MobileMenu } from "./MobileMenu/MobileMenu";

import { tasksLogout } from "../../store/actions/tasksActions";
import "./header.css";

export const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [user] = useState(localStorage.getItem("user"));

	const { isMobile } = useResize();

	const handleLogOut = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		dispatch(tasksLogout());
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
