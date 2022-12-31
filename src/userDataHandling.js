const KEYS = {
    userId: 'userId',
    users: 'users'
}
// function to insert new user to local storage
export function insertUserData(data) {
    let users = getAllUsers();
    data['id'] = generateUserId()
    users.push(data)
    localStorage.setItem(KEYS.users, JSON.stringify(users))
}
// function to generate specific ID for each user
export function generateUserId() {
    if (localStorage.getItem(KEYS.userId) == null)
        localStorage.setItem(KEYS.userId, '0')
    var id = parseInt(localStorage.getItem(KEYS.userId))
    localStorage.setItem(KEYS.userId, (++id).toString())
    return id;
}
// function to get all Users data from local storage
export function getAllUsers() {
    if (localStorage.getItem(KEYS.users) == null)
        localStorage.setItem(KEYS.users, JSON.stringify([]))
    const users = JSON.parse(localStorage.getItem(KEYS.users))
    return users
}
// function to update user data 
export function updateUser(oldData, newData) {
    let users = getAllUsers();
    const recordIndex = users.findIndex(x => x.email === oldData.email)
    users[recordIndex] = { ...newData }
    localStorage.setItem(KEYS.users, JSON.stringify(users))
}