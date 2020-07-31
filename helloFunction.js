

function getSocials(data){
   return data.Social.map((x) =>
        x.link
    )
}


export default getSocials;