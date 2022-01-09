# tomoshibi ともしび

Learning application for the Japanese script of Hiragana.

## Creating a project

### Goals:

Have an application that can be used by my daughter to start learning Hiragana.

### Possible Features:

- Flippable cards to learn Hiragana. One side should display a glyph, the other side an image.
- Maybe it is possible to play a sound that reads the glyph/description of the image?
- Could also include a set of Katakana cards
- The project should be easily configurable
- The web app should be installable as a PWA on any mobile device

## Building

Run

```
npm install
npm run build
```

## Todo

- Add more cards
- Add speech to cards
- Add colors to the cards config element.
- Separate the "gallery" view from a "learning session" view.
- Implement learning session
  - Choose how many cards to learn (or configure once in the beginning)
  - One mode could be to choose between different images when presented with a letter.
  - The other way around also works
  - Score points during sessions? Maybe not? Research if scores are a good motivator.
  - Identifying cards during the learning phase correctly (a few times) could "unlock" them in the gallery view. In the gallery view they could play a short animation as a reward.
- Make installable as PWA
