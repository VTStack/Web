

<div align="center">

🧑‍💻 Web Codebase
===========

<div id="tech-used"></div>

![](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![](https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
[![SWC](https://img.shields.io/badge/-swc-brightgreen.svg?style=for-the-badge&color=yellow&logo=swc&logoColor=black)](https://swc.rs)
[![Commitizen friendly](https://img.shields.io/badge/commitizen_friendly-brightgreen.svg?style=for-the-badge&color=green)](http://commitizen.github.io/cz-cli)
![](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)
![](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org)


### [Tech used](#tech-used) **·** [Structure](#frontend-sructure) **·** [Projects](#projects)

</div>

---

## Setup Monorepo and dependencies

```bash
make install
```

For this to work, you need to have `pnpm` installed.


## 👷🏻 Frontend Sructure

Apps are divided into 4 library-types. These apps are not developed like monoliths but will be bundled together for ease of deployment.

All these libraries are scoped to the feature they belong to **unless** the path is prefixed with `shared` (ex `libs/shared/ui`) or the project is in the project-root (ex `libs/project-name/not-scoped-to-feature-lib`). These library types are:

An example:
```
libs:
  project-name:
    auth:
      feature:
      ui:
      hooks:
    theme:
    types:
```

Projects with a `?` are not required.



<table>
  <tr>
    <th>ui</th>
    <th>data-access?</th>
  </tr>
  <tr>
      <td>
        This is a library which only contains **dumb** components for <i>other libraries</i> to use.
      </td>
      <td>
        This library holds all api-calls to other sources/servers. This also contains all state-management stores.
      </td>
  </tr>
  <tr>
    <th>
      theme
    </th>
      <th>
      hooks
    </th>
  </tr>
  <tr>
    <td>
    This is where the theme is stored. Its used only by <code>shell</code> libraries because they only needs to be registered once.
    </td>
    <td>
      This is where all the hooks are. They can only depend on data-access libraries.
    </td>
<tr>
    <th>
      types?
    </th>
  </tr>
  <tr>

  <td>
    This is where all the typescript types are. They are buildable libraries because nx requires them to be if other buildable libraries depend on this.
  </td>
  </tr>

</table>

---

<h2 id="projects">🔧 Projects</h2>

| 🕶️ Alias              | 🏷️ Name                   |              |                           |                           |
| --------------------- | -------------------------- | :----------: | :-----------------------: | :-----------------------: |
| **Apps**              |                            |  ⚡ **Done** |     🚧 **In Development** | 🤔 **Planning to build** |
| **Thunder**           | _Movie Reviewer App_       |               |           👷🏾             |                           |
| **Honey**             | _Subscription Handler_     |               |           👷🏾             |                           |
| **Butler**            | _New tab extention_        |               |                          |            🚦             |
| **About**                | _Portfolio_                |               |           👷🏾              |                           |
| **Club**              | _Dashboard for Clubguard_  |               |             👷🏾             |                         |
| **Packages**        |                            | ⚡ **Done**   | 🚧 **In Development**    | 🤔 **Planning to build** |
| **core-ui**          | _The core ui used in `Web` repo_          |               |           👷🏾             |                           |
| **hooks**             | _General react-hooks_|               |           👷🏾             |                           |

---


## 📜 Licensing
This repository is under the MIT license.

---
