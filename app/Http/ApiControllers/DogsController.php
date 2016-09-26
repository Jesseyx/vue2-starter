<?php

namespace App\Http\ApiControllers;

use App\Dog;
use Dingo\Api\Exception\StoreResourceFailedException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use JWTAuth;

class DogsController extends BaseController
{
    public function index()
    {
        return Dog::all();
    }

    public function create(Request $request)
    {
        $rules = [
            'name' => 'required|unique:dogs',
            'age' => 'required|integer',
        ];

        // validata
        $validator = Validator::make($request->only(['name', 'age']), $rules);

        if ($validator->fails()) {
            // return the error msg
            throw new StoreResourceFailedException('Could not create dog.', $validator->errors());
        }

        Dog::create($request->only(['name', 'age']));

        return response()->json(['msg'=> 'success']);
    }

    public function show($id)
    {
        return Dog::findOrFail($id);
    }

    public function edit(Request $request, $id)
    {
        $dog = Dog::findOrFail($id);
        $dog->update($request->only(['name', 'age']));
        return $dog;
    }

    public function destroy($id)
    {
        return Dog::destroy($id);
    }
}
