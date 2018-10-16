export default { 
    users:{
        state: {
            loading: false,
            users: [],
        }, 
        reducers: {
            loading(state, payload) {
                return {...state, loading: payload}
            },
            setUsers(state, payload) {
                return {...state, users: payload}
            }
        },
        effects: {
            getUsers() {
                this.loading(true);
                fetch('http://localhost:8181/users')
                .then((response) => {return response.json()})
                .then((myJson) => {
                    this.setUsers(myJson)
                    this.loading(false)
                })
            },
            removeUser(id) {
                this.loading(true);
                fetch(`http://localhost:8181/users/${id}`, {
                    method: 'delete'})
                .then((response) => {return response.json()})
                .then((myJson) => {
                    console.log(myJson)
                })
            }
        }
    }
}