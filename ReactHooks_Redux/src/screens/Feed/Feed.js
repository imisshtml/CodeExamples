import React, { 
  useState,
  useEffect,
  Fragment,
} from 'react';
import { 
  Modal,
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  ActivityIndicator, 
  TouchableOpacity,
  Button
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';

import { LOADPOSTS, LOADCOMMENTS, TOGGLEPOST, DELETEPOST, CREATEPOST } from 'src/redux/actions/types';
import { fetchJSON, createJSON } from 'src/utils/API';
import Styles from './styles';
import axios from "axios";

const Feed = React.memo(() => {
    const [modalVisible, setModalVisible] = useState(false);
    const [newPostTitle, setNewPostTitle] = useState('');
    const [newPostBody, setNewPostBody] = useState('');

    const data = useSelector(state => state.dataReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchPosts = async () => {
            const getPosts = await fetchJSON.get('/posts/');
            dispatch({ type: LOADPOSTS, payload: getPosts.data });
        };
        const fetchComments = async () => {
            const getComments = await fetchJSON.get('/comments/');
            dispatch({ type: LOADCOMMENTS, payload: getComments.data });
        };
        fetchPosts()
        .then(fetchComments());
    }, []);

    deletePost = id => {
      const deletePosts = async () => {
        const deletedPost = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        dispatch({ type: DELETEPOST, payload: id });
      };
      deletePosts();
    };

    createPost = () => {
      const createPosts = async () => {
        const body = {
          title: newPostTitle,
          body: newPostBody,
          userId: 1,
          id: (Math.random() * 100) + 100,
        };
        const createdPost = await createJSON(body).post('/');
        setNewPostBody('');
        setNewPostTitle('');
        setModalVisible(false);
        dispatch({ type: CREATEPOST, payload: body });
      };
      createPosts();
    };

    renderPosts = ({item}) => {
        return (
            <Fragment>
                <View style={Styles.postWrapper}>
                    <Text style={Styles.title}>{item.title}</Text>
                    <View style={Styles.itemContainer}>
                        <Image source={{uri: data.uiFaces[item.userId-1]['photo']}} style={Styles.avatar} />
                        <View>
                            <Text style={[Styles.userDetail, Styles.italic]}>By {data.users[item.userId-1]['name']}</Text>
                            <Text style={[Styles.postDetail]}>{item.body}</Text>
                            <View style={Styles.postDivider} />
                            <View style={Styles.actionBar}>
                              <TouchableOpacity
                                  onPress={() => dispatch({ type: TOGGLEPOST, payload: item.id })}
                              >
                                <View style={Styles.itemWrapper}>
                                    <Icon name="message-circle" size={12} />
                                    <Text style={Styles.commentLabel}>View Comments</Text>
                                </View>
                              </TouchableOpacity>
                              <TouchableOpacity
                                  onPress={() => deletePost(item.id)}
                              >
                                <View style={Styles.itemWrapper}>
                                    <Icon name="x-circle" size={12} />
                                    <Text style={Styles.removeLabel}>Remove Post</Text>
                                </View>
                              </TouchableOpacity>
                            </View>
                            { data.postCommentToggle[item.id] && 
                              <FlatList
                                data={parseComments(item.id)}
                                renderItem={renderComments}
                                keyExtractor={this._keyExtractor}
                                keyExtractor={(item, index) => item + index}
                              />
                            }
                        </View>
                    </View>
                </View>
                <View style={Styles.divider} />
            </Fragment>
        );
    };

    parseComments = postId => {
      return data.comments.filter(item => item.postId === postId);
    }

    renderComments = ({item, index}) => {
      return (
        <View style={Styles.smallPad}>
          <Text style={[Styles.userDetail, Styles.italic]}>Comment From {item.email}</Text>
          <Text style={Styles.postDetail}>{item.body}</Text>
          <View style={Styles.commentDivider} />
        </View>
      );
    };

    renderHeader = () => {
        return (
          <View style={Styles.createPost}>
              <Text>Create New Post</Text>
              <TouchableOpacity
                  onPress={() => setModalVisible(true)}
              >
                  <Icon name="plus-circle" color='#007aff' size={24} style={Styles.smallPad} />
              </TouchableOpacity>
          </View>
        );
    };
    

    return (
        <View style={Styles.container}>
            {data.isLoadingComments ? (
                <ActivityIndicator
                  style={Styles.activityIndicator}
                  size={"large"}
                  color={"#007aff"}
                />
            ) : (
                <Fragment>
                  <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}
                  >
                    <View style={Styles.modalWrapper}>
                      <View>
                        <Text style={Styles.title}>Create New Post</Text>

                        <TextInput
                          style={Styles.newPostTitle}
                          onChangeText={(text) => setNewPostTitle(text)}
                          value={newPostTitle}
                          placeholder={'Title your post!'}
                        />

                        <TextInput
                          style={Styles.newPostBody}
                          onChangeText={(text) => setNewPostBody(text)}
                          value={newPostBody}
                          placeholder={'Write your post...'}
                          multiline={true}
                        />

                        <View style={Styles.buttonWrapper}>
                          <Button
                            onPress={() => setModalVisible(false)}
                            title="Cancel"
                            color="#999"
                            accessibilityLabel="Cancel your new post"
                          />
                          <Button
                            onPress={() => createPost()}
                            title="Save"
                            color="#007aff"
                            accessibilityLabel="Create your new post"
                            disabled={newPostBody === '' || newPostTitle === ''}
                          />
                        </View>
                        
                      </View>
                    </View>
                  </Modal>

                  <FlatList
                    ListHeaderComponent={renderHeader}
                    data={data.posts}
                    keyExtractor={this._keyExtractor}
                    renderItem={renderPosts}
                    keyExtractor={(item, index) => item + index}
                  />
                </Fragment>
            )}
        </View>
    );
});

export default Feed;