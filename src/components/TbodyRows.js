import Component from './Component.js';

class TbodyRows extends Component {

    renderTemplate() {
        const contact = this.props.contact;

        return /*html*/`
            <tr>
                <td>${contact.firstName}</td>
                <td>${contact.lastName}</td>
                <td>${contact.age}</td>
                <td>$${contact.balance}</td>
                <td>${contact.company}</td>
                <td>${contact.email}</td>
                <td>${contact.phone}</td>
                <td>${contact.favoriteFruit}</td>
            </tr>
        `;    
    }
}

export default TbodyRows;