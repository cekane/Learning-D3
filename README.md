# D3 Practice
![alt text][logo]
[logo]: https://github.com/cekane/Learning-D3/blob/master/Pictures/BarChart.png "BarChart"

### Setup
After the repository is cloned, install all the dependicies with: 
```sh
npm install
```
Now start the node server with:
```sh
npm start
```
Navigate to localhost:3333 in your browser

### Method
This project uses D3 for creating the different graphics and utilizes react for it's component architecture. Data is being pulled from a tsv file for the time being. In order to import data from an external source, like google sheets or excel, I'm going to need to use cors (cross-origin HTTP request). The goal is to be able to set your datasource and customize you chart with a set of props. 

### Skills Learned
* How to make Bar charts and Pie charts 
* How to manipulate D3 Animations
* Import external data from a .tsv file
* How to manipulation SVG's
* Javascript events (mouseover, mouseout)
* How to manipulate D3 axis's 
* When to use componentDidMount
