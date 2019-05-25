function sortContacts(contacts, sortOptions) {
    return contacts.slice().sort((a, b) => {
        if(a[sortOptions.property] > b[sortOptions.property]) {
            return 1 * sortOptions.direction;
        }
        else if(b[sortOptions.property] > a[sortOptions.property]) {
            return -1 * sortOptions.direction;
        }
        return 0;
    });
}

export default sortContacts;