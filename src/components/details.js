export default function Details(props) {
    let classcolor = props.classLevel === "Freshman" ? "green": "black";
    return <>
    <ul>
        <li><p><strong>Name: </strong>{props.firstName + " " + props.lastName}</p></li>
        <li><p><strong>Class Level: </strong><class style={{color: classcolor}}>{props.classLevel}</class></p></li>
        <li><p><strong>School: </strong>{props.school}</p></li>
        <li><p><strong>Email: </strong>{props.email}</p></li>
    </ul>
    </>
}