import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./Components/views/Login/Login";
import { Register } from "./Components/Register/Register";
import { Error404 } from "./Components/views/Error404/Error404";
import { Tasks } from "./Components/views/Tasks/Tasks";

const RequireAuth = ({ children }) => {
	if (!localStorage.getItem("logged")) {
		return <Navigate to='/login' replace={true} />;
	}
	return children;
};

export const App = () => {
	return (
		<div className='App'>
			<Routes>
				<Route
					path='/'
					element={
						<RequireAuth>
							<Tasks />
						</RequireAuth>
					}
				/>
				<Route path='/login' element={<Login />} />
				<Route path='*' element={<Error404 />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</div>
	);
};

export default App;
