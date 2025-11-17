const btn = document.querySelector('#btn')
const displayBox =  document.querySelector('#displayBox')
const body = document.querySelector('main')

const allTeams = [
    {
        teamName: 'RCB',
        primaryColor: 'red',
        secondaryColor: 'black',
        titles: 1,
        fullName: 'Royal Challengers Bangalore',
        captain: 'Rajat Patidar'
    },
    {
        teamName: 'CSK',
        primaryColor: 'yellow',
        secondaryColor: 'blue',
        titles: 5,
        fullName: 'Chennai Super Kings',
        captain: 'MS Dhoni'
    },
    {
        teamName: 'DC',
        primaryColor: 'blue',
        secondaryColor: 'red',
        titles: 0,
        fullName: 'Delhi Capitals',
        captain: 'Axar Patel'
    },
    {
        teamName: 'GT',
        primaryColor: 'blue',
        secondaryColor: 'orange',
        titles: 2,
        fullName: 'Gujarat Titans',
        captain: 'Shubman Gill'
    },
    {
        teamName: 'KKR',
        primaryColor: 'purple',
        secondaryColor: 'gold',
        titles: 2,
        fullName: 'Kolkata Knight Riders',
        captain: 'Ajinkya Rahane'
    },
    {
        teamName: 'LSG',
        primaryColor: 'blue',
        secondaryColor: 'orange',
        titles: 0,
        fullName: 'Lucknow Super Giants',
        captain: 'Rishabh Pant'
    },
    {
        teamName: 'MI',
        primaryColor: 'blue',
        secondaryColor: 'gold',
        titles: 5,
        fullName: 'Mumbai Indians',
        captain: 'Rohit Sharma'
    },
    {
        teamName: 'PBKS',
        primaryColor: 'red',
        secondaryColor: 'gold',
        titles: 0,
        fullName: 'Punjab Kings',
        captain: 'Shreyas Iyer'
    },
    {
        teamName: 'RR',
        primaryColor: 'pink',
        secondaryColor: 'blue',
        titles: 1,
        fullName: 'Rajasthan Royals',
        captain: 'Sanju Samson'
    },
    {
        teamName: 'SRH',
        primaryColor: 'orange',
        secondaryColor: 'black',
        titles: 1,
        fullName: 'Sunrisers Hyderabad',
        captain: 'Pat Cummins'
    }
];

btn.addEventListener('click', () => {
    const team = allTeams[Math.floor(Math.random() * allTeams.length)]
    displayBox.innerHTML = `${team.teamName}`
    body.style.backgroundColor = `${team.primaryColor}`
    displayBox.style.backgroundColor = `${team.secondaryColor}`
})