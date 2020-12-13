[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger) [![Coverage Status](http://img.shields.io/coveralls/badges/badgerbadgerbadger.svg?style=flat-square)](https://coveralls.io/r/badges/badgerbadgerbadger)





<!-- PROJECT LOGO -->
<br />
  <h3 align="center">Mysql Production Monitoring</h3>
<p align="center">
  <p>
    <img src="https://i.imgur.com/3gBoHGU.png" alt="Logo" width="100%" height="auto">
  </p>



  <p align="center">
    The repo of the project of 2nd year of Higher Technical Certificate (BTS SN IR )
    <br />
    <br />
    <br />
    ·
    <a href="https://github.com/AlbertLanne/ProductionMonitoringMysql/issues">Report Bug</a>
    ·
    <a href="https://github.com/AlbertLanne/ProductionMonitoringMysql/pulls">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [Contact](#contact)
* [useful link](#useful-link)


---

## About The Project
| High school Paul Cornu | BTS Systèmes Numériques  | Session 2020 | 
| -------- | -------- | -------- |
| 9 Rue Paul Cornu, 14100 Lisieux | Option A Informatique et Réseaux | Session 2020 | 

---

| Professinal Partner | Studens of the project | Teatchers | 
| -------- | -------- | -------- |
|   Interfiltre compagnies   |   -Mathieu Sanchez  |   Sébastien Dossier|
|   Rue de Livarot   |   -Albert Lanne   |  Laurent Blondel |
|   14140 Farvaques   |   -Alexis Dominguez-Condé   |     |
|                |   -Louis Evrard   |     |




---


- The master branch have a classe "members" with all CUDR methods (GET,PUT,POST,DELETE). 
- The SingleFileCUDR branch have a single file for CUDR
- The HTML branch use the classe "members" with front end vanilla JS.

> To test the API i preconise to use postman for HTTP request.

---

## Project setup

```
# Install dependecies
npm install
# serve with hot reload at localhost:8080
npm run start
```

Find the api map with Swaggers at <localhost:8080/api/v1/api-docs/#/> 
and even test it from there.
<a><img src="https://i.imgur.com/vwcT4f5.png" title="c++ app made in qt" alt="docker container SQL"></a>



---

## Routes of the API


<a><img src="https://i.imgur.com/rj7G7eH.png" title="c++ app made in qt" alt="docker container SQL"></a>

---


### Structure of SingleFileCUDR


- This exemple show only for the specific ID


```js
let MembersRouter = express.Router()
MembersRouter.route('/:id')
```

- Get
```js
   .get((req,res)=> {
            let index = getIndex(req.params.id);

            if (typeof(index) == 'string'){
                res.json(error(index))
            }else{
                res.json(success(members[index]))
            }
            res.json(success(members[(req.params.id)-1].name))
        })
```


- Overwrite
```js
        .put((req,res)=> {
            let index = getIndex(req.params.id);
            if (typeof(index) == 'string'){
                res.json(error(index))
            }else{
                let same = false;
                for (let i = 0; i < members.length; i++){
                    if (req.body.name == members[i].name && req.params.id != members[i].id){
                        same = true
                        break
                    }
                }
                if (same){
                    res.json(error('same name'))
                }else{
                    members[index].name = req.body.name
                    res.json(success(true))
                }

            }
        })
```


- Delete
```js
        .delete((req,res)=> {
            let index = getIndex(req.params.id);
            if (typeof(index) == 'string'){
                res.json(error(index))
            } else {
                members.splice(index, 1)
                res.json(success(members))
            }
        })
```

---

### Members Classe




```js
   let MembersRouter = express.Router()
   let Members = require('./assets/classes/members-class')(db, config)
    MembersRouter.route('/:id')

```


```js
   let MembersRouter = express.Router()
   let Members = require('./assets/classes/members-class')(db, config)

```

```js
  MembersRouter.route('/:id')

        // Récupère un membre avec son ID

        .get(async (req, res) => {
            let member = await Members.getById(req.params.id)
            res.json(checkAndchange(member))
        })

        // Modifie un membre avec ID
        .put(async(req, res) => {
            let updateMember = await Members.update(req.params.id, req.body.name)
            res.json(checkAndchange(updateMember))
        })

        // Supprime un membre avec ID
        .delete(async (req, res) => {
            let deleteMember = await Members.delete(req.params.id)
            res.json(checkAndchange(deleteMember))
        })

```


### 2 - ASYNC DATA

- Understand async data

```js
console.log('Début')
setTimeout(() => {
    console.log('Temps d\'attentes')
},1500)
console.log('Fin')

```
- Callback
- Promise 

```js
new Promise((resolve, reject) => {
setTimeout(()=> {
resolve('All good')
}, 1500)
})
.then(message => console.log(message))  // Dans le cas si c'est ok
.catch(err => console.log(err.message)) // Dans le cas d'une erreur
```


- Async/Await

---






The project consists of experimenting with the implementation of computer tools, smartphone applications / Android tablets for
operators for :

- Helping the operators of the sheet metal part during cutting with the help of a documented and adapted OF.
- 
Here's why:
* Your time should be focused on creating something amazing. A project that solves a problem and helps others
* You shouldn't be doing the same tasks over and over like creating a README from scratch
* You should element DRY principles to the rest of your life :smile:

Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue.

A list of commonly used resources that I find helpful are listed in the acknowledgements.

### Built With

The project work with a web app made with nodejs/css. And a mobil applications for QR code. 

* [chart.js](https://www.chartjs.org/)
* [Express.js](https://www.mysql.com/)
* [Node.js](https://www.mysql.com/)
* [java](https://www.mysql.com/)
* [MySQL](https://www.mysql.com/)




## Getting Started
### Prerequisites
* npm / node.js
* webstorm
* MySql server


```sh
npm install npm@latest -g
```

### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
```sh
git clone https://github.com/AlbertLanne/ProductionMonitoringMysql.git
```
3. Install NPM packages
```sh
cd ProductionMonitoringMysql && npm install
```
4. Copy `example-config.js` into `config.js` and add your data login. You can use URI link.
```JS
{
  "port": 8080,
  "URI":"????????????????????????????????????????????????????????????????????????????????????????????????",
}
```
or

```JS
  "db": {
    "host": "????????????????????????????????????????????????",
    "user": "????????????????????????",
    "password": "????????????????????????",
    "database": "????????????????????????"
  }
}
```

5. You can find the databse structure at assets/sql/BBD.sql


<!-- USAGE EXAMPLES -->
## ~~Usage~~

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/AlbertLanne/InterfiltreProductionMonitoring/projects/1) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

1. [Create a fork](https://help.github.com/en/articles/fork-a-repo) of this project
2. Clone the project:
```bash
git clone https://github.com/<YOUR_GITHUB_USERNAME>/InterfiltreProductionMonitoring
```
2. Create your Feature Branch (`git checkout -b AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request






## Contact

<!-- Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com -->


Student 2: [https://github.com/AlbertLanne](https://github.com/AlbertLanne)

Student 3: [https://github.com/Aredi](https://github.com/Aredi)

Student 4: [https://github.com/Evouiard](https://github.com/Evouiard)



<!-- ACKNOWLEDGEMENTS -->
## Useful link and ressources 
* [Markdown mastering](https://guides.github.com/features/mastering-markdown/)
* [CleverCloud for free DB mysql for unit test + web server](www.clever-cloud.com)
* [Github wiki]()
* [Taiga Project management]()
* [Discord]()
* [Online server for testing with apache server]()
* [Mysql database]()
* [heroku environment deployments]()

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors

