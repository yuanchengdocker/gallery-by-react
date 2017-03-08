require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

let imageDatas = require('../data/imageDatas.json');

function getImageData(imageDataArr){
	for(let i=0;i<imageDataArr.length;i++){
		let imageData = imageDataArr[i];
		imageData.imageUrl = require(`../images/${imageData.fileName}`);
		imageDataArr[i] = imageData;
	}
	return imageDataArr;
}
imageDatas = getImageData(getImageData);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
      	<section className="img-sec">
       	</section>
       	<nav className="controller-nav">
       	</nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
