

//ONLY EXPORT DEFAULT CASE:-

// function Pic()
// {
//     return(
//         <div>
//         <h1>Adventurious</h1>
//         <img src="https://media.istockphoto.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.jpg?s=612x612&w=0&k=20&c=kt8-RRzCDunpxgKFMBBjZ6jSteetNhhSxHZFvHQ0hNU="/>
//     </div>
//     )
// }
// export default Pic;


// function Picture()
// {
//     return(
//         <div>
//             <Pic/>
//         </div>
//     )
// }
// export default Picture;

//BOTH named & named

//internally it will start named export if we add export from first it will considered named export

// export function Pic()
// {
//     return(
//         <div>
//         <h1>Adventurious</h1>
//         <img src="https://media.istockphoto.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.jpg?s=612x612&w=0&k=20&c=kt8-RRzCDunpxgKFMBBjZ6jSteetNhhSxHZFvHQ0hNU="/>
//     </div>
//     )
// }


// export function Picture()               
// {
//     return(
//         <div>
//             <Pic/>
//         </div>
//     )
// }

//NAMED & DEFAULT EXPORT CASE



// function Picture(props)
// {
//     return(
//         <>
//             <img src={props.src}/>
//         </>
//     );
// }
// export default Picture;


// or  distructure only here

function Picture({src})
{
    return(
        <>
            <img src={src}/>
        </>
    );
}
export default Picture;