var teamContainer = document.getElementById('team');
var teamDetailContainer = document.getElementById('teamDetail');
var teamMainContainer = document.getElementById('TeamMain');

class TeamMember {

    constructor(teamMember) {
        this.firstName = teamMember.firstName;
        this.lastName = teamMember.lastName;
        this.image = teamMember.image;
        this.email = teamMember.email;
        this.telephone = teamMember.telephone;
        this.profession = teamMember.profession;
        this.createMemberEntry()
    }

    createMemberDetail() {
        teamMainContainer.style.height = '60em';

        teamDetailContainer.innerHTML = "";
        teamDetailContainer.style.display = 'flex';

        var memberDetailRow = document.createElement('div');
        memberDetailRow.setAttribute('class', 'row');

        var imageDiv = document.createElement('div');
        imageDiv.setAttribute('id', 'teamDetailImage');

        var image = document.createElement('img');
        image.setAttribute('src', `./MEDIA/${this.image}`);
        image.setAttribute('alt', `Picture ${this.firstName} `);

        imageDiv.appendChild(image);
        memberDetailRow.appendChild(imageDiv);

        var detail = document.createElement('div');
        detail.setAttribute('id', 'employeeDetail');

        var detailHeading = document.createElement('span');
        detailHeading.setAttribute('id', 'employeeDetailHeading');
        detailHeading.innerHTML = `${this.firstName} ${this.lastName}`;

        var detailProfession = document.createElement('span');
        detailProfession.setAttribute('id', 'employeeDetailProfession');
        detailProfession.innerHTML = this.profession;

        var detailContactHeader = document.createElement('h3');
        detailContactHeader.innerHTML = 'How to contact me';

        var detailContactPhone = document.createElement('span');
        detailContactPhone.setAttribute('class', 'employeeDetailContact');
        detailContactPhone.innerHTML = `Telephone: ${this.telephone}`;

        var detailContactEmail = document.createElement('span');
        detailContactEmail.setAttribute('class', 'employeeDetailContact');
        detailContactEmail.innerHTML = `Email: <a href="mailto:${this.email}?subject=insuranceCF">${this.email}</a>`;

        detail.appendChild(detailHeading);
        detail.appendChild(detailProfession);
        detail.appendChild(detailContactHeader);
        detail.appendChild(detailContactPhone);
        detail.appendChild(detailContactEmail);
        memberDetailRow.appendChild(detail);
        teamDetailContainer.appendChild(memberDetailRow);
    }

    createMemberEntry() {
        var teamElement = document.createElement('div');
        teamElement.setAttribute('id', `teamElement${this.firstName}`);
        teamElement.setAttribute('class', 'teamElement');

        var image = document.createElement('img');
        image.setAttribute('src', `./MEDIA/${this.image}`);
        image.setAttribute('alt', `Picture ${this.firstName} `);

        var name = document.createElement('span');
        name.setAttribute('class', 'memberName');
        name.innerHTML = `${this.firstName} ${this.lastName}`;

        var profession = document.createElement('span');
        profession.setAttribute('class', 'memberProfession');
        profession.innerHTML = `${this.profession}`;

        var button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.innerHTML = 'learn more';
        button.addEventListener('click', this.createMemberDetail.bind(this));
        button.setAttribute("id", this.firstName);

        teamElement.appendChild(image);
        teamElement.appendChild(name);
        teamElement.appendChild(profession);
        teamElement.appendChild(button);
        teamContainer.appendChild(teamElement);
    }
}

var teamMembers = [
    {
        firstName: 'Anna',
        lastName: 'Miller',
        profession: 'Customer Service',
        image: 'employeeanna.jpg',
        telephone: '+43 680 208 563',
        email: 'anna@insurancecf.net'
    },
    {
        firstName: 'Tim',
        lastName: 'Bauer',
        profession: 'CEO',
        image: 'employeetim.jpg',
        telephone: '+43 680 208 583',
        email: 'tim@insurancecf.net'
    },
    {
        firstName: 'Laura',
        lastName: 'Turner',
        profession: 'Lawyer',
        image: 'employeelaura.jpg',
        telephone: '+43 680 208 593',
        email: 'laura@insurancecf.net'
    }
];

teamMembers.forEach(function (teamMember) {
    new TeamMember(teamMember);
});
