import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserPage } from './components/UserPage';
import { TodosPage } from './components/TodosPage';
import { NavLink } from 'react-router-dom';
import { UserItemPage } from './components/UserItemPage';
import { TodoItemPage } from './components/TodoItemPage';

function App() {
	return (
		<BrowserRouter>
			<div>
				<div>
					<NavLink to={'/users'}>users</NavLink>
					<NavLink to={'/todos'}>todos</NavLink>
				</div>
				<Routes>
					<Route path='/users' element={<UserPage />} />
					<Route path='/users/:userId' element={<UserItemPage />} />
				</Routes>
			</div>
			<div>
				<Routes>
					<Route path='/todos' element={<TodosPage />} />
					<Route path='/todos/:todoId' element={<TodoItemPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
