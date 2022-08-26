import {connect} from 'react-redux';
import  Home  from '../components/Home';

//  This inserts state into props!
const mapStateToProps = (state) => {
    return{
        cars: state.cars
    }
}



export default connect(mapStateToProps)(Home)