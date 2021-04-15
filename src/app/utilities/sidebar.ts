// OFF-LINE USERS ORDER AT THE END OF THE LIST 
export const orderUserListFromStatus = (userList): Array<any> => {
    let orederedUserList = [];
    let addressBookListOn = userList.filter(us => us.status);
    let addressBookListOff = userList.filter(us => !us.status);
    orederedUserList.push(...addressBookListOn, ...addressBookListOff);
    return orederedUserList;
}