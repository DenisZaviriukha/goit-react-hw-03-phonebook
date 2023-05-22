import { Label } from 'components/Form/Form.styled';
import {} from './Contacts.styled'


export const Contacts = ({ contactList, onFilt }) => {
    const onChange = (e) => (
        onFilt(e.target.value)
    );
    if (contactList.length > 0) {
        return (
            <>
                <Label>Find contacts by name
                    <input type="text" name='filterInput' onChange={onChange}></input>
                </Label>
            </>
        )
    }   
    return (
        <p>you don't have any contacts yet</p>
    )
}
