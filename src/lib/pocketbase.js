import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090/')
console.log('http://127.0.0.1:8090/')
export default pb


// // query provider
// export const realTime = async (index, queryClient) => {
//     return await pb.realtime.subscribe('users', function(e) {
//         console.log('real time users', e.record)
//     })
// }

// // api calls
// // export const getUsers = async() => {
// //     return await pb.records.getFullList("users", 10, {
// //       sort: "-created",
// //     });
// //    }

// export const getUsers = await pb.collection('users').getFullList(200 /* batch size */, {
//     sort: '-created',
// });

