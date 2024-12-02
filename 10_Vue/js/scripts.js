$(document).ready(() => {
    var vc = Vue.component('team-component', {
        props: ['team'],
        template: '<tr> \
                        <td>{{ team.teamName }}</td> \
                        <td>{{ team.base }}</td> \
                        <td>{{ team.chassis }}</td> \
                        <td>{{ team.powerUnit }}</td> \
                        <td>{{ team.teamPrincipal}}</td> \
                    </tr>'
    }); // End Component

    // Init App
    var v = new Vue({
        el: '#app',
        data: {
            // Populated via AJAX call in mounted lifecycle hook method
            teams: []
        },
        mounted() {
            loadData("teams")
                .then((data) => {
                    this.teams = data;
                })
        },
        template: `<table>
                        <tr>
                            <th>Name</th>
                            <th>Base</th>
                            <th>Chassis</th>
                            <th>Power Unit</th>
                            <th>Team Principal</th>
                        </tr>
                        <team-component 
                            v-for="team in teams" 
                            v-bind:team="team"
                            v-bind:key="team.id" />
                    </table>`
    })
});