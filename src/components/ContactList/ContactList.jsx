export const ContactList = ({ contactList, filterList, onDelete}) => {
    const filteredList = contactList.filter(contact =>
        contact.name.toLowerCase().includes(filterList.toLowerCase())
    )
    const onElBtn = e => {
        onDelete(e.target.parentNode.id)
    }
    if (contactList.length > 0) {
        return (
            <ul>
                {filteredList.map(contact => (
                    <li id={contact.id} key={contact.id}>{contact.name}{contact.number} <button type='button' onClick={onElBtn}>delete</button></li>
                ))
                }
            </ul>
        )
    }
}