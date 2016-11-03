/**
 * React <Counter />
 * ======================
 * - Properties:
 *    - value : numeric value to show
 *    - minLength : min digits to show
 * - Events
 * - State
 */
var Counter = React.createClass({

  render: function () {
    var value = parseInt(this.props.value) + "", 
        // Calculates the digits to show
        charsToShow = (this.props.minLength && this.props.minLength > value.length) 
                          ? this.props.minLength 
                          : value.length,
        // Creates the displayed text
        count = ("00000000" + value).substr(-charsToShow);
    
    return (
      <div>
        {count.split("").map((v, i) => <CounterDigit key={i} num={v}/>) }
      </div>
    );
  }
});

/**
 * React <CounterDigit />
 * ======================
 * - Properties:
 *    - num : Number to show
 * - Events
 * - State
 */
var CounterDigit = React.createClass({

  /**
   * Component render
   */
  render: function () {
    var nums = "0123456789".split("");
    return (
      <div className="numcount">
        {nums.map(n => <span key={n} className={this.props.num == parseInt(n) ? 'active' : ''}>{n}</span>) }
      </div>
    );
  }
});