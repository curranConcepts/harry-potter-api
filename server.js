const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000

app.use(cors())

const characters = {
    'harry potter': {
        'dateOfBirth': '07-31-1980',
        'species': 'human',
        'gender': 'male',
        'house': 'Gryffindor',
        'wizard': true,
        'patronus': 'stag',
        'wand': {
            'wood': 'holly',
            'core': 'phoenix feather',
          },
        'hogwartsStaff': false,
        'actor': 'Daniel Radcliff'
    },
    'hermoine granger': {
        'dateOfBirth': '09-19-1979',
        'species': 'human',
        'gender': 'female',
        'house': 'Gryffindor',
        'wizard': true,
        'patronus': 'otter',
        'wand': {
            'wood': 'vine',
            'core': 'dragon heart-string',
          },
        'hogwartsStaff': false,
        'actor': 'Emma Wattson'
    },
    'ronald weasley': {
        'dateOfBirth': '03-01-1980',
        'species': 'human',
        'gender': 'male',
        'house': 'Gryffindor',
        'wizard': true,
        'patronus': 'jack russell terrior',
        'wand': {
            'wood': 'willow',
            'core': 'unicorn hair',
          },
        'hogwartsStaff': false,
        'actor': 'Rupert Grint'
    },
    'draco malfoy': {
        'dateOfBirth': '06-05-1980',
        'species': 'human',
        'gender': 'male',
        'house': 'Slytherin',
        'wizard': true,
        'patronus': 'dragon',
        'wand': {
            'wood': 'hawthorn',
            'core': 'unicorn hair',
          },
        'hogwartsStaff': false,
        'actor': 'Tom Felton'
    },
    'neville longbottom': {
        'dateOfBirth': '07-30-1980',
        'species': 'human',
        'gender': 'male',
        'house': 'Gryffindor',
        'wizard': true,
        'patronus': 'non-corporeal',
        'wand': {
            'wood': 'cherry wood',
            'core': 'unicorn hair',
          },
        'hogwartsStaff': false,
        'actor': 'Mathew Lewis'
    },
    'luna lovegood': {
        'dateOfBirth': '02-13-1981',
        'species': 'human',
        'gender': 'female',
        'house': 'Hufflepuff',
        'wizard': true,
        'patronus': 'hair',
        'wand': {
            'wood': 'unknown',
            'core': 'thestral',
          },
        'hogwartsStaff': false,
        'actor': 'Evanna Lynch'
    },
    'ginny weasley': {
        'dateOfBirth': '08-11-1981',
        'species': 'human',
        'gender': 'female',
        'house': 'Gryffindor',
        'wizard': true,
        'patronus': 'horse',
        'wand': {
            'wood': 'yew',
            'core': 'unknown',
          },
        'hogwartsStaff': false,
        'actor': 'Bonnie Wright'
    },
    'fred weasley': {
        'dateOfBirth': '04-01-1978',
        'species': 'human',
        'gender': 'male',
        'house': 'Gryffindor',
        'wizard': true,
        'patronus': 'magpie',
        'wand': {
            'wood': 'silver fir',
            'core': 'unknown',
          },
        'hogwartsStaff': false,
        'actor': 'James Phelps'
    },
    'george weasley': {
        'dateOfBirth': '04-01-1978',
        'species': 'human',
        'gender': 'male',
        'house': 'Gryffindor',
        'wizard': true,
        'patronus': 'magpie',
        'wand': {
            'wood': 'unknown',
            'core': 'unknown',
          },
        'hogwartsStaff': false,
        'actor': 'Oliver Phelps'
    },
    'percy weasley': {
        'dateOfBirth': '08-22-1976',
        'species': 'human',
        'gender': 'male',
        'house': 'Gryffindor',
        'wizard': true,
        'patronus': 'non-corporeal',
        'wand': {
            'wood': 'unknown',
            'core': 'unknown',
          },
        'hogwartsStaff': false,
        'actor': 'Daniel Radcliff'
    },
    'rubeus haggrid': {
        'dateOfBirth': '12-06-1928',
        'species': 'half-giant',
        'gender': 'male',
        'house': 'Gryffindor',
        'wizard': true,
        'patronus': '',
        'wand': {
            'wood': 'oak',
            'core': 'unknown',
        },
        'hogwartsStaff': true,
        'actor': 'Robbie Coltrane'
    },
    'minerva mcgonagall': {
        'dateOfBirth': '10-04-????',
        'species': 'human',
        'gender': 'female',
        'house': 'Gryffindor',
        'wizard': true,
        'patronus': 'cat',
        'wand': {
            'wood': 'fir',
            'core': 'dragon heart-string',
        },
        'hogwartsStaff': true,
        'actor': 'Maggie Smith'
    },
    'severus snape': {
        'dateOfBirth': '01-09-1960',
        'species': 'human',
        'gender': 'male',
        'house': 'Slytherin',
        'wizard': true,
        'patronus': 'doe',
        'wand': {
            'wood': 'ebony',
            'core': 'unknown',
        },
        'hogwartsStaff': true,
        'actor': 'Allan Rickman'
    },
    'albus dumbledore': {
        'dateOfBirth': '??-??-1881',
        'species': 'human',
        'gender': 'male',
        'house': 'Gryffindor',
        'wizard': true,
        'patronus': 'phoenix',
        'wand': {
            'wood': 'elder',
            'core': 'thestral',
        },
        'hogwartsStaff': true,
        'actor':{
            'movies1-2': 'Michael Gambin', 
            'movies3-8': 'Richard Harris',
        }
    },
    'tom riddle': {
        'dateOfBirth': '12-31-1926',
        'species': 'human',
        'gender': 'male',
        'house': 'Slytherin',
        'wizard': true,
        'patronus': 'snake',
        'wand': {
            'wood': 'yew',
            'core': 'phoenix feather',
          },
        'hogwartsStaff': false,
        'actor': 'Christian Peter Coulson'
    },
    'dudley dursley': {
        'dateOfBirth': '06-23-1980',
        'species': 'human',
        'gender': 'male',
        'house': '',
        'wizard': false,
        'patronus': '',
        'wand': {
            'wood': '',
            'core': '',
          },
        'hogwartsStaff': false,
        'actor': 'Harry Melling'
    }
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res)=>{
    const characterName = req.params.name.toLowerCase()
    if(characters[characterName]){
        res.json(characters[characterName])
    }else{
        res.json(characters['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT,()=>{
    console.log(`The server is now running on port ${PORT}. Cast stupify with 'control+C'`)
})