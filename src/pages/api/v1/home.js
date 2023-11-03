export default function handler(request, response) {

  const data = {
    section1: {
      heading: 'A new kind of design agency',
      text: 'A flexible subscription model to fit around your business demands.',
    },
    section2: {
      heading: 'Testimonials',
      cards: [
        {
          heading: 'Annabel Jenne',
          text: 'Every designer should be in the @convertium community. It is my weapon against creative block. There is SO much value here, and I have never felt more inspired to create!',
        },
        {
          heading: 'Owen Price',
          text: 'Huge thanks to the @convertium  community and for having me today! — Had a blast teaching how we make @Threads  character avatars and also made this 10x convertium logo graphic in just ',
        },
        {
          heading: 'Chris Mulligan',
          text: 'Why bother with the hassle of going out on a Friday night when you stay in and level up your visual game with a masterclass by  @convertium ',
        },
        {
          heading: 'Denis Jeliazkov',
          text: 'If you want to chat with like-minded creatives, learn new things every  week and get relevant feedbacks on your projects you should definitely.',
        },
        {
          heading: 'Parvèz Shaikh',
          text: 'Always excited for communities that share practical design knowledge with each other. Happy to be a part of this',
        },
      ],
    },
  };

  return response.status(200).json(data);
}
