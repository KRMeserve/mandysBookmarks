const app = angular.module('MyApp', []);

app.controller('BookmarkController', ['$http', function($http){
    // this.hello = 'HI, ANGULARJS IS WORKING NOW';
    this.bookmarkIndexShow = -1;

    this.getBookmarks = ()=>{
        $http({
            method: 'GET',
            url: '/bookmarks'
        }).then(response =>{
            this.bookmarks = response.data;
        }, error =>{
            console.log(error);
        })
    };

    this.createBookmark =()=>{
        $http({
            method:'POST',
            url: '/bookmarks',
            data: {
                title: this.title,
                url: this.url
            }
        }).then(response => {
            this.getBookmarks();
        }, error => {
            console.log(error);
        })
    };

    this.deleteBookmark = (bookmark)=>{
        $http({
            method:'DELETE',
            url:'/bookmarks/' + bookmark._id
        }).then(response =>{
            console.log(response);
            this.getBookmarks();
        }, error =>{
            console.log(error);
        })
    };

    this.editBookmark = (bookmark)=>{
        $http({
            method:'PUT',
            url:'/bookmarks/' + bookmark._id,
            data: {
                title: this.updatedTitle,
                url: this.updatedUrl
            }
        }).then(response =>{
            console.log(response);
            this.getBookmarks();
        }, error =>{
            console.log(error);
        })
    };

    this.getBookmarks();
}]);
