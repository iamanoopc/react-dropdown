import { connect } from 'react-redux';
import Slack from '../components/Slack';

export default connect(state => state.toObject())(Slack);
