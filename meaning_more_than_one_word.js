users = [{"login":"user1","role":"Admin"},{"login":"user2","role":"State user"},{"login":"user3","role":"Moderator"}];

function printIndex(users) {
    const indexval = 0;
    for (let index = 0; index < users.length; index++) {
        let amount = ((((users[index]).role).split(' ')).length);
            if (amount > 1) {
	            console.log(users.indexOf(users[index]));
            }
    }
}
printIndex(users)

