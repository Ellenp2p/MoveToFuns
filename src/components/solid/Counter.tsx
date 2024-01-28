// import {useStore} from "@nanostores/solid";
// import {counterStore} from "../../store/counter"

// export function Counter (){

//     const $counter = useStore(counterStore)
//     return <>
//         <h1>Counter</h1>
//         <div>
//             <h2>{$counter()}</h2>
//         </div>
//         <div>
//             <button onClick={() => counterStore.set($counter() + 1)}>+1</button>
//             <button onClick={() => counterStore.set($counter() - 1)}>-1</button>
//             <button onClick={() => counterStore.set(0)}>reset</button>
//         </div>
//     </>
// }