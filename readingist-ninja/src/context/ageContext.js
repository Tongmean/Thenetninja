// import react, {createContext, useState } from 'react';
// const AgeContext = createContext();

// const AgeContextProvider = (props) =>{
//     const [age, setAge] = useState(20);

//     const addOneToAge = () =>setAge(age+1);
//     const addFiveToAge = () =>setAge(age+5);
//     const addNumToAge = (num) =>setAge(age + num);
//     addOneToAge();
//     console.log(age);
//     return(
//         <AgeContext.Provider value={{age, addOneToAge, addFiveToAge, addNumToAge}}>
//             {props.children}
//         </AgeContext.Provider>
//     );
// };
