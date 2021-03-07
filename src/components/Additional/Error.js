const Error = ({ message = "An error has occured."}) => (
    <div className="text-center">
        <p className="danger">{message}</p>
    </div>
);

export default Error;