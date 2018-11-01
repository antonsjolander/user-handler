import axios from 'axios';

const URL = 'http://localhost:8181/users/';

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
                axios.get(URL )
                .then((response) => {return response.data})
                .then((myJson) => {
                    this.setUsers(myJson)
                    this.loading(false)
                })
            },
            removeUser(id) {
                this.loading(true);
                axios.delete(URL + id, {
                    method: 'delete'})
                .then((response) => {
                    if(response.status == '200'){
                        this.getUsers();
                    }
                })
                
            },
            updateUser(id, payload , user ) {
                console.log(user);
                this.loading(true);
                axios.put(URL + id, {
                    id: user.id,
                    name: {
                        first: user.name.first,
                        last: user.name.last
                    },
                    picture: user.picture
                    })
                .then((response) => {
                    console.log(response)
                    if(response.status == '200'){
                       this.getUsers();
                    }
                })
                
            },
            addUser(id, payload , user ) {
                console.log(user);
                this.loading(true);
                axios.post(URL, {
                    name: {
                        first: user.name.first,
                        last: user.name.last
                    },
                    picture: user.picture
                    })
                .then((response) => {
                    console.log(response)
                    if(response.status == '201'){
                       this.getUsers();
                    }
                })
                
            }
            
        }
    }
}