import react, { Component } from "react";
class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
    };
  }
  state = {};
  render() {
    return (
      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addItem(this.state.productName,Number(this.state.productPrice));
        }}
      >
        <div className="mb-3 col-5">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="emailHelp"
            name="productName"
            onChange={(e) => {
              this.setState({ productName: e.currentTarget.value });
            }}
            value={this.state.productName}
          />
        </div>
        <div className="mb-3 col-5">
          <label htmlFor="inputprice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            name="productPrice"
            onChange={(e) => {
              this.setState({ productPrice: Number(e.currentTarget.value )});
            }}
            value={this.state.productPrice}
          />
        </div>

        <button type="submit" className="btn btn-primary col-2">
          Add Item
        </button>
      </form>
    );
  }
}

export default AddItem;
