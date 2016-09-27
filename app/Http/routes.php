<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'PagesController@index');

/*
|--------------------------------------------------------------------------
| Api Routes
|--------------------------------------------------------------------------
*/
$api = app('Dingo\Api\Routing\Router');

$api->version('v1', function ($api) {
    $api->group([
        'namespace' => 'App\Http\ApiControllers',
    ], function ($api) {
        $api->post('/login', 'AuthController@login');
        $api->post('/register', 'AuthController@register');
    });

    $api->group([
        'namespace' => 'App\Http\ApiControllers',
        'middleware' => 'jwt.auth',
    ], function ($api) {
        $api->get('/me', 'AuthController@me');

        $api->group([
            'prefix' => 'dog',
        ], function ($api) {
            $api->get('/', 'DogsController@index');
            $api->get('/{id}', 'DogsController@show');
            $api->post('/', 'DogsController@create');
            $api->put('/edit/{id}', 'DogsController@edit');
            $api->delete('/{id}', 'DogsController@destroy');
        });
    });
});
