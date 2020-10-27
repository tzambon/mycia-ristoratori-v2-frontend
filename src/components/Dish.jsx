
function Dish(props) {
    const { children } = props;

    return (
        <div className="dish">{children}</div>
    );
}

export default Dish;
