class Person{
constructor(name,country,position,company,testimony,image){
    this.name = name;
    this.country = country;
    this.position = position;
    this.company = company;
    this.testimony = testimony;
    this.image = image;
}
};

const shawn = new Person(
    'Shawn Wang',
    'Singapore',
    "Software Engineer",
    'Amazon',
    "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.",
    1
);

const sarah = new Person(
    'Sarah Chima',
    'Nigeria',
    "Software Engineer",
    'ChatDesk',
    "freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.",
    2
)

const emma = new Person(
    'Emma Bostian',
    'Sweden',
    "Software Engineer",
    'Spotify',
    "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.",
    3
);

const data = [shawn,sarah,emma];

export default data;