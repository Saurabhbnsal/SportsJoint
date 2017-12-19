var app = angular.module("myApp", []);
app.controller('MainController', ['$scope', function($scope){
  $scope.largeArticles = [ {
	link :'#',  
	cover: 'images/sports-15.jpg',
	title: 'Lorum Ipsum Lorum Ipsum Lorum Ipsum', 
	author: 'NAme Here',
	pubdate: new Date('2014', '03', '08'), 
     
  },
  {
	link :'#',  
	cover: 'images/sports-15.jpg',
	title: 'Lorum Ipsum Lorum Ipsum Lorum Ipsum', 
	author: 'NAme Here',
	pubdate: new Date('2014', '03', '08'), 
     
  }
  ];
  
  $scope.smallArticles = [ {
	link :'#',  
	cover: 'images/sports-15.jpg',
	title: 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum' , 
	author: 'NAme Here',
	pubdate: new Date('2014', '03', '08'), 
     
  },
  {
	link :'#',  
	cover: 'images/sports-15.jpg',
	title: 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum', 
	author: 'NAme Here',
	pubdate: new Date('2014', '03', '08'), 
     
  },
  {
	link :'#',  
	cover: 'images/sports-15.jpg',
	title: 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum', 
	author: 'NAme Here',
	pubdate: new Date('2014', '03', '08'), 
     
  },
  {
	link :'#',  
	cover: 'images/sports-15.jpg',
	title: 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum', 
	author: 'NAme Here',
	pubdate: new Date('2014', '03', '08'), 
     
  }
  
  ];
}]);
