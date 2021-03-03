import Home from './Components/Home/Home';
import ProjectManager from './Components/project-manager/project-manager';
import FormManager from './Components/form-manager/form-manager';
import QuestionsManager from './Components/questions-manager/questions-manager';

export const routes = [
  { path: '/', name: "home", component: Home, exact: true },
  { path: '/project-manager', name: "projectmanager", component: ProjectManager },
  { path: '/form-manager', name: "formmanager", component: FormManager },
  { path: '/questions-manager', name: "questionsmanager", component: QuestionsManager },
]