'use strict'

/*
    &apikey=30896c37
*/

const headingEl = document.createElement('h1');
headingEl.innerHTML = 'Select your movie...'
document.body.appendChild(headingEl);
const selectEl = document.createElement('select');
document.body.appendChild(selectEl);

const firstOptionEl = document.createElement('option');
firstOptionEl.innerHTML = `Ponyo`;
selectEl.appendChild(firstOptionEl);
const secondOptionEl = document.createElement('option');
secondOptionEl.innerHTML = `Frozen`;
selectEl.appendChild(secondOptionEl);
const thirdOptionEl = document.createElement('option');
thirdOptionEl.innerHTML = `Matilda`;
selectEl.appendChild(thirdOptionEl);

function fetchData(url) {
    fetch(url)
    .then(response => {
    return response.json();
    })
    .then(data => {
    console.log(data);
    return data;
    })
    .catch(error => {
    console.log('err', error);
    });
}

function main(){


    fetch('http://www.omdbapi.com/?t=ponyo&y=2008&apikey=30896c37')
    .then(response => {
        return response.json();
    })
    .then(data => {
        const firstMovieTitle = data.Title;
        const firstMoviePlot = data.Plot;
        const firstMoviePoster = data.Poster;
        console.log(firstMovieTitle);

        selectEl.addEventListener('change', event => {
            console.log(event.target.value); //the selected option value
            
            if (event.target.value === 'Ponyo') {
                const firstTitle = document.createElement('h2');
                firstTitle.innerHTML = firstMovieTitle;
                document.body.appendChild(firstTitle);
                const firstPlot = document.createElement('p');
                firstPlot.innerHTML = firstMoviePlot;
                document.body.appendChild(firstPlot);
                const firstImage = document.createElement('img');
                firstImage.src = firstMoviePoster;
                document.body.appendChild(firstImage);
            }
          
          });
        //return data;
    });

    fetch('http://www.omdbapi.com/?t=frozen&y=2013&apikey=30896c37')
    .then(response => {
        return response.json();
    })
    .then(data => {
        const secondMovieTitle = data.Title;
        const secondMoviePlot = data.Plot;
        const secondMoviePoster = data.Poster;
        console.log(secondMovieTitle);
        selectEl.addEventListener('change', event => {
            console.log(event.target.value); //the selected option value

            if (event.target.value === 'Frozen') {
                const secondTitle = document.createElement('h2');
                secondTitle.innerHTML = secondMovieTitle;
                document.body.appendChild(secondTitle);
                const secondPlot = document.createElement('p');
                secondPlot.innerHTML = secondMoviePlot;
                document.body.appendChild(secondPlot);
                const secondImage = document.createElement('img');
                secondImage.src = secondMoviePoster;
                document.body.appendChild(secondImage);
            }
          
          });
        //return data;
    });
    
    fetch('http://www.omdbapi.com/?t=matilda&y=1996&apikey=30896c37')
    .then(response => {
        return response.json();
    })
    .then(data => {
        const thirdMovieTitle = data.Title;
        const thirdMoviePlot = data.Plot;
        const thirdMoviePoster = data.Poster;
        console.log(thirdMovieTitle);
        selectEl.addEventListener('change', event => {
            console.log(event.target.value); //the selected option value

            if (event.target.value === 'Matilda') {
                const thirdTitle = document.createElement('h2');
                thirdTitle.innerHTML = thirdMovieTitle;
                document.body.appendChild(thirdTitle);
                const thirdPlot = document.createElement('p');
                thirdPlot.innerHTML = thirdMoviePlot;
                document.body.appendChild(thirdPlot);
                const thirdImage = document.createElement('img');
                thirdImage.src = thirdMoviePoster;
                document.body.appendChild(thirdImage);
            }
          
          });
        //return data;
    });

        
       
};


window.onload = main()