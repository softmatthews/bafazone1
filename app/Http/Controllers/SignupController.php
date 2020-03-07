<?php

namespace App\Http\Controllers;
use App\signup;

// use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
// use Illuminate\Foundation\Bus\DispatchesJobs;
// use Illuminate\Foundation\Validation\ValidatesRequests;
// use Illuminate\Routing\Controller as BaseController;
use Illuminate\http\Request;

class SignupController extends Controller
{

	public function postSignup(Request $request){
		$email=$request['email'];
		$name=$request['name'];
		$password=bcrypt($request['password']);

		$signup=new signup();
		$signup->name=$name;
		$signup->email=$email;
		$signup->password=$password;

		$signup->save();
		 return redirect()->back();
	}
	public function postSignin(){
		
	}
    
}
