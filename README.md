# Canada Career Coach

Use AI to check your application, then write it yourself.

An open skill for job applications in Canada. It checks a job posting against your profile, gives each requirement a level and your status against it, maps keyword gaps, recommends which resume version to use, and proofreads in Canadian English.

Adapted from [UK Career Coach](https://github.com/NotXinrui/UK-Career-Coach) by NotXinrui, under the MIT Licence.

Feel free to connect with me on LinkedIn: [Rachel Hu](https://www.linkedin.com/in/rachelhu3/)

**Version** v0.1.1 · **Language** English (Canadian) · **Works with** Claude, Gemini CLI · **Website** https://rachel-lcy.github.io/Canada-Career-Coach/

## What it does

| Give it                          | It returns                                                                                                                                                             |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A job posting (pasted or linked) | Five sections in order: application requirements by level, role fit, ATS keyword gaps, recommended resume version, and a salary check against current Canadian sources |
| A resume                         | Before and after suggestions, a recommended resume version, and consistency checks                                                                                     |
| A cover letter request           | Three questions first, then a five-paragraph outline with prompts. Prose only if you ask                                                                               |
| A resume or letter to proofread  | Canadian spelling, tense, passive voice, vague numbers, formatting, and personal details Canadian resumes leave out                                                    |
| Counts by application stage      | A plain reading of what the funnel shows, and what it cannot show                                                                                                      |

## What changed from the UK version

| UK version                                       | Canada version                                                                                                                    |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| CV, two pages, A4                                | Resume, one to two pages, letter size                                                                                             |
| Right to work, visa sponsorship                  | Work authorization, work permits and LMIA, as you state them                                                                      |
| SC / DV clearance                                | Reliability, Enhanced Reliability, Secret, Top Secret                                                                             |
| Blockers: yes or no                              | Each requirement gets a level (mandatory, pre-start condition, flexible, logistics, not stated) and your status, shown separately |
| British spelling                                 | Canadian spelling (colour, centre, organize)                                                                                      |
| (none)                                           | Official-language requirements (English, French, federal levels such as BBB)                                                      |
| UK salary sources                                | Job Bank wage data, provincial surveys (alis in Alberta) and public-sector pay grids                                              |
| (none)                                           | Canadian and international education kept separate; experience labelled as paid, volunteer, project or home lab                   |
| PMO, transformation and consulting keyword banks | Web development, IT support, project coordination and business analysis banks                                                     |
| (none)                                           | Provincial notes, with Alberta and Calgary as the worked example                                                                  |

## Principles

1. **Requirements first.** Work authorization, security screening, language, licences and background checks are sorted by level before anything else. When a posting doesn't mention work authorization, the coach says so and points you to the application page.
2. **Built not to invent.** It is instructed never to make up achievements, certifications, tools, titles, numbers, dates or eligibility, and to report gaps instead. This is an instruction, not a guarantee, so check every line.
3. **Keep the scope honest.** A home lab stays a home lab; a capstone project is not paid experience.
4. **AI audits; you author.** Facts, claims and final wording stay with you.
5. **You control your files.** Your profile is plain Markdown that you keep and edit. What you paste or upload is sent to the AI provider you run the skill with. The coach never asks for your SIN, permit number or criminal history.

## Quick start

1. **Install** the skill (below).
2. **Set up your profile** (below). This step makes it useful, and it needs your resume.
3. **Use it.** Paste a job posting and ask, for example: _"Assess this role against my profile and tell me which resume version to use."_

Use a normal chat. In an incognito chat the skill can't read its reference files.

## Install

Download `canada-career-coach-v0.1.1.zip` from the [latest release](https://github.com/Rachel-lcy/Canada-Career-Coach/releases/latest). Don't unzip it for Claude.ai. The zip contains only the skill folder.

| Where       | How                                                                                                                                                                                                                                                                 |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Claude.ai   | 1. Settings → Capabilities: turn on **Create and edit files** (Artifacts must be on too). 2. Settings → Customize → Skills → **+ Add**: upload the zip. 3. Done when `canada-career-coach` appears under **Yours** with a **Turn off** button (that means it's on). |
| Claude Code | Unzip into `~/.claude/skills/` (personal) or `.claude/skills/` (per project)                                                                                                                                                                                        |
| Gemini CLI  | Unzip into `~/.gemini/skills/` or `.gemini/skills/`                                                                                                                                                                                                                 |
| Gemini app  | No native skill support. Create a Gem and paste the contents of `SKILL.md` into its instructions. Reference files aren't included, so results are more basic                                                                                                        |

Custom skills do not sync between products, so install them separately where you use them. Claude.ai steps checked on 10 November 2026; menu names change, so confirm against the official documentation.

## Set up your profile

The skill ships with a blank template, so out of the box it is generic. After installing:

1. Remove your phone number and home address from your resume.
2. Open a new (not incognito) chat, attach your resume and send this prompt in the same message:

```text
Set up canada-career-coach for me from my resume. Use references/profile-template.md
and give me the finished profile as a file named my-profile.md. Ask me about
anything missing. Don't invent anything, and show me the final version before you
save it.
```

3. Answer the questions and check every line. The coach treats everything in your profile as fact. Optional fields, such as work authorization and pay, can be skipped.
4. Download `my-profile.md` and keep it private. In a new chat, attach it before you paste a posting.

In a terminal tool you can instead save it as `references/my-profile.md` in your own installed copy, so every session uses it. Never share that copy.

This step sends your resume to the AI provider you are using. Check its data settings first. The `.gitignore` in this repository already excludes `my-profile.md` and `my-resume-tracks.md`.

## Repository layout

```
.
├── README.md
├── LICENSE
├── .gitignore                         keeps personal files out of Git
├── docs/index.html                    project website (GitHub Pages)
└── canada-career-coach/               the skill itself
    ├── SKILL.md                       rules and workflows the coach follows
    └── references/
        ├── profile-template.md        blank profile fields
        ├── resume-tracks-template.md  how to define your resume versions
        ├── cover-letter-structure.md  outline and prompts only
        ├── keyword-library.md         starter keywords and ATS rules
        └── canada-market-notes.md     Canadian conventions, requirement levels, official sources
```

Your own `my-profile.md` is personal, so it is not part of this repository.

## Limitations

- **Early version.** Tested by the maintainer in Claude.ai (install, profile setup and assessments of real Alberta and Quebec postings). Not yet tested with other users, Gemini or terminal tools.
- **Memory.** In tools that remember past chats, the coach may know things that aren't in your profile. It is instructed to say so, but keep your profile complete.
- **Only as good as your inputs.** The coach works from the resume, profile and job postings you give it, and cannot check them.
- **Rules and market data go stale.** The skill asks for official sources and dates; verify anything it cites.
- **Province matters.** Only Alberta has detailed notes so far. Contributions for other provinces are welcome.
- **Keyword banks are seeds.** Confirm them against real Canadian postings before relying on them.
- **ATS behaviour varies by employer.** Optimizing wording is not the same as presenting your experience accurately; the skill treats accuracy as the constraint.

## Privacy and responsibility

Do not commit your profile, resumes or employer-confidential material to a public repository. Anything you paste or upload is processed by the AI provider you use, so read their data and retention settings first. This skill is not career, legal or immigration advice; check work-permit rules with IRCC or a licensed professional. It is an independent project and is not affiliated with or endorsed by Anthropic, Google or the Government of Canada.

## Feedback

If you use it, open an issue describing what worked and what did not, including failures. Real use is more informative than stars.

## Licence

MIT. See [LICENSE](LICENSE). The original UK Career Coach copyright notice is kept, as the licence requires.
