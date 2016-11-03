/**
 * React <App />
 * ======================
 * - Properties
 * - Events
 * - State
 */
var App = React.createClass({

    /**
     * Component render
     */
    render: function () {
        var items = "mercurio,venus,tierra,marte,jupiter,saturno,urano,neptuno,pluton".split(",");
        return (
            <FilteredList items={items} />
        );
    }
});