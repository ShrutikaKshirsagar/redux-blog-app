import Home from "../components/Home";
import { addToCart , removeToCart} from "../services/actions/actions";
import { connect } from "react-redux/es/exports";
const mapStateToProps=state =>({
    cartData:state.cardItems
})
const mapDispatchToProps=dispatch =>({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeToCartHandler: data => dispatch(removeToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

// export default Home;