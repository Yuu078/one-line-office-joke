# One-Line Office Joke

[![make.fun](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162.svg)](https://make.fun/competitions/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![rank](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/Yuu078/one-line-office-joke/rank.svg)](https://make.fun/competitions/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![reward](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/Yuu078/one-line-office-joke/reward.svg)](https://make.fun/competitions/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)

Entry for the [One-Line Office Joke: 24-Hour Sprint](https://make.fun/competitions/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162) competition on [make.fun](https://make.fun).

## What it does

`main.ts` (Node 22) writes one single-line joke about office life to
`/output/entry.txt` — at most 200 characters, one line, UTF-8 text.

The joke:

> I put my name on my lunch in the office fridge; someone ate it anyway and left a note: 'Great sandwich — let's circle back.'

Before writing, the program self-checks the competition gate: 1–200
characters, not only whitespace, a single line. If the text ever
failed the gate it would throw instead of writing an invalid entry.

## Run

```sh
node main.ts
```

Then read `/output/entry.txt`.
