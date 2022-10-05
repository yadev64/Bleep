![bleep_full](https://user-images.githubusercontent.com/21107275/193960969-dea26b34-071b-4ca6-a9f2-63ab2885d53d.png)


**Current version: v0.01 alpha**

Bleep is a micro tweeting (bleeping) platform build using Vue 3. This is just a front end project. Feel free to clone it and hook it up with a good backend and deploy ut :)

To try out the platform and build on top of it, clone this repo and read on! This document will provide information regarding installation and usage.

**Quick preview** (Netlify) : [Netlify URL](https://bleepsyadev.netlify.app/)

## Tech stack

Front end
 - [Vue 3](https://v3.vuejs.org/)
 - [Quasar](https://quasar.dev/) (UI library) 
 - [VueX](https://vuex.vuejs.org/) (State management)


## Demo Video

https://user-images.githubusercontent.com/21107275/193961276-2a5cc39f-80ab-49aa-9ac8-cc2f87acdc21.mp4


# Installation

## Step 1: Clone the repo

Once you clone the repo to your local, you can proceed to the environment setup. If you've already installed Quasar Cli and node on your machine, you can skip the next step.

## Step 2: Environment setup & Installation


Let's setup the packages for front-end. 

At first, we need to install Node. For this, follow these steps with respect to the OS that you are using:
**Windows & Mac OS users**
 - Simply download and install the corrosponding node installer from [here](https://nodejs.org/en/)

**For Ubuntu:**

```curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Next, we need to install Quasar CLI.

```npm i -g @quasar/cli```

Once this step is complete, go to the directory "Bleep" (The root dir of the vue app) and run:

```npm install```

This will automatically install all the necessary packages that are required by the app.


## Step 3: Running the front end

Previously, when we ran the command "npm install", it installed all the necessary packages to run the application.
All we need to do now is to run the app. To do this, in your terminal, just run(make sure that your current directory is the root of this app):

```quasar dev```

Awesome! You did it! The app is now up and running.
Visit "**[localhost:8080](http://localhost:8080/login)**" and you'll be greated with the home page of Bleep. Click the "Create Bleep" button to add a new Bleep and start playing around with the app.


## Screen Shots

![sc1](https://user-images.githubusercontent.com/21107275/193961891-97cad1f9-85e2-4f4c-ae47-0917787d7bab.png)
![sc2](https://user-images.githubusercontent.com/21107275/193961894-03052403-9ed5-481b-be32-ee5364c37e80.png)
![sc3](https://user-images.githubusercontent.com/21107275/193961898-371219fc-c679-446c-bcf5-d389137c5b0e.png)
![sc4](https://user-images.githubusercontent.com/21107275/193961903-1fe78766-f65e-4102-97cc-87cac1d0bf20.png)
![sc5](https://user-images.githubusercontent.com/21107275/193961905-edde4168-b3e9-43c5-a1b3-e786f81ffc50.png)
![sc6](https://user-images.githubusercontent.com/21107275/193961906-781494d0-ed3b-4463-b04d-04305aad9920.png)


*Wait for the next update for more bug fixes and features :)
