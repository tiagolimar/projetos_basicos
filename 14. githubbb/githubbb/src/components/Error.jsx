export function Error() {
    return (
        <div className="container mt-4 pt-4">
            <div className="alert alert-danger" role="alert">
                <h1 className="error-title">Ops, algo deu errado!</h1>
                <p className="error-message">
                    Ocorreu um erro inesperado.
                </p>
            </div>
        </div>
    );
}