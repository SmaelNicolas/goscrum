import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResize } from "../../Hooks/useResize";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { DesktopMenu } from "./DesktopMenu/DesktopMenu";
import { useSelector, useDispatch } from "react-redux";

import "./header.css";
import { tasksLogout } from "../../store/actions/tasksActions";

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
