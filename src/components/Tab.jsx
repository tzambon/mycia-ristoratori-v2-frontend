
function Tab(props) {
    const { label } = props;

    return (
        <div className="tab">
            <button type="button">{label}</button>
        </div>
    );
}

export default Tab;
