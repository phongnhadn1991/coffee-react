import FooterLayout from './layouts/footerLayout';
import HeaderLayout from './layouts/headerLayout';
import RouterPage from './router/RouterPage';
function App() {
  return (
    <div className="App">
      <HeaderLayout />
        <RouterPage />
      <FooterLayout />
    </div>
  );
}

export default App;
