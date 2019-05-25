import Component from './Component.js';
import TbodyRows from './TbodyRows.js';

class ContactBody extends Component {

    render() {
        const tbody = this.renderDOM();
        const contacts = this.props.contacts;


        contacts.forEach(contact => {
            const tbodyRows = new TbodyRows({ contact });
            const tbodyRowsDOM = tbodyRows.render();
            tbody.appendChild(tbodyRowsDOM);
        });
        
        return tbody;

    }

    renderTemplate() {
        return /*html*/`
            <tbody>
                
            </tbody>
        `;
    }

}

export default ContactBody;