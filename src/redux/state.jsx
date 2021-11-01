import { rerenderEntireTree } from "../render";

let state = {
  postsData: [{
    id: 1, texthead: 'Топ стрижек 2021', textmain: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....'
  }, {
    id: 2, texthead: 'Выбор кресла для барберов', textmain: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....'
  }, {
    id: 3, texthead: 'Как выбрать “своего” мастера', textmain: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....'
  }],

  newPostText: 'it-kamasutra'



}

 export let addpost = (postMessage) => {

  let newPost = {
    id: 4,
    texthead: postMessage,
    textmain: "lorem lalallal"
  };

  state.postsData.push(newPost);
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.newPostText = newText;
  rerenderEntireTree(state);
}

export default state;
