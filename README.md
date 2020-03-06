## PAGEX FRONT/CLIENT PROJECT 

## Description of the project :

PageX is a solution to connect talented people in one place 
and help them share and develop their passion.

## Team 
 - PAGEX-TEAM

## Project's Goals and objectives

- Create a web app with rich features as talented
personal palteforme to share and exrend their connections.


## Technologies :
 - ReactJs 
 - Redux
## Screenshots

## Git flow
There are two branches:
 - Master - origin
 - Staging - Folow Master
 - Develop - follow Staging

The *Master* branch is used for production. Only the features we know are perfectly working should be merged on *Master* 
The *Staging* branch is were the cross testing are made before merging the master branch.
The *Develop* branch is where new features are developped.

## Git Commit messages guidlines

Commit messages should conform to the following rules:  
	- Title in capital letters  
	- The title is separated from the body of the message by one empty line  
	- A line should not be longer than 80 characters  
	- The message must focus on the WHY and WHAT, not HOW.  
  
This template can be used for the commit messages:  

> COMMIT MESSAGE TITLE
> 
> Here, I explain WHAT I did (the improvements I made to the code, what I removed
> from it, etc...)
> I alos explain WHY I did it.
  

## Install the development environment

Get the source:

```bash
git clone https://github.com/PageExperience/FrontReact.git
```

Copy the environement variables
```
cp .env-tempale .env
```

Install dependencies
```
npm i
```

Start the server
```
npm start
```

If you want to start the server on port 5000
```
npm run start:port
```