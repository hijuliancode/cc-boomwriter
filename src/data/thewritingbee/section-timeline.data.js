const timelineData = {
  title: 'Writing Bee Timeline',
  description: 'The Writing Bee is structured flexibly and can fit into even the busiest teacher’s schedule.',
  timelineImageUrl: 'data:image/png;base64,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',
  button: {
    type: 'button', // Button or Link
    text: 'Create my class Writing Bee',
    style: 'secondary',
    url: ''
  },
  sectionOne: {
    title: 'Class-based Qualifying Rounds',
    imageUrl: 'https://boomwriter.com/static/media/Rounds.25f9c689.png',
    description: 'Qualifying rounds are conducted by classroom teachers on their own schedule and with their own students. After reading the Guest Author’s engaging story start, students within the class independently write their version of the next chapter. When writing is finished, students then view the anonymous submissions of their classmates in small batches and vote for their favorites. A winning submission is identified and becomes the middle chapter in the story, and the process repeats as the class moves on to write the story’s final chapter. When finished, the class will have completed an original story and the class chapter winners will advance to The Writing Bee Finals.'
  },
  sectionTwo: {
    title: 'The Finals',
    imageUrl: 'data:image/png;base64,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',
    description: 'Qualifying round chapter winners will be invited to compete in The Writing Bee Finals (spring 2021). Plus, all Qualifying round participants will be eligible to participate in the voting to help determine this year’s Writing Bee Champion!'
  },
};

export default timelineData;