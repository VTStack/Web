<h1 align="center">🧑‍💻 Codebase</h1>

<p align="center">This is all of my Codebase cramped into one monorepo.
Its a mix of websites, servers, libraries and packages!
</p>
<div align="center">

  <img src="https://img.shields.io/github/repo-size/VincentThomas06/Codebase?color=red&label=codebase&style=flat-square" />
  <img alt="Lines of code" src="https://img.shields.io/tokei/lines/github/VincentThomas06/Codebase?color=orange&style=flat-square"> 
  <img src="https://img.shields.io/github/commit-activity/m/VincentThomas06/Codebase?style=flat-square"/>

  <img alt="GitHub" src="https://img.shields.io/github/license/VincentThomas06/Codebase?style=flat-square">

</div>

<details align="right" class="details">
  <summary><b>Quick Links <big>💨</big></b></summary>

<h3>
  <a href="#tech-stack-and-langs-used">Tech Stack
  & Langs used</a>
  <span><big> · </big></span>
  <a href="#projects">Projects</a>
</h3>
</details>

<details align="left" class="details">
  <summary><b>External navigation <big>🗺️</big></b></summary>

<h3>
  <a href="SECURITY.md#reporting-a-vulnerability">Security Issue?</a>
  <span><big> · </big></span>
  <a href="https://github.com/VincentThomas06/.github/blob/main/CODE_OF_CONDUCT.md">Rules</a>
</h3>
</details>

---

<h2 id="tech-stack-and-langs-used"><b>👨🏾‍💻 Tech Stack and langs used</b></h2>

  <h3 id="techstack">Tech stack</h3>

| Type of software |          Technology          |
| ---------------- | :--------------------------: |
| 🌐 Web           | [React](https://reactjs.org) |
| 🕸 Servers        | [Nestjs](https://nestjs.org) |
| 🖥️ Cli           |  [Oclif](https://oclif.io)   |

### Structure

Apps are divided into 4 library-types. These apps are not developed like monoliths but will be bundled together for ease of deployment. These library types are:

- `ui`: This is a library which only contains **dumb** components for _other libraries_ to use
- `data-access`: This library holds all api-calls to other sources/servers. This also contains all state-management stores.
- `feature`: These libraries hold all logic, but do not contain the code to execute that logic. This only imports functions and code from other libraries. They also import components from `core-ui`
- `shell`: This library acts like a middleman between the feature libraries and the app project

---

<h2 id="projects"><b>🔧 Projects</b></h2>

| 🕶️ Alias | 🏷️ Name |  |  |  |
| --- | --- | :-: | :-: | :-: |
|  | **Apps** | ⚡ **Done** | 🚧 **In Development** | 🤔 **Planning to build** |
| **Thunder** | _Movie Reviewer App_ |  | 👷🏾 |  |
| **Honey** | _Subscription Handler_ |  |  | 🚦 |
| **Butler** | _New tab extention_ |  |  | 🚦 |
|  | **Servers** | ⚡ **Done** | 🚧 **In Development** | 🤔 **Planning to build** |
| **Thunderbolt** | _Server to Thunder_ |  | 👷🏾 |  |
| **Nightclubguard** | _Server to Clubguard_ |  |  | 🚦 |
|  | **Packages** | ⚡ **Done** | 🚧 **In Development** | 🤔 **Planning to build** |
| **Structer** | _Data Structures_ |  | 👷🏾 |  |
| **Algos** | _General simple algorithms_ |  | 👷🏾 |  |
|  | **Other software** | ⚡ **Done** | 🚧 **In Development** | 🤔 **Planning to build** |
| **Clubguard** | _Auth Discord Bot_ |  |  | 🚦 |

</div>

## 📝 License

Copyright © 2022 [Vincent Thomas](https://github.com/VincentThomas06).<br /> This project is [MIT](https://github.com/VincentThomas06/Codebase/blob/main/LICENSE) licensed.

---
