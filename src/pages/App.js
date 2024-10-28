import '../css/App.css';
import Wallpaper from '../components/Wallpaper';
import kiiexImage from '../icons/kiiex.png';
import Form from '../components/Form';

function App() {
  return (
    <div className="App">
      <Wallpaper />
      <div className="content">
        <img src={kiiexImage} alt="Descripción" className="overlay-image" />
        <h1 className="title">Información de la empresa solicitante</h1>
        <h2 className="subtitle">
          Diligencia todos los campos del formulario marcados como requeridos* para poder enviar una solicitud
        </h2>
      </div>
      <Form />
    </div>
  );
}

export default App;
