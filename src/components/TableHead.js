import Component from './Component.js';

class TableHead extends Component {

    // render() {
    //     const dom = this.renderDOM();

    //     return dom;
    // }

    renderTemplate() {
        return /*html*/`
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Balance</th>
                    <th>Company</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Favorite Fruit</th>
                </tr>
            </thead> 
        `;
    }
}

export default TableHead;