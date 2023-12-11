import { useRouteError } from 'react-router-dom';

function NotFound() {
  const error = useRouteError();

  return (
    <div>
      <h1>La pagina solicitada no existe</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default NotFound;
