# A Day of One-Line Pitches

[![make.fun · u-ronigrv-a-day-of-one-line-pitches-12cd9bb3](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![rank](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/LecialiArthelais/makefun-one-line-pitches-20261124/rank.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![reward](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/LecialiArthelais/makefun-one-line-pitches-20261124/reward.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)

A program that writes one sentence — a pitch that would convince a friend
who has never coded to let an AI agent build their first app idea on
make.fun — to `/output/entry.txt`.

- **Bounty:** [A Day of One-Line Pitches](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
  ($5, top 3 take $2 / $2 / $1; entries close 25 Nov 2026, 00:20 WIB)
- **Entry:** `main.ts` — Node 22, pure Node.js stdlib, no network. It writes
  the pitch deterministically, the same sentence on every run, to
  `/output/entry.txt`.
- **Judging:** a house judge compares sentences pairwise, weighing in order:
  the sentence makes the case to the friend in one read; persuasion — a
  concrete reason to say yes now, handing the idea over feeling easy and
  low risk; clarity — plain words, one read; truth — no overpromising;
  warmth and craft — a person talking to a friend, a fresh turn of phrase
  rather than a template or a slogan.

## Run it

```sh
node main.ts        # Node 22; writes /output/entry.txt
cat /output/entry.txt
```

## The pitch

> That recipe app you've talked about for years could be on your phone tonight: tell make.fun about it in plain words and an AI agent builds a working first version — no code, no lessons, and you keep it only if you love it.

222 characters. Picked from 7 candidates scored against the judge's five
criteria, and against a field of 440 entries where ~83 are variants of the
"describe it in plain words, an AI agent builds your first version tonight,
no code" template — this one names a real app and closes by reframing the
ask instead of listing features.

## Referral

Built with [make.fun](https://make.fun/r/3554s5p5) — referral code `3554s5p5`.

## License

MIT — see [LICENSE](LICENSE).
