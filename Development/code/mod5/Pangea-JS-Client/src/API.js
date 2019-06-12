class API {
    static baseUrl = 'http://localhost:3000'
    static signInUrl = API.baseUrl + '/signin'
    static signUpUrl = API.baseUrl + '/signup'
    static validateUrl = API.baseUrl + '/validate'
    static projectsUrl = API.baseUrl = '/projects'

    static signin (user) {
        return fetch(this.signInUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }).then(resp => resp.json())
    }

    static signup (user) {
        return fetch(this.signUpUrl, {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }).then(resp => resp.json())
       }

    static validate () {
        const id = localStorage.getItem('token')
        return fetch(this.validateUrl, {
            headers: {Authorization: id},
        }).then(resp => resp.json())
    }

    static increaseDonationServer (donation, project) {
        return fetch('http://localhost:3000/projects' + `/${project.slug}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount_pledged: donation })
        }).then(resp => resp.json())
    }

    static getUserProjects () {
        return fetch('http://localhost:3000/inventory', {
            headers: { Authorization: localStorage.getItem('token')},
        }).then(resp => resp.json())
    }

    static createUserProject (user_id, project_id) {
        return fetch('http://localhost:3000/user_projects', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user_id: user_id, project_id: project_id})
        }).then(resp => resp.json())
    }

    static getAllProjects () {
        return fetch('http://localhost:3000/projects')
        .then(resp => resp.json())
    }
   
    
}

export default API