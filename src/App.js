import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Login } from "./Components/views/Auth/Login/Login";
import { Register } from "./Components/views/Auth/Register/Register";
import { Tasks } from "./Components/views/Tasks/Tasks";

// https://www.framer.com/motion/
import { AnimatePresence, motion } from "framer-motion";
import { Donate } from "./Components/views/Donate/Donate";

// CSS
import { ApiError } from "./Components/ScreenErrors/ApiError";
import { LoadingContent } from "./Components/ScreenErrors/LoadingContent";
import "./sharedClasses.css";

const Error404 = lazy(() => import("./Components/ScreenErrors/Error404"));

const RequireAuth = ({ children }) => {
	if (!localStorage.getItem("token")) {
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
	const location = useLocation();

	return (
		<div className='app--container'>
			<AnimatePresence>
				<Routes location={location} key={location.pathname}>
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
						path='/donate'
						element={
							<motion.div
								className='page'
								initial='out'
								animate='in'
								exit='out'
								variant={pageTransition}
							>
								<Donate />
							</motion.div>
						}
					/>
					<Route
						path='*'
						element={
							<Suspense fallback={<LoadingContent />}>
								<Error404 />
							</Suspense>
						}
					/>
					<Route
						path='/error-api'
						element={
							<Suspense fallback={<LoadingContent />}>
								<ApiError />
							</Suspense>
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
