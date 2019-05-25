import Component from './Component.js';
import TableHead from './TableHead.js';
import ContactBody from './ContactBody.js';

class ContactTable extends Component {

    render() {
        const table = this.renderDOM();

        const tableHead = new TableHead();
        const tableHeadDOM = tableHead.render();
        table.appendChild(tableHeadDOM);

        const contacts = this.props.contacts;

        const contactBody = new ContactBody({ contacts });
        const contactBodyDOM = contactBody.render();
        table.appendChild(contactBodyDOM);

        return table;
    }

    renderTemplate() {
        return /*html*/`
            <table>   
            </table>
        `;


    }
}

export default ContactTable;