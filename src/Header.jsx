import Cart from "./Cart";

function Header(props) {
  const { numItems } = props;

  return (
    <div
      style={{
        backgroundColor: "#282c34",
        minHeight: 60,
        display: "flex",
        paddingLeft: "10",
        paddingRight: "10",
        fontSize: "2em",
        color: "white",
      }}
    >
      <div>My Shop</div>
      <Cart numItems={numItems} />
    </div>
  );
}

export default Header;
