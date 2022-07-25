import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./Components/views/Login/Login";
import { Register } from "./Components/Register/Register";
import { Error404 } from "./Components/views/Error404/Error404";
import { Tasks } from "./Components/views/Tasks/Tasks";

import { AnimatePresence, motion } from "framer-motion";

const RequireAuth = ({ children }) => {
	if (!localStorage.getItem("logged")) {
		return <Navigate to='/login' replace={true} />;
	}
	return children;
};

const pageTransition = {
	in: {
		opacity: 1,
	},
	out: {
		opacity: 0,
	},
};

export const App = () => {
	return (
		<div className='App'>
			<AnimatePresence>
				<Routes>
					<Route
						path='/'
						element={
							<RequireAuth>
								<motion.div
									className='page'
									initial='out'
									animate='in'
									exit='out'
									variant={pageTransition}
								>
									<Tasks />
								</motion.div>
							</RequireAuth>
						}
					/>
					<Route
						path='/login'
						element={
							<motion.div
								className='page'
								initial='out'
								animate='in'
								exit='out'
								variant={pageTransition}
							>
								<Login />
							</motion.div>
						}
					/>
					<Route
						path='*'
						element={
							<motion.div
								className='page'
								initial='out'
								animate='in'
								exit='out'
								variant={pageTransition}
							>
								<Error404 />
							</motion.div>
						}
					/>
					<Route
						path='/register'
						element={
							<motion.div
								className='page'
								initial='out'
								animate='in'
								exit='out'
								variant={pageTransition}
							>
								<Register />
							</motion.div>
						}
					/>
				</Routes>
			</AnimatePresence>
		</div>
	);
};

export default App;
