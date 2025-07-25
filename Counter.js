import { useState } from "react";

const Counter = () => {

    //let error1 = "Error, counter is below or above the range";
   // let minCount = 1;
    //let maxCount = 5;

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(5);
    
    const handleClick1= () => {
        if ( counter1 < 5 ){
            setCounter1(counter1+1);
        }
    }

    const handleClick2= () => {
        if ( counter2 > 0 ){
            setCounter2(counter2-1);
        }
    }

    return(
        <div clasName='counter'>
            <h>Counter Program</h>
            <p>See how the numbers increase and decrease with button clicks!</p>
            <p>{counter1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{counter2}&nbsp;&nbsp;</p>
            <button onClick={handleClick1}>Increase</button>&nbsp;&nbsp;
            &nbsp;&nbsp;
            <button onClick={handleClick2}>Decrease</button>
        </div>
    );
}

export default Counter;