
function Avatar({src , width , height}) //props destructure 
{
    return (
        <>
         <img src={src} width={width} height={height} />
        </>
    )
}
export default Avatar;