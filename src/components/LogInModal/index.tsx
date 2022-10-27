interface Props {
    signIn?: boolean;
}

function LogInModal({ signIn } : Props) {
  return (
    <div>
      { signIn
        ? <h4>Iniciar sesión</h4> : <h4>Crear Cuenta</h4>}

    </div>
  );
}

export default LogInModal;
