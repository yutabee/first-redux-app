// import { createStore } from 'redux';  //現在非推奨なので斜線が入っている

// //action->increment,decrement
// const increment = () => {
//   return {
//     type: 'INCREMENT',
//   };
// };

// const decrement = () => {
//   return {
//     type: 'DECREMENT',
//   };
// };

// //reducer -> アクションと前の状態を組み合わせて新しい状態に更新する
// const counterReducer = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//           return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//   }
// }

// //store
// let store = createStore(counterReducer);  //storeにReducerを設置

// //コンソールに新しい状態を出力
// store.subscribe(() => console.log(store.getState()));

// //dispatch
// store.dispatch(increment());  //incrementをdispatchする;
// store.dispatch(increment()); 
// store.dispatch(decrement());

