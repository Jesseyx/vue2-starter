<?php

namespace App\Http\ApiControllers;

use App\User;
use Dingo\Api\Exception\StoreResourceFailedException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends BaseController
{
    public function login(Request $request)
    {
        // grab credentials from the request
        $credentials = $request->only('email', 'password');

        try {
            // attempt to verify the credentials and create a token for the user
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        $where = [
            'email' => $credentials['email'],
        ];

        $name = User::where($where)->value('name');

        // all good so return the token and name
        return response()->json(compact('token', 'name'));
    }

    public function register(Request $request)
    {
        $rules = [
            'name' => 'required|unique:users',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed|alpha_dash|between:6,10',
            'password_confirmation' => 'required',
        ];

        // validate
        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            // return the error msg
            throw new StoreResourceFailedException('Could not create new user.', $validator->errors());
        }

        $data = [
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
        ];

        $user = User::create($data);
        $token = JWTAuth::fromUser($user);

        $name = $data['name'];

        // all good so return the token and name
        return response()->json(compact('token', 'name'));
    }

    public function me()
    {
       // Retreiving the Authenticated user from a token
        return JWTAuth::parseToken()->authenticate();
    }
}
