// promoter logged in home page (after registration has occurred)


// promoter object to show name and stuff 
var promoter = {
    firstName: "",
    lastName: "",
    email: ""   
}

// list of events that this promoter has created
// this page would also have the link to event crud page
var events = [
    {
        id: 1,
        date: "2014-2-1", /* notice this date has passed, so there is laps attached to the racer */
        name: "race number 1",
        description: "First series race cross country",
        eventType: {
            id: 1,
            name: "Mountain Bike"
        },
        categorySettings: [
            { laps: 5, category: { id: 1, name: "Expert" } },
            { laps: 3, category: { id: 2, name: "Beginner" } }
        ],
        registeredRacers: [
            { 
                id: 12, firstName: "", lastName: "", bib: "124", category: { id: 1, name: "Expert" }, team: { id: 34, name: "Bubba's Race Team" },
                laps: [
                    { time: "12:12:59", place: "5" },
                    { time: "10:45:32", place: "2" },
                    { time: "11:03:45", place: "2" },
                    { time: "10:52:23", place: "3" },
                    { time: "11:02:42", place: "1" }
                ] 
            },
            { 
                id: 67, firstName: "", lastName: "", bib: "46",  category: { id: 2, name: "Beginner" }, team: null,
                laps: [
                    { time: "10:52:23", place: "4" },
                    { time: "10:52:23", place: "3" },
                    { time: "11:02:42", place: "5" }
                ]  
            }
        ]
    },
    {
        id: 2,
        date: "2014-2-10",
        name: "race number 2",
        description: "Second series race cross country",
        eventType: {
            id: 1,
            name: "Mountain Bike"
        },        
        categorySettings: [
            { laps: 5, category: { id: 1, name: "Expert" } },
            { laps: 3, category: { id: 2, name: "Beginner" } }
        ],
        registeredRacers: [
            { id: 12, firstName: "", lastName: "", bib: "124", category: { id: 1, name: "Expert" }, team: { id: 34, name: "Bubba's Race Team" } },
            { id: 67, firstName: "", lastName: "", bib: "46", category: { id: 1, name: "Expert" }, team: null },
            { id: 89, firstName: "", lastName: "", bib: "46", category: { id: 1, name: "Expert" }, team: null }
        ]
    }
]
