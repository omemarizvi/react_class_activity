import Picture from "./picture"
import Details from "./details"

export default function Profile (users) {
    return <>
        {<Picture id={users.id} />}
        {<Details firstName={users.firstName} lastName={users.lastName} classLevel={users.classLevel} school={users.school} email={users.email} />}
        {<hr style={{margin:'5px'}}></hr>}
    </>
}
