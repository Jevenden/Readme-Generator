# Readme-Generator

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Methodology

First I imported the necessary dependencies, then created an array of questions to generate the README. After that, I created functions to generate the readme
and initialize the application. Moving over to the generate markdown file, I imported the data from the user's input and rendered it as a README and created 
the function to generate the license badges and links. Finally, I recored a video with Screencastify to highlight how the project funtiions.

URL of deployed application: https://jevenden.github.io/Weather-Tracker-Challenge/

![Readme SS](https://user-images.githubusercontent.com/102879070/178124011-5626ca8a-83b7-4871-8f0d-d908cc622e08.png)

