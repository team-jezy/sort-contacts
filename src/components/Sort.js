import Component from './Component.js';

class Sort extends Component {

    render() {
        const form = this.renderDOM();

        form.addEventListener('input', () => {
            const formData = new FormData(form);
            const sortOptions = {
                property: formData.get('property'),
                direction: parseInt(formData.get('direction'))
            };
            this.props.onSort(sortOptions);

        });
        return form;
    }

    renderTemplate() {
        return /*html*/`
            <form>
                <label>
                    <strong>Sort by:</strong>
                    <select name="property">
                        <option value="firstName">First Name</option>
                        <option value="lastName">Last Name</option>
                        <option value="age">Age</option>
                        <option value="balance">Balance</option>
                        <option value="company">Company</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="favoriteFruit">Favorite Fruit</option>
                    </select>
                    <strong>Direction:</strong>
                    <select name="direction">
                        <option value="1">Ascending</option>
                        <option value="-1">Descending</option>
                    </select>
                </label>
            </form>
        `;
    }
}

export default Sort;