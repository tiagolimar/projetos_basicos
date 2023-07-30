export const Thead = (props) => {
    console.log();
    let keys = Object.keys(props.data[0]);
    let head_table = keys.map((k, i) => <th key={i}>{k.toUpperCase()}</th>);
    return (
        <thead>
            <tr>{head_table}</tr>
        </thead>
    );
};
