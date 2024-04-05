<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://qualitapps.com/wp-content/uploads/2023/02/102.png" width="200" alt="Nest Logo" />
  </a>
</p>

<p align="center">A progressive 
  <a href="http://nodejs.org" target="_blank">Node.js</a>
  framework for building efficient and scalable server-side applications.
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/npm/v/10.2.4" target="_blank">
    <img src="./readme/npm.svg" alt="NPM Version" />
  </a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank">
    <img src="./readme/license.svg" alt="Package License" />
  </a>
</p>

## Description

[Sneakers ](./readme/ChallengeBack%20v1.pdf) is an exercise where we will expose several endpoints among them are:

* **/products**
* **/price/{user_id}/{name_product}** 

### **Examples**

* **Post:** [/api/products](https://challenge-sneakers.vercel.app/api/products?pageSize=10&page=1)

<img src="./readme/products.png" alt="Product wiht stock" />

* **Get:** [/price/660f88b57f4659f9308baaeb/Zapatillas Adidas](https://challenge-sneakers.vercel.app/api/price/660f88b57f4659f9308baaeb/Zapatillas%20Adidas)

<img src="./readme/price.png" alt="Price Special" />

the project is in:

**GitHub:** [ChallengeSneakers](https://github.com/DavidZuluaga1991/ChallengeSneakers)

**Deploy (Vercel):** [ChallengeSneakers](https://challenge-sneakers.vercel.app/)

## Installation

```bash
$ npm install
```
or

```bash
$ docker build -t challenge .
$ docker run challenge
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```
## Stay in touch

- Author - [David Leandro Zuluaga Martinez](https://kamilmysliwiec.com)
- GitHub - [DavidZuluaga1991](https://github.com/DavidZuluaga1991)

## License

Challenge sneakers is [MIT licensed](LICENSE).
