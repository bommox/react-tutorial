var App = React.createClass({

    render : function() {
        var items = "mercurio,venus,tierra,marte,jupiter,saturno,urano,neptuno,pluton".split(",");
        return (
            <FilteredList items={items} />
        );
    }
});