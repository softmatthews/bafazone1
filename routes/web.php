<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('index');
// });
Route::get('/plain', function () {
    return view('plainhome');
});
Route::get('/', 'Products@list');
Route::get('/sign', function () {
    return view('signup');
});
Route::get('/list', 'Products@list');

Route::group(['middleware',['web']],function(){
	Route::post('/signup',[
 'uses'=>'SignupController@postSignup',
 'as'=>'signup'
 ]);
} );

Route::get('/home', 'HomeController@index')->name('home');
Auth::routes();

Auth::routes();

Route::get('/vue','Products@vuetest');
