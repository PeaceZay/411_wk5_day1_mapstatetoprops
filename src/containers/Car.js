import {connect} from 'react-redux';
import  Car  from '../components/Car';

//  This inserts state into props!
const mapStateToProps = (state) => {
    return{
        cars: state.cars
    }
}



export default connect(mapStateToProps)(Car)