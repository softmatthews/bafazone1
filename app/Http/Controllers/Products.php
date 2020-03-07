<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Query\Builder;
use APP\Product;

class Products extends Controller
{
    //
    function list(){
    	// $data=DB::table('products')
    	// ->join('product_features','products.sku', 'product_features.prdct_sku')
    	// ->paginate(2);
    	$prdcts=array();
    	$features=array();
    	$data=DB::table('products')->paginate(2);
    	$prdcts[1]=$data;
    	foreach($data as $product){
    	$sku=$product->sku;
    	   $features[$sku]=DB::table('product_features')
    	   ->where('product_features.prdct_sku',$sku)
    	   ->get();		
    	}
    	$prdcts[2]=$features;               

    	return view('index',['data'=>$prdcts]);
    	// print_r($features);
    	// foreach ($prdcts[2] as $key) {
    	// 	echo $key->prdct_sku;
    	// }
    	//print_r($prdcts[1]);
    }
     function vuetest(){
        // $data=DB::table('products')
        // ->join('product_features','products.sku', 'product_features.prdct_sku')
        // ->paginate(2);
        $prdcts=array();
        $features=array();
        $data=DB::table('products')->paginate(2);
        $prdcts[1]=$data;
        foreach($data as $product){
        $sku=$product->sku;
           $features[$sku]=DB::table('product_features')
           ->where('product_features.prdct_sku',$sku)
           ->get();     
        }
        $prdcts[2]=$features;               

        return view('vueprdct',['data'=>$prdcts]);
        // print_r($features);
        // foreach ($prdcts[2] as $key) {
        //  echo $key->prdct_sku;
        // }
        //print_r($prdcts[1]);
    }
}
