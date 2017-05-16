let followers = [
        {
            Dan : {},
            Lila: {}
        },
        {
            Nasty: {},
            Alice: {},
            Sergey: {}
        },
        {
            Lila:{},
            Katy: {
                mango: 'mango'
            }
        }
]
function is_person_seller( obj ){
  console.log(obj);
  if ( 'mango' in obj && obj.mango != '' ){
    return true;
  }
  return false;
}
function isSeller( obj ){
    var queue = [];
    queue.push(obj[0]);
    for ( i = 0; i < queue.length; i++){
          if (is_person_seller( queue[i] )){
            return "Here's come DATTT BOIIII";
          } else {
              console.log( ...queue[i] );
              queue.push(...queue[i]);
          }

        }

}
isSeller(followers);
