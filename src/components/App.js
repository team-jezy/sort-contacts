import Component from './Component.js';
import Header from './Header.js';
import ContactTable from './ContactTable.js';
import contacts from '../../data/contacts.js';
import Sort from './Sort.js';
import sortContact from '../sort-list.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        const headerDOM = header.render();
        dom.insertBefore(headerDOM, main);

        const props = {
            contacts: contacts
        };

        const sort = new Sort({
            onSort: sortOptions => {
                this.sortOptions = sortOptions;
                const sorted = sortContact(contacts, sortOptions);
                contactTable.update({ contacts: sorted });
            }
        });
        const sortDOM = sort.render();
        dom.insertBefore(sortDOM, main);

        const contactTable = new ContactTable(props);
        const contactTableDOM = contactTable.render();
        main.appendChild(contactTableDOM);

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <header>
                    <h1></h1>
                </header>
                <main>
                    <table>
                    <thead>
                    </thead>
                        <tbody>
                            <tr>
                                <td></td>
                            </tr>
                        </tbody> 
                    </table>
                </main>
            </div>
        `;
    }
}

export default App;