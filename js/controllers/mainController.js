var app = angular.module("myApp", []);
app.controller('MainController', ['$scope', function($scope){
  $scope.articles = [ {
	link :'#',  
	cover: 'images/sports-15.jpg',
	title: 'Lorum Ipsum', 
	author: 'NAme Here',
	pubdate: new Date('2014', '03', '08'), 
     
  },
  {
	link :'#',  
	cover: 'images/sports-15.jpg',
	title: 'Lorum Ipsum', 
	author: 'NAme Here',
	pubdate: new Date('2014', '03', '08'), 
     
  },{
	link :'#',  
	cover: 'images/sports-15.jpg',
	title: 'Lorum Ipsum', 
	author: 'NAme Here',
	pubdate: new Date('2014', '03', '08'), 
     
  },{
	link :'#',  
	cover: 'images/sports-15.jpg',
	title: 'Lorum Ipsum', 
	author: 'NAme Here',
	pubdate: new Date('2014', '03', '08'), 
     
  },{
	link :'#',  
	cover: 'images/sports-15.jpg',
	title: 'Lorum Ipsum', 
	author: 'NAme Here',
	pubdate: new Date('2014', '03', '08'), 
  },{
	link :'#',  
	cover: 'images/sports-15.jpg',
	title: 'Lorum Ipsum', 
	author: 'NAme Here',
	pubdate: new Date('2014', '03', '08'), 
     
  }
  ];
}]);
