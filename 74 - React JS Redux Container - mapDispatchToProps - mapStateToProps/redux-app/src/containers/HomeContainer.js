import connect from "react-redux"
import Home from "../components/Home";
import addToCart from "../Services/Actions/actions"

const mapStateToProps = state => {

}

const mapDispathToProps = dispatch=> {
    addToCartHandler: data=> dispatch(addToCart(data))
}

export default connect(mapStateToProps, mapDispathToProps)(Home)


// export default Home;