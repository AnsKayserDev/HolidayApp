import React, {Fragment} from 'react';
import {
  Image,
  TouchableOpacity,
  FlatList,
  View,
  SafeAreaView,
  Text,
  Platform,
} from 'react-native';
import styles from './styles';

import {connect} from 'react-redux';
import {loadHolidayList} from '../../../../redux/actions';

class Home extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      processing: true,
    };
  }

  componentDidMount(){
    this.fetchContent();
  }


  fetchContent() {
    try {
      this.setState({processing: true});
      Promise.all([this.props.fetchData()]).then(() => {
        this.setState({processing: false});
      });
    } catch (e) {
      this.setState({processing: false});
    }
  }

  render() {
    return (
      <View>
        <SafeAreaView>
        <View style={styles.container}>
          <View>
            <FlatList
              data={[1,2,3,4,5,6
              ]}
              renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
          </View> 
        </View>

        </SafeAreaView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const {} = state.home;

  return {};
}

const mapDispatchToProps = {
  fetchData: loadHolidayList

};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
