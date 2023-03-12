export default function Picture (props) {
    const src_url = "https://picsum.photos/id/" + props.id + "/200/300/"
    const img = <img src={src_url} alt="user profile"/>
    return <>
        {img}
    </>
}