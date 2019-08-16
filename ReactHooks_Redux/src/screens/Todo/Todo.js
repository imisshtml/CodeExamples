import React, { 
  useState,
  useEffect,
  Fragment,
} from 'react';
import { 
  View,
  Text,
  FlatList,
  ActivityIndicator, 
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';

import { LOADTODOS, TOGGLETODO } from 'src/redux/actions/types';
import { fetchJSON } from 'src/utils/API';
import Styles from './styles';

const Todo = React.memo(() => {
    const [toggles, setToggles] = useState([]);
    const [isloading, setIsLoading] = useState(false);
    const data = useSelector(state => state.dataReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchTodos = async () => {
            setIsLoading(true);
            const getTodos = await fetchJSON.get('/todos/');
            setIsLoading(false);
            setToggles(getTodos.data);
        };
        fetchTodos();
    }, []);

    toggleTodo = id => {
      let todos = toggles.map((item, index) => {
          if(item.id === id) {
              return {
                  ...item,
                  completed: !item.completed,
              }
          }
          return item;
      });

      setToggles(todos);
    };

    const renderChecked = (
      <Icon name="check-circle" color='#008000' size={24}/>
    );

    const renderUnchecked = (
      <Icon name="circle" size={24}/>
    );

    renderTodos = ({item}) => {
        return (
            <Fragment>
                <View style={Styles.itemContainer}>
                    <View style={Styles.todoWrapper}>
                      <Text style={Styles.title}>{item.title}</Text>
                      <Text style={Styles.userDetail}>Assigned to: {data.users[item.userId-1]['name']}</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => toggleTodo(item.id)}
                    >
                      {item.completed ? renderChecked : renderUnchecked}
                    </TouchableOpacity>
                </View>
                <View style={Styles.divider} />
            </Fragment>
        );
    };

    return (
        <View style={Styles.container}>
            {isloading ? (
                <ActivityIndicator
                  style={Styles.activityIndicator}
                  size={"large"}
                  color={"#007aff"}
                />
            ) : (
                <FlatList
                  data={toggles}
                  keyExtractor={this._keyExtractor}
                  renderItem={renderTodos}
                  keyExtractor={item => item.id.toString()}
                />
            )}
        </View>
    );
});

export default Todo;